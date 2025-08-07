-- Create enum for contact method types
CREATE TYPE public.contact_method_type AS ENUM ('message', 'contact_request');

-- Create enum for message status
CREATE TYPE public.message_status AS ENUM ('pending', 'read', 'replied', 'archived');

-- Create contact_messages table
CREATE TABLE public.contact_messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    sender_id UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    recipient_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
    message_content TEXT NOT NULL,
    contact_method contact_method_type NOT NULL DEFAULT 'message',
    status message_status NOT NULL DEFAULT 'pending',
    is_read BOOLEAN NOT NULL DEFAULT false,
    read_at TIMESTAMP WITH TIME ZONE,
    replied_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    
    -- Constraints
    CONSTRAINT message_content_not_empty CHECK (char_length(trim(message_content)) > 0),
    CONSTRAINT contact_request_no_recipient CHECK (
        (contact_method = 'contact_request' AND recipient_id IS NULL) OR 
        (contact_method = 'message' AND recipient_id IS NOT NULL)
    )
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create indexes for efficient querying
CREATE INDEX idx_contact_messages_sender_id ON public.contact_messages(sender_id);
CREATE INDEX idx_contact_messages_recipient_id ON public.contact_messages(recipient_id);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX idx_contact_messages_contact_method ON public.contact_messages(contact_method);
CREATE INDEX idx_contact_messages_is_read ON public.contact_messages(is_read);

-- Composite indexes for common query patterns
CREATE INDEX idx_contact_messages_recipient_status ON public.contact_messages(recipient_id, status);
CREATE INDEX idx_contact_messages_sender_created ON public.contact_messages(sender_id, created_at DESC);

-- RLS Policies
-- Users can view messages they sent or received
CREATE POLICY "Users can view their own messages" 
ON public.contact_messages 
FOR SELECT 
USING (auth.uid() = sender_id OR auth.uid() = recipient_id);

-- Users can send messages (insert their own)
CREATE POLICY "Users can send messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (auth.uid() = sender_id);

-- Users can update messages they sent (to mark as read, etc.)
CREATE POLICY "Users can update their sent messages" 
ON public.contact_messages 
FOR UPDATE 
USING (auth.uid() = sender_id);

-- Recipients can update messages to mark as read
CREATE POLICY "Recipients can mark messages as read" 
ON public.contact_messages 
FOR UPDATE 
USING (auth.uid() = recipient_id AND OLD.is_read = false);

-- Users can delete their own sent messages
CREATE POLICY "Users can delete their sent messages" 
ON public.contact_messages 
FOR DELETE 
USING (auth.uid() = sender_id);

-- Admins have full access
CREATE POLICY "Admins have full access to contact messages" 
ON public.contact_messages 
FOR ALL 
USING (is_admin());

-- Create trigger for updating timestamps
CREATE TRIGGER update_contact_messages_updated_at
    BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger to automatically set read_at timestamp
CREATE OR REPLACE FUNCTION public.update_message_read_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    -- If is_read changed from false to true, set read_at
    IF OLD.is_read = false AND NEW.is_read = true THEN
        NEW.read_at = now();
    END IF;
    
    -- If status changed to 'replied', set replied_at
    IF OLD.status != 'replied' AND NEW.status = 'replied' THEN
        NEW.replied_at = now();
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_message_timestamps
    BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_message_read_timestamp();
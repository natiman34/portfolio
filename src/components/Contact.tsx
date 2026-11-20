import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { useToast } from '@/hooks/use-toast';
import { PROFILE } from '@/data/portfolioData';
import {
  checkSpamGuard,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '@/utils/portfolio';

interface ContactProps {
  presetSubject?: string;
  focusTrigger?: number;
}

const Contact = ({ presetSubject, focusTrigger = 0 }: ContactProps) => {
  const { toast } = useToast();
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const lastSubmittedAtRef = useRef<number | null>(null);

  const [formData, setFormData] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (presetSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: presetSubject,
      }));
      setErrors((prev) => ({ ...prev, subject: undefined }));
    }
  }, [presetSubject, focusTrigger]);

  useEffect(() => {
    if (focusTrigger > 0) {
      nameInputRef.current?.focus();
    }
  }, [focusTrigger]);

  const applyQuickSubject = (subjectText: string) => {
    setFormData((prev) => ({ ...prev, subject: subjectText }));
    setErrors((prev) => ({ ...prev, subject: undefined }));
    setSubmitStatus('idle');
    nameInputRef.current?.focus();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as keyof ContactFormValues;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field !== 'honeypot' && errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const spamCheck = checkSpamGuard({
      honeypot: formData.honeypot,
      lastSubmittedAt: lastSubmittedAtRef.current,
      now: Date.now(),
      cooldownMs: 30_000,
    });

    if (!spamCheck.allowed) {
      if (spamCheck.reason === 'honeypot') {
        setSubmitStatus('error');
        setStatusMessage('Submission blocked by spam verification.');
        return;
      }
      setSubmitStatus('error');
      setStatusMessage(
        `Please wait ${spamCheck.waitSeconds ?? 30}s before sending another message.`
      );
      return;
    }

    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      setSubmitStatus('error');
      setStatusMessage('Please review the highlighted fields before sending.');
      return;
    }

    setErrors({});
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_yhnqjss',
        'template_c63z6jz',
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        'fJ0DDz2xjeCcPtOx6'
      );

      lastSubmittedAtRef.current = Date.now();
      setSubmitStatus('success');
      setStatusMessage("Thank you for your message. I'll respond shortly.");
      toast({
        title: 'Message sent',
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setStatusMessage(
        `Unable to send via the form right now. Please email me directly at ${PROFILE.email}.`
      );
      toast({
        title: 'Delivery error',
        description: `Please try again or email ${PROFILE.email} directly.`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Have a role or project in mind? Let's talk."
          description="Open to IT support positions, junior full-stack and frontend roles, and remote freelance web application projects."
        />

        <Reveal className="mt-12">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-6 lg:col-span-5">
              <div className="panel divide-y divide-border p-6">
                <div className="flex items-start gap-3 pb-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="eyebrow">Email</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="mt-0.5 inline-block break-all py-1 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="eyebrow">Phone</p>
                    <a
                      href={PROFILE.phoneHref}
                      className="mt-0.5 inline-block py-1 font-mono text-sm tabular-nums text-foreground transition-colors hover:text-primary"
                    >
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="eyebrow">Location</p>
                    <p className="mt-1 text-sm text-foreground/90">{PROFILE.location}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {PROFILE.availability}
                    </p>
                  </div>
                </div>

                <div className="grid gap-2 pt-4">
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-background/60 px-3.5 py-2.5 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
                      LinkedIn
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-background/60 px-3.5 py-2.5 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                      <Github className="h-4 w-4 text-primary" aria-hidden="true" />
                      GitHub
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <div className="panel p-6">
                <p className="eyebrow">Quick start</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => applyQuickSubject('Freelance Web Development Inquiry')}
                    className="h-8 rounded-full px-3 text-xs font-medium"
                  >
                    Freelance project
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => applyQuickSubject('IT Support / Developer Role Inquiry')}
                    className="h-8 rounded-full px-3 text-xs font-medium"
                  >
                    IT / developer role
                  </Button>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Selecting an option prefills the subject below. You can also email me
                  directly at{' '}
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"
                  >
                    {PROFILE.email}
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="panel p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-5">
                  <h3 className="heading-sub">Send a message</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    Replies typically within 1–2 days
                  </p>
                </div>

                {submitStatus !== 'idle' ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`mt-5 flex items-start gap-3 rounded-lg border p-4 text-sm text-foreground ${
                      submitStatus === 'success'
                        ? 'border-primary/30 bg-primary/10'
                        : 'border-destructive/30 bg-destructive/10'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <AlertCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
                        aria-hidden="true"
                      />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="sr-only" aria-hidden="true">
                    <Label htmlFor="contact-website">Website</Label>
                    <Input
                      id="contact-website"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot || ''}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        ref={nameInputRef}
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className="h-11 bg-background"
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="text-xs text-destructive">
                          {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className="h-11 bg-background"
                      />
                      {errors.email ? (
                        <p id="contact-email-error" className="text-xs text-destructive">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Web application, IT support role, or consultation"
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className="h-11 bg-background"
                    />
                    {errors.subject ? (
                      <p id="contact-subject-error" className="text-xs text-destructive">
                        {errors.subject}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share your role details, project goals, or timeline..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className="resize-y bg-background"
                    />
                    {errors.message ? (
                      <p id="contact-message-error" className="text-xs text-destructive">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-11 w-full text-sm font-medium"
                  >
                    <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                    {isLoading ? 'Sending message…' : 'Send message'}
                  </Button>

                  <p className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                    Delivered securely via EmailJS · direct email fallback available
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

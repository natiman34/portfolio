import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Globe,
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
        title: 'Message Sent!',
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
        title: 'Delivery Error',
        description: `Please try again or email ${PROFILE.email} directly.`,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-muted/25">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium text-primary mb-2">
            Contact &amp; Opportunities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Have a project or role in mind? Let&apos;s connect.
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Open to IT Support roles, Junior Full-Stack &amp; Frontend Developer positions, and remote freelance web application projects.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={() => applyQuickSubject('Freelance Web Development Inquiry')}
              className="hero-primary-btn h-10 px-5 text-sm font-medium whitespace-nowrap shrink-0"
            >
              Hire Me
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => applyQuickSubject('IT Support / Developer Role Inquiry')}
              className="h-10 px-5 text-sm font-medium border-border bg-card whitespace-nowrap shrink-0"
            >
              Discuss a Role or Project
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-10 px-4 text-sm font-medium text-muted-foreground hover:text-foreground whitespace-nowrap shrink-0"
            >
              <a href={`mailto:${PROFILE.email}`}>Email Directly</a>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5 min-w-0">
            <div className="surface-card p-5 sm:p-6 space-y-5 min-w-0">
              <div className="flex items-start gap-3.5 min-w-0">
                <Globe className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Availability</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {PROFILE.availability}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-border min-w-0">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Email</h3>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 inline-block break-all"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-border min-w-0">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Phone</h3>
                  <a
                    href={PROFILE.phoneHref}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 inline-block font-mono tabular-nums"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-border min-w-0">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {PROFILE.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card p-5 sm:p-6 space-y-4 min-w-0">
              <h3 className="font-display text-base font-semibold text-foreground">
                Professional Profiles
              </h3>
              <div className="space-y-3">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-lg border border-border bg-background/60 hover:border-primary/40 transition-colors min-w-0"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-foreground shrink-0">
                    <Linkedin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    LinkedIn
                  </span>
                  <span className="text-xs text-muted-foreground truncate min-w-0">
                    linkedin.com/in/natnaelsema
                  </span>
                </a>

                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3 rounded-lg border border-border bg-background/60 hover:border-primary/40 transition-colors min-w-0"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-foreground shrink-0">
                    <Github className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    GitHub
                  </span>
                  <span className="text-xs text-muted-foreground truncate min-w-0">
                    github.com/natiman34
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 surface-card p-5 sm:p-8 min-w-0">
            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              Send a Message
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Delivered via EmailJS with direct fallback to{' '}
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-primary hover:underline"
              >
                {PROFILE.email}
              </a>
              .
            </p>

            {submitStatus !== 'idle' && (
              <div
                role="status"
                aria-live="polite"
                className={`mb-6 p-4 rounded-lg border flex items-start gap-3 text-sm ${
                  submitStatus === 'success'
                    ? 'bg-primary/10 border-primary/30 text-foreground'
                    : 'bg-destructive/10 border-destructive/30 text-foreground'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle2
                    className="h-4 w-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                ) : (
                  <AlertCircle
                    className="h-4 w-4 text-destructive shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                )}
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot spam protection field */}
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

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">
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
                    className="bg-background border-input h-11"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">
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
                    className="bg-background border-input h-11"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-sm font-medium text-foreground">
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
                  className="bg-background border-input h-11"
                />
                {errors.subject && (
                  <p id="contact-subject-error" className="text-xs text-destructive">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
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
                  className="bg-background border-input resize-y"
                />
                {errors.message && (
                  <p id="contact-message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 hero-primary-btn font-medium"
              >
                <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                {isLoading ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
export type ProjectFilterCategory =
  | 'All'
  | 'Web Development'
  | 'Full-Stack'
  | 'Frontend'
  | 'IT Tools'
  | 'Productivity';

export interface ProjectItem {
  id: string;
  slug: 'amn' | 'plandroid' | 'final-year' | string;
  title: string;
  subtitle: string;
  category: string;
  filterTags: Exclude<ProjectFilterCategory, 'All'>[];
  role: string;
  description: string;
  summary: string;
  problemSolved: string;
  solution: string;
  architecture: string;
  lessonsLearned: string[];
  technologies: string[];
  features: string[];
  highlights: string[];
  sourceUrl?: string;
  liveDemoUrl?: string;
  liveDemoNote?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  track: 'Development & Security' | 'IT & Systems';
  skills: string[];
  credentialUrl?: string;
}

export type SkillGroupKey = 'All' | 'Development' | 'IT & Networking' | 'Security & Tools';

export interface SkillCategoryItem {
  id: string;
  title: string;
  group: Exclude<SkillGroupKey, 'All'>;
  subtitle: string;
  items: string[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export type ContactFormErrors = Partial<
  Record<'name' | 'email' | 'subject' | 'message', string>
>;

export type ThemePreference = 'system' | 'light' | 'dark';

export function resolveThemeMode(
  preference: ThemePreference,
  systemPrefersDark: boolean
): 'light' | 'dark' {
  if (preference === 'light') return 'light';
  if (preference === 'dark') return 'dark';
  return systemPrefersDark ? 'dark' : 'light';
}

export function filterProjectsByCategory(
  projects: ProjectItem[],
  category: string
): ProjectItem[] {
  if (!category || category === 'All') {
    return projects;
  }
  return projects.filter(
    (project) =>
      project.category === category ||
      project.filterTags.includes(category as Exclude<ProjectFilterCategory, 'All'>)
  );
}

export function filterSkillsByGroup(
  categories: SkillCategoryItem[],
  group: SkillGroupKey
): SkillCategoryItem[] {
  if (!group || group === 'All') {
    return categories;
  }
  return categories.filter((item) => item.group === group);
}

export function filterCertificationsByTrack(
  certifications: CertificationItem[],
  track: string
): CertificationItem[] {
  if (!track || track === 'All') {
    return certifications;
  }
  return certifications.filter((cert) => cert.track === track);
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): {
  valid: boolean;
  errors: ContactFormErrors;
} {
  const errors: ContactFormErrors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (subject.length < 3) {
    errors.subject = 'Please add a short subject (at least 3 characters).';
  }

  if (message.length < 10) {
    errors.message = 'Please share a brief message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function checkSpamGuard(params: {
  honeypot?: string;
  lastSubmittedAt: number | null;
  now: number;
  cooldownMs?: number;
}): { allowed: boolean; reason?: 'honeypot' | 'cooldown'; waitSeconds?: number } {
  const { honeypot, lastSubmittedAt, now, cooldownMs = 30_000 } = params;

  if (honeypot && honeypot.trim().length > 0) {
    return { allowed: false, reason: 'honeypot' };
  }

  if (lastSubmittedAt !== null) {
    const elapsed = now - lastSubmittedAt;
    if (elapsed < cooldownMs) {
      const waitSeconds = Math.ceil((cooldownMs - elapsed) / 1000);
      return { allowed: false, reason: 'cooldown', waitSeconds };
    }
  }

  return { allowed: true };
}

export interface SectionPosition {
  id: string;
  top: number;
  bottom: number;
}

export function getActiveSectionId(
  sections: SectionPosition[],
  offset = 120
): string {
  if (sections.length === 0) return 'home';

  for (const section of sections) {
    if (section.top <= offset && section.bottom > offset) {
      return section.id;
    }
  }

  const above = sections.filter((s) => s.top <= offset);
  if (above.length > 0) {
    return above[above.length - 1].id;
  }

  return sections[0].id;
}

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkSpamGuard,
  filterCertificationsByTrack,
  filterProjectsByCategory,
  filterSkillsByGroup,
  getActiveSectionId,
  resolveThemeMode,
  validateContactForm,
  type CertificationItem,
  type ProjectItem,
  type SkillCategoryItem,
} from './portfolio';

const sampleProjects: ProjectItem[] = [
  {
    id: '1',
    slug: 'amn',
    title: 'AMN Attendance',
    subtitle: 'Classroom management',
    category: 'Management System',
    filterTags: ['IT Tools', 'Productivity'],
    role: 'Developer',
    description: 'Attendance tool',
    summary: 'Summary',
    problemSolved: 'Manual attendance friction',
    solution: 'Offline-first tracking',
    architecture: 'Client-side local state',
    lessonsLearned: ['Offline reliability'],
    technologies: ['JavaScript'],
    features: ['Offline'],
    highlights: ['Up to 120 students'],
  },
  {
    id: '2',
    slug: 'plandroid',
    title: 'PlanDroid',
    subtitle: 'Productivity',
    category: 'Productivity Application',
    filterTags: ['Productivity', 'Frontend'],
    role: 'Developer',
    description: 'Focus planner',
    summary: 'Summary',
    problemSolved: 'Fragmented daily planning',
    solution: 'Unified focus & goals',
    architecture: 'Modular UI state',
    lessonsLearned: ['Low-friction UX'],
    technologies: ['JavaScript'],
    features: ['Focus sessions'],
    highlights: ['Daily goals'],
  },
];

const sampleSkills: SkillCategoryItem[] = [
  {
    id: 'dev',
    title: 'Development',
    group: 'Development',
    subtitle: 'Web apps',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'net',
    title: 'Networking',
    group: 'IT & Networking',
    subtitle: 'Connectivity',
    items: ['TCP/IP', 'DNS'],
  },
];

const sampleCerts: CertificationItem[] = [
  {
    id: 'c1',
    title: 'Frontend, Backend & Cyber Security Essentials',
    issuer: 'Qemer Software Technology PLC',
    date: 'August 2025',
    track: 'Development & Security',
    skills: ['Frontend', 'Backend', 'Cybersecurity'],
  },
  {
    id: 'c2',
    title: 'Practical Help Desk',
    issuer: 'TCM Security',
    date: 'April 2026',
    track: 'IT & Systems',
    skills: ['Help Desk', 'Troubleshooting'],
  },
];

test('resolveThemeMode handles explicit and system theme preferences', () => {
  assert.equal(resolveThemeMode('light', true), 'light');
  assert.equal(resolveThemeMode('dark', false), 'dark');
  assert.equal(resolveThemeMode('system', true), 'dark');
  assert.equal(resolveThemeMode('system', false), 'light');
});

test('filterProjectsByCategory returns matching projects by category or filterTag', () => {
  assert.equal(filterProjectsByCategory(sampleProjects, 'All').length, 2);
  const itTools = filterProjectsByCategory(sampleProjects, 'IT Tools');
  assert.equal(itTools.length, 1);
  assert.equal(itTools[0].slug, 'amn');
  const productivity = filterProjectsByCategory(sampleProjects, 'Productivity');
  assert.equal(productivity.length, 2);
});

test('filterSkillsByGroup filters skill categories accurately', () => {
  assert.equal(filterSkillsByGroup(sampleSkills, 'All').length, 2);
  const netOnly = filterSkillsByGroup(sampleSkills, 'IT & Networking');
  assert.equal(netOnly.length, 1);
  assert.equal(netOnly[0].id, 'net');
});

test('filterCertificationsByTrack separates development and IT certifications', () => {
  assert.equal(filterCertificationsByTrack(sampleCerts, 'All').length, 2);
  const devCerts = filterCertificationsByTrack(sampleCerts, 'Development & Security');
  assert.equal(devCerts.length, 1);
  assert.equal(devCerts[0].issuer, 'Qemer Software Technology PLC');
});

test('validateContactForm rejects invalid inputs and accepts valid data', () => {
  const invalid = validateContactForm({
    name: 'N',
    email: 'invalid-email',
    subject: 'Hi',
    message: 'Short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);

  const valid = validateContactForm({
    name: 'Alex Morgan',
    email: 'alex@example.com',
    subject: 'Web Application Project',
    message: 'Looking for a developer to build a responsive web app.',
  });
  assert.equal(valid.valid, true);
});

test('checkSpamGuard blocks honeypot bots and rapid repeat submissions', () => {
  const bot = checkSpamGuard({
    honeypot: 'http://spam.example',
    lastSubmittedAt: null,
    now: 100000,
  });
  assert.equal(bot.allowed, false);
  assert.equal(bot.reason, 'honeypot');

  const cooldown = checkSpamGuard({
    honeypot: '',
    lastSubmittedAt: 90000,
    now: 100000,
    cooldownMs: 30000,
  });
  assert.equal(cooldown.allowed, false);
  assert.equal(cooldown.reason, 'cooldown');
  assert.equal(cooldown.waitSeconds, 20);

  const ok = checkSpamGuard({
    honeypot: '',
    lastSubmittedAt: 50000,
    now: 100000,
    cooldownMs: 30000,
  });
  assert.equal(ok.allowed, true);
});

test('getActiveSectionId resolves current section based on viewport offset', () => {
  const sections = [
    { id: 'home', top: -400, bottom: 20 },
    { id: 'about', top: 20, bottom: 600 },
    { id: 'skills', top: 600, bottom: 1200 },
  ];
  assert.equal(getActiveSectionId(sections, 120), 'about');
  assert.equal(getActiveSectionId(sections, 700), 'skills');
});

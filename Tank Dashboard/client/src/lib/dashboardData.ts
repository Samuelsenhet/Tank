// Tank Platform Dashboard Data
// Extracted from TankDokument.pdf

export interface Milestone {
  quarter: string;
  month: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface UserTarget {
  tier: string;
  months: string;
  goal: number;
  description: string;
}

export interface KPI {
  name: string;
  category: 'engagement' | 'business' | 'technical';
  value: string;
  target?: string;
  description: string;
}

export interface Risk {
  name: string;
  likelihood: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

export const projectMilestones: Milestone[] = [
  {
    quarter: 'Q1',
    month: 'Month 1-2',
    title: 'Technical Architecture & UX Design',
    description: 'Foundation platform development with basic functionality',
    status: 'completed',
  },
  {
    quarter: 'Q1',
    month: 'Month 3',
    title: 'MVP with Registration & Single Idea',
    description: 'Minimum viable product with user registration and idea submission',
    status: 'completed',
  },
  {
    quarter: 'Q2',
    month: 'Month 4-5',
    title: 'Member System & Matching Algorithm',
    description: 'Implement member management and intelligent matching system',
    status: 'in-progress',
  },
  {
    quarter: 'Q2',
    month: 'Month 6',
    title: 'KYC Process & Legal Framework',
    description: 'Know Your Customer verification and regulatory compliance',
    status: 'upcoming',
  },
  {
    quarter: 'Q3',
    month: 'Month 7-8',
    title: 'Premium Features & Payment System',
    description: 'Advanced features and payment processing integration',
    status: 'upcoming',
  },
  {
    quarter: 'Q3',
    month: 'Month 9',
    title: 'Mobile App & API for Third Parties',
    description: 'Mobile application and external API development',
    status: 'upcoming',
  },
  {
    quarter: 'Q4',
    month: 'Month 10-11',
    title: 'AI-Driven Matching & Analytics',
    description: 'Machine learning implementation for improved matching',
    status: 'upcoming',
  },
  {
    quarter: 'Q4',
    month: 'Month 12',
    title: 'International Expansion (EU)',
    description: 'European market expansion and localization',
    status: 'upcoming',
  },
];

export const userTargets: UserTarget[] = [
  {
    tier: 'Quarter 1',
    months: 'Months 1-3',
    goal: 50,
    description: 'Test users with core functionality',
  },
  {
    tier: 'Quarter 2',
    months: 'Months 4-6',
    goal: 500,
    description: 'First registered users and initial matchings',
  },
  {
    tier: 'Quarter 3',
    months: 'Months 7-9',
    goal: 2000,
    description: 'Premium users and 10 successful investments',
  },
  {
    tier: 'Quarter 4',
    months: 'Months 10-12',
    goal: 5000,
    description: 'Full platform maturity and EU expansion',
  },
];

export const kpis: KPI[] = [
  {
    name: 'Monthly Active Users (MAU)',
    category: 'engagement',
    value: 'TBD',
    target: '5,000+',
    description: 'Number of unique active users per month',
  },
  {
    name: 'Average Session Duration',
    category: 'engagement',
    value: 'TBD',
    target: '>5 min',
    description: 'Average time users spend on platform',
  },
  {
    name: 'Returning Users (%)',
    category: 'engagement',
    value: 'TBD',
    target: '>40%',
    description: 'Percentage of users who return within 30 days',
  },
  {
    name: 'Conversion Rate',
    category: 'business',
    value: 'TBD',
    target: '>5%',
    description: 'Registration to complete profile conversion',
  },
  {
    name: 'Matchings per Month',
    category: 'business',
    value: 'TBD',
    target: '100+',
    description: 'Number of successful matches between users',
  },
  {
    name: 'Transaction Value (CAC)',
    category: 'business',
    value: 'TBD',
    target: '<€500',
    description: 'Customer Acquisition Cost per user',
  },
  {
    name: 'Lifetime Value (LTV)',
    category: 'business',
    value: 'TBD',
    target: '>€5,000',
    description: 'Expected revenue per user over lifetime',
  },
  {
    name: 'Churn Rate (%)',
    category: 'business',
    value: 'TBD',
    target: '<5%',
    description: 'Monthly user attrition rate',
  },
  {
    name: 'System Uptime',
    category: 'technical',
    value: '>99.9%',
    target: '>99.9%',
    description: 'Platform availability and reliability',
  },
  {
    name: 'Load Time',
    category: 'technical',
    value: '<2s',
    target: '<2s',
    description: 'Mobile page load time',
  },
  {
    name: 'API Response Time',
    category: 'technical',
    value: '<200ms',
    target: '<200ms 95th percentile',
    description: 'API response performance',
  },
  {
    name: 'Critical Bugs',
    category: 'technical',
    value: '0',
    target: '<5',
    description: 'Number of critical issues in production',
  },
];

export const risks: Risk[] = [
  {
    name: 'Legal Issues',
    likelihood: 'Medium',
    impact: 'High',
    mitigation: 'Hire specialized legal counsel and implement regulatory compliance',
  },
  {
    name: 'Data Security',
    likelihood: 'Low',
    impact: 'High',
    mitigation: 'Implement strict encryption and regular security testing',
  },
  {
    name: 'User Acquisition',
    likelihood: 'Medium',
    impact: 'Medium',
    mitigation: 'Aggressive marketing and referral program',
  },
  {
    name: 'Technical Issues',
    likelihood: 'Low',
    impact: 'Low',
    mitigation: 'Automated testing and backup systems',
  },
  {
    name: 'Competition',
    likelihood: 'High',
    impact: 'Medium',
    mitigation: 'Unique features and strong brand positioning',
  },
  {
    name: 'Regulatory Changes',
    likelihood: 'Low',
    impact: 'High',
    mitigation: 'Flexible architecture and regulatory monitoring',
  },
];

export const financialProjection = [
  { quarters: 'Q1', revenue: 0, costs: 50000, users: 50 },
  { quarters: 'Q2', revenue: 2500, costs: 75000, users: 500 },
  { quarters: 'Q3', revenue: 15000, costs: 100000, users: 2000 },
  { quarters: 'Q4', revenue: 45000, costs: 120000, users: 5000 },
];

export const revenueProjection = [
  { name: 'Q1', value: 0 },
  { name: 'Q2', value: 2500 },
  { name: 'Q3', value: 15000 },
  { name: 'Q4', value: 45000 },
];

export const breakEvenAnalysis = {
  breakEvenMonth: 18,
  breakEvenUsers: 3500,
  monthlyBurn: 25000,
  targetFunding: 500000,
};

export const platformFeatures = [
  {
    title: 'Idea Registration',
    description: 'Entrepreneurs can submit and manage their business ideas',
    icon: 'lightbulb',
  },
  {
    title: 'Smart Matching',
    description: 'AI-driven algorithm connects compatible investors and entrepreneurs',
    icon: 'zap',
  },
  {
    title: 'KYC Verification',
    description: 'Secure identity verification and compliance checks',
    icon: 'shield',
  },
  {
    title: 'Payment Processing',
    description: 'Integrated payment system for transactions',
    icon: 'credit-card',
  },
  {
    title: 'Mobile App',
    description: 'Native mobile applications for iOS and Android',
    icon: 'smartphone',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time insights and performance metrics',
    icon: 'bar-chart-2',
  },
];

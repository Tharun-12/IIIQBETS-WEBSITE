export interface TechCategory {
  name: string;
  icon: string;
  technologies: string[];
}

export const techCategories: TechCategory[] = [
  {
    name: 'Web Development',
    icon: 'Globe',
    technologies: ['React', 'Django', 'Node.js', 'TypeScript'],
  },
  {
    name: 'Mobile Development',
    icon: 'Smartphone',
    technologies: ['Flutter', 'React Native'],
  },
  {
    name: 'Cloud Computing',
    icon: 'Cloud',
    technologies: ['Microsoft Azure', 'AWS'],
  },
  {
    name: 'Data Analytics',
    icon: 'BarChart3',
    technologies: ['Google Analytics', 'Python'],
  },
  {
    name: 'Business Intelligence',
    icon: 'LineChart',
    technologies: ['Tableau', 'Power BI'],
  },
  {
    name: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    technologies: ['Google AI'],
  },
  {
    name: 'IoT',
    icon: 'Radio',
    technologies: ['Edge Computing', 'Sensor Networks'],
  },
  {
    name: 'E-Commerce',
    icon: 'ShoppingCart',
    technologies: ['Stripe', 'Payment APIs', 'Shopify'],
  },
  {
    name: 'Enterprise Applications',
    icon: 'LayoutDashboard',
    technologies: ['ERP', 'CRM', 'POS', 'SFA'],
  },
];

export const allTechnologies = [
  'Microsoft Azure',
  'Tableau',
  'Power BI',
  'Google AI',
  'Google Analytics',
  'AWS',
  'Flutter',
  'React',
  'Django',
  'React Native',
];

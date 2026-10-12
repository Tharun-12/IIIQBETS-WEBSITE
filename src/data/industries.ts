export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export const industries: Industry[] = [
  {
    slug: 'information-technology',
    name: 'Information Technology',
    icon: 'Cpu',
    description: 'Technology solutions that help IT organizations build, scale, and innovate — from infrastructure to application development.',
  },
  {
    slug: 'retail-distribution',
    name: 'Retail & Distribution',
    icon: 'ShoppingCart',
    description: 'POS, inventory, e-commerce, and analytics solutions that streamline retail operations and enhance customer experience.',
  },
  {
    slug: 'business-finance',
    name: 'Business & Finance',
    icon: 'Landmark',
    description: 'Secure, compliant financial systems, reporting, and analytics that give financial institutions confidence and control.',
  },
  {
    slug: 'gaming-entertainment',
    name: 'Gaming & Entertainment',
    icon: 'Gamepad2',
    description: 'Engaging digital platforms, applications, and experiences for the gaming and entertainment industry.',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: 'Factory',
    description: 'ERP, automation, and data solutions that optimize production, supply chain, and operational efficiency.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: 'Briefcase',
    description: 'CRM, project management, and business intelligence tools that help service firms deliver and scale.',
  },
  {
    slug: 'smes-startups',
    name: 'SMEs & Startups',
    icon: 'Rocket',
    description: 'Affordable, scalable technology solutions that help small businesses and startups grow efficiently.',
  },
  {
    slug: 'enterprise-organizations',
    name: 'Enterprise Organizations',
    icon: 'Building2',
    description: 'Enterprise-grade digital transformation, integration, and managed services for large-scale organizations.',
  },
];

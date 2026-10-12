export interface ProductDetail {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  heroHeading: string;
  heroDescription: string;
  overview: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  workflow: { step: string; title: string; description: string }[];
  technologies: string[];
  whyIiiQbets: string[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export const products: ProductDetail[] = [
  {
    slug: 'erp',
    title: 'ERP — Enterprise Resource Planning',
    shortTitle: 'ERP',
    icon: 'LayoutDashboard',
    tagline: 'One platform for complete business management.',
    heroHeading: 'One Platform. Complete Business Management.',
    heroDescription:
      'Manage your entire business — inventory, orders, accounting, procurement, HR, and reporting — from a single, integrated ERP platform.',
    overview:
      'iiiQbets ERP brings together every core business function into one unified system. From inventory and order management to accounting, procurement, human resources, and customer relationships, our ERP platform provides real-time visibility and control across your organization.',
    features: [
      'Inventory & Stock Management',
      'Order Management',
      'Accounting & Financial Management',
      'Procurement & Vendor Management',
      'Human Resources Management',
      'Customer Relationship Management',
      'Invoicing & Billing',
      'Reporting & Monitoring',
    ],
    benefits: [
      'Unified data across all business functions',
      'Real-time visibility into operations and finances',
      'Reduced manual work and data duplication',
      'Better inventory control and cost management',
      'Compliance-ready financial reporting',
    ],
    useCases: [
      'Mid-size businesses consolidating disparate tools into one platform',
      'Growing companies needing scalable operations management',
      'Organizations requiring integrated financial and inventory tracking',
      'Enterprises seeking centralized HR and procurement workflows',
    ],
    workflow: [
      { step: '01', title: 'Configure', description: 'Set up modules, users, roles, and business rules tailored to your organization.' },
      { step: '02', title: 'Migrate', description: 'Import existing data from spreadsheets or legacy systems with validation.' },
      { step: '03', title: 'Operate', description: 'Manage daily operations across inventory, orders, accounting, and HR.' },
      { step: '04', title: 'Analyze', description: 'Generate reports and dashboards for real-time business intelligence.' },
      { step: '05', title: 'Scale', description: 'Add modules, users, and locations as your business grows.' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Cloud Deploy'],
    whyIiiQbets: [
      'Tailored configuration to match your business processes',
      'Seamless migration from existing systems with data integrity',
      'Ongoing support, training, and enhancement services',
      'Scalable architecture that grows with your organization',
    ],
    faqs: [
      { question: 'Can the ERP be customized for our industry?', answer: 'Yes. Our ERP is modular and configurable, allowing customization for industry-specific workflows, compliance needs, and reporting requirements.' },
      { question: 'Is the ERP cloud-based?', answer: 'Yes. Our ERP can be deployed in the cloud for accessibility from anywhere, or on-premise for organizations with specific infrastructure requirements.' },
      { question: 'Do you provide training?', answer: 'Yes. We provide comprehensive onboarding, user training, and documentation to ensure smooth adoption across your team.' },
    ],
    image: 'https://images.pexels.com/photos/3862094/pexels-photo-3862094.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'crm',
    title: 'CRM — Customer Relationship Management',
    shortTitle: 'CRM',
    icon: 'Users',
    tagline: 'Build better customer relationships.',
    heroHeading: 'Build Better Customer Relationships',
    heroDescription:
      'Manage your sales pipeline, customer interactions, communications, and performance — all in one powerful CRM platform.',
    overview:
      'iiiQbets CRM helps you manage every customer interaction — from first contact to long-term relationship. Track your sales pipeline, manage customer data, automate communication, and gain insights through performance dashboards.',
    features: [
      'Sales Pipeline Management',
      'Customer Management',
      'Business Intelligence Integration',
      'Invoicing & Quotation',
      'Self-Service Portal',
      'Customer Communication Tracking',
      'Performance Dashboards',
    ],
    benefits: [
      'Complete visibility into your sales pipeline',
      'Stronger customer relationships through better tracking',
      'Automated follow-ups and communication workflows',
      'Data-driven sales performance insights',
      'Improved customer retention and satisfaction',
    ],
    useCases: [
      'Sales teams needing structured pipeline management',
      'Businesses wanting to improve customer retention',
      'Organizations requiring integrated sales and invoicing',
      'Companies building self-service portals for customers',
    ],
    workflow: [
      { step: '01', title: 'Capture', description: 'Record leads, contacts, and customer interactions in one central system.' },
      { step: '02', title: 'Nurture', description: 'Track and automate follow-ups through the sales pipeline stages.' },
      { step: '03', title: 'Convert', description: 'Generate quotes, invoices, and close deals within the CRM.' },
      { step: '04', title: 'Serve', description: 'Provide ongoing support through the self-service portal and communication tracking.' },
      { step: '05', title: 'Analyze', description: 'Review performance dashboards to optimize sales strategy.' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Email Integration', 'Cloud Deploy'],
    whyIiiQbets: [
      'CRM configured around your sales process',
      'Integration with existing ERP, billing, and communication tools',
      'Self-service portal for enhanced customer experience',
      'Ongoing support and feature enhancement',
    ],
    faqs: [
      { question: 'Can the CRM integrate with our existing ERP?', answer: 'Yes. Our CRM integrates with our ERP platform and can also connect to third-party systems through APIs.' },
      { question: 'Does the CRM include email integration?', answer: 'Yes. The CRM tracks email communications, supports automated email workflows, and integrates with major email providers.' },
      { question: 'Is there a customer self-service portal?', answer: 'Yes. The CRM includes a self-service portal where customers can view orders, invoices, and communicate with your team.' },
    ],
    image: 'https://images.pexels.com/photos/7693706/pexels-photo-7693706.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'pos',
    title: 'POS — Point of Sale',
    shortTitle: 'POS',
    icon: 'CreditCard',
    tagline: 'Smarter point-of-sale management.',
    heroHeading: 'Smarter Point-of-Sale Management',
    heroDescription:
      'Streamline sales operations with a powerful POS system — product management, invoicing, inventory tracking, payments, and multi-store control.',
    overview:
      'iiiQbets POS is a comprehensive point-of-sale system designed for retail and multi-store operations. Manage products and pricing, generate invoices, track inventory, process payments, and analyze sales — all from an intuitive interface.',
    features: [
      'Product & Pricing Management',
      'Invoice Generation',
      'Inventory Tracking',
      'Payment Tracking',
      'Sales Reports',
      'Multi-Store Management',
      'Payment Gateway Integration',
    ],
    benefits: [
      'Faster checkout and improved customer experience',
      'Real-time inventory tracking across stores',
      'Integrated payment processing',
      'Detailed sales reports for better decision making',
      'Centralized control for multi-store operations',
    ],
    useCases: [
      'Retail stores needing fast, reliable checkout',
      'Multi-location businesses requiring centralized inventory',
      'Businesses wanting integrated payment processing',
      'Organizations needing detailed sales analytics',
    ],
    workflow: [
      { step: '01', title: 'Setup', description: 'Configure products, pricing, tax rules, and store locations.' },
      { step: '02', title: 'Sell', description: 'Process sales quickly with barcode scanning and payment integration.' },
      { step: '03', title: 'Track', description: 'Monitor inventory levels in real-time across all store locations.' },
      { step: '04', title: 'Report', description: 'Generate sales reports by store, product, and time period.' },
      { step: '05', title: 'Optimize', description: 'Use analytics to optimize pricing, inventory, and store performance.' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Payment APIs', 'Barcode Integration'],
    whyIiiQbets: [
      'POS tailored to your retail workflow',
      'Seamless payment gateway integration',
      'Multi-store management from a single dashboard',
      'Reliable support and rapid issue resolution',
    ],
    faqs: [
      { question: 'Does the POS support multiple stores?', answer: 'Yes. The POS supports multi-store management with centralized inventory, reporting, and administration.' },
      { question: 'Which payment gateways are supported?', answer: 'We integrate with major payment gateways including Stripe, Razorpay, and others based on your region and requirements.' },
      { question: 'Can the POS work offline?', answer: 'Yes. The POS can operate in offline mode and sync data once connectivity is restored, ensuring uninterrupted sales operations.' },
    ],
    image: 'https://images.pexels.com/photos/12935042/pexels-photo-12935042.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'sfa',
    title: 'SFA — Sales Force Automation',
    shortTitle: 'SFA',
    icon: 'Zap',
    tagline: 'Field sales automation for modern sales teams.',
    heroHeading: 'Field Sales Automation',
    heroDescription:
      'Empower your field sales team with automation — manage visits, follow-ups, orders, payments, and analytics from anywhere.',
    overview:
      'iiiQbets SFA is a field sales automation platform that helps sales teams manage customer visits, follow-ups, order collection, payment tracking, and performance reporting — all from a mobile-friendly interface designed for on-the-go sales professionals.',
    features: [
      'Field Sales Management',
      'Customer Follow-Up Tracking',
      'Order Management',
      'Sales Reporting',
      'Payment Integration',
      'Multi-Store Management',
      'Sales Analytics',
    ],
    benefits: [
      'Increased field sales productivity and coverage',
      'Automated follow-ups and visit scheduling',
      'Real-time order capture and payment tracking',
      'Performance analytics for sales team optimization',
      'Better accountability and route optimization',
    ],
    useCases: [
      'Field sales teams managing daily customer visits',
      'Distributors needing order and payment tracking',
      'Organizations with multi-store field operations',
      'Companies wanting data-driven sales performance insights',
    ],
    workflow: [
      { step: '01', title: 'Plan', description: 'Schedule customer visits, routes, and follow-ups for the field team.' },
      { step: '02', title: 'Visit', description: 'Sales reps capture visit details, orders, and customer feedback on mobile.' },
      { step: '03', title: 'Order', description: 'Process orders and collect payments directly from the field.' },
      { step: '04', title: 'Track', description: 'Monitor team performance, visit compliance, and sales metrics.' },
      { step: '05', title: 'Analyze', description: 'Review analytics to optimize routes, coverage, and sales strategy.' },
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'PostgreSQL', 'Mobile APIs'],
    whyIiiQbets: [
      'SFA designed for real-world field sales workflows',
      'Mobile-first interface for on-the-go sales teams',
      'Integration with ERP and CRM for unified operations',
      'Reliable offline capability for areas with poor connectivity',
    ],
    faqs: [
      { question: 'Does the SFA work on mobile devices?', answer: 'Yes. The SFA is designed mobile-first and works on both iOS and Android devices, with offline capability for areas with poor connectivity.' },
      { question: 'Can the SFA integrate with our ERP?', answer: 'Yes. Orders, payments, and customer data sync with our ERP platform, and can also integrate with third-party systems.' },
      { question: 'Can we track field sales team performance?', answer: 'Yes. The SFA includes comprehensive reporting on visits, orders, payments, and overall team performance.' },
    ],
    image: 'https://images.pexels.com/photos/4921255/pexels-photo-4921255.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

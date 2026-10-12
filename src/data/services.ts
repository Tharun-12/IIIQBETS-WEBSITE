export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  heroDescription: string;
  businessProblem: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export const services: ServiceDetail[] = [
  {
    slug: 'business-process-reengineering',
    title: 'Business Process Reengineering',
    shortTitle: 'Business Process Reengineering',
    icon: 'Workflow',
    tagline: 'Analyze, redesign, and optimize business processes for maximum efficiency.',
    heroDescription:
      'Analyze, redesign, and optimize existing business processes to improve efficiency, reduce complexity, and create better workflows that drive measurable business outcomes.',
    businessProblem:
      'Organizations often carry legacy processes that have grown complex, redundant, and inefficient over time. Manual handoffs, duplicated efforts, and disconnected workflows create bottlenecks that slow down operations, increase costs, and frustrate employees and customers alike.',
    solution:
      'iiiQbets brings a structured approach to process reengineering — mapping current-state workflows, identifying inefficiencies, and redesigning processes that leverage automation and digital tools to create streamlined, measurable, and scalable operations.',
    capabilities: [
      'Process analysis and mapping',
      'Process redesign and optimization',
      'Workflow automation design',
      'Digital process transformation',
      'Business process automation',
      'Change management and adoption',
    ],
    technologies: ['BPM Tools', 'Workflow Automation', 'RPA', 'Process Mining', 'Integration Platforms'],
    benefits: [
      'Reduced operational cycle times',
      'Lower processing costs through automation',
      'Improved process visibility and compliance',
      'Higher employee productivity and satisfaction',
      'Scalable workflows that grow with your business',
    ],
    process: [
      { step: '01', title: 'Discover', description: 'Map current-state processes and identify pain points, bottlenecks, and inefficiencies.' },
      { step: '02', title: 'Analyze', description: 'Quantify the impact of inefficiencies and prioritize processes for redesign.' },
      { step: '03', title: 'Redesign', description: 'Create optimized future-state workflows with automation and digital enablement.' },
      { step: '04', title: 'Implement', description: 'Deploy new processes, tools, and automations with change management support.' },
      { step: '05', title: 'Monitor', description: 'Track performance metrics and continuously refine processes for ongoing improvement.' },
    ],
    faqs: [
      { question: 'How long does a typical process reengineering engagement take?', answer: 'Engagements typically range from 8 to 16 weeks depending on the number of processes, organizational complexity, and scope of automation required.' },
      { question: 'Do you work with our existing systems?', answer: 'Yes. We design reengineered processes that integrate with your current technology stack, ensuring continuity while introducing efficiency gains.' },
      { question: 'Can you help with change management?', answer: 'Absolutely. Adoption is critical to success. We include change management, training, and communication planning as part of our approach.' },
    ],
    image: 'https://images.pexels.com/photos/8204363/pexels-photo-8204363.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'digital-infrastructure',
    title: 'Digital Infrastructure & E-Commerce',
    shortTitle: 'Digital Infrastructure',
    icon: 'Server',
    tagline: 'Build a secure, scalable digital presence with modern platforms and applications.',
    heroDescription:
      'Build a secure and scalable digital presence with modern websites, e-commerce platforms, payment integrations, enterprise applications, and digital communication systems.',
    businessProblem:
      'Many businesses struggle with outdated websites, fragmented e-commerce systems, unreliable payment integrations, and digital portals that fail to deliver a seamless customer experience. Poor digital infrastructure limits growth and creates security and scalability risks.',
    solution:
      'iiiQbets designs and builds modern digital infrastructure — from high-performance websites and e-commerce platforms to integrated payment systems, ERP/CRM solutions, chatbots, and customer portals — creating a connected, secure, and scalable digital foundation.',
    capabilities: [
      'Website development',
      'E-commerce platforms',
      'Payment gateway integration',
      'ERP solutions',
      'CRM solutions',
      'Chatbots and conversational interfaces',
      'Digital portals',
      'UI/UX development',
    ],
    technologies: ['React', 'Node.js', 'Stripe', 'Shopify', 'WordPress', 'Custom APIs', 'AWS'],
    benefits: [
      'Faster, more reliable digital experiences',
      'Integrated payment and order management',
      'Scalable architecture that handles growth',
      'Improved customer engagement and conversion',
      'Centralized digital operations and reporting',
    ],
    process: [
      { step: '01', title: 'Assess', description: 'Evaluate your current digital infrastructure, security posture, and scalability needs.' },
      { step: '02', title: 'Architect', description: 'Design a modern, secure, and scalable digital architecture tailored to your business.' },
      { step: '03', title: 'Build', description: 'Develop websites, platforms, portals, and integrations with best-practice engineering.' },
      { step: '04', title: 'Launch', description: 'Deploy with comprehensive testing, performance optimization, and security validation.' },
      { step: '05', title: 'Scale', description: 'Monitor performance, iterate on user feedback, and scale infrastructure as you grow.' },
    ],
    faqs: [
      { question: 'Can you integrate with our existing payment processor?', answer: 'Yes. We work with major payment gateways including Stripe, PayPal, Razorpay, and custom integrations to ensure seamless transaction processing.' },
      { question: 'Do you build headless e-commerce solutions?', answer: 'Yes. We build both traditional and headless e-commerce architectures depending on your performance, flexibility, and integration requirements.' },
      { question: 'How do you ensure security?', answer: 'We follow industry security best practices including SSL, secure authentication, data encryption, PCI compliance for payments, and regular security audits.' },
    ],
    image: 'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    icon: 'TrendingUp',
    tagline: 'Build visibility, reach the right audience, and create stronger digital engagement.',
    heroDescription:
      'Build visibility, reach the right audience, and create stronger digital engagement through data-driven marketing strategies and campaigns.',
    businessProblem:
      'Businesses often lack a coherent digital marketing strategy. Disconnected campaigns, poor SEO, inconsistent social media presence, and unclear messaging result in wasted spend, low visibility, and missed opportunities to engage potential customers.',
    solution:
      'iiiQbets creates integrated digital marketing strategies that combine SEO, social media, content, and paid campaigns to build brand visibility, engage the right audience, and drive measurable business growth.',
    capabilities: [
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Social Media Management',
      'Digital campaign management',
      'Content strategy and creation',
      'Online brand building',
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Meta Ads', 'SEMrush', 'Mailchimp', 'HubSpot'],
    benefits: [
      'Higher search rankings and organic visibility',
      'Targeted audience reach and engagement',
      'Consistent brand messaging across channels',
      'Data-driven campaign optimization',
      'Improved lead generation and conversion',
    ],
    process: [
      { step: '01', title: 'Research', description: 'Analyze your market, audience, competitors, and current digital presence.' },
      { step: '02', title: 'Strategy', description: 'Develop an integrated digital marketing strategy with clear goals and KPIs.' },
      { step: '03', title: 'Create', description: 'Produce content, campaigns, and assets optimized for each channel and audience.' },
      { step: '04', title: 'Launch', description: 'Execute campaigns across SEO, social, paid, and content channels simultaneously.' },
      { step: '05', title: 'Optimize', description: 'Monitor performance, analyze results, and continuously refine for better ROI.' },
    ],
    faqs: [
      { question: 'Do you manage ongoing social media accounts?', answer: 'Yes. We offer both campaign-based and ongoing social media management services including content creation, scheduling, community management, and reporting.' },
      { question: 'How do you measure marketing success?', answer: 'We establish clear KPIs at the start — including traffic, leads, conversions, and ROI — and provide regular performance reports with actionable insights.' },
      { question: 'Can you work with our existing marketing team?', answer: 'Absolutely. We can augment your existing team with specialized skills or manage complete digital marketing initiatives independently.' },
    ],
    image: 'https://images.pexels.com/photos/7651801/pexels-photo-7651801.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    shortTitle: 'Data Analytics & BI',
    icon: 'BarChart3',
    tagline: 'Turn business data into meaningful insights and better decisions.',
    heroDescription:
      'Turn business data into meaningful insights and better decisions with comprehensive data management, analytics, and business intelligence solutions.',
    businessProblem:
      'Organizations accumulate vast amounts of data but struggle to turn it into actionable insight. Disconnected data sources, manual reporting, and lack of visualization tools mean decisions are often made on intuition rather than evidence.',
    solution:
      'iiiQbets builds end-to-end data analytics and BI solutions — from data integration and warehousing to interactive dashboards and decision-support systems — enabling leaders to make confident, data-driven decisions.',
    capabilities: [
      'Data management and integration',
      'Business intelligence solutions',
      'Data visualization',
      'Reporting dashboards',
      'Performance analytics',
      'Decision-support systems',
    ],
    technologies: ['Microsoft Power BI', 'Tableau', 'SQL Server', 'Python', 'Google Analytics', 'AWS Redshift'],
    benefits: [
      'Real-time visibility into business performance',
      'Data-driven decision making at all levels',
      'Automated reporting that saves hours of manual work',
      'Identification of trends, risks, and opportunities',
      'Competitive advantage through predictive insights',
    ],
    process: [
      { step: '01', title: 'Connect', description: 'Integrate data sources across your organization into a unified data layer.' },
      { step: '02', title: 'Model', description: 'Structure and transform data for analysis, ensuring quality and consistency.' },
      { step: '03', title: 'Visualize', description: 'Create interactive dashboards and reports tailored to each audience.' },
      { step: '04', title: 'Analyze', description: 'Apply analytics to uncover trends, patterns, and actionable insights.' },
      { step: '05', title: 'Decide', description: 'Embed insights into decision processes for continuous business improvement.' },
    ],
    faqs: [
      { question: 'Can you work with our existing data warehouse?', answer: 'Yes. We integrate with existing data warehouses and lakes, or can help you design and build one if needed.' },
      { question: 'Which BI tools do you specialize in?', answer: 'We have deep expertise in Microsoft Power BI and Tableau, and also work with custom dashboard solutions built on open-source technologies.' },
      { question: 'Do you offer ongoing analytics support?', answer: 'Yes. We provide managed analytics services including dashboard maintenance, data refreshes, and continuous insight generation.' },
    ],
    image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    shortTitle: 'Cloud Services',
    icon: 'Cloud',
    tagline: 'Move applications and infrastructure to the cloud with confidence.',
    heroDescription:
      'Move applications and infrastructure to the cloud with a practical, secure, and cost-effective strategy designed for your business.',
    businessProblem:
      'On-premise infrastructure is expensive to maintain, difficult to scale, and vulnerable to outages. Many organizations want to move to the cloud but lack the expertise to do so securely, efficiently, and without disrupting operations.',
    solution:
      'iiiQbets provides end-to-end cloud services — from migration strategy and infrastructure design to deployment, optimization, and ongoing managed cloud — ensuring a secure, scalable, and cost-effective cloud environment.',
    capabilities: [
      'Cloud migration strategy',
      'Cloud infrastructure design',
      'Application deployment',
      'Cloud data management',
      'Cloud cost optimization',
      'Security and compliance',
      'Managed cloud services',
    ],
    technologies: ['Microsoft Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'CI/CD'],
    benefits: [
      'Reduced infrastructure and maintenance costs',
      'On-demand scalability for peak workloads',
      'Improved reliability and disaster recovery',
      'Enhanced security and compliance posture',
      'Faster deployment and innovation cycles',
    ],
    process: [
      { step: '01', title: 'Assess', description: 'Evaluate your current infrastructure, applications, and cloud readiness.' },
      { step: '02', title: 'Plan', description: 'Design a migration strategy with cost, security, and timeline considerations.' },
      { step: '03', title: 'Migrate', description: 'Execute migration with minimal disruption, ensuring data integrity and security.' },
      { step: '04', title: 'Optimize', description: 'Fine-tune performance, cost, and security in the cloud environment.' },
      { step: '05', title: 'Manage', description: 'Provide ongoing monitoring, maintenance, and continuous optimization.' },
    ],
    faqs: [
      { question: 'Which cloud platforms do you support?', answer: 'We specialize in Microsoft Azure and AWS, with experience across deployment models including public, private, and hybrid cloud.' },
      { question: 'How long does a cloud migration take?', answer: 'Migration timelines vary based on the number and complexity of applications. A typical mid-size migration takes 3 to 6 months.' },
      { question: 'Do you offer managed cloud services?', answer: 'Yes. We provide ongoing managed cloud services including monitoring, security patching, cost optimization, and 24/7 support.' },
    ],
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'application-development',
    title: 'Application Development',
    shortTitle: 'Application Development',
    icon: 'Code2',
    tagline: 'Build powerful applications designed around unique business requirements.',
    heroDescription:
      'Build powerful applications designed around unique business requirements — from web and mobile to enterprise and custom business software.',
    businessProblem:
      'Off-the-shelf software rarely fits unique business processes. Organizations need custom applications that address specific workflows, integrate with existing systems, and scale with growth — but lack the in-house expertise to build them.',
    solution:
      'iiiQbets builds custom applications — web, mobile, desktop, and enterprise — using modern engineering practices, ensuring reliability, scalability, and seamless integration with your business ecosystem.',
    capabilities: [
      'Web applications',
      'Mobile applications',
      'Desktop applications',
      'Hybrid applications',
      'Enterprise applications',
      'Customized business software',
    ],
    technologies: ['React', 'React Native', 'Flutter', 'Node.js', 'Django', 'Python', 'PostgreSQL'],
    benefits: [
      'Software tailored to your exact business processes',
      'Seamless integration with existing systems',
      'Scalable architecture that grows with your business',
      'Modern, intuitive user experiences',
      'Full ownership and control of your software assets',
    ],
    process: [
      { step: '01', title: 'Define', description: 'Gather requirements, define user stories, and establish technical scope.' },
      { step: '02', title: 'Design', description: 'Create architecture, database design, and UI/UX prototypes for validation.' },
      { step: '03', title: 'Build', description: 'Develop with agile sprints, continuous integration, and regular demos.' },
      { step: '04', title: 'Test', description: 'Comprehensive testing including unit, integration, performance, and security.' },
      { step: '05', title: 'Deploy', description: 'Launch with monitoring, documentation, and ongoing support and maintenance.' },
    ],
    faqs: [
      { question: 'Do you build both web and mobile applications?', answer: 'Yes. We build web, mobile (iOS and Android), desktop, and hybrid applications using a range of modern frameworks.' },
      { question: 'Can you maintain and enhance existing applications?', answer: 'Absolutely. We take over maintenance, bug fixes, and feature enhancement for existing applications, including legacy systems.' },
      { question: 'What engagement models do you offer?', answer: 'We offer fixed-scope project-based engagements as well as dedicated team models for ongoing development needs.' },
    ],
    image: 'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const serviceSlugs = services.map((s) => s.slug);

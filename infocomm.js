const data = [
  [
    {
      id: 'Infocomm Technology' //Sector
    },
    {
      id: 'Education'
    }
    ,
    {
      id: 'Health and welfare'
    }
    ,
    {
      id: 'Engineering, manufacturing and construction'
    }
  ],
  [{
    id: 'Bussiness intelligence and IT systems design',
    parents: ['Infocomm Technology']
  },
  {
    id: 'Software engineering',
    parents: ['Infocomm Technology']
  },
  {
    id: 'Database and network management and design',
    parents: ['Infocomm Technology']
  },
  {
    id: 'Data science and AI',
    parents: ['Infocomm Technology']
  },
  {
    id: 'Cyber security',
    parents: ['Infocomm Technology']
  },
  {
    id: 'Operations and Support',
    parents: ['Infocomm Technology']
  }
  ],
  [
    {
      id: 'ICT sales professional',
      parents: ['Bussiness intelligence and IT systems design']
    },
    {
      id: 'Marketing manager',
      parents: ['Bussiness intelligence and IT systems design']
    },
    {
      id: 'Product analyst',
      parents: ['Bussiness intelligence and IT systems design']
    },
    {
      id: 'Product manager',
      parents: ['Bussiness intelligence and IT systems design']
    },
    {
      id: 'Product designer',
      parents: ['Bussiness intelligence and IT systems design']
    },
    {
      id: 'Business Intelligence professional',
      parents: ['Bussiness intelligence and IT systems design']
    },
    {
      id: 'Infrastructure engineer',
      parents: ['Software engineering']
    },
    {
      id: 'Infrastructure engineer (DB)',
      parents: ['Database and network management and design']
    },
    {
      id: 'Artificial intelligence/Machine Learning engineer',
      parents: ['Data science and AI']
    }
    ,
    {
      id: 'ICT security specialist/ IT security operations',
      parents: ['Cyber security']
    }
    ,
    {
      id: 'Database support engineer',
      parents: ['Operations and Support']
    }
  ],
  [
    {
      id: 'Interpersonal skills',
      parents: ['ICT sales professional', 'Marketing manager', 'Database support engineer', 'Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Communication (11)',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Database support engineer', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Problem Solving',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Database support engineer', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Service Orientation',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Transdisciplinary Thinking',
      parents: ['ICT sales professional', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Leadership',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Decision Making',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product analyst', 'Product manager', 'Product designer'],
      textcolor: skillcolor
    },
    {
      id: 'Global Mindset',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations'],
      textcolor: skillcolor
    },
    {
      id: 'Resource Management',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations'],
      textcolor: skillcolor
    }
    ,
    {
      id: 'Budgeting',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Development',
      parents: ['ICT sales professional', 'Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Needs Analysis',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Database support engineer', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Negotiation',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Contract Management',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Customer Experience Management',
      parents: ['ICT sales professional', 'Marketing manager', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Data Analytics',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Market Research',
      parents: ['ICT sales professional', 'Marketing manager', 'Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Networking',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Partnership Management',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Sales Strategy',
      parents: ['ICT sales professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Stakeholder Management (11)',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Database support engineer', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Technical Sales Support',
      parents: ['ICT sales professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Account Management',
      parents: ['ICT sales professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Performance Management',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product manager', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Consumer Intelligence Analysis',
      parents: ['ICT sales professional', 'Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Learning and Development',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Database support engineer', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Manpower Planning',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'People and Performance Management',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Database support engineer', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Pricing Strategy',
      parents: ['ICT sales professional', 'Marketing manager', 'Product manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Product Management',
      parents: ['ICT sales professional', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Project Management',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'Database support engineer', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Sales Channel Management',
      parents: ['ICT sales professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Strategy Planning',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Problem Management',
      parents: ['ICT sales professional', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Strategy Implementation',
      parents: ['ICT sales professional', 'Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Database support engineer', 'Product manager', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    },
    {
      id: 'Digital Literacy',
      parents: ['Marketing manager', 'ICT security specialist/ IT security operations'],
      textcolor: skillcolor
    }
    ,
    {
      id: 'Creative Thinking',
      parents: ['Marketing manager', 'ICT security specialist/ IT security operations', 'Product designer', 'Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Brand Management',
      parents: ['Marketing manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Environment Analysis',
      parents: ['Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Content Management',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Content Strategy',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Customer Behaviour Analysis',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Design Concepts Generation',
      parents: ['Marketing manager', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Emerging Technology Synthesis',
      parents: ['Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Integrated Marketing',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Market Trend Analysis',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Marketing Campaign Management',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Marketing Communications Plan Development',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Marketing Mix Management',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Marketing Strategy',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Media Platforms Management',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Media Strategy Development',
      parents: ['Marketing manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Innovation',
      parents: ['Marketing manager', 'Infrastructure engineer', 'Infrastructure engineer (DB)', 'Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Sense Making',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Product analyst', 'Business Intelligence professional'],
      textcolor: skillcolor
    }
    ,
    {
      id: 'Teamwork',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Database support engineer'],
      textcolor: skillcolor
    }
    ,
    {
      id: 'Agile Coaching',
      parents: ['Infrastructure engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Applications Development',
      parents: ['Infrastructure engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Applications Integration',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Audit and Compliance',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Agility',
      parents: ['Infrastructure engineer', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Requirements Mapping',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Business Risk Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Change Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Cloud Computing',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Configuration Tracking',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Continuous Integration and Continuous Deployment',
      parents: ['Infrastructure engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Cyber and Data Breach Incident Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Disaster Recovery Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Enterprise Architecture',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'IT Asset Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'IT Governance',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'IT Standards',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'IT Strategy',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Infrastructure Deployment',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Infrastructure Design',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Infrastructure Strategy',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Infrastructure Support',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Network Administration and Maintenance',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Network Configuration',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Network Security',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Network Slicing',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Organisational Analysis',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Performance Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer', 'Product analyst', 'Product manager', 'Product manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Process Improvement and Optimisation',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Procurement',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Project Feasibility Assessment',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Quality Engineering',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Radio Frequency Engineering',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Security Administration',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'ICT security specialist/ IT security operations', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Security Architecture',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Service Level Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Database support engineer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Software Configuration',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Solution Architecture',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Sustainability Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'System Integration',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'Product manager'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Test Planning',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Product designer'],
      textcolor: knowledgecolor
    }
    ,
    {
      id: 'Vendor Management',
      parents: ['Infrastructure engineer', 'Infrastructure engineer (DB)'],
      textcolor: knowledgecolor
    },
    {
      id: 'Computational Thinking',
      parents: ['Infrastructure engineer (DB)', 'Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations'],
      textcolor: skillcolor
    },
    {
      id: 'Systems Design',
      parents: ['Infrastructure engineer (DB)'],
      textcolor: skillcolor
    },
    {
      id: 'Developing People',
      parents: ['Artificial intelligence/Machine Learning engineer', 'ICT security specialist/ IT security operations', 'Product designer'],
      textcolor: skillcolor
    },
    {
      id: 'Computational Modelling',
      parents: ['Artificial intelligence/Machine Learning engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Computer Vision Technology',
      parents: ['Artificial intelligence/Machine Learning engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Data Design',
      parents: ['Artificial intelligence/Machine Learning engineer', 'Product analyst'],
      textcolor: skillcolor
    },
    {
      id: 'Data Engineering',
      parents: ['Artificial intelligence/Machine Learning engineer', 'Database support engineer', 'Product analyst'],
      textcolor: skillcolor
    },
    {
      id: 'Data Governance',
      parents: ['Artificial intelligence/Machine Learning engineer', 'Product analyst', 'Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Data Strategy',
      parents: ['Artificial intelligence/Machine Learning engineer', 'Product analyst'],
      textcolor: skillcolor
    },
    {
      id: 'Database Administration',
      parents: ['Artificial intelligence/Machine Learning engineer', 'Database support engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Intelligent Reasoning',
      parents: ['Artificial intelligence/Machine Learning engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Pattern Recognition Systems',
      parents: ['Artificial intelligence/Machine Learning engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Self-Learning Systems',
      parents: ['Artificial intelligence/Machine Learning engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Text Analytics and Processing',
      parents: ['Artificial intelligence/Machine Learning engineer'],
      textcolor: skillcolor
    },
    {
      id: 'Business Continuity',
      parents: ['ICT security specialist/ IT security operations', 'Database support engineer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Cyber Forensics',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Cyber Risk Management',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Security Assessment and Testing',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Security Education and Awareness',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Security Governance',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Security Programme Management',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Security Strategy',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Threat Analysis and Defence',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Threat Intelligence and Detection',
      parents: ['ICT security specialist/ IT security operations'],
      textcolor: knowledgecolor
    },
    {
      id: 'Data Migration',
      parents: ['Database support engineer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Collaboration',
      parents: ['Product analyst', 'Product manager', 'Product designer'],
      textcolor: skillcolor
    },
    {
      id: 'Customer Orientation',
      parents: ['Product analyst', 'Product manager', 'Product designer'],
      textcolor: skillcolor
    },
    {
      id: 'Digital Fluency',
      parents: ['Product analyst'],
      textcolor: skillcolor
    },
    {
      id: 'Adaptability',
      parents: ['Product analyst', 'Product manager'],
      textcolor: skillcolor
    },
    {
      id: 'Data Ethics',
      parents: ['Product analyst', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    },
    {
      id: 'Data Visualisation and Storyboarding',
      parents: ['Product analyst', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Artificial Intelligence Application in Product Development',
      parents: ['Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Automation Management in Product Development',
      parents: ['Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Design Thinking Practice',
      parents: ['Product analyst', 'Product manager', 'Product designer', 'Business Intelligence professional'],
      textcolor: knowledgecolor
    },
    {
      id: 'Quality Standards',
      parents: ['Product analyst', 'Product manager', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Global Perspective',
      parents: ['Product manager'],
      textcolor: skillcolor
    },
    {
      id: 'Influence',
      parents: ['Product manager', 'Product designer'],
      textcolor: skillcolor
    },
    {
      id: 'Demand Analysis',
      parents: ['Product manager', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Portfolio Management',
      parents: ['Product manager'],
      textcolor: knowledgecolor
    },
    {
      id: 'User Experience Design',
      parents: ['Product manager', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'User Interface Design',
      parents: ['Product manager', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'User Testing and Usability Testing',
      parents: ['Product manager', 'Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Narrative Design in Product Development',
      parents: ['Product designer'],
      textcolor: knowledgecolor
    },
    {
      id: 'Lifelong Learning',
      parents: ['Business Intelligence professional'],
      textcolor: skillcolor
    },
    {
      id: 'Data Visualisation',
      parents: ['Business Intelligence professional'],
      textcolor: knowledgecolor
    },
  ]
]

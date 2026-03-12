export const caseStudies = [
  {
    id: 1,
    title: "Secure Lead Intake Integration",
    shortDescription: "Bubble.io + Cognito Forms integration for secure client intake workflows.",
    overview: "A comprehensive solution that automates the client intake process from initial contact to data storage, ensuring security and compliance while maintaining a seamless user experience.",
    architecture: {
      description: "Multi-layered architecture connecting web forms to Bubble.io backend with secure data transmission and validation.",
      components: [
        "Cognito Forms for secure data collection",
        "Custom API endpoints in Bubble.io",
        "Automated data validation and sanitization",
        "Secure webhook-based data transmission",
        "Client dashboard for intake tracking"
      ]
    },
    images: [
      {
        src: "/placeholder-architecture-1.png",
        alt: "Lead Intake System Architecture Diagram",
        title: "System Architecture"
      },
      {
        src: "/placeholder-workflow-1.png",
        alt: "Lead Intake Workflow Screenshot",
        title: "Workflow Implementation"
      }
    ],
    technicalBreakdown: {
      challenge: "Manual lead processing was causing delays and potential data security issues in client intake workflows.",
      solution: "Implemented an automated system that securely captures form submissions, validates data, and stores it in a centralized Bubble.io application with real-time processing.",
      implementation: [
        "Created custom form validation rules in Cognito Forms",
        "Developed secure API endpoints in Bubble.io with authentication",
        "Implemented webhook-based real-time data synchronization",
        "Added automated email notifications for team members",
        "Built client-facing dashboard for submission tracking"
      ]
    },
    toolsUsed: ["Cognito Forms", "Bubble.io", "REST APIs", "Webhooks", "JSON"],
    impact: {
      metrics: [
        "95% reduction in data entry time",
        "100% elimination of manual processing errors",
        "3x faster client onboarding",
        "Enhanced data security and compliance"
      ],
      description: "Transformed a manual, error-prone process into a streamlined, secure workflow that significantly improved operational efficiency and client experience."
    }
  },
  {
    id: 2,
    title: "Automated Legal Billing Engine",
    shortDescription: "Google Apps Script automation converting CSV time tracking exports into client-ready invoices.",
    overview: "An intelligent automation system that transforms time tracking data into professional invoices, reducing billing preparation time from hours to minutes while ensuring accuracy.",
    architecture: {
      description: "Serverless automation using Google Apps Script with intelligent data parsing and template-based invoice generation.",
      components: [
        "CSV parsing and validation engine",
        "Time entry categorization algorithm",
        "Dynamic invoice template system",
        "Automated PDF generation",
        "Google Drive integration for storage"
      ]
    },
    images: [
      {
        src: "/placeholder-architecture-2.png",
        alt: "Billing Engine Architecture Diagram",
        title: "System Architecture"
      },
      {
        src: "/placeholder-workflow-2.png",
        alt: "Invoice Generation Workflow",
        title: "Workflow Implementation"
      }
    ],
    technicalBreakdown: {
      challenge: "Law firm was spending 8-10 hours monthly manually converting time tracking data into invoices, with frequent errors and inconsistencies.",
      solution: "Built an automated system that intelligently parses CSV exports, categorizes time entries, applies billing rates, and generates professional invoices automatically.",
      implementation: [
        "Developed intelligent CSV parsing with error handling",
        "Created rate calculation engine with multiple billing tiers",
        "Implemented template-based invoice generation",
        "Added automated quality checks and validations",
        "Integrated with Google Drive for document management"
      ]
    },
    toolsUsed: ["Google Apps Script", "Google Sheets", "Google Drive", "PDF Generation", "CSV Processing"],
    impact: {
      metrics: [
        "90% reduction in billing preparation time",
        "100% elimination of calculation errors",
        "Improved cash flow with faster invoicing",
        "Enhanced client satisfaction with detailed invoices"
      ],
      description: "Revolutionized the billing process, enabling the firm to focus on client service rather than administrative tasks while improving accuracy and cash flow."
    }
  },
  {
    id: 3,
    title: "AI-Powered Legal Operations Assistant",
    shortDescription: "Google Chat bot powered by Dialogflow CX integrated with Bubble Data API.",
    overview: "An intelligent conversational AI assistant that streamlines legal operations through natural language processing and seamless integration with existing systems.",
    architecture: {
      description: "Hybrid AI architecture combining Dialogflow CX for natural language processing with custom Bubble.io API integrations.",
      components: [
        "Dialogflow CX for intent recognition",
        "Custom fulfillment webhooks",
        "Bubble.io Data API integration",
        "Google Chat interface",
        "Knowledge base integration"
      ]
    },
    images: [
      {
        src: "/placeholder-architecture-3.png",
        alt: "AI Assistant Architecture Diagram",
        title: "System Architecture"
      },
      {
        src: "/placeholder-workflow-3.png",
        alt: "Chat Bot Workflow Implementation",
        title: "Workflow Implementation"
      }
    ],
    technicalBreakdown: {
      challenge: "Legal team needed quick access to case information and procedural guidance without navigating multiple systems.",
      solution: "Created an AI-powered chat assistant that understands natural language queries and retrieves information from integrated systems in real-time.",
      implementation: [
        "Designed conversation flows for common legal queries",
        "Integrated Dialogflow CX with Bubble.io backend APIs",
        "Implemented real-time data retrieval and processing",
        "Added context-aware response generation",
        "Created learning system for continuous improvement"
      ]
    },
    toolsUsed: ["Dialogflow CX", "Google Chat", "Bubble.io", "REST APIs", "Natural Language Processing"],
    impact: {
      metrics: [
        "75% reduction in information retrieval time",
        "24/7 availability for basic queries",
        "Improved team productivity and collaboration",
        "Enhanced knowledge sharing across the firm"
      ],
      description: "Transformed how the legal team accesses information, making critical data available instantly through natural conversation while maintaining security and accuracy."
    }
  },
  {
    id: 4,
    title: "AI Lead Qualification Automation",
    shortDescription: "AI workflow using Cognito Forms, n8n, and Gemini to classify website inquiries.",
    overview: "An intelligent lead qualification system that automatically categorizes and routes incoming inquiries, ensuring high-priority leads receive immediate attention while maintaining detailed tracking.",
    architecture: {
      description: "Multi-stage AI pipeline combining form data capture, AI-powered classification, and automated workflow routing.",
      components: [
        "Cognito Forms for data collection",
        "n8n for workflow orchestration",
        "Gemini AI for lead classification",
        "Automated routing and notification system",
        "CRM integration for lead tracking"
      ]
    },
    images: [
      {
        src: "/placeholder-architecture-4.png",
        alt: "Lead Qualification Architecture Diagram",
        title: "System Architecture"
      },
      {
        src: "/placeholder-workflow-4.png",
        alt: "AI Classification Workflow",
        title: "Workflow Implementation"
      }
    ],
    technicalBreakdown: {
      challenge: "Sales team was overwhelmed with mixed-quality leads, spending significant time manually qualifying inquiries and missing high-value opportunities.",
      solution: "Implemented an AI-powered system that automatically analyzes incoming inquiries, classifies them by quality and intent, and routes them appropriately with priority scoring.",
      implementation: [
        "Designed custom form fields for AI analysis",
        "Integrated Gemini AI for intelligent classification",
        "Created n8n workflows for automated processing",
        "Implemented priority scoring algorithm",
        "Added real-time notifications and CRM updates"
      ]
    },
    toolsUsed: ["Cognito Forms", "n8n", "Gemini AI", "CRM Integration", "Webhooks"],
    impact: {
      metrics: [
        "85% improvement in lead response time",
        "3x increase in qualified lead conversion",
        "60% reduction in manual qualification work",
        "Improved sales team productivity and focus"
      ],
      description: "Revolutionized the lead management process, enabling the sales team to focus on high-value prospects while ensuring no opportunities are missed through intelligent automation."
    }
  }
]

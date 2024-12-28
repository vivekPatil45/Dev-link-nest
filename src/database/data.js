import * as DB from '../database'

import {v4 as uuidv4} from 'uuid';

export const database = Object.values(DB).map((item) =>
    item.map((subcat) => ({ ...subcat, id: uuidv4() }))
)


export const sidebarData = [
    {
        category: 'frontend',
        subcategory: [
            { name: 'next js', url: '/next_js', resources: DB.next },
            {
                name: '3D libraries',
                url: '/three_d_libraries',
                resources: DB._3dLibraries,
            },
            { name: 'images', url: '/images', resources: DB.images },
            { name: 'fonts', url: '/fonts', resources: DB.fonts },
            { name: 'colors', url: '/colors', resources: DB.colors },
            { name: 'css games', url: '/css_games', resources: DB.cssGames },
            { name: 'react', url: '/react', resources: DB.react },
            {
                name: 'illustrations',
                url: '/illustrations',
                resources: DB.illustrations,
            },
            { name: 'animations', url: '/animations', resources: DB.animations },
            { name: 'icons', url: '/icons', resources: DB.icons },
            {
                name: 'themes & templates',
                url: '/themes_and_templates',
                resources: DB.themesTemplates,
            },
            {
                name: 'UI Generators',
                url: '/ui_generators',
                resources: DB.uiGenerators,
            },
            {
                name: 'online code editors',
                url: '/online_code_editors',
                resources: DB.onlineCodeEditors,
            },
            {
                name: 'accessibility',
                url: '/accessibility',
                resources: DB.accessibility,
            },
            {
                name: 'ui Libraries',
                url: '/ui_libraries',
                resources: DB.uilibraries,
            },
            { name: 'angular', url: '/angular', resources: DB.angular },
            {
                name: 'js-Chart Libraries',
                url: '/js_chart_libraries',
                resources: DB.jsChartLibraries,
            },
        ],
    },
    {
        category: 'backend',
        subcategory: [
            {
                name: 'architecture',
                url: '/architecture',
                resources: DB.architecture,
            },
            { name: 'validation', url: '/validation', resources: DB.validation },
            { name: 'security', url: '/security', resources: DB.security },
            {
                name: 'authentication',
                url: '/authentication',
                resources: DB.authentication,
            },
            {
                name: 'email providers',
                url: '/email_providers',
                resources: DB.emailProviders,
            },
            { name: 'caching', url: '/caching', resources: DB.caching },
            { name: 'testing', url: '/testing', resources: DB.testing },
            {
                name: 'system design',
                url: '/system_design',
                resources: DB.systemDesign,
            },
            { name: 'database', url: '/database', resources: DB.database },
            {
                name: 'APIs',
                url: '/api',
                resources: DB.api,
            },
        ],
    },
    {
        category: 'ai-tools',
        subcategory: [
            {
                name: 'design',
                url: '/design',
                resources: DB.design,
            },
            {
                name: 'blog writing',
                url: '/blog_writing',
                resources: DB.blog_writing,
            },
            {
                name: 'chat bots',
                url: '/chat_bots',
                resources: DB.chat_bots,
            },
            { name: 'tensorflow',
                url: '/tensorflow',
                resources: DB.tensorflow,
            }
        ],
    },
    {
        category: 'Placement-Prep',
        subcategory: [
          {
            name: 'Interview Preparation',
            url: '/interview_preparation',
            resources: DB.interviewPreparation,
          },
          {
            name: 'Job Portals',
            url: '/job_portals',
            resources: DB.jobPortals,
          },
          {
            name: 'Resume Building',
            url: '/resume_building',
            resources: DB.resumeBuilding,
          },
          {
            name: 'Portfolio Building',
            url: '/portfolio_building',
            resources: DB.portfolioBuilding,
          },
          {
            name: 'Cover Letters',
            url: '/cover_letters',
            resources: DB.coverLetters,
          },
          {
            name: 'Certifications',
            url: '/certifications',
            resources: DB.certifications,
          },
        ],
    },
    {
        category: 'BlockChain',
        subcategory: [
            {
                name: 'Smart Contracts',
                url: '/smartcontracts',
                resources: DB.smartContracts,
            },
            {
                name: 'Truffle',
                url: '/truffle',
                resources: DB.truffle,
            },
            {
                name: 'Hardhat',
                url: '/hardhat',
                resources: DB.hardhat,
            },
            {
                name: 'Ethers',
                url: '/ethers',
                resources: DB.ethers,
            },
            {
                name: 'Web3 & Metaverse',
                url: '/web3_metaverse',
                resources: DB.web3metaverse,
            },
        ],
        
    },
    {
        category: 'devops',
        subcategory: [
            {
                name: 'Automation Tools',
                url: '/automation_tools',
                resources: DB.automationTools,
            },
            {
                name: 'CI/CD',
                url: '/cicd',
                resources: DB.cicd,
            },
            {
                name: 'Configuration Management',
                url: '/configuration_management',
                resources: DB.configMang,
            },
            {
                name: 'Containerization and Orchestration',
                url: '/containerization_and_orchestration',
                resources: DB.contOrch,
            },
            {
                name: 'DevOps Life Cycle',
                url: '/devops_life_cycle',
                resources: DB.devopsLifecycle,
            },
            {
                name: 'DevOps Methodologies',
                url: '/devops_methodologies',
                resources: DB.devopsMethodologies,
            },
            { name: 'docker', url: '/docker', resources: DB.docker },
            { name: 'jenkins', url: '/jenkins', resources: DB.jenkins },
            {
                name: 'kubernetes',
                url: '/kubernetes',
                resources: DB.kubernetes,
            },
            {
                name: 'microservices',
                url: '/microservices',
                resources: DB.microservices,
            },
            {
                name: 'Monitoring and Loggging',
                url: '/monitoring_and_logging',
                resources: DB.monitorLogging,
            },
            {
                name: 'IaC',
                url: '/iac',
                resources: DB.iac,
            },
        ],
    },
    {
        category: 'cyber-security',
        subcategory: [
            {
                name: 'Offensive security',
                url: '/offensive_security',
                resources: DB.offensive_security,
            },
            {
                name: 'Defensive Security',
                url: '/defensive_security',
                resources: DB.defensive_security,
            },
            {
                name: 'Malware Analysis',
                url: '/malware_analysis',
                resources: DB.malware_analysis,
            },
            {
                name: 'Web Security',
                url: '/web_security',
                resources: DB.web_security,
            },
        ],
    },
]
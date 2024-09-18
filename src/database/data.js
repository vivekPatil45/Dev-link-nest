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
]
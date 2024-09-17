import * as DB from '../database'

import {v4 as uuidv4} from 'uuid';

export const database = Object.values(DB).map((item) =>
    item.map((subcat) => ({ ...subcat, id: uuidv4() }))
)


export const sidebarData = [
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
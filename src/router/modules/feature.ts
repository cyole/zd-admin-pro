import type { AppRouteRecordRaw } from '../types'

const featureRoutes: AppRouteRecordRaw = {
    path: '/feature',
    name: 'Feature',
    meta: {
        title: 'menu.feature',
        icon: 'icon-list',
        requiresAuth: true,
        roles: ['*'],
    },
    redirect: '/feature/editor',
    children: [
        {
            path: 'editor',
            name: 'Editor',
            component: () => import('@/pages/feature/editor.vue'),
            meta: {
                title: 'menu.feature.editor',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'chart',
            name: 'Chart',
            component: () => import('@/pages/feature/chart.vue'),
            meta: {
                title: 'menu.feature.chart',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'drag',
            name: 'Drag',
            component: () => import('@/pages/feature/drag.vue'),
            meta: {
                title: 'menu.feature.drag',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
}

export default featureRoutes

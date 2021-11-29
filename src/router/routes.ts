import { BasicLayout } from '@/components/Layout';
import { UserLayout } from '@/components/Layout';
import { RouteRecordRaw } from 'vue-router';

export const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    meta: { title: '用户' },
    children: [
      {
        path: '/user/login',
        name: 'user-login',
        meta: { title: '登录' },
        component: () => import('@/components/user/login/index.vue')
      }
    ]
  }
]

export const notFound: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: 'notFound',
    meta: { title: 404 },
    component: () => import('@/components/404.vue')
  },
  {
    path: '/:catchAll(.*)',
    meta: { title: 404 },
    redirect: '/404'
  }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      isMenu: true
    },
    redirect: '/account/index'
  },
  {
    path: '/account',
    name: 'account',
    component: BasicLayout,
    meta: { title: '客户', isMenu: true },
    children: [
      {
        path: 'index',
        name: 'account-index',
        meta: { title: '客户列表', isMenu: true },
        component: () => import('@/components/account/index.vue')
      },
      {
        path: 'details',
        name: 'account-details',
        meta: { title: '客户详情', isMenu: true },
        component: () => import('@/components/account/details.vue')
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: BasicLayout,
    meta: { title: '表单', isMenu: true },
    children: [
      {
        path: 'basic',
        name: 'form-basic',
        meta: { title: '基础表单', isMenu: true },
        component: () => import('@/components/form/basic.vue')
      },
      {
        path: 'height',
        name: 'form-height',
        meta: { title: '客户详情', isMenu: true },
        component: () => import('@/components/form/height.vue')
      }
    ]
  }
]
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: (resolve) => { require(['@/pages/home.vue'], resolve) }
        },
        {
            path: '/article/category=:category',
            name: 'article',
            component: (resolve) => { require(['@/pages/home.vue'], resolve) }
        },
        {
            path: '/article/keyword=:keyword',
            name: 'article-keyword',
            component: (resolve) => { require(['@/pages/home.vue'], resolve) }
        },
        {
            path: '/article/id=:id',
            name: 'article-details',
            component: (resolve) => { require(['@/pages/article/details.vue'], resolve) }
        },
        {
            path: '/article/new',
            name: 'article-new',
            component: (resolve) => { require(['@/pages/article/new.vue'], resolve) }
        },
        {
            path: '/article/edit/id=:id',
            name: 'article-edit',
            component: (resolve) => { require(['@/pages/article/edit.vue'], resolve) }
        }
    ]
})
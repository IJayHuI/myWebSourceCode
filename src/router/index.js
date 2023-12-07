import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Index.vue";
import Like from "../components/Like.vue";
import Computer from "../components/Computer.vue";
import Connect from "../components/Connect.vue";
import Introduction from "../views/Introduction.vue";
import Log from "../components/Log.vue";
import About from "../components/About.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Like',
        component: Like
    },
    {
        path: '/Computer',
        component: Computer
    },
    {
        path: '/Connect',
        component: Connect
    },
    {
        path: '/Introduction',
        component: Introduction
    },
    {
        path: '/Log',
        component: Log
    },
    {
        path: '/About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory('/myweb/'),
    routes
});


export default router;
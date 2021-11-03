import {createRouter, createWebHistory} from "vue-router";
import Index from './components/pages/index.vue'
import About from './components/pages/about.vue'
import Items from './components/pages/ItemList.vue'
import Contact from './components/pages/contact.vue'
import Login from './components/pages/login.vue'
import Secret from './components/pages/secret.vue'
import PageNotFound from './components/pages/404.vue'

const routes = [{
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/about",
    name: "About",
    component: About,
},
{
    path: "/itemList",
    name: "Items",
    component: Items,
},
{
    path: "/contact",
    name: "Contact",
    component: Contact,
},
{
    path: "/login",
    name: "Login",
    component: Login,
},
{
    path: "/secret",
    name: "Secret",
    component: Secret,
},
{
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
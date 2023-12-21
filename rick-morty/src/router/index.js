import { useAuthStore } from "../stores/auth";
import characterView from '../views/characterView.vue';
import detailsView from '../views/detailsView.vue'
import LoginView from '../views/LoginView.vue'
import SignView from '../views/SignView.vue'

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
      
        {path: "/Login", component :LoginView},
        {path: "/sign", component :SignView},
        {path: "/perso", component :characterView},
        {path: "/details/:characterID", component :detailsView}
    ]
})


export default router;


import Vue from "vue";
import Router from "vue-router";
import LayoutSistema from '../layout/LayoutSistema.vue'
import BoasVindas from "../components/Boasvindas.vue";
import Categorias from "../components/API/Categorias.vue";
import Login from "../views/Login.vue";
import Generos from "../components/API/Generos.vue";

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            component: LayoutSistema,
            children: [
                {
                    path: '/boasvindas',
                    name: 'boasvindas',
                    component: BoasVindas,
                },
                {
                    path: '/categorias',
                    name: 'categorias',
                    component: Categorias,
                },
                {
                    path: '/generos',
                    name: 'generos',
                    component: Generos
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})
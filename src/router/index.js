// crear nuevo archivo router.js
// importar Vue y Router
import Vue from 'vue'
import Router from 'vue-router'

// importar routerlinks
import Inicio from '../views/Inicio'
import Contacto from '../views/Contacto'
import Portafolio from '../views/Portafolio'
import Sobremi from '../views/SobreMi'


Vue.use(Router)
export default new Router ({
    mode: 'history',
    routes: [{ 
        path: '/',
        component: Inicio,
        name: "Inicio",
    },
    {
        path: '/contacto',
        component: Contacto,
        name: "Contacto",
    },
    {
        path: '/portafolio',
        component: Portafolio,
        name: "Portafolio",
    },
    {
        path: '/sobremi',
        component: Sobremi,
        name: "Sobremi",
    }

    ]
})
import { createRouter, createWebHistory } from 'vue-router'
import Feed from '../views/Feed.vue'
import AllUsers from '../views/AllUsers.vue'
import SingleMessage from '../views/SingleMessage.vue'
import SingleUser from '../views/SingleUser.vue'
import Login from '../views/Login.vue'
import FormulairePublication from '../views/FormulairePublication.vue'


 const router = createRouter({
     history: createWebHistory(''),
     routes: [
         {
             path: '/',
             component: Feed
         },
         {
             path: '/feed',
             component: Feed
         },
         {
              path: '/users',
              name: 'allUsers',
              component: AllUsers
         },
         {
              path: '/feed/:id',
              name: 'singleMessage',
              component: SingleMessage
         },
         {
              path: '/user/:id',
              name: 'singleUser',
              component: SingleUser
         },
         {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/poster',
            name: 'poster',
            component: FormulairePublication
        }
     ]
 })

 export default router

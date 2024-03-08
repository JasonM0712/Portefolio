import { createRouter, createWebHistory } from 'vue-router'
import AcceuilPf from '@/views/AcceuilPf.vue'
import ProfilJason from '@/views/ProfilJason.vue'
import ProjetVue from '@/views/ProjetVue.vue'
import cvVue from '@/views/cvVue.vue'


const routes = [
  {
    path : '/acceuilpf',
    name : 'acceuil',
    component : AcceuilPf
  },
  {
    path :'/profiljason',
    name : 'profil',
    component : ProfilJason
  },
  {
    path :'/projetvue',
    name : 'projet',
    component : ProjetVue
  }, 
  {
    path : '/cvVue',
    name : 'cv',
    component : cvVue
  }

  

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import insercao_nome from '@/components/insercao_nome.vue';
import jogo_da_velha from '@/components/jogo_da_velha.vue';
import JOGO from '@/components/telaInicio.vue';


const routes = [
  { path: '/', component: JOGO },
  { path: '/insercao_nome', component: insercao_nome },
  { path: '/jogo_da_velha', component: jogo_da_velha }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

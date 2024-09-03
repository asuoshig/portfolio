<template>
    <div>
      <insercao-nome />
      <div class="main-container">
        <h1>vamos jogar:</h1>
        <TelaInicio />
      </div>
    </div>
  </template>
  
  <script>
  import TelaInicio from '@/components/telaInicio.vue';
  import Insercao_nome from '../components/insercao_nome.vue';
  
  export default {
    name: 'joguinho',
    components: {
    TelaInicio,
    Insercao_nome
    }
  }
  </script>
<template>
  <div><img alt="Vue logo"  id="imagem" src="./assets/DALL·E 2024-08-26 16.07.53 - A funny tic-tac-toe game scene with a twist_ the game board is made of cookies and the pieces are playful characters—a mischievous X with a cheeky gri.webp">
    <router-view></router-view>
    </div>
</template>


<script>
// import JOGO from './components/telaInicio.vue'
// import jogo_da_velha from './components/jogo_da_velha.vue';
// import insercao_nome from './components/insercao_nome.vue';

export default {
  name: 'App',
  components: {
    // JOGO,
    // jogo_da_velha,
    // insercao_nome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img{
  height: 150px;
  width: 150px;
  border-radius: 20px;
}
</style>

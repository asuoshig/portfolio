<template>
  <div class="tela_inicial">
    <h1>{{ msg }}</h1>
    
      <h2>escolha uma das opções abaixo:</h2> <br>
      <button @click="Ir_para_jogo">JOGAR SOZINHO</button> <br> <br> <br>
      <button @click="irParaColocarnome">JOGAR COM AMIGO(A)</button>
    
  </div>
</template>

<script>
export default {
  name: 'telaInicial',
  props: {
    msg: String
  },
  methods:{
    Ir_para_jogo(){
      this.$router.push('/jogo_da_velha')
    },
    irParaColocarnome(){
      this.$router.push('/insercao_nome')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ec4b0b;
  font-size: 20px;
}

button{
  color: black;
  background-color: aqua;
  margin: 30px;
  height: 50px;
  width: 150px;
  border-radius: 20px;
}

</style>
<router-view></router-view>

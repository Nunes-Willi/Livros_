<script>
export default {
  data() {
    return { 
      jogadores:[
        {id: 1, name: "Lionel Messi", afiliacao: "PSG", acao: "6 | 10 | 1"},
        {id: 2, name: "Cristiano Ronaldo", afiliacao: "Manchester United", acao: "3 | 8 | 0"},
        {id: 3, name: "Tony Kroos", afiliacao: "Real-Madri", acao: "2 | 12 | 4"},
        {id: 4, name: "Liverpool", afiliacao: "Mane", acao: "3 | 6 | 3"},
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Histórico jogadores</h2>
    </div>
    <div class="forme-input">
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Time" />
      <button>Salvar</button>
    </div>
    <div class="list-jogadores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Time id</th>
            <th>G | A | F</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogador in jogadores" :key="jogador.id">
            <td>{{jogador.id}}</td>
            <td>{{jogador.name}}</td>
            <td>{{jogador.afiliacao}}</td>
            <td>{{jogador.acao}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>

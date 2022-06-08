<script>
export default {
  data() {
    return { 
      jogadores:[
        {id: 1, name: "Jogador1"},
        {id: 2, name: "Jogador2"},
        {id: 3, name: "Jogador3"},
        {id: 4, name: "Jogador4"},
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogador in jogadores" :key="jogador.id">
            <td>{{jogador.id}}</td>
            <td>{{jogador.name}}</td>
            <td>times</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>

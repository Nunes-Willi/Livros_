<script>
import {v4 as uuid} from "uuid";
export default {
  data() {
    return {
      novo_jogador: " ", 
      jogadores:[
        {id: "442e6fe2-e800-11ec-8fea-0242ac120002", name: "Lionel Messi", afiliacao: "PSG", acao: "6 | 10 | 1"},
        {id: "5116842e-e800-11ec-8fea-0242ac120002", name: "Cristiano Ronaldo", afiliacao: "Manchester United", acao: "3 | 8 | 0"},
        {id: "5b745d2e-e800-11ec-8fea-0242ac120002", name: "Tony Kroos", afiliacao: "Real-Madri", acao: "2 | 12 | 4"},
        {id: "6043b8ae-e800-11ec-8fea-0242ac120002", name: "Liverpool", afiliacao: "Mane", acao: "3 | 6 | 3"},
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.jogadores.push({
        id: id,
        name: this.novo_jogador,
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Histórico jogadores</h2>
    </div>
    <div class="forme-input">
      <input type="text" placeholder="Nome" v-model="novo_jogador"/>
      <input type="text" placeholder="Time" v-model="time"/>
      <button @click="salvar">Salvar</button>
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

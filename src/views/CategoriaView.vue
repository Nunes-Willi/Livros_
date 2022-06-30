<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_time: "",
      times: [
        {
          id: "2f320e7b-7ea7-4c21-8e1e-4f1f3982c9ab",
          name: "Real-Madri",
          acao: "35 | 25 | 6 | 3",
        },
        {
          id: "5f7ff064-e7fa-11ec-8fea-0242ac120002",
          name: "PSG",
          acao: "35 | 24 | 7 | 4",
        },
        {
          id: "691fec32-e7fa-11ec-8fea-0242ac120002",
          name: "Manchester United",
          acao: "35 | 24 | 8 | 3",
        },
        {
          id: "71334554-e7fa-11ec-8fea-0242ac120002",
          name: "Liverpool",
          acao: "35 | 22 | 7 | 5",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.times.push({
        id: id,
        name: this.novo_time,
      });
    },
    excluir(time) {
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1);
    },
    alerta() {
      alert("ok");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Times</h2>
    </div>
    <div class="forme-input">
      <input type="text" placeholder="Time" v-model="novo_time" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>J | V | D | E</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>{{ time.id }}</td>
            <td>{{ time.name }}</td>
            <td>{{ time.acao }}</td>
            <td>
              <button @click="alerta">Editar</button>
              <button @click="excluir">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>

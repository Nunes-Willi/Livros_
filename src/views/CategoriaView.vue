<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_categoria: "",
      novo_sinopse: "",
      jogadores: [
        {
          id: "442e6fe2-e800-11ec-8fea-0242ac120002",
          categoria: "Romance",
          sinopse:"...",
        },
        {
          id: "5116842e-e800-11ec-8fea-0242ac120002",
          categoria: "Ação",
           sinopse:"...",
        },
        {
          id: "5b745d2e-e800-11ec-8fea-0242ac120002",
          categoria: "Terror",
          sinopse :"...",
        },
        {
          id: "6043b8ae-e800-11ec-8fea-0242ac120002",
          categoria: "Misterio",
          sinopse:"...",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.jogadores.push({
        id: id,
        categoria: this.novo_categoria,
        sinopse: this.novo_sinopse
      });
    },

    excluir(jogador) {
      const indice = this.jogadores.indexOf(jogador);
      this.jogadores.splice(indice, 1);
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
      <h2>Categoria</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="novo_categoria" />
       <input type="text" placeholder="Nome" v-model="novo_sinopse" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-jogadores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
             <th>Sinopse</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in jogadores" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.sinopse}}</td>
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

<style scoped></style>

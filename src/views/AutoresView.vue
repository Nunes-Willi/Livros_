<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_autor: "",
      novo_obra: "",
      jogadores: [
        {
          id: "442e6fe2-e800-11ec-8fea-0242ac120002",
          autor: "Editora Rocco",
          obra:"Em Chamas",
        },
        {
          id: "5116842e-e800-11ec-8fea-0242ac120002",
          autor: "Editora Record LTDA.",
          obra:"Irmandade",
        },
        {
          id: "5b745d2e-e800-11ec-8fea-0242ac120002",
          autor: "Lafonte",
          obra:"Pequeno Principe",
        },
        {
          id: "6043b8ae-e800-11ec-8fea-0242ac120002",
          autor: "Editora Record LTDA.",
          obra:"Renegado",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.jogadores.push({
        id: id,
        autor: this.novo_autor,
        obra: this.novo_obra
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
      <h2>Autores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="novo_autor" />
       <input type="text" placeholder="Nome" v-model="novo_obra" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-jogadores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Autor</th>
             <th>Obra</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in jogadores" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.obra}}</td>
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

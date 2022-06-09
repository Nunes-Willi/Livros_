<script>
export default {
  data() {
    return { 
      times:[
        {id: 3, name: "Real-Madri", acao: "25 | 6 | 3"},
        {id: 1, name: "PSG", acao: "24 | 7 | 4"},
        {id: 4, name: "Manchester United", acao: "24 | 8 | 3"},
        {id: 2, name: "Liverpool", acao: "22 | 7 | 5"},
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Times</h2>
    </div>
    <div class="forme-input">
      <input type="text" />
      <button>Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>V | D | E</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>{{time.id}}</td>
            <td>{{time.name}}</td>
            <td>{{time.acao}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>

</style>
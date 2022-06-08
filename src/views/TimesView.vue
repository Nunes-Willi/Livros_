<script>
export default {
  data() {
    return { 
      times:[
        {id: 1, name: "Time1"},
        {id: 2, name: "Time2"},
        {id: 3, name: "Time3"},
        {id: 4, name: "Time4"},
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>{{time.id}}</td>
            <td>{{time.name}}</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>

</style>
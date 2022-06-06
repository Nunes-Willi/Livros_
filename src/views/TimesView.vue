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
          <tr>
            <td>1</td>
            <td>PSG</td>
            <td>???</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Barcelona</td>
            <td>???</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Real-Madri</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.title{
  text-align: center;
  margin: 2rem 0;
}

.forme-input{
display: flex;
justify-content: center;
}

.forme-input input{
  width: 50%;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0 0.5rem;
  height: 40px;
}

.forme-input button{
  height: 40px;
  margin-left: 1%;
  background-color: rgb(66, 202, 12);
  font-weight: bold;
  color:white;
  border: 2px solid green;
  border-radius: 10px;
  width: 15%;
}

.list-times{
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

table{
  width: 40%;
  border: 2px solid black;
  border-collapse: collapse;
  text-align: center;
  font-size: 1.1rem;
}

table thead{
  background-color: rgba(37, 3, 129, 0.801);
  color: white;
}

table thead th{
  font-weight: bolder;
}

table tbody tr:nth-child(odd) {
  background-color: rgba(7, 115, 187, 0.808);

}

</style>
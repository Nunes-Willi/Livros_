<template>
  <header class="menu-superior">

    <div class="menu-esquerdo">
      <span> Home </span> 
      <span> | </span> 
      <span> Jogadores </span> 
      <span> | </span>
      <span> Times </span>
    </div>

    <div class="menu-direito">
      <span > Exit </span>
    </div>
  </header>

  <RouterView />

</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;

  font-weight: normal;
}

header,footer{
  background-color: crimson;
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

 header.menu-superior{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

header span{
  padding: 0 20px;
}

main{
  height: 70%;
}

/* .conteudo{
  background-color: cyan;
  border: 2px solid black;
  height: 80px;
  width: 350px;
  ouverflow: hidden:
  overflow: scroll;
}*/


</style>

<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;
  background-color: white;
  font-weight: normal;
}

header,
footer {
  background-color: rgb(51, 158, 1);
  color: black;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

main {
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

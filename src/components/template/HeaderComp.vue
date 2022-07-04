<template>
  <header class="menu-superior">
    <div class="cl">
      <span><RouterLink to="/">Home</RouterLink></span>
    </div>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        Menu
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><RouterLink to="/Livros">Livros</RouterLink></li>
        <li><RouterLink to="/Ed">Editoras</RouterLink></li>
        <li><RouterLink to="/Cate">Categorias</RouterLink></li>
        <li><RouterLink to="/Au">Autores</RouterLink></li>
      </ul>
    </div>

    <div>
      <input class="pesquisar" type="text" placeholder="Pesquisar">
      <button class="pesquisa">Pesquisar</button>
    </div>

    <div class="Perfil">
      <RouterLink to="/Perfil"
        ><img src="https://cdn-icons-png.flaticon.com/512/1361/1361728.png"
      /></RouterLink>
    </div>
  </header>
</template>

<style scooped>
header .menu-superior {
  justify-content: space-between;
  display: flex;
  align-items: center;
  float: left;
}
a {
  text-decoration: none;
}
.cl {
  display: flex;
  align-items: center;
  float: left;
}

header span {
  padding: 0 20px;
}
.Perfil img {
  height: 50px;
  width: 50px;
}
.Perfil {
  margin-left: 460px;
}

.pesquisar{
  padding-right: 90px;
  margin-left: 100px;
  
}
</style>

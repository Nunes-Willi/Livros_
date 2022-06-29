<template>
  <header class="menu-superior">
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
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/Classificação">Sobre</RouterLink></li>
      </ul>
    </div>
    <div class="cl">
      <span
        ><RouterLink to="/Classificação"
          >Classificação de livros</RouterLink
        ></span
      >
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
  padding-right: 820px;
}

header span {
  padding: 0 20px;
}
.Perfil img {
  height: 70px;
  width: 70px;
}
.Perfil {
  display: flex;
  padding-right: 20px;
}
.dropdown-menu{}
</style>

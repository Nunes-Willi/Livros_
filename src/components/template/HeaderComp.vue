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
        <li><RouterLink to="/jogadores">Sobre</RouterLink></li>
      </ul>
      <div class="cl">
        <li><RouterLink to="/jogadores">Sobre</RouterLink></li>
      </div>
    </div>
  </header>
</template>

<style>
header .menu-superior {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
  color: white;
}
.cl {
  display: flex;
  align-items: center;
}

header span {
  padding: 0 20px;
}
</style>

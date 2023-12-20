<script setup>
import { ref } from 'vue';


let user = ref('');
let password = ('');

</script>

<template>
  <header>
    <nav>
      <div>

      </div>

      <ul>
        <div>
          <img src="../assets/rick-morty.jpg" class="logo" alt="logo">
        </div>

        <li>
          <RouterLink to="/perso">characters</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
nav {
  margin-bottom: 100px;
  margin-top: 20px;
}

ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;

}

li {
  text-decoration: none;

}

.logo {
  width: 50px;
}
</style>
<script setup>
import { ref } from 'vue';


let user = ref('');
let password = ('');

</script>

<template>
   
   <header>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/perso">characters</RouterLink></li>
      <li><RouterLink to="/Détail">Détails characters</RouterLink></li>
      <!-- <li v-if="user"><RouterLink to="/private">Private</RouterLink></li> -->
      <li style="margin-left: auto; color:white;" v-if="user">Hello {{ user.name }}</li>
      <li><button @click="switchLoggedStatus">{{!user? "Sign In" : "Sign Out"  }}</button></li>

    </ul>
  </nav>
</header>


    <!-- <form @submit.prevent="console.log(`${user} ${password}`)">
        <div class="flex ">
            <div class="m-2 p-2 flex">
            <label for="user"> User </label>
            <input type="text" name="user" v-model="user">
        </div>
        <div class="m-2 p-2">
            <label for="password"> Password </label>
            <input type="password" name="password" v-model="password">
        </div>
        </div>
        
        <button type="submit"  @keyup.enter="enterInputHandler">Login</button>

    </form> -->

   
</template>

<style></style>
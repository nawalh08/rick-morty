<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();

const { characterID } = route.params

const characterFound = ref('');
watchEffect(async () => {



  const response = await fetch(`https://rickandmortyapi.com/api/character/${characterID}`)

  characterFound.value = await response.json();
  console.log(characterFound)

});



/* const characterFound = characters.value.find(c => c.id == characterID); */

if (!characterFound) {
  router.push('/not-found')
}

</script>

<template>
  
  <div class="contenu">
    <div class="card" style="width: 900px;">
      <RouterLink :to="`/perso`">
        <button class="btn">X</button>
      </RouterLink>
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="characterFound.image" class=" rounded-start" alt="image-perso">
        </div>
        <div class="col-md-8">
          <div class="card-body ">
            <h5 class="card-title">Name :  {{ characterFound?.name }}</h5>
            <p class="card-text"><span>Status : </span>{{ characterFound?.status }}</p>
            <p class="card-text"><span>Species : </span>{{ characterFound?.species }}</p>
            <p class="card-text"><span>Type : </span>{{ characterFound?.type }}</p>
            <p class="card-text"><span>Gender : </span> {{ characterFound?.gender }}</p>
            <p class="card-text"><span>Origin : </span>{{ characterFound.origin?.name }}</p>
            <p class="card-text"><span>Location : </span> {{ characterFound.location?.name }}</p>
            <p class="card-text"><span>Created : </span> {{ characterFound?.created }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenu {
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-right: -20px;

}
img:hover {
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    border-radius: 5px;
}
img {
  border-radius: 5px;
  height: 110%;
  margin-top: -40px;
  margin-left: 5px;
  /* filter: drop-shadow(0 0 0.75rem rgb(152, 151, 151)); */
}
.card-title {
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-weight: 600;
margin-bottom: 20px;

}

.card {
  width: 18rem;
  filter: drop-shadow(0.75 0.75 0.75rem rgb(158, 158, 158));
  background-color: rgb(245, 242, 242);
  border: transparent;
}

.card-body {
  text-align: left;
  margin-left: 110px;
  margin-bottom: 20px;

}

.card-text>span {
  color: rgb(53, 231, 53);
  font-weight:500;
}

button {
  margin-left: 95%;
  margin-top: 8px;
  background-color:rgb(53, 231, 53); 

}
</style>
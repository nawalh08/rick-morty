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
  <div class="card mb-3" style="width: 800px;">
    <RouterLink :to="`/perso`">
      <button class="btn btn-success">X</button>
    </RouterLink>
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="characterFound.image" class="card-img-top my-4" alt="image-perso">
    </div>
    <div class="col-md-8">
      <div class="card-body">
    <h5 class="card-title"><span>Name : </span> {{ characterFound?.name }}</h5>
    <p class="card-text"><span>Status : </span>{{ characterFound?.status  }}</p>
    <p class="card-text"><span>Species : </span>{{characterFound?.species }}</p>
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
  background-color: rgb(229, 229, 229);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
/* .card {
  width: 18rem;
}

.card-body {
 text-align:left;
}

.card-text > span{
  color: rgb(53, 231, 53);
}
button {
  margin-left: 90%;
  margin-top : 8px;

}  */
</style>
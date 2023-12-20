<script setup>
import { provide, ref, watchEffect,  onMounted } from 'vue'
import { useRouter } from 'vue-router';
import {useCharacterStore} from '../stores/character';

let characters = ref([]);
let id = ref("");

 
watchEffect(async () => {
     const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1`)

    characters.value = await response.json();
    console.log(characters.value) 

});
  


</script>

<template>
    <div class="container text-center">
        <input @keyup.enter="id = $event.target.value" placeholder="saisir id">
        <div class="row row-cols-4"  v-if="characters.results">
            <div v-for="character in characters.results" :key="character.id">
                <div class="col my-2">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <RouterLink :to="`/details/${character.id}`">
                                <img class="card-img-top" :src=character.image alt="image personnage">
                            </RouterLink>
                            <h5 class="card-title">{{ character.name }}</h5>
                            <p class="card-text"> <span class=" text-success">Species :</span> {{ character.species }}</p>

                        </div>

                    </div>
                </div>
            </div>

        </div>



    </div>
</template>

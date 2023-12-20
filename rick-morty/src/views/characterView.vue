<script setup>
import { provide, ref, watchEffect, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useCharacterStore } from '../stores/character';

let characters = ref([]);
let id = ref("");
let nbPage = ref(1);


const previousPage = (async () => {
    if (nbPage.value > 1) {
        nbPage.value--;
        console.log(nbPage.value);
    }

});


const nextPage = (async () => {
    if (nbPage.value < 43) {
        nbPage.value++;
        console.log(nbPage.value);
    }

});


watchEffect(async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${nbPage.value}`)

    characters.value = await response.json();
    console.log(characters.value)

});

</script>

<template>
    <div class="container text-center">
        <input @keyup.enter="id = $event.target.value" placeholder="saisir id">
        <div class="row row-cols-4" v-if="characters.results">
            <div v-for="character in characters.results" :key="character.id">
                <div class="col my-2">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <RouterLink :to="`/details/${character.id}`">
                                <img class="card-img-top" :src=character.image alt="image personnage">
                            </RouterLink>
                            <div class="text">
                                <h5 class="card-title">{{ character.name }}</h5>
                                <p class="card-text"> <span>Species :</span> {{ character.species }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="pagination">
                <button class="btn btn-success" @click="previousPage"> {{ nbPage - 1 }}
                    Previous
                </button>

                <button class="btn btn-success px-4 " @click="nextPage">{{ nbPage + 1 }}
                    Next
                </button>
            </div>
        </div>

    </div>
</template>

<style>
.card {
    filter: drop-shadow(0 0 0.75rem rgb(180, 178, 178));

}

img:hover {
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    border-radius: 5px;
}

.card-body {
    background-color: rgb(245, 242, 242);
    border-radius: 10px;

}

span {
    color: rgb(53, 231, 53);
}

.text {
    margin-top: 10px;
}

.pagination {
    display: flex;
    justify-content: center;
 

}

.btn {
    background-color: rgb(53, 231, 53);
    margin-right: 40px;
    margin-left: 40px;
}

main {
    margin-top: -120px;
    margin-bottom: 80px;
} 
</style>

import {ref,} from 'vue';
import {defineStore} from 'pinia'


export const useCharacterStore = defineStore('character', () =>{
    
    const characters = ref([]);
    
    async function fetchCharacterData(){
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?page=1')
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération') // si ce n'est pas ok dans ces cas la on met un message d'erreur
                
            }

            const data = await response.json(); // Récupération de données
            characters.value = data.results;
           // console.log("lolo" + characters.value);
        } catch (err) { // (err) pour toutes les autres erreurs.

        }
    }
    return {characters, fetchCharacterData}
});

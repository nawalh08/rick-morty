<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useCharactersStore } from '@/stores/character';
// import { useCharacterStore } from '../stores/character';
let characters = ref([]);
let page = ref(1);
let name = ('');
let status = ('');
let species = ('');
let gender = ('');
let type = ('')
page=1
let nbPage = ref(1)

const isFormVisible = ref(false);
const characterStore = useCharactersStore();
const {getCharacterByPage} = characterStore

function toggleForm() {
    isFormVisible.value = !isFormVisible.value;

};
// const applyFilters = async (page) => {
//     await filterCharacters(page, selectedFilters.value.name, selectedFilters.value.status, selectedFilters.value.species, selectedFilters.value.gender, selectedFilters.value.type);
//     getCharacterByPage(page,name,status,gender,species,type)

// };
const previousPage = (async () => {
    if (page > 1) {
        page--;
        console.log(page);
    }
    getCharacterByPage(page,name,status,gender,species,type)

});
onMounted(()=>
getCharacterByPage(page,name,status,gender,species,type)

)


const nextPage = (async () => {
    // if (page.value < 43) {
       
        
        page++
        console.log(page);
       
        getCharacterByPage(page,name,status,gender,species,type)
    //}

});

// watchEffect(async () => {
//     const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`)

//     characters.value = await response.json();
//     console.log(characters.value)

// });

function onChangeGender(event) {
 
 gender = event.target.value
 console.log(gender);
 page = 1
 getCharacterByPage(page, name, status, gender, species, type);
}
function onChangeStatus(event) {

 status = event.target.value
 console.log(status);
 page = 1
 getCharacterByPage(page, name, status, gender, species, type);
}
function onChangeSpecies(event) {

 species = event.target.value
 console.log(gender);
 page = 1
 getCharacterByPage(page, name, status, gender, species, type);
}
function onChangeType(event) {
 page = 1
 nbPage.value=page
 type = event.target.value
 console.log(gender);
 getCharacterByPage(page, name, status, gender, species, type);
}



// watch(() => isFormVisible.value, () => {

//     if (isFormVisible.value) {
//         applyFilters();
//     }
// });


</script>

<template>
    <div class="text-center">
        <svg @click="toggleForm" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
            class="bi bi-arrow-down-square-fill mb-4 mt-4 " viewBox="0 0 16 16">
            <path
                d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0" />
        </svg>

        <div class=" text text-center mb-5 ">
           
            <div v-if="isFormVisible">
                <div>
                <input type=" text" placeholder="Search by name ..."
                    class="inputSearch mb-4 rounded p-1 px-4 border border-light">
            </div>
                <label for="select-Gender" class="mx-2">Gender</label>
                <select @change="onChangeGender" id="select_Gender" style="width: 200px; "
                    class="text-center rounded bg-">
                    <option value="">---</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unkown</option>
                </select>
                <label for="select-Status" class="mx-2">Status</label>
                <select @change="onChangeStatus" id="select_Status" style="width: 200px;"
                    class="text-center rounded">
                    <option value="">---</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unkown</option>
                </select>
                <br>
                <label for="select-Species" class="mx-2 my-2">Species</label>
                <select @change="onChangeSpecies" id="select_Species" style="width: 200px;"
                    class="text-center rounded">
                    <option value="">---</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                    <option value="humanoid">Humanoïde</option>
                    <option value="unknown">Unkown</option>
                    <option value="poopybutthole">Poopybutthole</option>
                    <option value="mythological%20Creature">Unkown</option>
                    <option value="animal">Animal</option>
                    <option value="robot">Robot</option>
                    <option value="cronenberg">Cronenberg</option>
                    <option value="disease">Disease</option>
                </select>
                <label for="select-type" class="mx-2">Type : </label>
                <select @change="onChangeType" id="select_Type" style="width: 200px;" class="text-center rounded">
                    <option value="">---</option>
                    <option value="genetic experiment">Genetic experiment</option>
                    <option value="superhuman">Superhuman (Ghost trains summoner)</option>
                    <option value="Parasite">Parasite</option>
                    <option value="Human with antennae">Human with antennae</option>
                    <option value="Human with ants in his eyes">Human with ants in his eyes</option>
                    <option value="Fish-Person">Fish-Person</option>
                    <option value="Cromulon">Cromulon</option>
                    <option value="Self-aware arm">Self-aware arm</option>
                    <option value="Cat-Person">Cat-Person</option>
                    <option value="Human with baby legs">Human with baby legs</option>
                    <option value="Bepisian">Bepisian</option>
                    <option value="Hivemind">Hivemind</option>
                    <option value="Mytholog">Mytholog</option>
                    <option value="Human with giant head">Human with giant head</option>
                    <option value="Dog">Dog</option>
                    <option value="Bird-Person">Bird-Person</option>
                    <option value="Korblock">Korblock</option>
                    <option value="Boobloosian">Boobloosian</option>
                    <option value="Elephant-Person">Elephant-Person</option>
                    <option value="Superhuman">Superhuman</option>
                    <option value="Gromflomite">Gromflomite</option>
                    <option value="Centaur">Centaur</option>
                    <option value="Organic gun">Organic gun</option>
                    <option value="Microverse inhabitant">Microverse inhabitant</option>
                    <option value="Vampire">Vampire</option>
                    <option value="Light bulb-Alien">Light bulb-Alien</option>
                    <option value="Animal">Animal</option>
                    <option value="Robot-Crocodile hybrid">Robot-Crocodile hybrid</option>
                    <option value="Zigerion">Zigerion</option>
                    <option value="Giant">Giant</option>
                    <option value="Cone-nippled alien">Cone-nippled alien</option>
                    <option value="Demon">Demon</option>
                    <option value="Shapeshifter">Shapeshifter</option>
                    <option value="Game">Game</option>
                    <option value="Amoeba-Person">Amoeba-Person</option>
                    <option value="Cronenberg">Cronenberg</option>
                    <option value="Clone">Clone</option>
                    <option value="Robot">Robot</option>
                    <option value="Interdimensional gaseous being">Interdimensional gaseous being</option>
                    <option value="Flansian">Flansian</option>
                    <option value="Zombodian">Zombodian</option>
                    <option value="Garblovian">Garblovian</option>
                    <option value="Gazorpian">Gazorpian</option>
                    <option value="Eat shiter-Person">Eat shiter-Person</option>
                    <option value="Goddess">Goddess</option>
                    <option value="Gazorpian reproduction robot">Gazorpian reproduction robot</option>
                    <option value="Hammerhead-Person">Hammerhead-Person</option>
                    <option value="Hole">Hole</option>
                    <option value="Tuskfish">Tuskfish</option>
                    <option value="Alphabetrian">Alphabetrian</option>
                    <option value="Cat">Cat</option>
                    <option value="Time God">Time God</option>
                    <option value="Unknown-nippled alien">Unknown-nippled alien</option>
                    <option value="Krootabulan">Krootabulan</option>
                    <option value="Plutonian">Plutonian</option>
                    <option value="Jellybean">Jellybean</option>
                    <option value="Tentacle alien">Tentacle alien</option>
                    <option value="Miniverse inhabitant">Miniverse inhabitant</option>
                    <option value="Cyborg">Cyborg</option>
                    <option value="Larva alien">Larva alien</option>
                    <option value="Snail alien">Snail alien</option>
                    <option value="Tinymouth">Tinymouth</option>
                    <option value="Lizard-Person">Lizard-Person</option>
                    <option value="Alligator-Person">Alligator-Person</option>
                    <option value="Monster">Monster</option>
                    <option value="Conjoined twin">Conjoined twin</option>
                    <option value="Sentient ant colony">Sentient ant colony</option>
                    <option value="Human Gazorpian">Human Gazorpian</option>
                    <option value="Boobie buyer reptilian">Boobie buyer reptilian</option>
                    <option value="Meeseeks">Meeseeks</option>
                    <option value="The Devil">The Devil</option>
                    <option value="Cat controlled dead lady">Cat controlled dead lady</option>
                    <option value="Numbericon">Numbericon</option>
                    <option value="Octopus-Person">Octopus-Person</option>
                    <option value="Hairy alien">Hairy alien</option>
                    <option value="Pickle">Pickle</option>
                    <option value="Bread">Bread</option>
                    <option value="Mega Gargantuan">Mega Gargantuan</option>
                    <option value="Rat">Rat</option>
                    <option value="Gear-Person">Gear-Person</option>
                    <option value="Blue ape alien">Blue ape alien</option>
                    <option value="Ring-nippled alien">Ring-nippled alien</option>
                    <option value="Lobster-Alien">Lobster-Alien</option>
                    <option value="Scrotian">Scrotian</option>
                    <option value="Shimshamian">Shimshamian</option>
                    <option value="Omniscient being">Omniscient being</option>
                    <option value="Slug">Slug</option>
                    <option value="Stair goblin">Stair goblin</option>
                    <option value="Leprechaun">Leprechaun</option>
                    <option value="Morty's toxic side">Morty's toxic side</option>
                    <option value="Rick's toxic side">Rick's toxic side</option>
                    <option value="Traflorkian">Traflorkian</option>
                    <option value="Teenyverse inhabitant">Teenyverse inhabitant</option>
                    <option value="Trunk-Person">Trunk-Person</option>
                    <option value="Tumblorkian">Tumblorkian</option>
                    <option value="Chair">Chair</option>
                    <option value="Drumbloxian">Drumbloxian</option>
                    <option value="Floop Floopian">Floop Floopian</option>
                    <option value="Greebybobe">Greebybobe</option>
                    <option value="Corn-person">Corn-person</option>
                    <option value="Phone-Person">Phone-Person</option>
                    <option value="Teddy Bear">Teddy Bear</option>
                    <option value="Little Human">Little Human</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Giant Cat Monster">Giant Cat Monster</option>
                    <option value="Old Amazons">Old Amazons</option>
                    <option value="Mannie">Mannie</option>
                    <option value="Necrophiliac">Necrophiliac</option>
                    <option value="Eel">Eel</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Grandma">Grandma</option>
                    <option value="Phone">Phone</option>
                    <option value="Doopidoo">Doopidoo</option>
                    <option value="Pripudlian">Pripudlian</option>
                    <option value="Nano Alien">Nano Alien</option>
                    <option value="Human with a flower in his head">Human with a flower in his head</option>
                    <option value="Hologram">Hologram</option>
                    <option value="Shrimp">Shrimp</option>
                    <option value="Caterpillar">Caterpillar</option>
                    <option value="Wasp">Wasp</option>
                    <option value="Toy">Toy</option>
                    <option value="Monogatron">Monogatron</option>
                    <option value="Lizard">Lizard</option>
                    <option value="Fly">Fly</option>
                    <option value="God">God</option>
                    <option value="Dummy">Dummy</option>
                    <option value="Human with tusks">Human with tusks</option>
                    <option value="Gramuflackian">Gramuflackian</option>
                    <option value="Dragon">Dragon</option>
                    <option value="Snake">Snake</option>
                    <option value="Human-Snake hybrid">Human-Snake hybrid</option>
                    <option value="Soulless Puppet">Soulless Puppet</option>
                    <option value="Half Soulless Puppet">Half Soulless Puppet</option>
                    <option value="Glorzo">Glorzo</option>
                    <option value="Planet">Planet</option>
                    <option value="Zeus">Zeus</option>
                    <option value="Clay-Person">Clay-Person</option>
                    <option value="Sexy Aquaman">Sexy Aquaman</option>
                    <option value="Narnian">Narnian</option>
                    <option value="Starfish">Starfish</option>
                    <option value="Squid">Squid</option>
                    <option value="Decoy">Decoy</option>
                    <option value="Whenwolf">Whenwolf</option>
                    <option value="Summon">Summon</option>
                    <option value="Morglutzian">Morglutzian</option>
                    <option value="Weasel">Weasel</option>
                    <option value="Super Sperm Monster">Super Sperm Monster</option>
                    <option value="CHUD">CHUD</option>
                    <option value="Giant Incest Baby">Giant Incest Baby</option>
                    <option value="CHUD Human Mix">CHUD Human Mix</option>
                    <option value="Changeformer">Changeformer</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Guinea Pig for the Polio Vaccine">Guinea Pig for the Polio Vaccine</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkey Human Mix">Turkey Human Mix</option>
                    <option value="Anime">Anime</option>
                    <option value="Memory">Memory</option>
                    <option value="Bird-Person Human Mix">Bird-Person Human Mix</option>
                    <option value="Crow">Crow</option>
                    <option value="Cookie">Cookie</option>
                    <option value="Normal Size Bug">Normal Size Bug</option>
                    <option value="Slartivartian">Slartivartian</option>
                    <option value="Ferkusian">Ferkusian</option>
                    <option value="Mascot">Mascot</option>
                    <option value="Scarecrow">Scarecrow</option>
                    <option value="Tiger">Tiger</option>
                    <option value="Crow Horse">Crow Horse</option>
                    <option value="Ferret Robot">Ferret Robot</option>
                    <option value="Passing Butter Robot">Passing Butter Robot</option>
                </select>
            </div>
            <div>
            <div class="pagination">
                <button class="btn btn-success" @click="previousPage"> 
                    Previous
                </button>
                    <input placeholder="page" v-model="page">
                <button class="btn btn-success px-4 " @click="nextPage">
                    Next
                </button>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped></style>
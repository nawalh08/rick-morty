<script>
// const paginate = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

// export default {
//     data() {
//         return {
//             paginate,
//             pages: []

//         };
//     },

//     methods : {
//         onChangePage(pages){
//             this.pages = pages+1;
//         }
//     }
// }

//nbPage = ('');
</script>

<template>
    <!-- <main>
        <div >
            <div class="pagination">
            <button class="btn btn-success" @click="onChangePage" >
              Précédent
            </button>

            <button class="btn btn-success px-4 " @click="onChangePage">
                Suivant
            </button>
        </div>
        </div>
        
    </main> -->
</template>

<style>
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
<script setup lang="ts">
import router from '@/router';
import { storeAuthentification } from '@/store/storeAuthentification';
import { ref } from 'vue';

// const publications = ref({
//     message: "",
//     datePublication: "",
//     auteur: ""
// });
const emit = defineEmits<{ updated: [] }>();
let messagePublication = ""
function envoyer() {
    fetch("https://localhost:8000/api/publications", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + storeAuthentification.JWT
        },
        body: JSON.stringify({ message: messagePublication }),
    }).then(reponsehttp => {
        if (reponsehttp.status !== 201) {
            console.log("Echec")
        } else {
            console.log("Succes")
            router.push('/feed')
        }
        console.log(reponsehttp.json())
    });
}

</script>


<template>
    <div class="wrapper">
        <div class="top">
            <h3>Nouveau message</h3>
        </div>
        <form @submit.prevent="envoyer">
            <div class="group">
                <label>Message</label>
                <input v-model="messagePublication">
            </div>
            <button type="submit">
                Envoyer
            </button>
        </form>
    </div>
</template>

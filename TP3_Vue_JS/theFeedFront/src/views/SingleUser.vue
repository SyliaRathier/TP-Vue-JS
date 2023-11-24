<script setup lang="ts">
import BoiteUtilisateur from '@/components/BoiteUtilisateur.vue';
import type { Utilisateur } from '@/types';
import { type Ref, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import type { Publication } from '@/types';
import BoitePublication from '@/components/BoitePublication.vue';
import { storeAuthentification } from '@/store/storeAuthentification';


const route = useRoute();
const id = route.params.id;
const user = ref<Utilisateur>({
    id: 0,
    adresseEmail: "Chargement",
    login: "Chargement",
    premium: false,
});

onMounted(() => {
    fetch(encodeURI("https://127.0.0.1:8000/api/utilisateurs/" + id))
        .then((reponsehttp) => reponsehttp.json())
        .then((reponseJSON) => {
            user.value = reponseJSON;
        });
});

const publications: Ref<Publication[]> = ref([]);
function chargerFeed() {
    fetch(encodeURI('https://localhost:8000/api/utilisateurs/' + id + '/publications'))
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
            publications.value = reponseJSON["hydra:member"];
        });
}
onMounted(() => {
    chargerFeed()
})

</script>

<template>
    <BoiteUtilisateur v-if="storeAuthentification.user.id == user.id" :key="user.id" :utilisateur="user" />
    <BoitePublication v-for="publication in publications" :key="publication.id" :publication="publication"
        @updated="chargerFeed()" />
</template>

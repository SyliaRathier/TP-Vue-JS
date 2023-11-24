<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import type { Utilisateur } from '@/types';
import BoiteUtilisateur from '@/components/BoiteUtilisateur.vue';
import type { storeAuthentification } from '@/store/storeAuthentification';

const users: Ref<Utilisateur[]> = ref([]);
onMounted(() => {
    fetch(encodeURI('https://localhost:8000/api/utilisateurs'))
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
            users.value = reponseJSON["hydra:member"];
        });
})
</script>


<template>
    Ceci est la liste des utilisateurs.
    <BoiteUtilisateur v-for="user in users" :key="user.id" :utilisateur="user" />
</template>

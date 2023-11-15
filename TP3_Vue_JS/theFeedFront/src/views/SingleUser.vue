<script setup lang="ts">
import BoiteUtilisateur from '@/components/BoiteUtilisateur.vue';
import type { Utilisateur } from '@/types';
import { type Ref, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
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
</script>

<template>
    <BoiteUtilisateur :key="user.id" :utilisateur="user" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import type { Publication } from '@/types';
import BoitePublication from '@/components/BoitePublication.vue';

const route = useRoute()
const id = route.params.id
const publication: Ref<Publication> = ref({
    id: Number(id),
    message: "chargement",
    datePublication: "chargement",
    auteur: {
        id: 4,
        adresseEmail: "chargement",
        login: "chargement",
        premium: false
    }
});

onMounted(() => {
    fetch(encodeURI('https://localhost:8000/api/publications/' + Number(id)))
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
            publication.value = reponseJSON;
        });
})

</script>

<template>
    <BoitePublication :key="publication.id" :publication="publication" />
</template>

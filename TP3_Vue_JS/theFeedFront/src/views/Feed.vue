<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import type { Publication } from '@/types';
import BoitePublication from '@/components/BoitePublication.vue';

const publications: Ref<Publication[]> = ref([]);
function chargerFeed() {
    fetch(encodeURI('https://localhost:8000/api/publications'))
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
            publications.value = reponseJSON["hydra:member"];
        });
}
onMounted(() => {
    chargerFeed()
})
</script>

<template >
    <BoitePublication v-for="publication in publications" :key="publication.id" :publication="publication"
        @updated="chargerFeed()" />
</template>

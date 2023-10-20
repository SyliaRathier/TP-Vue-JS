<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ supprimerTache: [], checkedChange: [boolean] }>();
const props = defineProps<{ descriptionTache: string, cochee: boolean }>();

</script>

<template>
    <input type="checkbox" :checked="props.cochee"
        @change="$emit('checkedChange', ($event.target as HTMLInputElement).checked)">
    <span :class="{ fait: props.cochee }">{{ props.descriptionTache }}</span>
    <button @click="$emit('supprimerTache')">Retirer</button>
</template>

<style scoped>
.fait {
    text-decoration: line-through;
}
</style>


<!-- Exercice : Faites-le, vérifiez que tout fonctionne à nouveau et prenez le temps de comprendre tout ce que nous venons de faire. -->

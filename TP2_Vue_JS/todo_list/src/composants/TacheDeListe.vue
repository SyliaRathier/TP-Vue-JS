<script setup lang="ts">

defineEmits<{ supprimerTache: [], "update:modelValue": [boolean] }>();
const props = defineProps<{ modelValue: boolean }>();

</script>

<template>
    <input type="checkbox" :checked="props.modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)">
    <span :class="{ fait: props.modelValue }">
        <slot></slot>
    </span>
    <button @click="$emit('supprimerTache')">Retirer</button>
</template>

<style scoped>
.fait {
    text-decoration: line-through;
}
</style>


<!-- Exercice : Faites-le, vérifiez que tout fonctionne à nouveau et prenez le temps de comprendre tout ce que nous venons de faire. -->

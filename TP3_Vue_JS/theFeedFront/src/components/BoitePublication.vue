<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router';
import type { Publication } from '@/types';

const router = useRouter();
const props = defineProps<{ publication: Publication }>();
</script>

<template>
    <div class="contentBox">
        <div class="top">
            <router-link :to="{ name: 'singleUser', params: { id: publication.auteur.id } }" class="clicable">
                {{ publication.auteur.login }}
            </router-link>
            -- {{ (new Date(publication.datePublication)).toLocaleString("fr") }}
        </div>
        <div class="content clicable" @click="router.push({ name: 'singleMessage', params: { id: publication.id } })">
            {{ publication.message }}
        </div>
    </div>
</template>

<style scoped>
@import "@/components/ContentBox.css";
</style>

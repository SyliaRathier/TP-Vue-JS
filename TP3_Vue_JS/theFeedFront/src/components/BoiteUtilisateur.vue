<script setup lang="ts">
import type { Utilisateur } from '@/types';
const props = defineProps<{ utilisateur: Utilisateur }>();
</script>


<template>
    <div class="wrapper">
        <div class="top">
            <router-link :to="{ name: 'singleUser', params: { id: utilisateur.id } }" class="clicable">Profil de {{
                utilisateur.login
            }}</router-link>
        </div>
        <div class="content">
            <div class="group">
                <label>Login</label>
                <input :value="utilisateur.login">
            </div>
            <div class="group">
                <label>Adresse e-mail</label>
                <input :value="utilisateur.adresseEmail">
            </div>
        </div>
    </div>
</template>


<style scoped>
@import "@/components/ContentBox.css";
</style>

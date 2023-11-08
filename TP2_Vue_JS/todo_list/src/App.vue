<script setup lang="ts">
import ListeDeTaches from '@/composants/ListeDeTaches.vue';
import { ref } from 'vue';
import type { Ref } from 'vue';

interface ListeInfo {
  ids: number;
  titre: string;
}

let ids = 0;
let nouvelleListe = ref("")
const todoListes: Ref<ListeInfo[]> = ref([
  { ids: ids++, titre: "Ménage" },
  { ids: ids++, titre: "Courses" },
  { ids: ids++, titre: "Administration" },

]);

function ajouterListe() {
  if (nouvelleListe.value != "") {
    todoListes.value.push({ ids: ids++, titre: nouvelleListe.value });
    nouvelleListe.value = "";
  }
}

function retirerListe(liste: ListeInfo) {
  const index = todoListes.value.indexOf(liste);
  todoListes.value.splice(index, 1);
}

</script>

<template>
  <input type="input" placeholder="Titre de la liste" v-model.trim="nouvelleListe" />
  <button @click="ajouterListe">Ajouter une liste </button>
  <ListeDeTaches v-for="liste in todoListes" :key="liste.ids" :titre="liste.titre"
    @supprimerListe="retirerListe(liste)" />
</template>

<style scoped>
</style>
<!-- https://matthieu-rosenfeld.github.io/tutorials/TD2.html -->

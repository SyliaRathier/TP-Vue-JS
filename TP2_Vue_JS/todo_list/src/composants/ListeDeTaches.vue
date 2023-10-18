<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';

const prop = defineProps<{ titre: string }>();

interface Tache {
    id: number;
    description: string;
    faite: boolean;
}
let id = 0;
let nouvelleTache = ref("");
const taches: Ref<Tache[]> = ref([{ id: id++, description: "Apprendre vue", faite: false },
{ id: id++, description: "Finir la SAÉ", faite: false },
{ id: id++, description: "Réviser pour l'interro", faite: false }]);
function ajouterTache() {
    if (nouvelleTache.value != "") {
        taches.value.push({ id: id++, description: nouvelleTache.value, faite: false });
        nouvelleTache.value = "";
    }
}
// function ajouterTache() {
//   if (nouvelleTache.value === "") return;
//   taches.value.push({ id: id++, description: nouvelleTache.value, faite: "false" });
//   nouvelleTache.value = "";
// }
function retirerTache(tache: Tache) {
    const index = taches.value.indexOf(tache);
    taches.value.splice(index, 1);
}
const cacheFaits = ref(false);

const tachesFiltrees = computed(() => {
    if (cacheFaits.value) {
        return taches.value.filter((tache) => !tache.faite);
    }
    else {
        return taches.value;
    }
})

</script>

<template>
    <div id="wrapper">
        <h2>{{ prop.titre }}</h2>
        <input id="id" type="input" placeholder="Entrez un nouvelle tâche" v-model.trim="nouvelleTache" />
        <button @click="ajouterTache"> ajouter </button>
        <ul>
            <li v-for="tache in tachesFiltrees" :key="tache.id">
                <p>{{ tache.faite }}</p>
                <input id="id" type="checkbox" v-model="tache.faite" />
                <span :class="{ fait: tache.faite }">{{ tache.description }}</span>
                <button @click="retirerTache(tache)">Retirer tâche</button>
            </li>
        </ul>
        <button @click="cacheFaits = !cacheFaits">
            {{ cacheFaits ? 'Tout montrer' : 'Cacher les tâches terminées' }}
        </button>
        <button style="color:red" @click="$emit('supprimerListe')">Supprimer</button>

    </div>
</template>

<style scoped>
#wrapper {
    border-radius: 5px;
    border: solid rgb(255, 234, 73) 2px;
    padding: 10px;
}

ul,
span {
    padding: 10px;
}

li {
    list-style: none;
    padding: 2px 0px;
}

.fait {
    text-decoration: line-through;
}
</style>

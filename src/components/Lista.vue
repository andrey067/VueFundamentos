<!-- ultilizando v-for -->
<template>
    <div>
        <h1>Lista</h1>
        <ul>
            <li v-bind:key="index" v-for="(technology, index) in backend_technologies">{{ technology }}</li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li :key="index" v-for="technology in frontend_technologies">
                {{ technology.id }}-{{ technology.language }}
            </li>
        </ul>
    </div>
</template>
    
<script lang="ts">

export default {
    name: "Lista",
    data() {
        return {
            backend_technologies: ["JavaScript", "PHP", "Python"],
            frontend_technologies: [
                { id: 1, language: 'HTML' },
                { id: 2, language: 'CSS' },
                { id: 3, language: 'JS' },
            ]
        };
    }
}
</script>
<template>
    <h1>First Components</h1>
    <p>{{ name }}</p>
    <p>{{ profissao }}</p>
    <MultiplosEventos />
</template>

<script lang="ts">
import MultiplosEventos from "./MultiplosEventos.vue"
export default {
    name: "MyFirstComponent",
    data() {
        return {
            name: "Audrey",
            profissao: "Programador"
        }
    },
    component: {
        MultiplosEventos
    }
}
</script>
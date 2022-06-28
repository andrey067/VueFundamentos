<template>
    <div>
        <h1>Multiplos Eventos</h1>
        <button @click="primeiro($event), segundo($event)">Ativar múltiplos eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script lang="ts">
export default {
    name: "Lista",
    data() {
        return {
            multiplos_eventos: "",
        };
    },
    methods: {
        primeiro(): void {
            this.multiplos_eventos = "Primeiro evento";
        },
        segundo(): void{
            setTimeout(() => this.multiplos_eventos = "Segundo evento", 500)
        }
    }
}
</script>
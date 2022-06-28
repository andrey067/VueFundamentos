<template>
    <div>
        <h2> Meu Formulario:</h2>
        <form action="" @click="enviarFormulario">
            <p>
                <label for="name">Nome</label>
                <input id="name" v-model="nome" type="text" name="name">
            </p>
            <p>
                <input type="submit" value="Enviar">
            </p>
        </form>
    </div>
</template>

<script lang="ts">
export default {
    name: "Evento",
    data() {
        return {
            nome: String
        }

    },
    methods: {
        enviarFormulario: (e : Event) => {
            e.preventDefault();
            console.log("Formulario Enviados");
            console.log()
        }
    },
}
</script>

<style>
</style>
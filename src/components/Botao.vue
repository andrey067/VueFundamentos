<!-- metodos  -->
<template>
    <div>
        <button @click="showEmail"> Mostrar email</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Botao",
    data() {
        return {
            
        };
    },
    methods: {
        showEmail(){
            console.log("Email mostrado")
        }
    },
}
</script>

<style>
</style>
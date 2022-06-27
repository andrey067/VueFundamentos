<!-- componetes dentro de componentes -->
<template>
    <div>
        <h3>Descrição da Pessoa: {{ name }}</h3>
        <Info />
        <Info2 />
        <Botao></Botao>
    </div>
</template>

<script lang="ts">
import Info from "./Info.vue"
import Info2 from "./Info2.vue";
import Button from "./Botao.vue";
export default {
    name: "Pessoa",
    data() {
        return {
            name: "Audrey 2"
        };
    },
    components: { Info, Info2, Button }
}

</script>

<style scoped>
div {
    background-color: red;
    color: #764;
}
</style>
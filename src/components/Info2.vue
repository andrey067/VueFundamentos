<!-- AtributosDinamicos v-bind -->
<template>
    <p>Para acessar meu portifolo
        <a v-bind:href="meu_link">
            basta clicar aqui
        </a>
    </p>
</template>
    
<script lang="ts">

export default {
    name: "Info2",
    data() {
        return {
            meu_link: "https://play.google.com/store/apps/details?id=com.ist.logomaker&hl=pt&gl=US"
        }
    }
}
</script>

<template>
    <div>
        <img :src="logo" :alt="descricao">
    </div>
</template>

<script lang="ts">
export default {
    name: "Picture",
    data() {
        return {
            logo: "../assets/logo.png",
            descricao: "Logo"
        }
    }
}
</script>

<style>
</style>
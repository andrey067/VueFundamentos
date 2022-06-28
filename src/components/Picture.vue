
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
            logo: "../assets/avatar.png",
            descricao: "Logo"
        }
    }
}
</script>

<style>
</style>
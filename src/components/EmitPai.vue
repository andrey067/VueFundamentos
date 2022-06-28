<template>
    <div>
        <img :src="logo" :alt="descricao">
        <EmitFilho @mudar-Imagem="trocarImagem" />
    </div>
</template>
    
<script lang="ts">
import EmitFilho from "./EmitFilho.vue";

export default {
    name: "EmitPai",
    data() {
        return {
            logo: "../assets/avatar.png",
            descricao: "Logo1"
        };
    },
    components: { EmitFilho },
    methods: {
        trocarImagem() {
            this.logo = "../assets/avatar2.png.png"
            this.descricao = "logo2"
        }
    },
}
</script>
<template>
    <div>
       <button @click="$emit('mudarImagem')">Trocar imagem</button>
    </div>
</template>
    
<script lang="ts">


export default {
    name: "EmitFilho",
    emits:["mudarImagem"],    
    data() {
        return {

        };
    }
}
</script>
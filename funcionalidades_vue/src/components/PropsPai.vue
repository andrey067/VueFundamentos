<!-- usando diretiva if e else e v-show  -->
<template>
    <PropsFilho email="audrey.ernesto.lima@gmail.com"/>
    <PropsFilho :email="email2"/>
    <PropsFilho :email="email2" :estatrabalhando="estatrabalhando"/>
</template>
    
<script lang="ts">
import PropsFilho from "./PropsFilho.vue"

export default {
    name: "PropsPai",
    data() {
        return {
            esta_trabalhand: true,
            mostrar_emal: true,
            email2:"audrey2@gmail.com",
            estatrabalhando: true
        };
    },
    components: { PropsFilho }
}
</script>
<!-- usando diretiva if e else e v-show  -->
<template>
    <Picture></Picture>
    <div v-if="esta_trabalhand">
        <p>Estou trabalhando no momento.</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
    </div>
    <div v-else>
        <p>Estou trabalhando no momento2.</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
    </div>

    <p v-show="mostrar_emal"> Mostrando ou não com v show</p>
</template>
    
<script lang="ts">
import Picture from "./Picture.vue"

export default {
    name: "Info",
    data() {
        return {
            esta_trabalhand: true,
            mostrar_emal: true
        };
    },
    components: { Picture }
}
</script>
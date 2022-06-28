<!-- usando diretiva if e else e v-show  -->
<template>
    <div>
        <h1> Passando email via props</h1>
        <p>{{email}}</p>
        <p v-show="estatrabalhando">Esta trabalhando</p>
    </div>
</template>
    
<script lang="ts">


export default {
    name: "PropsFilho",
    props: {
        email: String,
        estatrabalhando: Boolean
    },
    data() {
        return {

        };
    }
}
</script>
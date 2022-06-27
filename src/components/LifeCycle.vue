<template>
    <div>
        <h3>Meu nome é: {{ name }}</h3>
    </div>
</template>

<script lang="ts">

export default ({
    name: "LifeCycle",
    data() {
        return {
            name: "Audrey"
        }
    },
    created() {
        setTimeout(() => {
            this.name = "Agora é Andrey"

        }, 2000)
    },
    mounted() {
        setTimeout(() => {
            this.name = "Agora é Cludio"

        }, 2000)        
    },
})
</script>
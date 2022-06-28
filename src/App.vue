<template>
  <Header></Header>
  <h1>Hello Word</h1>
  <my-first-component />
  <life-cycle />
  <Lista />
  <Pessoa />
  <Evento />
  <PropsPai/>
  <EmitPai/>
</template>

<script lang="ts">
import LifeCycle from '@/components/LifeCycle.vue'
import MyFirstComponent from "@/components/MyFirstComponent.vue"
import Pessoa from "@/components/Pessoa.vue"
import Header from './components/Header.vue'
import Lista from './components/Lista.vue'
import Evento from './components/Evento.vue'
import PropsPai from './components/PropsPai.vue'
import EmitPai from './components/EmitPai.vue'

export default {
  name: "App",
  components: {
    MyFirstComponent,
    LifeCycle,
    Pessoa,
    Header,
    Lista,
    Evento,
    PropsPai,
    EmitPai
  }
}
</script>
<style >
body {
  background-color: rgb(121, 180, 103);
  color: #FFFF;
}
</style>

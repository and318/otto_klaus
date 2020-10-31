<template>
<div>
<h1>Editar</h1>
    {{toy.code}} - {{toy.name}} - {{toy.price}} - {{toy.stock}} 
<form @submit.prevent="editarToy(toy)">
    <input type="text" v-model="toy.code">
    <input type="text" v-model="toy.name">
    <input type="text" v-model="toy.price">
    <input type="text" v-model="toy.stock">
    <button type="submit">Guardar</button>
</form>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getToy(this.id)
    },
    methods: {
        ...mapActions(['getToy', 'editarToy'])
    },
    computed: {
      ...mapState (['toy'])  
    },
}
</script>
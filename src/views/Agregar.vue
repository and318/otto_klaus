<template>
<div>
    <h1>Agregar</h1>
    <form @submit.prevent="agregarToy(toy)">
        <label>Código</label>
        <input type="text" v-model="toy.code">
        <label>Nombre</label>
        <input type="text" v-model="toy.name">
        <label>Precio</label>
        <input type="text" v-model="toy.price">
        <label>Stock</label>
        <input type="text" v-model="toy.stock">

        <button type="submit">Agregar</button>
    </form>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: 'Agregar',
    data() {
        return {
            toy: []
        }
    },
    methods: {
        ...mapActions(['agregarToy'])
    },
}
</script>

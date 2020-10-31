<template>
<div>
    <h1>Inicio</h1>
    <router-link to='/agregar'>
    <button>Agregar</button>
    </router-link>
    <ul>
        <li v-for="(item, index) in toys" :key="index">
            {{item.code}} - {{item.name}} - {{item.price}} - {{item.stock}} 
            <router-link :to="{name: 'Editar', params:{id: item.id}}">
            <button>Editar</button>
            </router-link>
            <button @click="eliminarToy(item.id)">Eliminar</button>
        </li>
    </ul>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    created() {
        this.getToys()
    },
    methods: {
        ...mapActions(['getToys', 'eliminarToy'])
    },
    computed: {
        ...mapState(['toys'])
    },
}
</script>

<template>
<div class="container">
    <div class="row mb-4 mt-3 ">
        <div class="col">
            <router-link to='/agregar' class="float-right">
                <button class="btn btn-primary">Agregar</button>
            </router-link>
            <router-link to='/editar' class="float-right">
                <button class="btn btn-warning">Editar</button>
            </router-link>
        </div>
    </div>
    <div class="row">
        <div class="col">
            
            <table class="table table-striped table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Precio</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in toys" :key="index">
                        <td>{{item.code}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.stock}}</td>
                        <td>${{item.price}}</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'
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

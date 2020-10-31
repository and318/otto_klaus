<template>
<div class="container">
    <div class="row mb-4 mt-3 ">
        <div class="col">
            <router-link to='/agregar'>
                <button class="btn btn-primary">Agregar</button>
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
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in toys" :key="index">
                        <td>{{item.code}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.stock}}</td>
                        <td>${{item.price}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Actions">
<router-link :to="{name: 'Editar', params:{id: item.id}}">
                                <button class="btn btn-success">Editar</button>
                            </router-link>
                            <button class="btn btn-danger" @click="eliminarToy(item.id)">Eliminar</button>
                            </div>
                           
                        </td>
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

<template>
<div class="container">
    <div class="row mb-4 mt-3 ">
        <h3>Editar</h3>
        <div class="col">
            <router-link to='/agregar' class="float-right">
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
                    <tr v-for="(item, index) in toys" v-if="item.stock > 0 " :key="index">
                        <td>{{item.code}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.stock}}</td>
                        <td>${{item.price}}</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Actions">
                                <router-link :to="{name: 'EditarToy', params:{id: item.id}}">
                                    <button class="btn btn-success">Editar</button>
                                </router-link>
                                <b-button @click="eliminarToy(item.id)" variant="danger" >Eliminar</b-button>
                            </div>

                        </td>
                        <b-modal v-model="show">
                            <b-container fluid>
                                <b-row>
                                    <b-col>
                                        <p class="text-center">
                                            Estás eliminando un juguete <br>
                                            ¿Estás seguro?
                                        </p>
                                    </b-col>
                                </b-row>
                            </b-container>

                            <template #modal-footer>
                                <div class="w-100">
                                    <b-button variant="danger" size="sm" @click="show=false">
                                        No, me arrepentí
                                    </b-button>
                                    <b-button @click="show=true" variant="success" size="sm" class="float-right" >Si, eliminar</b-button>
                                </div>
                            </template>
                        </b-modal>
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
    data() {
        return {
            show: false,

        }
    },
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

<template>
<b-container>
    <b-row>
        <b-col>
            <h1>Agregar</h1>
            <b-form class="form-signin">
                <b-form-group label="Código">
                    <b-form-input v-model="toy.code"></b-form-input>
                </b-form-group>
                <b-form-group label="Nombre">
                    <b-form-input v-model="toy.name"></b-form-input>
                </b-form-group>
                <b-form-group label="Stock">
                    <b-form-input v-model="toy.stock"></b-form-input>
                </b-form-group>
                <b-form-group label="Precio">
                    <b-form-input v-model="toy.price"></b-form-input>
                </b-form-group>
                <b-button @click="show=true" variant="primary">Guardar</b-button>
            </b-form>
            <b-modal v-model="show" >
                <b-container fluid>
                    <b-row>
                        <b-col>
                            <p class="text-center">
                            Estás agregando un nuevo juguete <br>
                            ¿Estás seguro?
                            </p>
                        </b-col>
                    </b-row>
                </b-container>

                <template #modal-footer>
                    <div class="w-100">
                        <b-button variant="danger" size="sm" @click="show=false">
                           Cancelar
                        </b-button>
                        <b-button @click.prevent="agregarToy(toy)" variant="success" size="sm" class="float-right">Agregar</b-button>
                    </div>
                </template>
            </b-modal>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: 'Agregar',
    data() {
        return {
            toy: [],
            show: false,

        }
    },
    methods: {
        ...mapActions(['agregarToy']),
    },
}
</script>

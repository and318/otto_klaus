<template>
<!-- <div>
<h1>Editar</h1>
    {{toy.code}} - {{toy.name}} - {{toy.price}} - {{toy.stock}} 
<form @submit.prevent="editarToy(toy)">
    <input type="text" v-model="toy.code">
    <input type="text" v-model="toy.name">
    <input type="number" v-model="toy.price">
    <input type="number" v-model="toy.stock">
    <button type="submit">Guardar</button>
</form>
</div> -->
<b-container>
    <b-row>
        <b-col>
            <h1>Editar</h1>
            <b-form class="form-signin">
               
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
                            Estás editando los datos<br>
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
                        <b-button @click.prevent="editarToy(toy)" variant="success" size="sm" class="float-right">Guardar</b-button>
                    </div>
                </template>
            </b-modal>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id,
            show: false,
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
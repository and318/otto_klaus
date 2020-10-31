<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Otto Klaus</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link to="/inicio" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/About" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
                <button @click="logOut" class="btn btn-outline-success my-2 my-sm-0">Salir</button>
            </li>
           
        </ul>
    </div>
</nav>
</template>
<script>
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
export default {
  name: 'Navegacion',
      methods: {
      logOut() {
        firebase.auth().signOut().then( () => {
              this.$router.replace('/')
            })
      }
    },

}
</script>

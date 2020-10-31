
<template>
  <div id="app">

    <Navegacion></Navegacion>

    <router-view/>
  </div>
</template>

<script>
import Navegacion from '@/components/Navegacion.vue'
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
  export default {
    name: 'private',
    components: {
    Navegacion
  }
  }
</script>
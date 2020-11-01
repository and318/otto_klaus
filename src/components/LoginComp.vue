<template>
<div class="text-center">
<form class="form-signin">

    <h1 class="h3 mb-3 font-weight-normal">Login</h1>
    
        <input type="text" placeholder="Usuario" v-model="user" class="form-control"> 
       
        <input type="password" v-model="pass" placeholder="Password" class="form-control"> 
        <button class="btn btn-lg btn-primary btn-block" @click.prevent="login">Ingresar</button>

    </form>

</div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'LoginForm',
    //props: {},
    data() {
        return {
            user: '',
            pass: '',
        }
    },
    //components: {},
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
            .then((resp)=>{
                console.log(resp,'result')
                this.$router.push('/inicio')
            })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage)
            })
        }
    },
}
</script>
<style>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
import Vue from 'vue'
import Vuex from 'vuex'
import {db}  from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
    usuario: {nombre:'', email: '', id: ''},
    toys: [],
    toy: {code:'', name:'', price:'', stock:''}
  },
  mutations: {
    setToys(state, payload){
    state.toys = payload
    }, 
    setToy(state, payload){
      state.toy = payload
    }

  },
  actions: {
    getToys({commit}){
      const toys = [] 
      db.collection('toys').get()
      .then(res=> {
        res.forEach(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let toy = doc.data()
          toy.id = doc.id
          toys.push(toy)
        })
        commit('setToys', toys)
      })
    },
    getToy({commit}, idToy){
      db.collection('toys').doc(idToy).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let toy = doc.data()
        toy.id = doc.id
        commit('setToy', toy)
      })
    },
    editarToy({commit} ,toy){
      db.collection('toys').doc(toy.id).update({
        code: toy.code,
        name: toy.name,
        price: toy.price,
        stock: toy.stock
      })
      .then(() =>{
        console.log('toy editado')
        router.push('/')
      })
    },
    agregarToy({commit}, nuevoToy){
      db.collection('toys').add({
        code: nuevoToy.code,
        name: nuevoToy.name,
        price: nuevoToy.price,
        stock: nuevoToy.stock
        
      })
      .then(doc => {
        console.log(doc.id)
        router.push('/')
       
      })
    },
    eliminarToy({commit, dispatch}, idToy){
      db.collection('toys').doc(idToy).delete()
      .then( () => {
        console.log('toy eliminado')
        dispatch('getToys')
      })
    }
  },
  
  modules: {
  }
})

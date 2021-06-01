import Vue from 'vue'
import Vuex from 'vuex'


// import example from './module-example'

Vue.use(Vuex)
import axios from 'axios'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {

  const Store = new Vuex.Store({
    state: { user: {}, cart: [] },
    actions: {

      async signIn ({ commit }, creds) {

        const res = await axios.get("http://localhost:3000/customers")
        const db = res.data

        for (let i = 0; i < db.length; i++) {
            const user = db[i];

            if (creds[0] === user.email && creds[1] === user.password) {
                console.log("User:", user)
                commit("SET_USER", user)

                return true
            }
        }
        return false
      },
    },

    getters: {
      isItemInCart: state => item => {
        for (let index = 0; index < state.cart.length; index++) {
          const element = state.cart[index]
          if (element.id === item.id) {
            return true
          } else {
            return false
          }


        }
      },
      isLoggedIn: state => {
        console.log(state.user.email)
        return state.user.email != undefined
    },
    },
    mutations: {
      SET_USER (state, user) {
        state.user = user
      },
      REMOVE_USER (state) {
        state.user = {}
      },
      UPDATE_ITEM (state, data) {
        console.log(state.cart)
        state.cart.filter(el => el.id === data[0])[0].quantity = data[1]
      },
      ADD_ITEM (state, data) {
        state.cart.push(data)
      },
    },

    strict: process.env.DEBUGGING
  })

  return Store
}
<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-indigo q-pa-sm">
      <q-toolbar>
        <q-toolbar-title class="text-center text-red bg-white q-pa-sm text-h4 text-weight-bold">
            <q-btn icon="menu" class="float-left q-ml-sm" @click="show = !show"></q-btn>
          <div>
            
          </div>
            American Bakery
          <q-btn
          round
          dense
          @click="alert = !alert"
          icon="shopping_cart"
          class="shoppingCart float-right q-mr-sm"
          size="md"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-dialog v-model="alert">
      <q-card>
        <div
            class="q-px-lg"
            v-for="(n,index) in $store.state.cart"
            :key="index"
          >

          <img height="30px" width="30px" class="rounded-borders q-mr-md q-mt-md" :src="n.image"/>
          <h8 clas="text-center"> {{n.title}} </h8>
          <h8 class="q-ml-md "> Pris : {{n.price}} </h8>
            
          <h8 class="q-ml-md">Antal {{n.quantity}} </h8>
          <q-btn
          color="red"
          label="-"
          class="q-mr-lg"
          @click="deacrease(n.id)"
        />
        <q-btn
          color="green"
          class="q-mr-lg"
          label="+"
          @click="increase(n.id)"
        />
          </div>
      </q-card>
    </q-dialog>

    <q-drawer
    v-model="show"
    show-if-above
    :width="200"
    :breakpoint="600"
    bordered
    content-class="bg-indigo"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm text-center column">
          <q-btn color="grey" class="text-black q-mb-sm" @click="changePage('/')">Butik</q-btn>
          <q-btn color="grey" class="text-black q-mb-sm" @click="changePage('about')">Om oss</q-btn>
          <q-btn color="grey" class="text-black q-mb-sm" @click="changePage('staff')">Personal</q-btn>
          <img  style="max-height: 250px; width: 100%" class="fixed-center q-mb-xl" :src="'https://moneyarcher.com/se/wp-content/uploads/2020/03/Screenshot-2020-03-09-at-10.57.00.png'">
          <q-btn color="grey" v-if="!$store.getters.isLoggedIn" class="text-black fixed-bottom q-ma-sm q-ml-xl q-mt-xl" @click="view()">Logga in</q-btn>
          <div class="text-black fixed-bottom q-ma-sm q-mt-xl" v-else>
            
            <img height="50px" width="50px" class="rounded-borders" :src="$store.state.user.avatar">
          </div>
        </div>
        
      </q-scroll-area>
    </q-drawer>
        <q-page-container>
      <router-view />
    </q-page-container>
    <login-dialog :Show.sync="showLogin"/>
  </q-layout>
</template>

<script>
import loginDialog from '../dialogs/loginDialog.vue'

export default {
  name: 'MainLayout',
  data () {
    return {
      show: false,
      tab: this.$route.path.replace('/', ''),
      showLogin: false,
      alert: false,
      numb: 1
    }
  },

  components: {
    loginDialog
  },

  methods: {
    changePage (route) {
      if (this.tab !== route) {
        this.$router.push(route).catch(e => {})
      }
    },
    view () {
      this.showLogin = true
    },
    increase (id) {
      this.numb++
      this.$store.commit("UPDATE_ITEM", [id, this.numb])
    },
    deacrease (id) {
      this.numb--
      this.$store.commit("UPDATE_ITEM", [id, this.numb])
    },
  }
}
</script>

<style>
li{
  display: block;
}

a{
  color: red;
  text-decoration: none;
  font-size: 20px;
  padding: 6px 8px;
  border-radius: 10px;
  font-weight: bold;
}

a:hover{
  cursor: pointer;
}

</style>
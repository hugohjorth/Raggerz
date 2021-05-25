<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-indigo q-pa-sm">
      <q-toolbar>
        <q-toolbar-title class="text-center text-red bg-white q-pa-sm text-h4 text-weight-bold">
            <q-btn icon="menu" class="float-left q-ml-sm" @click="show = !show"></q-btn>
          <div>
            
          </div>
            American Bakery
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
    v-model="show"
    show-if-above
    :width="200"
    :breakpoint="600"
    bordered
    content-class="bg-indigo"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm text-center">
          <li><router-link to="produkter" exact>Produkter</router-link></li>
          <li><router-link to="staff" exact>Staff</router-link></li>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      show: false,
      tab: this.$route.path.replace('/', '')
    }
  },
  methods: {
    changePage (route) {
      if (this.tab !== route) {
        this.$router.push(route).catch(e => {})
      }
    }
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
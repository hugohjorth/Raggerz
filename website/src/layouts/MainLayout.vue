<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-indigo q-pa-sm">
      <q-toolbar>

        <q-toolbar-title class="text-center text-red bg-white q-pa-sm text-h5">
          <div>
            <q-btn icon="list" class="float-left q-ml-sm"></q-btn>
          </div>
            American Bakery
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>
    <side-bar-component v-if="show"></side-bar-component>
    <div v-else></div>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import sideBarComponent from "../components/sideBarComponent.vue"
export default {
  name: 'MainLayout',
  components: {
    sideBarComponent
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    side () {
      this.show = true
    }
  }
}
</script>

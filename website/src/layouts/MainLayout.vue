<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-indigo q-pa-sm">
      <q-toolbar>

        <q-toolbar-title class="text-center text-red bg-white q-pa-sm text-h5">
          American Bakery
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

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
    
    }
  }
}
</script>

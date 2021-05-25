<template>
  <div>
  <q-btn dense icon="menu" class="float-left q-ml-sm" @click="show = !show"></q-btn>

    <q-drawer
    v-model="show"
    :width="200"
    :breakpoint="500"
    bordered
    content-class="bg-indigo"
    >
    <q-scroll-area class="fit">
    </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
export default {
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

<style>

</style>
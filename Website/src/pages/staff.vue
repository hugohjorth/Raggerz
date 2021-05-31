<template>
  <div>
      <div class="text-h1 text-center q-ma-xl">
          Vi som jobbar här!
      </div>
        <div class="row justify-center">
      <div v-for="peeps in people" :key=peeps.id class="col-5">    <!-- Orkar inte med flexgrid lägre -->
          <q-card class="my-card q-ma-lg" flat bordered>
              <img style="max-height: 250px; width: 100%" :src="peeps.avatar">
              <q-card-section>
                  <div class="text-center text-h6">{{ peeps.name }}</div>
                  <div class="text-center text-h6">{{ peeps.role }}</div>
                  <div class="text-center text-h6">{{ peeps.phone }}</div>
                  <div class="text-center text-h6">{{ peeps.email }}</div>
              </q-card-section>
          </q-card>
      </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
        people: null
    }
  },
  mounted () {
    axios.get('http://localhost:3000/staff')    
    .then(response => {
        this.people = response.data
    })
  }
}
</script>

<style>
.my-card {
    width: 450px;
    height: 450px;
    background-color: #19269D;
}
</style>
<template>
  <div>
      <div class="text-h1 text-center q-ma-xl">
          Våra kakor!
      </div>
        <div class="row justify-center">
      <div v-for="cake in cakes" :key=cake.id class="col-5">    <!-- Orkar inte med flexgrid lägre -->
          <q-card class="my-card q-ma-lg" flat bordered >
              <img style="max-height: 250px; width: 100%" :src="cake.image">
              <q-card-section>
                <div class="text-center text-h5 text-white">{{ cake.title }}</div>
                <div class="text-center text-h7 text-white">{{ cake.previewDescription }}</div>
                <!-- <div class="text-center text-h9 text-white">{{ cake.detailDescription }}</div> -->
                <div class="q-pa-md q-gutter-sm">
                  <q-btn 
                  size="15px"
                  color="yellow" 
                  text-color="black" 
                  label=" Mer info"
                  @click="alert = true"
                  />
                  <q-btn 
                  size="15px"
                  color="yellow" 
                  text-color="black" 
                  label=" Lägg i kundvagn" />
                </div>
              </q-card-section>
          </q-card>
          
          <q-dialog  v-model="alert">
            <q-card class="my-card no-margin full-height full-width">
              <q-img
                style="height: 50%;  "
                :src="cake.image"
              />
            </q-card>
          </q-dialog>          
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
        cakes: null
    }
  },
  mounted () {
    axios.get('http://localhost:3000/cakes')    
    .then(response => {
        this.cakes = response.data
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
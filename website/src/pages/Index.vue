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
                <div class="text-center text-h7 text-white">Pris: {{ cake.price }} kr</div>

                <div class="q-pa-md q-gutter-sm">
                  <q-btn 
                  @click="showAlert(cake.title, cake.price, cake.image, cake.detailDescription)"
                  size="15px"
                  color="yellow" 
                  text-color="black" 
                  label=" Mer info"
                  />
                  <q-btn 
                  size="15px"
                  color="yellow" 
                  text-color="black" 
                  @click="addToCart(cake.title, cake.price, cake.image, cake.id)"
                  label=" Lägg i kundvagn" />
                </div>
              </q-card-section>
          </q-card>
      </div>

      
    <q-dialog v-model="alert">
      <q-card>
        <q-img
          style="height: 50%;  "
          :src="alertImage"
        />

        <q-card-section class="q-pt-xs">
          <div
            class="text-h4 q-mt-sm q-mb-lg"
            vertical
            align="center"
          >
            {{ alertTitle }}
          </div>
          <div class="text-h7 text-black">
            {{ alertDescription }}
          </div>
          <div
            class="text-h3 q-mt-lg"
            vertical
            align="center"
          >{{ alertPrice }}kr</div>
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  data () {
    return {
        cakes: null,
        alert: false,
        alertTitle: "",
        alertPrice: "",
        alertImage: "",
        alertDescription: ""
    }
  },
  methods: {
    showAlert(title, price, image, desc) {
      this.alert = true
      this.alertTitle = title
      this.alertPrice = price
      this.alertImage = image
      this.alertDescription = desc
    },
    addToCart(title, price, image, id) {
      if(!this.$store.getters.isItemInCart({ title, price, image, id ,quantity: 1 })){
        this.$store.commit("ADD_ITEM", { title, price, image, id ,quantity: 1 })
      }
      
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
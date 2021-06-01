<template>
    <q-dialog v-model="view" @before-hide="cancel">
        <q-card class="login-card bg-white">
                        <q-card-actions vertical align="center">
                <q-input filled v-model="username" label="Användarnamn" class="q-ma-md" bg-color="yellow" />
                <q-input filled v-model="password" label="Lösenord" bg-color="yellow" type="password" />
                <q-btn color="yellow" class="text-black q-ma-md float-left">Logga In</q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login-dialog',

  props: {
      Show: { type: Boolean, required: true }
  },

  data () {
      return {
          view: false,
          username: '',
          password: '',
          userInfo: null
      }
  },
  
  methods: {
      cancel () {
          this.view = false
          this.$emit('update:show', this.view)
      },
      login () {
          for( var i = 0; i < this.userInfo.length; i++ ) {

          }
      }
  },

  watch: {
      Show: function (val) {
          this.view = val
      }
  },
  mounted () {
    axios.get('http://localhost:3000/customers')    
    .then(response => {
        this.userInfo = response.data
    })
  }
}
</script>

<style>
.login-card {
    width: 100%;
    max-width: 100px;
}
</style>
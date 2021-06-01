<template>
  <div class="q-pa-md cards">
    <!-- you define your Vue template here -->
    <q-card
      class="my-card no-margin full-height "
      @click="alert = true"
    >
      <img
        style="height: 70%"
        :src="kaka.image"
      />

      <q-card-section class="q-pa-sm">
        <div class="text-h6">{{ kaka.title }}</div>
        <div class="text-subtitle2">
          {{ kaka.previewDescription }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>
    </q-card>

    <q-dialog v-model="alert">
      <q-card class="my-card no-margin full-height full-width">
        <q-img
          style="height: 50%;  "
          :src="kaka.image"
        />

        <q-card-section class="q-pt-xs">
          <div
            class="text-h4 q-mt-sm q-mb-lg"
            vertical
            align="center"
          >
            {{ kaka.title }}
          </div>
          <div class="text-h7 text-black">
            {{ kaka.detailDescription }}
          </div>
          <div
            class="text-h3 q-mt-lg"
            vertical
            align="center"
          >{{ kaka.price }}kr</div>
        </q-card-section>

        <q-separator class="bottom" />

        <q-card-actions
          vertical
          align="center"
        >
          <q-btn
            size="lg"
            color="green"
            label="Add to cart"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: false
    }
  },
  name: "cakecard",
  props: ["kaka"],
  methods: {
  }
};

</script>

<style>
.cards {
  height: 500px;
}
.bottom {
  align-items: flex-end;
}
</style>

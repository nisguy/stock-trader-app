<template>
    <div class="container">

            <app-item :item="item" v-for="item in portfolio"></app-item>
        </div>
    </div>
</template>

<script>
    import item from './item.vue'
export default {
    components: {
        'appItem': item
    },
   computed: {
    portfolio () {
      return this.$store.getters.portfolio
    }
  }
}
</script>

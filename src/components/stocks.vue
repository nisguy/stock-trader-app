<template>
    <div class="container">
        <div class="col-md-6">
            <div>
                <app-stock :stock="stock" v-for="stock in stocks" v-if="stocks.length> 0"></app-stock>
            </div>
        </div>
    </div>
</template>

<script>
    import stock from './stock.vue'
export default {
    components: {
        'appStock': stock
    },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>

<template>
    <div class="panel panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">{{stock.title}}<small>  (Price: {{realtimePrice}} |Quantity: {{stock.quantity}})</small></h3>
        </div>
        <div class="panel-body">
            <div class="pull-left">
                <input type="number" class="form-control pull-left" v-model="quantity">
            </div>
            <div class="pull-right">
                <button class="btn btn-danger pull-right" @click="sellOrder">Sell</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['stock'],
    data(){
      return{
          quantity : null
      }
    },
    methods: {
      sellOrder (){
          console.log(this.quantity)
          const order = {
              quantity: this.quantity,
              title: this.stock.title,
              price: this.stock.price
          }
          this.$store.dispatch('sellStock', order)
          this.quantity = null
      }
    },
    computed: {
        realtimePrice(){
            const record = this.$store.getters.portfolio.find(element => element.title === this.stock.title)
            return record.price
        }
    }

}
</script>

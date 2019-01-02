<template>
    <div class=" col-sm-6">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">{{item.title}}<small>  (Price: {{item.price}})</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control pull-left" v-model="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-primary pull-right" @click="buyOrder">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        data () {
            return {
                quantity: null
            }
        },
        methods: {
            buyOrder() {
                const order = {
                    quantity: this.quantity,
                    title: this.item.title,
                    price: this.item.price
                }
                this.$store.dispatch('buyStock',order)
                this.quantity = null

            }
        }
    }
</script>
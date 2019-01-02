<template>
    <div class="container">
        <div id="home">
            <h2>Trade or View your Portfolio</h2>
            <div>
                <p>You may Save & Load your data</p>
                <p>Click on 'End Day' to begin a new Day!</p>
            </div>
            <hr>
            <p>Your funds: {{funds | funds}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            funds(){
                return this.$store.getters.funds
            }
        }
    }
</script>

<style>
    #home{
        border: lightgray 1px;
    }
</style>
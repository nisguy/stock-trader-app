<template>
  <div id="app" class="container">
    <br>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a @click="endDay" style="cursor: pointer">End Day</a></li>
            <li class="dropdown" :class="{open: dropped}">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                 @click="dropped= !dropped">Save & Load<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Save Data</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Load Data</a></li>
              </ul>
            <li><a>Funds: {{funds | funds}}</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dropped: false
    }
  },
  methods: {
    endDay () {
      console.log('Day ended')
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>
    .slide-enter-active{
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active{
        animation: slide-out 200ms ease-out forwards;
    }
    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }@keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

</style>

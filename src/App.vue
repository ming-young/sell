<template>
  <div>
    <div class="v-header">
      i am header
    </div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
export default {
  name: 'App',
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
      display: flex
      width :100%
      line-height :40px
      .tab-item
        flex 1
        text-align :center
        & > a
          display block
          font-size 14px
          color :rgb(77,86,93)
          &.active
            color :rgb(240,20,20)
          /*text-decoration none*/
</style>

<template>
  <div>
    <div class="v-header">
      i am header
    </div>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
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
</style>

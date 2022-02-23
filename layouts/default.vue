<template>
  <div>
    <header>
      <!-- <NuxtLink to="/">
        Home
      </NuxtLink>
      <nuxt-link to="/articles">
        文章
      </nuxt-link>
      <nuxt-link to="/articles/list">
        文章列表
      </nuxt-link> -->
      <nav>HandsUP</nav>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    background-color:$primary;
    box-sizing: border-box;
    padding: 14px;
    color: #ffffff;
    nav{
      font-size: 36px;
    }
  }
</style>

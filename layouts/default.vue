<template>
  <div>
    <div class="header_container">
      <header class="header_box header_style">
        <div class="header_box_left_content">
          <img src="/hamburger.svg" alt="hamburger">
          <nav class="nav_title">
            HandsUP
          </nav>
        </div>
        <div class="header_box_right_conten">
          <img src="/logout.svg" alt="logout">
        </div>
      </header>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header_container{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .header_style {
    background-color:$primary;
    color: #ffffff;
    font-size: 36px;
  }
  .header_box {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 14px;
    max-height: 55px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    .header_box_left_content {
      gap: 0 12px;
      display: flex;
      align-items: center;
      flex-grow: 9;
    }
    .header_box_right_content {
      flex-grow: 1;
    }
  }
</style>

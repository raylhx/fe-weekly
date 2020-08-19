<template>
  <div class="index">
    <div class="header"></div>
    <div class="container">
      <div class="list-box">
        <ol>
          <li v-for="(item, index) in 10" :key="index" class="weekly-item">
            <a class="weekly-item-url" target="_blank" href="/detail/95">
              <img
                src="http://placekitten.com/240/180"
                data-src="http://120.27.243.12/static/images/9.png"
                alt="第95期封面图"
                class="weekly-item-cover lazy"
              />
              <h3 class="weekly-item-title">前端小报总第 95 期</h3>
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
  components: {
    // Logo,
  },
}
</script>

<style lang="scss">
.index {
  width: 100%;
  height: 100%;
  .list-box {
    padding: 0 5%;
    background-color: #f4f4f4;
    .weekly-item {
      display: inline-block;
      margin: 24px;
      padding: 16px;
      background: #fff;
      border-radius: 4px;
      transition: transform 0.2s linear;
      box-shadow: 0 2px 0 hsla(0, 0%, 67%, 0.1);
      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    }
    .weekly-item-url {
      display: block;
      text-decoration: none;
    }
    .weekly-item-cover {
      display: block;
      width: 240px;
      height: 180px;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
    .weekly-item-title {
      margin-top: 16px;
      font-size: 16px;
      font-family: Pacifico, cursive;
      color: #666;
      text-align: center;
    }
  }
}
</style>

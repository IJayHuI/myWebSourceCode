<template>
  <div class="rightBox">
    <h1>
      <img
        class="h1Icon"
        src="../../public/icons/navigates/desktopcomputer.svg" />计算机
    </h1>
    <div v-for="computer in computers">
      <h2>{{ computer.title }}</h2>
      <div class="messageBox">
        <a
          target="_blank"
          class="message"
          v-for="a in computer.website"
          :href="a.address">
          {{ a.name }}</a
        >
      </div>
    </div>
    <h3>本页内容会有增加删减，移动分类，不定期更新</h3>
    <h3>🔴: You need some magic to visit this web!</h3>
    <h3>这是一个关于计算机干货的网页</h3>
    <h3>^_^点击跳转按钮即可^_^</h3>
  </div>
</template>

<script setup>
import computers from "../../public/computer.json";
</script>

<style scoped>
@media screen and (max-width: 600px) {
  h2 {
    text-align: center;
  }
}
</style>

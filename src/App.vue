<template>
  <Background />
  <div class="box">
    <div class="top">
      <Left />
      <Right />
    </div>
    <Bottom />
  </div>
</template>

<script setup>
import Background from "./components/Background.vue";
import Left from "./views/Left.vue";
import Right from "./views/Right.vue";
import Bottom from "./views/Bottom.vue";
</script>

<style scoped></style>

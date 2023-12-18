<template>
  <div class="rightBox">
    <div class="heading">
      <img src="../../public/headingIcon.png" alt="头像" />
    </div>
    <div class="introduction">
      <p class="indexText">{{ currentText }}</p>
      <div class="refresh" @click="nextText">
        <img src="../../public/icons/index/next.svg" alt="下一个" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const texts = [
  "Hello",
  "你好",
  "I'm JayHu",
  "我是胡杰",
  "This is my website",
  "这是我的网站",
];

const currentIndex = ref(0);
const currentText = ref("");
let intervalId;

onMounted(() => startCarousel());
onUnmounted(() => clearInterval(intervalId));

const startCarousel = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    updateText();
  }, 200);
};

const updateText = () => {
  if (currentText.value.length < texts[currentIndex.value].length) {
    currentText.value = texts[currentIndex.value].substring(
      0,
      currentText.value.length + 1
    );
  } else {
    clearInterval(intervalId);
    setTimeout(() => {
      resetText();
    }, 1000);
  }
};

const resetText = () => {
  currentText.value = "";
  currentIndex.value = (currentIndex.value + 1) % texts.length;
  startCarousel();
};

const nextText = () => {
  clearInterval(intervalId);
  resetText();
};
</script>

<style scoped>
.rightBox {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
}

.heading,
.heading img,
.introduction {
  width: 50%;
}

.heading img {
  border-radius: 50%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.heading img:hover {
  transform: scale(1.1);
}

.heading img:active {
  transform: scale(1);
}

.introduction {
  margin-left: -10%;
  flex-direction: column;
}

.indexText {
  display: inline-block;
  height: 4.5vw;
  line-height: 4.5vw;
  padding: 20px;
  font-size: 50px;
  border-radius: 25px;
  margin-bottom: 5vh;
  overflow: hidden;
}

.refresh {
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  padding: 15px;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
}

@media screen and (max-width: 600px) {
  .rightBox {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .indexBox {
    width: 100vw;
    height: 88vh;
    flex-direction: column;
  }

  .heading {
    display: block;
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heading img {
    width: 75vw;
    border-radius: 50%;
    transition: 0.3s;
  }

  .introduction {
    width: 100%;
    margin-left: 0;
  }

  .refresh {
    width: 5vh;
    height: 5vh;
    padding: 15px;
  }

  .indexText {
    display: inline-block;
    position: relative;
    height: 4.5vh;
    line-height: 4.5vh;
    padding: 1vh;
    font-size: 4vh;
    border-radius: 1vh;
    overflow: hidden;
  }

  .heading img:active {
    box-shadow: 0 0 10px white;
    transform: scale(0.95);
  }
}
</style>

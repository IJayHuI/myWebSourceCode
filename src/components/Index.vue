<template>
    <div class="heading">
        <img src="../../public/heading.jpg" alt="头像" />
    </div>
    <div class="introduction">
        <p class="indexText">{{ currentText }}</p>
        <div class="message" @click="nextText"><img src="../../public/icons/index/next.svg" alt="下一个"></div>
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
.heading {
    display: none;
}

.introduction {
    height: 100%;
    flex-direction: column;
}

.indexText {
    display: inline-block;
    position: relative;
    height: 4.5vw;
    line-height: 4.5vw;
    padding: 1vw;
    font-size: 4vw;
    border-radius: 1vw;
    margin-bottom: 5vh;
    overflow: hidden;
}

.message {
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 50%;
    padding: 0.5vw;
    margin: 0;
}

img {
    user-select: none;
}

@media screen and (max-width: 600px) {
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
        height: 38vh;
    }

    .message {
        width: 5vh;
        height: 5vh;
        padding: 0.5vh;
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
        transform: scale(0.9);
    }
}
</style>

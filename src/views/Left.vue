<template>
    <div class="left">
        <div class="pcNav pcNavClose" ref="switchHover" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
            <span>
                <div class="navBtn navBtnClose">
                    <span class="icon"><img class="heading" src="../../public/heading.jpg" alt="头像"></span>
                    <p>Hello</p>
                </div>
            </span>
            <router-link v-for="navigate in navigates" :to="navigate.path">
                <div class="navBtn navBtnClose routerBtn">
                    <span class="icon">
                        <img :src=navigate.icon alt="图标">
                    </span>
                    <p>{{ navigate.name }}</p>
                </div>
            </router-link>
        </div>
        <div class="mobileNav mobileNavClose">
            <div class="navBtn" @click="switchBtnClick">导航栏</div>
            <div class="mobileNavContent mobileNavContentClose">
                <router-link v-for="navigate in navigates" :to="navigate.path">
                    <div class="navBtn routerBtn" @click="routerBtnClick">
                        <span class="icon">
                            <img :src=navigate.icon alt="图标">
                        </span>
                        <p>{{ navigate.name }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import navigates from "../../public/navigate.json";
import { ref, onMounted } from "vue";
const navBtn = ref(null), cntBtn = ref(0), cntRouterBtn = ref(0);
//GLOBAL
const pcNav = ref(null), switchStyle = ref(null), switchHover = ref(null);
//PC
const mobileNav = ref(null), mobileNavContent = ref(null);
//MOBILE
onMounted(() => {
    navBtn.value = document.querySelectorAll(".navBtn"); // 找所有的按钮
    cntBtn.value = document.querySelectorAll(".navBtn").length; // 统计所有按钮数量
    cntRouterBtn.value = document.querySelectorAll(".routerBtn").length; // 统计所有路由按钮数量
    pcNav.value = document.querySelector(".pcNav"); // 找PC导航栏
    switchStyle.value = document.querySelector(".back"); // 切换按钮样式
    mobileNavContent.value = document.querySelector(".mobileNavContent"); // MOBILE导航栏内容
    mobileNav.value = document.querySelector(".mobileNav"); // 找MOBILE导航栏
});

const handleMouseOver = () => {
    pcNav.value.classList.remove("pcNavClose");
    for (let i = 0; i < cntBtn.value; i++) {
        navBtn.value[i].classList.remove("navBtnClose");
    }
};

const handleMouseOut = () => {
    pcNav.value.classList.add("pcNavClose");
    for (let i = 0; i < cntBtn.value; i++) {
        navBtn.value[i].classList.add("navBtnClose");
    }
};
//PC
const switchBtnClick = () => {
    mobileNav.value.classList.toggle("mobileNavClose");
    mobileNavContent.value.classList.toggle("mobileNavContentClose");
}

const routerBtnClick = () => {
    mobileNav.value.classList.add("mobileNavClose");
    mobileNavContent.value.classList.add("mobileNavContentClose");
}
//MOBILE
</script>

<style scoped>
@media screen and (min-width: 601px) {
    .mobileNav {
        display: none;
    }

    .pcNav {
        width: 14vw;
        height: max-content;
        max-height: 93vh;
        margin: 1vw;
        flex-direction: column;
        justify-content: flex-start;
        overflow-x: hidden;
        overflow-y: scroll;
        border-radius: 1.5vw;
        z-index: 1;
        transition: width 0.3s, border-radius 0.3s, z-index 0.3s ease;
        ;
    }

    .pcNavClose {
        width: 6vw;
        z-index: 0;
    }

    .pcNav * {
        user-select: none;
        transition: 0.3s;
    }

    .navBtn {
        margin: 1vw 0;
        width: 12vw;
        height: 4vw;
        border-radius: 1vw;
        justify-content: flex-start;
    }

    .navBtnClose {
        width: 4vw;
        height: 4vw;
    }

    .icon {
        width: 4vw;
        height: 4vw;
        margin-right: 1vw;
        position: absolute;
    }

    img {
        width: 2vw;
    }

    .heading {
        width: 4vw;
        height: 4vw;
        border-radius: 1vw;
    }

    p {
        width: 7vw;
        margin-left: 5vw;
        position: absolute;
        font-size: 1vw;
    }
}

@media screen and (max-width: 600px) {
    .pcNav {
        display: none;
    }

    .mobileNav {
        width: 100vw;
        height: 50vh;
        margin-top: -45vh;
        overflow: hidden;
        z-index: 1;
        border-radius: 1.5vh;
        flex-direction: column-reverse;
        justify-content: flex-start;
    }

    .mobileNav,
    .mobileNav * {
        user-select: none;
        transition: 0.3s;
    }

    .mobileNavClose {
        width: 80vw;
        height: 5vh;
        margin-top: 0;
    }

    .mobileNavContent {
        height: 45vh;
        position: absolute;
        margin-bottom: 5vh;
        overflow: scroll;
        flex-wrap: wrap;
    }

    .navBtn {
        width: 80vw;
        height: 5vh;
    }

    .mobileNavContentClose {
        display: none;
    }

    .navBtn {
        width: 80vw;
        height: 5vh;
        border-radius: 1.5vh;
    }

    .icon {
        width: 4vh;
        height: 4vh;
    }

    p {
        text-align: right;
        margin-left: 5vw;
        width: 20vw;
    }
}
</style>
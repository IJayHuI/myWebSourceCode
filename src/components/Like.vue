<template>
    <div class="rightBox">
        <h1><img class="h1Icon" src="../../public/icons/navigates/heart.svg">喜欢</h1>
        <h2>歌手</h2>
        <div class="messageBox">
            <router-link class="message" v-for="l_geshou in like_geshou" :to="l_geshou.path"> {{
                l_geshou.name }}
            </router-link>
        </div>
        <h2>游戏</h2>
        <div class="messageBox">
            <a target="_blank" :href=l_youxi.link class="message" v-for="l_youxi in like_youxi">{{ l_youxi.name }}</a>
        </div>
        <h3>这是我平时常听的歌手以及我喜欢的游戏</h3>
    </div>
</template>

<script setup>
import like_geshou from "../../public/like/like_geshou.json"
import like_youxi from "../../public/like/like_youxi.json"
</script>

<style scoped></style>
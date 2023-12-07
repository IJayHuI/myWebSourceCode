<template>
    <div class="rightBox">
        <h1><img class="h1Icon" src="../../public/icons/navigates/desktopcomputer.svg">计算机</h1>
        <h2>计算2302平台</h2>
        <div class="messageBox">
            <a target="_blank" class="message" v-for="c_2302 in computer_2302" :href="c_2302.link"> {{ c_2302.name }}</a>
        </div>
        <h2>计算机</h2>
        <div class="messageBox">
            <a target="_blank" class="message" v-for="c_jisuanji in computer_jisuanji" :href="c_jisuanji.link"> {{
                c_jisuanji.name }}</a>
        </div>
        <h2>软件</h2>
        <div class="messageBox">
            <a target="_blank" class="message" v-for="c_ruanjian in computer_ruanjian" :href="c_ruanjian.link"> {{
                c_ruanjian.name }}</a>
        </div>
        <h2>编程</h2>
        <div class="messageBox">
            <a target="_blank" class="message" v-for="c_biancheng in computer_biancheng" :href="c_biancheng.link"> {{
                c_biancheng.name }}</a>
        </div>
        <h2>实用网页</h2>
        <div class="messageBox">
            <a target="_blank" class="message" v-for="c_shiyongweb in computer_shiyongweb" :href="c_shiyongweb.link"> {{
                c_shiyongweb.name }}</a>
        </div>
        <h3>本页内容会有增加删减，移动分类，不定期更新</h3>
        <h3>🔴: You need some magic to visit this web!</h3>
        <h3>这是一个关于计算机干货的网页</h3>
        <h3>^_^点击跳转按钮即可^_^</h3>
    </div>
</template>

<script setup>
import computer_2302 from "../../public/computer/computer_2302.json"
import computer_jisuanji from "../../public/computer/computer_jisuanji.json"
import computer_ruanjian from "../../public/computer/computer_ruanjian.json"
import computer_biancheng from "../../public/computer/computer_biancheng.json"
import computer_shiyongweb from "../../public/computer/computer_shiyongweb.json"
</script>

<style scoped></style>
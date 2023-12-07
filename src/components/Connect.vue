<template>
    <div class="rightBox">
        <h1><img class="h1Icon" src="../../public/icons/navigates/person.svg">联系我</h1>
        <h2>电话</h2>
        <h3 class="phone">电话就不外漏了哦</h3>
        <h2>邮箱</h2>
        <div class="messageBox">
            <a class="message" href="mailto:hujie20050609@icloud.com">hujie20050609@icloud.com</a>
            <a class="message" href="mailto:m13857676454@163.com">m13857676454@163.com</a>
            <a class="message" href="mailto:2949763264@qq.com">2949763264@qq.com</a>
        </div>
        <h2>其他</h2>
        <div class="messageBox">
            <a class="message_other" href="https://github.com/IJayHuI" target="_blank">
                <img class="connectIcon" src="../../public/icons/github.png" alt="Telegram">
            </a>
            <a class="message_other" href="https://t.me/Jay_Hu" target="_blank"><img class="connectIcon"
                    src="../../public/icons/telegram.png" alt="Telegram"></a>
            <a class="message_other" href="https://user.qzone.qq.com/2949763264" target="_blank"><img
                    src="../../public/icons/qq.png" class="connectIcon" alt="Github"></a>
            <a class="message_other" href="https://space.bilibili.com/474262477" target="_blank"><img
                    src="../../public/icons/bilibili.png" class="connectIcon" alt="Github"></a>
        </div>
        <h3>请勿通过上述联系方式作出恶意行为</h3>
    </div>
</template>

<script setup></script>

<style scoped>
h3 {
    color: red;
}

.phone {
    color: white;
}

.connectIcon {
    width: 2vw;
    height: 2vw;
}

.message_other {
    width: 2vw;
    padding: 1.5vw;
    border-radius: 1vw;
    font-size: 1.3vw;
    transition: 0.3s;
    margin: 0 10px 1.5vh;
}

@media screen and (max-width: 600px) {
    .connectIcon {
        width: 3.5vh;
        height: 3.5vh;
    }

    .message_other {
        width: 6vh;
        height: 6vh;
        border-radius: 1.5vh;
    }
}
</style>
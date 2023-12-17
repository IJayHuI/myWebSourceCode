<template>
    <div class="rightBox">
        <h1><img class="h1Icon" src="../../public/icons/navigates/info.svg">关于</h1>
        <h2>网页壁纸</h2>
        <div class="messageBox">
            <p>网页的壁纸是从 Bing 壁纸，实时获取</p>
            <a target="_blank" href="https://api.oneneko.com/v1/bing_today" class="message">点此查看壁纸的大图</a>
            <a target="_blank" href="https://www.todaybing.com/" class="message">点此查看壁纸在 Bing 壁纸上的简介</a>
        </div>
        <div class="messageBox">
            <p>感谢 oneNeko 大佬提供的 API</p>
            <a target="_blank" href="https://oneneko.com" class="message">点此去大佬的官网看看</a>
        </div>
        <h2>技术栈</h2>
        <div class="messageBox">
            <a target="_blank" href="https://cn.vuejs.org/" class="message">Vue</a>
            <a target="_blank" href="https://vitejs.cn/" class="message">Vite</a>
            <a target="_blank" href="https://developer.apple.com/sf-symbols/" class="message">SF Symbols</a>
        </div>
        <h2>这个网页的前世今生</h2>
        <div class="messageBox">
            <p>该网站刚开始发布时，域名最后是 newweb（新网站）。<br><br>现替代老网站，老网站的域名接下来更改为 oldweb（旧网站）。<br><br>此网站接替 myweb 的域名。</p>
            <a target="_blank" href="https://ijayhui.github.io/oldweb" class="message">点此去旧网站看看</a>
        </div>
        <h2>注意事项</h2>
        <div class="messageBox">
            <p>不要用 iOS 端的 Safari 打开。会有显示问题，这是个 Bug 。</p>
        </div>
    </div>
</template>
<style scoped>
.messageBox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1vw;
}

p {
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1vw;
    padding: 1vw;
    font-size: 1.3vw;
}

.message {
    min-width: max-content;
}

@media screen and (max-width: 600px) {
    .messageBox {
        flex-direction: column;
    }

    p {
        margin: 2vh 0 0 0;
        padding: 1vh;
        border-radius: 1.5vh;
        font-size: 2vh;
        width: 80vw;
        text-align: center;
    }
}
</style>
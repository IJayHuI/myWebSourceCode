<template>
    <div class="rightBox">
        <h1><img class="h1Icon" src="../../public/icons/navigates/logs.svg">日志</h1>
        <div class="logBox" v-for="log in Logs">
            <div class="date">{{ log.date }}</div>
            <div class="log">
                <div class="logContent" v-for="content in log.text">{{ content }}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Logs from "../../public/log.json";
</script>
<style scoped>
.logBox {
    border-radius: 1vw;
    width: 60vw;
    margin-bottom: 1vw;
    transition: 0.3s;
}

.date {
    width: 30%;
    font-weight: 600;
    font-size: 2vw;
}

.log {
    width: 70%;
    font-size: 1vw;
}

.logContent {
    margin: 1vw 0 1vw 0;
}

/* @media screen and (min-width: 601px) {
    .logBox:hover {
        transform: scale(1.04);
    }
} */

@media screen and (max-width: 600px) {
    .logBox {
        width: 90dvw;
        border-radius: 1.5vh;
        margin-bottom: 1vh;
        flex-direction: column;
    }

    .date {
        width: 100%;
        font-size: 3vh;
        margin: 1.5vh 0 1vh 0;
    }

    .log {
        width: 100%;
        text-align: center;
        margin-bottom: 1.4vh;
    }

    .logContent {
        margin: 0.5vh 0 0.5vh 0;
        font-size: 2vh;
    }
}
</style>
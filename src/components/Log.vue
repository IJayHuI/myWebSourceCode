<template>
  <div class="rightBox">
    <h1>
      <img class="h1Icon" src="../../public/icons/navigates/logs.svg" />日志
    </h1>
    <div class="messageBox">
      <div class="logBox" v-for="log in Logs">
        <div class="date">{{ log.date }}</div>
        <div class="log">
          <div class="logContent" v-for="content in log.text">
            {{ content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Logs from "../../public/log.json";
</script>
<style scoped>
.messageBox {
  grid-template-columns: repeat(auto-fill, minmax(500px, 2fr));
}

.logBox {
  border-radius: 15px;
  transition: 0.3s;
}

.date {
  width: 30%;
  font-weight: 600;
  font-size: 25px;
  padding: 5px;
  user-select: none;
  -webkit-user-select: none;
}

.log {
  width: 70%;
  padding: 5px;
}

.logContent {
  margin: 1vw 0;
}

@media screen and (max-width: 600px) {
  .messageBox {
    grid-template-columns: 1fr;
  }

  .logBox {
    width: 90vw;
    border-radius: 1.5vh;
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

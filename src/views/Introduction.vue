<template>
    <div class="Introduction">
        <img class="max_img" :src=max_img alt="歌手图片" width="100%" />
        <h1> {{ artist }} </h1>
        <div class="introductionTxt" v-html="introduction"></div>
        <div class="player">
            <img class="album" :src=album alt="专辑图片">
            <div class="player_right">
                <h2>{{ song_name }}</h2>
                <audio controls>
                    <source :src=song_address type="audio/mp3">
                </audio>
            </div>
        </div>
        <a :href=am_link target="_blank" class="to_am">
            <img src="../../public/icons/apple_music.png" alt="Apple Music">
            <p>去 Apple Music 上查看更多</p>
        </a>
    </div>
</template>
<script setup>
import like_geshou from "../../public/like/like_geshou.json";
const queryString = window.location.search.split('?')[1];
let max_img, artist, introduction, album, song_name, song_address, am_link;
for (let i = 0; i < like_geshou.length; i++) {
    if (queryString == like_geshou[i].key) {
        max_img = like_geshou[i].max_image;
        artist = like_geshou[i].name;
        introduction = like_geshou[i].introduction;
        album = like_geshou[i].album;
        song_name = like_geshou[i].song_name;
        song_address = like_geshou[i].song_address;
        am_link = like_geshou[i].am_link;
    }
}
</script>

<style>
.introductionTxt p {
    margin-bottom: 1vw;
    line-height: 1.9;
    font-size: 18px;
}

@media screen and (max-width: 600px) {
    .introduction p {
        margin-bottom: 1vh;
        font-size: 15px;
    }

    .introduction p:first-child {
        margin-top: 1vh;
    }
}
</style>
<style scoped>
.Introduction {
    width: 92vw;
    height: max-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2vh;
}


.max_img {
    width: 100%;
    border-radius: 0 0 25px 25px;
}

.introductionTxt {
    padding: 2vw 1vw 1vw 1vw;
    color: white;
    width: 80vw;
    flex-direction: column;
    border-radius: 15px;
    margin-top: 5vw;
}

.player {
    width: 60vw;
    border-radius: 15px;
    padding: 1vw;
    display: flex;
    margin-top: 2vw;
}

.player_right {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

h2 {
    margin: 0;
    font-size: 4vw;
}

.album {
    width: 20vw;
    border-radius: 15px;
}

.to_am {
    width: 30vw;
    height: 5vw;
    border-radius: 15px;
    font-size: 1.5vw;
    margin-top: 2vw;
    transition: 0.3s;
}

.to_am img {
    width: 4vw;
}

@media screen and (max-width: 600px) {
    .Introduction {
        width: 100vw;
        margin: 0;
    }

    .max_img {
        border-radius: 0 0 2vh 2vh;
    }

    .introduction {
        padding: 1vh;
        width: 90vw;
        font-size: 1.7vh;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 1vh;
        backdrop-filter: blur(5px);
        margin-top: 3vh;
    }

    .player {
        width: 80vw;
        border-radius: 1vh;
        padding: 1vh;
        align-items: center;
        flex-direction: column;
    }

    .album {
        width: 50vw;
        margin-bottom: 2vh;
        border-radius: 1vh;
    }

    h2 {
        margin-bottom: 2vh;
        font-size: 3vh;
    }

    .to_am {
        width: 60vw;
        height: 15vw;
        font-size: 1.5vh;
        border-radius: 1vh;
    }

    .to_am img {
        width: 4vh;
    }
}
</style>
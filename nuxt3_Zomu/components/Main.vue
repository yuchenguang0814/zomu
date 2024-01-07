<template>
    <main class="view">
		<div class="content">
			<header class="codrops-header">
				<video ref="videoPlayer" class="video-js" style="margin: auto auto" autoplay muted></video>
			</header>
		</div>
		<nav class="tabsnav tabsnav--vertical tabsnav--ander">
			<div class="tabsnav__item">
				<div class="tabsnav__bar"></div>
				<h3 class="tabsnav__title">Products</h3>
			</div>
			<div class="tabsnav__item">
				<div class="tabsnav__bar"></div>
				<h3 class="tabsnav__title">Who We Are</h3>
			</div>
			<div class="tabsnav__item tabs_cont">
				<div class="tabsnav__bar"></div>
				<h3 class="tabsnav__title">Contact Us</h3>
			</div>
		</nav>
		<div class="tabscontent">
			<Tabscontent01></Tabscontent01>
			<Tabscontent02></Tabscontent02>
			<Tabscontent03></Tabscontent03>
		</div>
	</main>
</template>
<script setup>
import Tabscontent01 from './tabscontent/Tabscontent01.vue'
import Tabscontent02 from './tabscontent/Tabscontent02.vue'
import Tabscontent03 from './tabscontent/Tabscontent03.vue'
import { onMounted, onUnmounted, ref } from "vue"
import videojs from "video.js"
import "video.js/dist/video-js.css"

const videoPlayer = ref(null)

const myPlayer = ref(null)

onMounted(() => {
  myPlayer.value = videojs(videoPlayer.value, {
    poster: "",
    controls: true,
    sources: [
      {
        src: "http://47.99.161.248:3800/images/pzx.mov",
        type: 'video/mp4',
      }
    ],
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }, () => {
    myPlayer.value.log("play.....")
  })
})

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
})


</script>
<style>
.video-js {
	position: relative;
	right: 1.5rem;
	height: 7.32rem;
	width: 13rem;
}
@media screen and (max-width:912px) {
	.video-js {
		width: 100%;
		right: 0;
		height: 4.29rem;
	}
 }
</style>
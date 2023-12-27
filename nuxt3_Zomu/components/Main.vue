<template>
    <main class="view">
		<div class="content">
			<header class="codrops-header">
				<video controls autoplay muted>
					<source src="/vid/pzx.mov">
				</video>
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
</script>

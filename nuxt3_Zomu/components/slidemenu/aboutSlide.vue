<template>
  <div class="o-nav">
				<div :class="`p2 ${props.content == '1' ? 'active': ''} `"><a href="/about" class="toc__item">about us</a></div>
				<!-- <div :class="`p2 ${props.content == '2' ? 'active': ''} `"><a href="/about/solutions" class="toc__item">Solutions</a></div> -->
				<div :class="`p2 book2${props.content == '3' ? 'active': ''} `"><a href="/about/service" class="toc__item">Service</a></div>
				<div :class="`p2 book2 book3${props.content == '4' ? 'active': ''} `"><a href="/about/privacy"  class="toc__item">Privacy Policy</a></div>
				<div class="p2 bookmark">
					<a href="/about/privacy"  class="toc__item">Privacy Policy</a>
				</div>
			</div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
</script>
<style>
.bookmark::before, .bookmark::after{
	display: none;
}
.bookmark a {
	background: url(/images/1.png) no-repeat;
	background-size: contain;
    height: 1rem;
    left: -2.8rem;
		line-height: 0.6rem;
}
.p2.book2::before{
	border-left-color:rgba(151, 41, 51);
	border-radius: 10px 10px 0 10px;
	/* box-shadow:none; */
	
}
.p2.book2 a{
	background: linear-gradient(90deg, rgba(151,41,51,0.8),#db4758);
	width: 2.9rem;
	left: -2.6rem;
	border-radius: 10px 10px 0 10px;
	height: 0.83rem;
	
}
.p2.book3::after {
	border: 0.3rem solid #db4758;
	border-right-color: transparent;
    border-bottom-color: transparent;
		border-radius: 50%;
		transform:rotate(135deg);
		top: 0.5rem;
    left: -0.31rem;
}
/* .p2.book2::after {
	border: none;
	width: 0.25rem;
	height: 0.4rem;
	background: red;
	border-radius: 50% / 100% 0% 0 0;
	transform: rotate(180deg);
	left: -0rem;
} */
</style>
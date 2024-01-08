<template>
	 <svg xmlns="http://www.w3.org/2000/svg" style="display: none" aria-hidden="true">
		<symbol id="ShapeSearch" viewBox="0 0 20.7 20.7"> <circle cx="8.2" cy="8.2" r="7.2"></circle> <line x1="13.3" y1="13.3" x2="20" y2="20"></line> </symbol>
	</svg>
  <nav id="Nav">
		<div class="nav_head">
			<div class="nav_head_inner container-wide">
				<a class="header_logo" href="/">
					<img src="/images/2fuben.png" alt="">
				</a>
				<button class="NavClose" @click="btnClose()">
					<div class="btn-close_bar"></div>
					<div class="btn-close_bar"></div>
				</button>
			</div>
		</div>
		<div class="nav_inner">
			<div class="nav_scroll container">
				<div class="nav_body">
					<div class="nav_body_left">
						<ul class="nav_list">
							<li :class="`nav_list_item ${props.content == 4 ? 'is-current': ''}`">
								<a href="/" class="nav_list_link">
									Home
								</a>
								<div class="nav_list_bar_block">
									<div class="nav_list_bar">
										<div class="nav_list_bar_inner"></div>
									</div>
								</div>
							</li>
							<li :class="`nav_list_item ${props.content == 5 ? 'is-current': ''}`">
								<a href="/about" class="nav_list_link">
									About
								</a>
								<div class="nav_list_bar_block">
									<div class="nav_list_bar">
										<div class="nav_list_bar_inner"></div>
									</div>
								</div>
							</li>
							<li :class="`nav_list_item ${props.content == 1 ? 'is-current': ''}`">
								<a href="/product/all" class="nav_list_link">
									Products
								</a>
								<div class="nav_list_bar_block">
									<div class="nav_list_bar">
										<div class="nav_list_bar_inner"></div>
									</div>
								</div>
							</li>

							<li :class="`nav_list_item ${props.content == 9 ? 'is-current': ''}`">
								<a href="/contact" class="nav_list_link">
									Contact
								</a>
								<div class="nav_list_bar_block">
									<div class="nav_list_bar">
										<div class="nav_list_bar_inner"></div>
									</div>
								</div>
							</li>

						</ul>
					</div>
					<div class="nav_body_right">
						<div class="nav_body_right_item">
							<!-- 搜索 -->
							<!-- <Search/> -->
							<!-- 发送留言 -->
							<Send />

						</div>
					</div>
				</div>
				<div class="nav_foot">
					<div class="nav_foot_left">
						<ul class="nav_list-social">
							<li class="nav_list-social_item">
								<a href="" class="nav_list-social_block">
									<div class="nav_list-social_icon_mask">
										<div class="nav_list-social_icon">
											<svg class="-fb" viewBox="0 0 14.9 29.6">
												<use href="#ShapeFb"></use>
											</svg>
										</div>
									</div>
								</a>
							</li>
							<li class="nav_list-social_item">
								<a href="" class="nav_list-social_block">
									<div class="nav_list-social_icon_mask">
										<div class="nav_list-social_icon">
											<svg class="-tw" viewBox="0 0 27.8 22.6">
												<use href="#ShapeTw"></use>
											</svg>
										</div>
									</div>
								</a>
							</li>
							<li class="nav_list-social_item">
								<a href="" class="nav_list-social_block">
									<div class="nav_list-social_icon_mask">
										<div class="nav_list-social_icon">
											<svg class="-pt" viewBox="0 0 24.8 30.6">
												<use href="#ShapePt"></use>
											</svg>
										</div>
									</div>
								</a>
							</li>
							<li class="nav_list-social_item">
								<a href="" class="nav_list-social_block">
									<div class="nav_list-social_icon_mask">
										<div class="nav_list-social_icon">
											<svg class="-insta" viewBox="0 0 30 30">
												<use href="#ShapeInsta"></use>
											</svg>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="nav_bg"></div>
	</nav>
</template>
<script setup>
import { defineProps } from "vue";
import Search from '../send/Search.vue'
import Send from '../send/Send.vue'
const btnClose = ()=> {
    $('#Nav').removeClass('active')
}
const props = defineProps({
  content:String
})
</script>
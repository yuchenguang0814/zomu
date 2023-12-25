<template>
  <button class="header_right_btn" @click="btnClick()">
						<span class="header_right_btn_bar">
							<span class="header_right_btn_bar_inner"></span>
						</span>
						<span class="header_right_btn_bar">
							<span class="header_right_btn_bar_inner"></span>
						</span>
						<span class="header_right_btn_bar">
							<span class="header_right_btn_bar_inner"></span>
						</span>
						<span class="header_right_btn_bar">
							<span class="header_right_btn_bar_inner"></span>
						</span>
						<span class="header_right_btn_bar">
							<span class="header_right_btn_bar_inner"></span>
						</span>
						<span class="header_right_btn_bar">
							<span class="header_right_btn_bar_inner"></span>
						</span>
					</button>
</template>
<script setup>
const btnClick = ()=> {
	$('#Nav').addClass('active')
}
</script>
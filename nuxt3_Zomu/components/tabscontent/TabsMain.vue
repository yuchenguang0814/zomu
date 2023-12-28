<template>
  <div class="poster__box">
							<div id="gallery" :class="`${props.content?'active': ''}`">
            <figure>
                <div>
                    <div>
											<div class="icon">
												<span style="background-image:url(./images/con_mes.png);"></span>
											</div>
                        <h2>Give Us A Call</h2>
                        <p><small>24 HOURS, 7 DAYS A WEEK</small></p>
                    </div>
                </div>
            </figure>
						<figure>
							<div>
									<div>
										<div class="icon">
											<span style="background-image:url(./images/con_e.png);"></span>
										</div>
											<h2>Email</h2>
											<p><small><a rel="nofollow" href="mailto:sales@zomukikai.com">sales@zomukikai.com</a></small></p>
									</div>
							</div>
					</figure>
					<figure>
						<div>
								<div>
									<div class="icon">
										<span style="background-image:url(./images/con_a.png);"></span>
									</div>
										<h2>ADD</h2>
										<p><small>No.28 Yantan Middle Road, Ruian, Zhejiang Province, China</small></p>
								</div>
						</div>
				</figure>
            <figure>
                <img src="/images/1.jpg">
                <figcaption><a rel="nofollow" href="tel:+ 86-13515776936">+ 86-13515776936</a></figcaption>
            </figure>
						<figure>
							<img src="/images/1.jpg">
							<figcaption><a rel="nofollow" href="tel:+ 86-13515776936">+ 86-13515776936</a></figcaption>
					</figure>
					 <figure>
                <img src="/images/1.jpg">
                <figcaption><a rel="nofollow" href="tel:+ 86-13515776936">+ 86-13515776936</a></figcaption>
            </figure>
						<figure>
							<img src="/images/1.jpg">
							<figcaption><a rel="nofollow" href="tel:+ 86-13515776936">+ 86-13515776936</a></figcaption>
					</figure>
        </div>
			</div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  content: Boolean
})
</script>
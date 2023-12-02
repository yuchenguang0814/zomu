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
			<div class="tabscontent__item tab_item_01">
				<figure class="poster">
					<img class="poster__img" src="/images/img1.jpg" alt="Poster 1" />
					<figcaption class="poster__caption">
						<h2 class="poster__title">Products</h2>
						<p class="poster__deco">Zomukikai is a leading manufacturer of specialized packaging solutions for the food, beauty, 
							and pharmaceutical industries.</p>
						<div class="poster__box">
							<ul class="in-pro-list">
								<li class="pro-hover">
									<a href="product_show.html">
										<img src="/images/pro.jpg" alt="产品名称">
										<span>Vertical Pillow Bag Packing Machine for Snack </span>
									</a>
								</li>
								<li>
									
									<a href="product_show.html"> 
										<img src="/images/pro.jpg" alt="产品名称">
										<span>Vertical Pillow Bag Packing Machine for Snack </span>
									</a>
								</li>
								<li>
									
									<a href="product_show.html">
										<img src="/images/pro.jpg" alt="产品名称">
										<span>Vertical Pillow Bag Packing Machine for Snack </span>
									</a>
								</li>
								<li>
									
									<a href="product_show.html">
										<img src="/images/pro.jpg" alt="产品名称">
										<span>Vertical Pillow Bag Packing Machine for Snack </span>
									</a>
								</li>
							</ul>
						</div>
						<!-- <span class="poster__number">02</span> -->
					</figcaption>
				</figure>
			</div>
			<div class="tabscontent__item tab_item_02">
				<figure class="poster">
					<img class="poster__img" src="/images/img1.jpg" alt="Poster 1" />
					<figcaption class="poster__caption">
						<h2 class="poster__title">who we are</h2>
						<p class="poster__deco">Zomukikai is a leading manufacturer of specialized packaging solutions for the food, beauty, and pharmaceutical industries. With a wealth of experience in the packaging industry, the company is dedicated to providing customers with a comprehensive range of high-quality packaging machines.</p>
						<button class="tab_item_btn"><a href="about.html">MORE</a></button>
						<div class="poster__box">
							<img src="/images/in-about.jpg" alt="" class="tab_item_02_img">
						</div>
						
					</figcaption>
				</figure>
			</div>
			<div class="tabscontent__item light">
				<figure class="poster">
					<img class="poster__img" src="/images/img3.jpg" alt="Poster 1" />
					<figcaption class="poster__caption">
						<h2 class="poster__title">contact us</h2>
						<p class="poster__deco">Great！ you are finally hear！ let’s talk business. </p>
						<div class="poster__box">
							<div id="gallery">
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
					</figcaption>
				</figure>
			</div>
			
		</div>
	</main>
</template>
<script>
export default {
	created(){
    if (process.browser) { 
     	
	var tnav = new TabsNav(document.querySelector('nav.tabsnav'), {
			movable: 'all',
			extramovable: '.content',
			layout: 'vertical',
			animeduration: 700,
			animeeasing: 'easeInOutCubic',
			animedelay: 100,
			onOpenBarsUpdate: openTabCallback,
			onOpenTab: function () {
				// Show the back button after the tab is open.
				anime({
					targets: backCtrl,
					duration: 800,
					easing: 'easeOutExpo',
					scale: [0, 1],
					opacity: {
						value: 1,
						duration: 300,
						easing: 'linear'
					}
				});
			}
		}),

		// The content items and the back control.
		contentItems = [].slice.call(document.querySelectorAll('.tabscontent > .tabscontent__item')),
		backCtrl = document.querySelector('button.btn--back'),
		// menu ctrl for smaller screens (the tabs are not initially shown and toggling this button will show/hide the tabs)
		menuCtrl = document.querySelector('button.btn--menu'),
		isContentShown = false,
		current;

	function openTabCallback(anim, idx, tab) {
		if (anim.progress > 60 && !isContentShown) {
			isContentShown = true;
			current = idx;

			var contentItem = contentItems[idx],
				content = {
					// img: contentItem.querySelector('img.poster__img'),
					title: contentItem.querySelector('.poster__title'),
					deco: contentItem.querySelector('.poster__deco'),
					box: contentItem.querySelector('.poster__box'),
					// number: contentItem.querySelector('.poster__number')
				};

			// Hide the content elements.
			content.title.style.opacity = content.box.style.opacity = content.deco.style.opacity = 0;
			// Show content item.
			contentItem.style.opacity = 1;
			contentItem.classList.add('tabscontent__item--current');

			// Animate content elements in.
			anime.remove([content.title, content.box, content.deco]);
			anime({
				targets: [content.title, content.box, content.deco],
				easing: 'easeOutExpo',
				duration: function (t, i) {
					return 600 + i * 100;
				},
				scaleX: function (t, i) {
					return i === 0 ? [0, 1] : 1;
				},
				translateX: function (t, i) {
					return [-80 - i * 150, 0];
				},
				rotate: function (t, i) {
					return i === 2 ? [-40, 0] : 0;
				},
				opacity: {
					value: 1,
					duration: 300,
					easing: 'linear'
				}
			});
		}
	}

	backCtrl.addEventListener('click', closeTabs);

	function closeTabs() {
		if (!tnav.isOpen) return;

		var contentItem = contentItems[current],
			content = {
				// img: contentItem.querySelector('img.poster__img'),
				title: contentItem.querySelector('.poster__title'),
				deco: contentItem.querySelector('.poster__deco'),
				box: contentItem.querySelector('.poster__box'),
				// number: contentItem.querySelector('.poster__number')
			};

		// Hide the content elements.
		anime.remove([content.title, content.box, content.deco]);
		// Animate content elements out.
		anime({
			targets: [content.box, content.title, content.deco],
			easing: 'easeInOutCubic',
			duration: function (t, i) {
				return 600 + i * 100;
			},
			delay: function (t, i, c) {
				return (c - i - 1) * 35;
			},
			translateX: function (t, i) {
				return [0, -200 - i * 150];
			},
			rotate: function (t, i) {
				return i === 2 ? [0, -40] : 0;
			},
			opacity: {
				value: 0,
				duration: 450
			},
			update: function (anim) {
				if (anim.progress > 20 && isContentShown) {
					isContentShown = false;
					// Close tab.
					tnav.close();
				}
			},
			complete: function () {
				// Hide content item.
				contentItem.style.opacity = 0;
				contentItem.classList.remove('tabscontent__item--current');
			}
		});

		// Hide back ctrl
		anime.remove(backCtrl);
		anime({
			targets: backCtrl,
			duration: 800,
			easing: 'easeOutExpo',
			scale: [1, 0],
			opacity: {
				value: 0,
				duration: 200,
				easing: 'linear'
			}
		});
	}

	// .addEventListener('click', toggleTabs);

	function toggleTabs() {
		var state = tnav.toggleVisibility();
		if (state === 0) {
			menuCtrl.classList.remove('btn--menu-active');
		} else if (state === 1) {
			menuCtrl.classList.add('btn--menu-active');
		}
	}
	$('.tabsnav__item').hover(function(){
		$(this).addClass('hover')
	},function(){
		$(this).removeClass('hover')
	}
	)

	window.onload = () => {
	const obj = document.querySelector("#gallery");
	const time = 10000;

	function animStart() {
			if (obj.classList.contains("active") == false) {
					obj.classList.add("active");
					setTimeout(() => {
							animEnd();
					}, time);
			}
	}

	function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
	}
	document.addEventListener("scroll", function() {
			// scroll or scrollend
			animStart();
	});
	window.addEventListener("resize", animStart);
	animStart();
	$('.tabs_cont').click(function(){
		animStart();
	})
};
    }
  }
}
 
</script>
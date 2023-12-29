<template>
  <main class="view about">
		<div class="v-content">
			<img src="/images/img1.jpg" alt="" class="o-view-img">
      <AboutSlide :content="1" />
			<div class='pages'>
				<input id='one' name='trigger' type='radio'>
				<input id='two' name='trigger' type='radio'>
				<input id='three' name='trigger' type='radio'>
				<input id='four' name='trigger' type='radio'>
				<div class='pages_page'>
					<div class='pages_page__inner'>
						<div class="logo">zomukikai</div>
						<div class='pagenumber'>1 2</div>
						<div class='content'>
							<div class='content_center'>
								<h4>ZOMUKIKAI</h4>
							</div>
						</div>
					</div>
				</div>
				<div class='pages_page'>
					<div class='pages_page__inner'>
					
						<div class='content'>
							<div class='content_center right'>
								<h4>ZOMUKIKAI</h4>
							</div>
							<div class='content_quote'>
								<p>Zomukikai is a leading manufacturer of specialized packaging solutions for the food, beauty, and pharmaceutical industries. With a wealth of experience in the packaging industry, the company is dedicated to providing customers with a comprehensive range of high-quality packaging machines.
								</p>
								<p>Zomukikai's product portfolio includes a range of state-of-the-art vial filling, stoppering, and capping machines, pouch packaging machines, carton packaging machines, and case packers, to meet the diverse needs of its customers. The company is continuously striving to develop innovative solutions and new products to meet the ever-evolving needs of its customers.</p>
							</div>
							<div class='overlay'></div>
						</div>
						<div class='control next'>
							<label for='two'></label>
						</div>
					</div>
				</div>
				<div class='pages_page'>
					<div class='pages_page__inner'>
						<div class="logo">zomukikai</div>
						
						<div class='pagenumber'>2 3</div>
						<div class='control'>
							<label for='one'></label>
						</div>
						<div class='content'>
							
							<h1>
								BUYING YOUR FIRST MACHINE?
							</h1>
						</div>
					</div>
				</div>
				<div class='pages_page'>
					<div class='pages_page__inner'>
						
						<div class='hamburger'>
							<div class='hamburger_part'></div>
							<div class='hamburger_part'></div>
							<div class='hamburger_part'></div>
						</div>
						<div class='control next'>
							<label for='three'></label>
						</div>
						<div class='bg'></div>
						<div class='footer'>
							<i class="fab fa-google-plus-g"></i>
							<i class="fas fa-retweet"></i>
							<i class="far fa-heart"></i>
							<i class="far fa-share-square"></i>
						</div>
						<div class='content'>
							<div class='content_quote'>
								<p>Choose us to access expert guidance designed for first-time buyers,
									anderstand various types of packaging machines,and make informed
									decisions to achieve packaging automation success in your business!</p>
							</div>
							
						
						</div>
					</div>
				</div>
				<div class='pages_page'>
					<div class='pages_page__inner'>
						<div class="logo">zomukikai</div>
						<div class='pagenumber'>4 5</div>
						<div class='content'>
							<h2>Automatic Capsule Counting and Bottling Line </h2>
							<span>· Bottling range 15-300ml</span>
							<span>· Up to 120 bottles/min</span>
						</div>
						<div class='control'>
							<label for='two'></label>
						</div>
					</div>
				</div>
				<div class='pages_page'>
					<div class='pages_page__inner'>
						
	
						<div class='hamburger'>
							<div class='hamburger_part'></div>
							<div class='hamburger_part'></div>
							<div class='hamburger_part'></div>
						</div>
						<div class='control next'>
							<label for='four'></label>
						</div>
						<div class='bg'></div>
						<div class='content_centerimage'>
							<img src='images/about-05.jpg'>
						</div>
						<div class='content'>
								<h2>Automatic Capsule Counting and Bottling Line </h2>
								<span>· Bottling range 15-300ml</span>
								<span>· Up to 120 bottles/min</span>
						</div>
						<div class='footer'>
							<i class="fab fa-google-plus-g"></i>
							<i class="fas fa-retweet"></i>
							<i class="far fa-heart"></i>
							<i class="far fa-share-square"></i>
						</div>
					</div>
				</div>
				<div class="pages_page">
					<div class="pages_page__inner">
					  <div class="logo">zomukikai</div>
					  <div class="pagenumber">6 7</div>
					  <div class="content">
						<div class="content_section">
						  <h2>YOUR TRUSTED DOYPACK PACKAGING MACHINES MANUFACTURER.</h2>
						  <p>In its pursuit of excellence, Zomukikai has invested in a range of advanced equipment, including lathes, milling machines, bench drilling machines, wire cutting machines, and CNC machines. This investment has enabled the company to enhance its manufacturing capabilities and maintain strict quality control during every stage of the production process, from material sourcing to final testing and packing.

							Zomukikai warmly welcomes customers from both at home and abroad to establish cooperation and build a bright future together. The company is open to OEM and ODM orders, and its experienced customer service team is always available to assist with any sourcing requirements. Whether you are looking for a standard product from Zomukikai's catalog, or seeking engineering assistance for your specific application, the company is committed to providing you with the best possible solution.</p>
						</div>
				
					  </div>
					  <div class="control">
						<label for="three"></label>
					  </div>
					</div>
				  </div>
				  <div class="pages_page">
					<div class="pages_page__inner">
					  <div class="hamburger">
						<div class="hamburger_part"></div>
						<div class="hamburger_part"></div>
						<div class="hamburger_part"></div>
					  </div>
					  <div class="bg"></div>
					  <div class="content"></div>
					  <div class="footer">
						<i class="fab fa-google-plus-g"></i>
						<i class="fas fa-retweet"></i>
						<i class="far fa-heart"></i>
						<i class="far fa-share-square"></i>
					  </div>
					</div>
				  </div>
			</div>
		</div>
	</main>
</template>
<script setup>
import AboutSlide from './slidemenu/aboutSlide'
</script>

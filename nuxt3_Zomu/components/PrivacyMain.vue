<template>
  <main class="view">
		<div class="v-content">
			<img src="/images/img1.jpg" alt="" class="o-view-img">
      <AboutSlide :content="4" />
      <div class='content pages privacy'>
				<div class=" sitewidget-content"> <div class="sitewidget-hd"> <h2>PRIVACY POLICY</h2> </div>
                 <div class="sitewidget-bd fix hasOverflowX "> 
                    This Privacy Policy explains how "we" collect, use, share and process your information as well as the rights and choices you have associated with that information. This privacy policy applies to all personal information collected during any written, electronic and oral communication, or personal information collected online or offline, including: our website, and any other email.
                    <br>
                    <br>
                    Please read our Terms and Conditions and this Policy before accessing or using our Services. If you cannot agree with this Policy or the Terms and Conditions, please do not access or use our Services. If you are located in a jurisdiction outside the European Economic Area, by purchasing our products or using our services, you accept the terms and conditions and our privacy practices as described in this policy.
                    <br>
                    <br>
                    We may modify this Policy at any time, without prior notice, and changes may apply to any Personal Information we already hold about you, as well as any new Personal Information collected after the Policy is modified. If we make changes, we will notify you by revising the date at the top of this Policy. We will provide you with advanced notice if we make any material changes to how we collect, use or disclose your Personal Information that impact your rights under this Policy. If you are located in a jurisdiction other than the European Economic Area, the United Kingdom or Switzerland (collectively "European Countries"), your continued access or use of our Services after receiving the notice of changes, constitutes your acknowledgement that you accept the updated Policy.
                    <br>
                    <br>
                    In addition, we may provide you with real time disclosures or additional information about the Personal Information handling practices of specific parts of our Services. Such notices may supplement this Policy or provide you with additional choices about how we process your Personal Information. 
                </div>
			</div>
    </div>
		</div>
	</main>
</template>
<script setup>
import AboutSlide from './slidemenu/aboutSlide'
</script>

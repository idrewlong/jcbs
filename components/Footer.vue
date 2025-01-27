<template>
	<footer class="relative bg-blueGray-200 pt-8 pb-6">
		<div class="md:container mx-auto px-4">
			<div class="flex flex-wrap text-left lg:text-left">
				<div class="w-full lg:w-6/12 px-4">
					<h4 class="md:text-3xl text-2xl font-semibold text-gray-700">
						Let's keep in touch!
					</h4>
					<h5 class="md:text-lg text-base mt-0 mb-2 text-blueGray-600">
						Follow us on social media for career tips and industry insights!
					</h5>
					<div class="mt-6 lg:mb-0 mb-6">
						<a
							href="https://www.linkedin.com/"
							class="items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
							aria-label="Follow us on LinkedIn"
						>
							<Icon
								name="mdi:linkedin"
								class="duration-500 hover:text-royalblue ease-in-out"
								size="24px"
							/>
						</a>
						<a
							href="https://twitter.com/"
							class="items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
							aria-label="Follow us on Twitter"
						>
							<Icon
								name="hugeicons:new-twitter"
								class="duration-500 hover:text-royalblue ease-in-out"
								size="24px"
							/>
						</a>
						<a
							href="https://instagram.com/"
							class="items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
							aria-label="Follow us on Instagram"
						>
							<Icon
								name="hugeicons:instagram"
								class="duration-500 hover:text-royalblue ease-in-out"
								size="24px"
							/>
						</a>
					</div>
				</div>
				<div class="w-full lg:w-6/12 px-4">
					<div class="flex flex-wrap items-top mb-6">
						<div class="w-1/2 lg:w-4/12 px-4 ml-auto">
							<NuxtLink
								to="/services"
								class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 hover:text-blueGray-800"
								>Services</NuxtLink
							>
							<ul class="list-unstyled">
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/services/linkedin-optimization"
										>LinkedIn Optimization</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/services/resume-writing"
										>Resume Writing</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/services/interview-coaching"
										>Interview Coaching</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/services/job-search"
										>Job Search Assistance</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/services/al-carte"
										>Al Carte Services</NuxtLink
									>
								</li>
							</ul>
						</div>
						<div class="w-1/2 lg:w-4/12 px-4">
							<span
								class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 sm:pt-0"
								>Quick Links</span
							>
							<ul class="list-unstyled">
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/about"
										>About</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/packages"
										>Packages</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/blog"
										>Blog</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/contact"
										>Contact</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/privacypolicy"
										>Privacy Policy</NuxtLink
									>
								</li>
								<li>
									<NuxtLink
										class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
										to="/termsofuse"
										>Terms of Use</NuxtLink
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<hr class="my-6 border-gray-400" />
			<div
				class="flex flex-wrap items-center md:justify-between justify-center"
			>
				<div class="w-full md:w-4/12 px-4 mx-auto text-center">
					<div class="text-sm font-semibold py-1">
						<p>
							© {{ new Date().getFullYear() }} ProLink Resume. All rights
							reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

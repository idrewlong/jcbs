<template>
	<footer class="bg-[#2A2A2A] py-8 lg:py-6">
		<div class="container mx-auto px-4">
			<div
				class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0"
			>
				<!-- Logo/Tagline -->
				<div class="text-white text-xl font-bold">
					BUILDING STRONGER, <span class="text-yellow-400">TOGETHER.</span>
				</div>

				<!-- Navigation -->
				<nav
					class="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8"
				>
					<NuxtLink
						to="/about"
						class="text-white hover:text-yellow-400 transition-colors"
						>ABOUT US</NuxtLink
					>
					<NuxtLink
						to="/culture"
						class="text-white hover:text-yellow-400 transition-colors"
						>OUR CULTURE</NuxtLink
					>
					<NuxtLink
						to="/markets"
						class="text-white hover:text-yellow-400 transition-colors"
						>MARKETS</NuxtLink
					>
					<NuxtLink
						to="/regions"
						class="text-white hover:text-yellow-400 transition-colors"
						>REGIONS</NuxtLink
					>
					<NuxtLink
						to="/careers"
						class="text-white hover:text-yellow-400 transition-colors"
						>CAREERS</NuxtLink
					>
				</nav>

				<!-- Social Icons -->
				<div class="flex items-center space-x-6">
					<a
						href="#"
						class="text-white hover:text-yellow-400 transition-colors"
						aria-label="Twitter"
					>
						<Icon name="mdi:twitter" class="w-6 h-6" />
					</a>
					<a
						href="#"
						class="text-white hover:text-yellow-400 transition-colors"
						aria-label="LinkedIn"
					>
						<Icon name="mdi:linkedin" class="w-6 h-6" />
					</a>
					<a
						href="#"
						class="text-white hover:text-yellow-400 transition-colors"
						aria-label="Facebook"
					>
						<Icon name="mdi:facebook" class="w-6 h-6" />
					</a>
					<a
						href="#"
						class="text-white hover:text-yellow-400 transition-colors"
						aria-label="YouTube"
					>
						<Icon name="mdi:youtube" class="w-6 h-6" />
					</a>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div class="mt-8 pt-6 border-t border-gray-700">
				<div
					class="flex flex-col lg:flex-row lg:items-center text-gray-400 text-sm space-y-4 lg:space-y-0"
				>
					<span>© COPYRIGHT 2025 PC CONSTRUCTION</span>
					<span class="hidden lg:block mx-4">|</span>
					<div class="flex items-center space-x-4">
						<NuxtLink to="/privacy" class="hover:text-white transition-colors"
							>PRIVACY POLICY</NuxtLink
						>
						<NuxtLink to="/terms" class="hover:text-white transition-colors"
							>TERMS OF USE</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

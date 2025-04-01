<template>
	<section
		class="section relative flex items-center overflow-hidden h-[700px] md:h-[900px]"
	>
		<!-- Background Image -->
		<div class="absolute inset-0">
			<img
				src="/images/hero.jpg"
				alt="Construction site"
				class="w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/50"></div>
		</div>

		<!-- Content -->
		<div class="relative z-10 container mx-auto px-4">
			<div class="max-w-2xl">
				<h1 class="text-5xl md:text-7xl font-bold text-white">
					BUILDING STRONGER,
					<div class="relative inline-block mt-2">
						<div class="absolute inset-0 bg-yellow-400 transform -skew-x-12">
							<div
								class="absolute inset-0"
								style="
									background: repeating-linear-gradient(
										45deg,
										transparent,
										transparent 10px,
										rgba(0, 0, 0, 0.1) 10px,
										rgba(0, 0, 0, 0.1) 20px
									);
								"
							></div>
						</div>
						<span class="relative block text-black px-4">TOGETHER</span>
					</div>
				</h1>
				<div class="mt-8 flex items-center gap-2 group cursor-pointer">
					<span class="text-white text-lg uppercase">Join Our Team</span>
					<div class="w-8 h-8 flex items-center justify-center">
						<Icon
							name="heroicons:arrow-right"
							class="w-6 h-6 text-yellow-400 transform group-hover:translate-x-1 transition-transform"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
			<Icon
				name="heroicons:chevron-down"
				class="w-8 h-8 text-white animate-bounce"
			/>
		</div>
	</section>
</template>

<style scoped>
.group:hover span {
	color: #fcd34d; /* yellow-400 */
}
</style>

<template>
	<section class="section relative h-[300px] lg:h-[400px] overflow-hidden">
		<!-- Background Image -->
		<div class="absolute inset-0">
			<!-- <img
				src="/images/hero.jpg"
				alt="Construction site worker"
				class="w-full h-full object-cover"
			/> -->
		</div>

		<!-- Content -->
		<div class="relative h-full flex items-center">
			<div class="container mx-auto px-6 lg:px-8">
				<div class="relative max-w-xl lg:max-w-2xl">
					<!-- Dark Background with Diagonal Stripes -->
					<div
						class="absolute -inset-6 lg:-inset-8 bg-black/80"
						style="
							background-image: repeating-linear-gradient(
								45deg,
								transparent,
								transparent 10px,
								rgba(0, 0, 0, 0.2) 10px,
								rgba(0, 0, 0, 0.2) 20px
							);
						"
					></div>

					<!-- Text Content -->
					<div class="relative z-10 p-6 lg:p-8">
						<h2
							class="text-4xl lg:text-5xl font-bold text-yellow-400 leading-tight mb-8"
						>
							BUILD A CAREER WITH<br />
							PC CONSTRUCTION
						</h2>
						<NuxtLink
							to="/careers"
							class="inline-flex items-center bg-yellow-400 text-black px-8 py-3 font-bold text-lg hover:bg-yellow-500 transition-colors"
						>
							VIEW CAREERS
							<Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>

		<!-- Yellow Bottom Border -->
		<div class="absolute bottom-0 left-0 right-0 h-4 bg-yellow-400"></div>
	</section>
</template>

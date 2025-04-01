<template>
	<section class="section grid grid-cols-1 lg:grid-cols-2">
		<!-- Image Section -->
		<div class="relative order-2 lg:order-1 h-[300px] lg:h-[600px]">
			<img
				src="/images/hero.jpg"
				alt="Construction team reviewing site plans"
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Content Section -->
		<div class="order-1 lg:order-2 bg-yellow-400 px-6 lg:px-12 py-12 lg:py-16">
			<div class="max-w-xl">
				<h3 class="text-base font-bold mb-2">OUR EXPERTISE</h3>
				<h2 class="text-3xl lg:text-4xl font-bold leading-tight mb-6">
					DIVERSE MARKETS MAKE EVERY DAY NEW AND EXCITING
				</h2>

				<p class="text-lg mb-10 leading-relaxed">
					From high-altitude remote resorts and urban environments to the heart
					of college campuses and operating treatment plants, our services are
					tailored to meet your needs and deliver results you can count on.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
					<a href="#" class="group">
						<h3 class="text-lg font-bold hover:underline">COMMERCIAL</h3>
					</a>
					<a href="#" class="group">
						<h3 class="text-lg font-bold hover:underline">
							HOSPITALITY / RESORT
						</h3>
					</a>
					<a href="#" class="group">
						<h3 class="text-lg font-bold hover:underline">
							EDUCATION / CAMPUS
						</h3>
					</a>
					<a href="#" class="group">
						<h3 class="text-lg font-bold hover:underline">
							MANUFACTURING / INDUSTRIAL
						</h3>
					</a>
					<a href="#" class="group">
						<h3 class="text-lg font-bold hover:underline">
							HEALTH CARE / LIFE SCIENCES
						</h3>
					</a>
					<a href="#" class="group">
						<h3 class="text-lg font-bold hover:underline">
							WATER / WASTEWATER
						</h3>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
// No longer need the markets array since we're using a simpler link-based layout
</script>

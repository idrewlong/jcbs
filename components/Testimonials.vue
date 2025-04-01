<template>
	<section class="section grid grid-cols-1 lg:grid-cols-2">
		<!-- Image Section -->
		<div class="relative h-[400px] lg:h-[600px]">
			<img
				:src="testimonials[currentIndex].image"
				:alt="testimonials[currentIndex].alt"
				class="w-full h-full object-cover"
			/>
		</div>

		<!-- Content Section -->
		<div
			class="bg-[#2A2A2A] relative flex items-start px-8 lg:px-16 py-16 lg:py-24"
		>
			<div class="w-full">
				<!-- Slider Content -->
				<div class="relative min-h-[400px]">
					<TransitionGroup name="fade" tag="div" class="relative">
						<div
							v-for="(testimonial, index) in testimonials"
							:key="index"
							v-show="currentIndex === index"
							class="absolute top-0 left-0 w-full"
						>
							<h2
								class="text-7xl lg:text-9xl font-bold text-yellow-400 mb-8 font-['JetBrains_Mono'] tracking-tighter"
							>
								{{ testimonial.percentage }}
							</h2>
							<p
								class="text-[#999999] text-xl lg:text-2xl leading-relaxed font-['JetBrains_Mono'] tracking-tight max-w-2xl"
							>
								{{ testimonial.text }}
							</p>
						</div>
					</TransitionGroup>

					<!-- Navigation -->
					<div
						class="absolute bottom-0 left-0 right-0 flex items-center space-x-6"
					>
						<!-- Progress Bar -->
						<div class="flex-grow h-[2px] bg-gray-700">
							<div
								class="h-full bg-yellow-400 transition-all duration-700 ease-in-out"
								:style="{
									width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
								}"
							></div>
						</div>

						<!-- Dots -->
						<div class="flex items-center space-x-2">
							<button
								v-for="(_, index) in testimonials"
								:key="index"
								@click="currentIndex = index"
								class="w-2 h-2 rounded-full transition-colors duration-300"
								:class="
									currentIndex === index ? 'bg-yellow-400' : 'bg-gray-600'
								"
								:aria-label="`Go to slide ${index + 1}`"
							></button>
						</div>

						<!-- Navigation Arrow -->
						<button
							@click="nextSlide"
							class="text-white hover:text-yellow-400 transition-colors duration-300 ml-2"
							aria-label="Next slide"
						>
							<Icon name="heroicons:chevron-right" class="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const testimonials = [
	{
		percentage: '100%',
		text: "We are 100% employee owned. That means we all have a vested stake in the outcome of projects and the company's future. Building Stronger, Together.",
		image: '/images/hero.jpg',
		alt: 'PC Construction employee at work site',
	},
	{
		percentage: '95%',
		text: 'Client satisfaction rate across all our projects. We pride ourselves on delivering exceptional results and building lasting relationships.',
		image: '/images/hero.jpg',
		alt: 'Construction project completion',
	},
	{
		percentage: '50+',
		text: 'Years of experience in delivering complex construction projects across diverse markets and challenging environments.',
		image: '/images/hero.jpg',
		alt: 'Historic project showcase',
	},
	{
		percentage: '1000+',
		text: 'Successful projects completed, each one a testament to our commitment to quality, safety, and innovation.',
		image: '/images/hero.jpg',
		alt: 'Team collaboration on site',
	},
];

const currentIndex = ref(0);
let autoplayInterval;

const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

// Autoplay functionality
onMounted(() => {
	autoplayInterval = setInterval(nextSlide, 7000);
});

onBeforeUnmount(() => {
	clearInterval(autoplayInterval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

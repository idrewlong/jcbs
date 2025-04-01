<template>
	<section class="section bg-gray-50 py-16 lg:py-36">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-bold text-gray-900 mb-12">
				TAKE A LOOK AT SOME
				<br />
				<span class="text-yellow-500">PROJECTS THAT SHAPE WHO WE ARE</span>
			</h2>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="group relative overflow-hidden rounded-lg cursor-pointer"
				>
					<img
						:src="project.image"
						:alt="project.title"
						class="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"
					/>
					<div
						class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 transition-transform group-hover:translate-y-0"
					>
						<h3 class="text-2xl font-bold text-white mb-2">
							{{ project.title }}
						</h3>
						<p class="text-white/80">{{ project.location }}</p>
						<p
							class="text-yellow-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
						>
							Learn More →
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const projects = [
	{
		title: 'NEW MANUFACTURING AND ASSEMBLY FACILITY',
		location: 'SOUTH CAROLINA',
		image: '/images/hero.jpg',
	},
	{
		title: 'MAINE RENEWABLE ENERGY PROJECT',
		location: 'MAINE, USA',
		image: '/images/hero.jpg',
	},
];
</script>

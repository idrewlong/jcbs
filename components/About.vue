<template>
	<section class="section bg-white py-16 lg:py-36">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
				<div class="max-w-xl">
					<h2 class="text-4xl lg:text-5xl font-bold leading-none">
						<div class="text-yellow-400">WE ARE</div>
						<div class="text-yellow-400">PC CONSTRUCTION</div>
					</h2>
					<h3 class="text-xl lg:text-2xl font-bold text-gray-900 mt-6 mb-4">
						WHAT MAKES US DIFFERENT?
					</h3>
					<div
						class="space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed"
					>
						<p>
							We construct buildings, facilities and infrastructure that
							strengthen and connect the community. We plan. We build. We create
							solutions. And we do it all with a team approach to success –
							building stronger, together.
						</p>
						<p>
							Together with our clients, designers, engineers and trade
							partners, we provide smart solutions that shape our built
							environment for generations to come. We understand what works and
							why, and our teams of highly skilled construction specialists
							focus on delivering the best project to satisfy long-term goals.
						</p>
					</div>
				</div>

				<div class="relative">
					<img
						src="/images/hero.jpg"
						alt="Construction team reviewing plans"
						class="w-full rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</div>
		<!-- Diagonal Stripes Decoration -->
		<div class="absolute bottom-0 left-0 right-0 h-6 overflow-hidden">
			<div
				class="h-12 bg-yellow-400/10"
				style="
					background: repeating-linear-gradient(
						45deg,
						#fcd34d,
						#fcd34d 10px,
						transparent 10px,
						transparent 20px
					);
				"
			></div>
		</div>
	</section>
</template>

<style scoped>
.section {
	position: relative;
}
</style>

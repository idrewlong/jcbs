<template>
	<div class="flex min-h-screen flex-col">
		<Header />
		<main class="flex-grow relative bg-primary">
			<div class="flex min-h-screen mx-auto px-4 py-16">
				<div class="max-w-7xl w-full mx-auto flex items-center justify-center">
					<div class="relative z-10 w-full space-y-8">
						<div class="text-black">
							<template v-if="error.statusCode === 404">
								<h1 class="mb-4 font-bold text-3xl md:text-8xl">404!</h1>
								<p class="pt-2 mb-4 text-lg">Sorry, that page doesn't exist.</p>
							</template>
							<template v-else>
								<h1 class="mb-4 font-bold text-3xl md:text-8xl">Oops!</h1>
								<p>
									<strong>{{ error.message }}</strong>
								</p>
								<p class="pt-2 mb-4 text-lg">It looks like something broke.</p>
							</template>
							<button
								@click="handleError"
								class="inline-block rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-3 font-bold text-white shadow-xl shadow-rose-400"
							>
								Go back
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
		<Footer />
	</div>
</template>

<script setup>
defineProps({
	error: Object,
});

const handleError = () => {
	clearError({ redirect: '/' });
};
</script>

<template>
	<div class="min-h-screen flex flex-col bg-white">
		<Header />
		<main class="flex-grow relative">
			<NuxtPage />
		</main>
		<Footer />
	</div>
</template>

<script setup>
// No scroll handling at app level
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}

/* Base styles */
html,
body {
	overflow-x: hidden;
	width: 100%;
	background-color: white;
}

/* Section styles */
.section {
	width: 100%;
	min-height: 100vh;
	position: relative;
}
</style>

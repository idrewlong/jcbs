<template>
	<button
		@click="scrollToTop"
		:class="[
			'fixed bottom-8 right-8 back-to-top-button bg-yellow-400 rounded-full flex items-center justify-center transition-opacity duration-300 hover:bg-yellow-500 focus:outline-none',
			{ 'opacity-0': !isVisible, 'opacity-100': isVisible },
		]"
		aria-label="Back to top"
	>
		<Icon
			name="heroicons:chevron-up-20-solid"
			class="chevron-icon text-black"
		/>
	</button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
	isVisible.value = window.scrollY > 500;
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

onMounted(() => {
	window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.back-to-top-button {
	width: 48px;
	height: 48px;
}

.chevron-icon {
	width: 32px;
	height: 32px;
}

@media (max-width: 768px) {
	.back-to-top-button {
		width: 40px;
		height: 40px;
	}

	.chevron-icon {
		width: 24px;
		height: 24px;
	}
}
</style>

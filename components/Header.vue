<template>
	<header class="sticky top-0 left-0 right-0 z-50 bg-[#333333]">
		<!-- Top Navigation -->
		<div class="border-b border-gray-700">
			<div class="container mx-auto px-4 flex justify-end py-2">
				<nav class="flex gap-6 text-sm text-white/80">
					<!-- <NuxtLink to="/news" class="hover:text-white transition-colors"
						>NEWS / INSIGHTS</NuxtLink
					> -->
					<NuxtLink
						to="/subcontractors"
						class="hover:text-white transition-colors"
						>SUBCONTRACTORS</NuxtLink
					>
					<NuxtLink to="/contact" class="hover:text-white transition-colors"
						>CONTACT</NuxtLink
					>
				</nav>
			</div>
		</div>

		<!-- Main Navigation -->
		<div class="container mx-auto px-4 py-4">
			<nav class="flex items-center justify-between">
				<!-- Logo -->
				<NuxtLink to="/" class="flex items-center" aria-label="Go to homepage">
					<img
						src="/images/jc_1.png"
						alt="PC Construction"
						class="w-14 h-auto"
					/>
				</NuxtLink>

				<!-- Main Nav Items -->
				<div class="hidden lg:flex items-center gap-8">
					<NuxtLink
						v-for="item in mainNavItems"
						:key="item.to"
						:to="item.to"
						class="text-white font-medium hover:text-yellow-400 transition-colors uppercase"
						:class="{ 'flex items-center gap-1': item.hasDropdown }"
					>
						{{ item.label }}
						<Icon
							v-if="item.hasDropdown"
							name="heroicons:chevron-down"
							class="w-4 h-4"
						/>
					</NuxtLink>
					<button
						class="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
					>
						<Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
					</button>
				</div>

				<!-- Mobile Menu Button -->
				<button
					type="button"
					class="lg:hidden text-white p-2 focus:outline-none"
					@click="toggleMobileMenu"
					aria-label="Toggle menu"
				>
					<div class="relative w-6 h-6">
						<span
							class="absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out"
							:class="showMobileMenu ? 'rotate-45 top-3' : 'top-1'"
						></span>
						<span
							class="absolute block w-6 h-0.5 bg-white top-3 transition-all duration-200"
							:class="showMobileMenu ? 'opacity-0' : 'opacity-100'"
						></span>
						<span
							class="absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out"
							:class="showMobileMenu ? '-rotate-45 top-3' : 'top-5'"
						></span>
					</div>
				</button>
			</nav>
		</div>

		<!-- Mobile Menu -->
		<Transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="opacity-0 -translate-y-1"
			enter-to-class="opacity-100 translate-y-0"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="opacity-100 translate-y-0"
			leave-to-class="opacity-0 -translate-y-1"
		>
			<div
				v-if="showMobileMenu"
				class="lg:hidden bg-[#333333] border-t border-gray-700"
			>
				<div class="container mx-auto px-4 py-4">
					<nav class="flex flex-col gap-4">
						<NuxtLink
							v-for="item in mainNavItems"
							:key="item.to"
							:to="item.to"
							class="text-white hover:text-yellow-400 transition-colors uppercase"
							@click="showMobileMenu = false"
						>
							{{ item.label }}
						</NuxtLink>
					</nav>
				</div>
			</div>
		</Transition>
	</header>
</template>

<script setup>
import { ref } from 'vue';

const showMobileMenu = ref(false);

const mainNavItems = [
	{ label: 'About Us', to: '/about' },
	{ label: 'Our Culture', to: '/culture' },
	{ label: 'Our Work', to: '/work' },
	{ label: 'Our Approach', to: '/approach' },
	{ label: 'Careers', to: '/careers' },
];

const toggleMobileMenu = () => {
	showMobileMenu.value = !showMobileMenu.value;
};
</script>

<style scoped>
.menu-icon {
	width: 28px;
	height: 28px;
}

.nav-bg {
	pointer-events: none;
	z-index: -1;
}

/* Add smooth hover effect for menu button */
button:hover span {
	background-color: #ffd700;
}
</style>

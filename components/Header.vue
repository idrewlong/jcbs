<template>
	<header class="fixed top-0 left-0 right-0 z-50 py-4 px-2">
		<nav
			class="p-4 px-6 mx-auto max-w-7xl rounded-3xl md:flex md:items-center shadow-xl relative bg-darkblue"
			aria-label="Main navigation"
		>
			<div class="flex items-center justify-between md:hidden">
				<NuxtLink to="/" class="flex items-center" aria-label="Go to homepage">
					<NuxtImg src="/" alt="PLR" class="w-10 h-10" />
				</NuxtLink>

				<button
					type="button"
					class="text-white/90 focus:outline-none rounded md:hidden"
					:aria-expanded="showMenu"
					aria-controls="main-navigation"
					@click="toggleNavbar"
				>
					<span class="sr-only">{{
						showMenu ? 'Close menu' : 'Open menu'
					}}</span>
					<Icon
						:name="showMenu ? 'heroicons:x-mark' : 'heroicons:bars-3'"
						class="menu-icon transition-transform duration-300"
						:class="{ 'rotate-180': showMenu }"
						aria-hidden="true"
					/>
				</button>
			</div>

			<div class="hidden md:flex md:items-center md:justify-between md:w-full">
				<NuxtLink
					to="/"
					class="flex items-center mr-8"
					aria-label="Go to homepage"
				>
					<NuxtImg src="/" alt="PLR" class="w-10 h-10" />
				</NuxtLink>

				<div class="flex items-center gap-8 uppercase">
					<template v-for="link in navigationLinks.slice(0, -1)" :key="link.to">
						<div v-if="link.children" class="relative group">
							<div class="flex items-center gap-1">
								<NuxtLink
									:to="link.to"
									class="text-white/80 hover:text-white transition-colors duration-300 py-2"
									:class="{ 'text-white': $route.path.startsWith(link.to) }"
								>
									{{ link.label }}
								</NuxtLink>
								<button
									@click="toggleDropdown"
									class="flex items-center text-white/80 hover:text-white transition-colors duration-300"
								>
									<Icon
										name="heroicons:chevron-down"
										class="w-4 h-4 transition-transform duration-300"
										:class="{ 'rotate-180': showDropdown }"
									/>
								</button>
							</div>
							<div
								v-show="showDropdown"
								class="absolute top-full left-0 w-64 bg-darkblue rounded-lg shadow-lg py-2 mt-1"
							>
								<NuxtLink
									v-for="child in link.children"
									:key="child.to"
									:to="child.to"
									class="block px-4 py-2 text-white/80 hover:text-white hover:bg-royalblue/20 transition-colors duration-300"
									@click="closeDropdown"
								>
									{{ child.label }}
								</NuxtLink>
							</div>
						</div>
						<NuxtLink
							v-else
							:to="link.to"
							class="relative text-white/80 hover:text-white transition-colors duration-300 group py-2"
							:class="{ 'text-white': $route.path === link.to }"
						>
							{{ link.label }}
							<span
								class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
								:class="{ 'w-full': $route.path === link.to }"
							></span>
						</NuxtLink>
					</template>
					<NuxtLink
						:to="navigationLinks[navigationLinks.length - 1].to"
						class="bg-electriclime text-darkblue px-6 py-2 rounded-lg hover:bg-electriclime/90 transition-colors font-medium ml-4"
					>
						{{ navigationLinks[navigationLinks.length - 1].label }}
					</NuxtLink>
				</div>
			</div>

			<Transition
				enter-active-class="transition duration-300 ease-out"
				enter-from-class="transform -translate-y-4 opacity-0"
				enter-to-class="transform translate-y-0 opacity-100"
				leave-active-class="transition duration-200 ease-in"
				leave-from-class="transform translate-y-0 opacity-100"
				leave-to-class="transform -translate-y-4 opacity-0"
			>
				<div
					v-show="showMenu"
					class="absolute top-full left-0 right-0 bg-darkblue mt-2 p-4 rounded-xl shadow-lg md:hidden z-50"
				>
					<div class="flex flex-col space-y-4">
						<template v-for="link in navigationLinks" :key="link.to">
							<template v-if="link.children">
								<button
									@click="toggleDropdown"
									class="flex items-center justify-between text-white/80 hover:text-white transition-colors duration-300 w-full"
								>
									{{ link.label }}
									<Icon
										name="heroicons:chevron-down"
										class="w-4 h-4 transition-transform duration-300"
										:class="{ 'rotate-180': showDropdown }"
									/>
								</button>
								<div v-show="showDropdown" class="pl-4 mt-2 space-y-2">
									<NuxtLink
										v-for="child in link.children"
										:key="child.to"
										:to="child.to"
										class="block text-white/70 hover:text-white transition-colors duration-300"
										@click="closeNavbar"
									>
										{{ child.label }}
									</NuxtLink>
								</div>
							</template>
							<NuxtLink
								v-else
								:to="link.to"
								class="text-white/80 hover:text-white transition-colors duration-300"
								@click="closeNavbar"
							>
								{{ link.label }}
							</NuxtLink>
						</template>
					</div>
				</div>
			</Transition>
		</nav>
	</header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showMenu = ref(false);
const showDropdown = ref(false);

const navigationLinks = [
	{ to: '/about', label: 'About' },
	{
		label: 'Services',
		to: '/services',
		children: [
			{ to: '/services/linkedin-optimization', label: 'LinkedIn Optimization' },
			{ to: '/services/resume-writing', label: 'Resume Writing' },
			{ to: '/services/interview-coaching', label: 'Interview Coaching' },
			{ to: '/services/job-search', label: 'Job Search Assistance' },
			{ to: '/services/al-carte', label: 'Al Carte Services' },
		],
	},
	// { to: '/packages', label: 'Packages' },
	{ to: '/blog', label: 'Blog' },
	{ to: '/contact', label: 'Contact' },
];

const toggleNavbar = () => (showMenu.value = !showMenu.value);
const closeNavbar = () => (showMenu.value = false);
const toggleDropdown = () => (showDropdown.value = !showDropdown.value);
const closeDropdown = () => (showDropdown.value = false);

// Close menu when clicking outside
onMounted(() => {
	document.addEventListener('click', (event) => {
		const nav = document.querySelector('nav');
		const dropdown = document.querySelector('.services-dropdown');
		if (
			nav &&
			!nav.contains(event.target) &&
			(showMenu.value || showDropdown.value)
		) {
			closeNavbar();
			closeDropdown();
		}
	});
});

// Close menu on escape key
onMounted(() => {
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && showMenu.value) {
			closeNavbar();
		}
	});
});

onMounted(() => {
	if (typeof window !== 'undefined') {
		// Wait for GSAP to be loaded
		const checkGSAP = setInterval(() => {
			if (window.gsap && window.ScrollTrigger) {
				clearInterval(checkGSAP);

				const gsap = window.gsap;
				const ScrollTrigger = window.ScrollTrigger;

				gsap.registerPlugin(ScrollTrigger);

				gsap.to('.nav-bg', {
					scrollTrigger: {
						start: 'top top',
						end: 99999,
						toggleActions: 'play none none reverse',
						onEnter: () => gsap.to('.nav-bg', { opacity: 1, duration: 0.3 }),
						onLeaveBack: () =>
							gsap.to('.nav-bg', { opacity: 0, duration: 0.3 }),
					},
				});
			}
		}, 100);

		// Clear interval after 5 seconds to prevent infinite checking
		setTimeout(() => clearInterval(checkGSAP), 5000);
	}
});
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
</style>

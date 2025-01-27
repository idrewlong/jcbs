import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
	}
});

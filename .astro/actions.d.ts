declare module "astro:actions" {
	type Actions = typeof import("C:/atlas/gitinstances/priscilaroza/src/actions/index.ts")["server"];

	export const actions: Actions;
}
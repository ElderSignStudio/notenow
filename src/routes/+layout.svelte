<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

	<div class="border-2 bg-pink-900 p-4">
		<h1 class="text-3xl">Root Layout</h1>

		{@render children()}
	</div>

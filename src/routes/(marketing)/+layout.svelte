<script lang="ts">
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();
</script>

<div class="bg-green-900 p-4 border-2">
	<h1 class="text-3xl">(Marketing) Layout</h1>
<nav class="my-2 bg-amber-600 p-2">
			<ul class="flex gap-2">
				<li>
					<a href="/">Home</a>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>

{@render children()}
</div>
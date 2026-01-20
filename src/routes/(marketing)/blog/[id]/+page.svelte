<script>
	import { page } from '$app/state';

	// Remember: Script area is only loaded once, even
	// if the state changes. So $derived is needed so the variable
	// gets updateded when it changes.
	let pageId = $derived(page.params.id);
</script>

<h1 class="text-4xl">Single Blog: {pageId}</h1>
<a href="/blog/123">Another Text</a>

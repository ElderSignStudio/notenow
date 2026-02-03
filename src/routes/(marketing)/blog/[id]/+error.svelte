<script>
	import { page } from '$app/state';
</script>

<h1>Error: Blog ID</h1>
<p>{page.status}: {page.error?.message}</p>
<p>Code: {page.error?.code}</p>

<script lang="ts">
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props();
</script>

<div class="border-3 bg-indigo-700 p-4">
    <h1 class="text-3x1">(blog) Layout</h1>

    {@render children()}
</div>

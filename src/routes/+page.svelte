<script>
	import { links } from '$lib/links.ts';
</script>

<h1>beetrootpaul</h1>
<h2>pixel art<br />chiptune<br />game dev</h2>
<ul>
	{#each links as link}
		<li>{link.label}</li>
	{/each}
</ul>

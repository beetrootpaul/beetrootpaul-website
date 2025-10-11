<script>
	let { data } = $props();
</script>

<h1>beetrootpaul</h1>
<h2>pixel art<br />chiptune<br />game dev</h2>

<ul>
	{#each data.links as link}
		<li>{link.label}</li>
	{/each}
</ul>

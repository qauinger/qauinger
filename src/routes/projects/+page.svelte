<script lang='ts'>
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	let {data} = $props();
</script>

<style>
	h1 {
		font-size: 2.5em;
		color: white;
	}

	section {
		padding: 20px 0;
        width: 70%;
        margin: 0 auto;
	}

	section.border-below {
        border-bottom: 1px solid rgb(197, 197, 197);
		padding-bottom: 0;
    }

	@media only screen and (max-width: 1200px) {
        section {
        	width: 95%;
		}
    }
</style>

<section id='title' class='border-below'>
	<h1>Highlighted Projects</h1>
</section>
{#each data.summaries as {id, title, live_link, description, images, skills}}
	<section class='project'>
	    <ProjectCard {id} {title} {live_link} {description} {images} {skills} />
	</section>
{/each}

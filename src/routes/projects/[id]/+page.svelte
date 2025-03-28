<script>
	let {data} = $props();
</script>

<style>
    h1 {
		font-size: 2.5em;
		color: white;
	}

    p {
        color: white;
        font-size: 1.5em;
        padding: 10px 0;
    }

	section {
		padding: 20px 0;
        width: 70%;
        margin: 0 auto;
	}

    section.border-below + section {
        padding-top: 0;
    }

	section.border-below {
        border-bottom: 1px solid rgb(197, 197, 197);
        padding-bottom: 0;
    }

    .button {
        font-size: 1em;
        padding: 0.25em 0.5em;
        border-radius: 1em;
    }

    #live-link {
        font-size: 0.75em;
        transition-duration: 0.25s;
        color: rgb(239, 68, 68);
        border: 2px solid rgb(239, 68, 68);
    }

    #live-link:hover {
        transition-duration: 0.25s;
        background-color: rgb(239, 68, 68);
        color: rgb(33, 41, 60);
    }

    .icon {
        font-family: 'fontello';
        padding-right: 5px;
    }

    #skills p {
        gap: 10px;
        font-size: 1.5em;
    }

    #skills .skill {
        margin-right: 0.5em;
        padding: 0.25em 0.5em;
        color: rgb(192, 192, 192);
        border: 2px solid rgb(192, 192, 192);
        border-radius: 1em;
        font-size: 0.75em;
    }

    .blog-img {
        width: 50%;
        margin: 0 auto;
    }

    .blog-img + p {
        width: 50%;
        margin: 0 auto;
        color: gray;
        font-size: 1em;
    }

    #image-gallery {
        /* padding: 1em; */
        display: flex;
        flex-wrap: wrap;
    }

    #image-gallery img {
        width: 50%;
        padding: 1em;
    }

	@media only screen and (max-width: 1200px) {
        section {
        	width: 95%;
        }

        .blog-img {
            width: 80%;
        }

        .blog-img + p {
            width: 80%;
        }
    }

    @media only screen and (max-width: 800px) {
        #image-gallery img {
            width: 100%;
            padding: 0.5em;
        }
    }
</style>

<section id='title' class='border-below'>
	<h1>{data.project.title}</h1>
</section>
<section id='buttons'>
    {#if data.project.live_link}
        <p><a style='margin-right: 0.5em;' href={data.project.live_link} id='live-link' class='button'><span class="icon link-ext-alt-icon blink">&#xf14c;</span>Live</a>👈 You can view the live version here!</p>
    {/if}
    {#if Array.isArray(data.project.description)}
        {#each data.project.description as paragraph}
            <p>{paragraph}</p>
        {/each}
    {:else}
        <p>{data.project.description}</p>
    {/if}
</section>

{#if data.project.skills}
    <section id='skills' class='border-below'>
    	<h1>Skills</h1>
    </section>
    <section>
        <div id='skills'>
            {#each data.project.skills as {skill, description}}
                <p><span class='skill'>{skill}</span>{description}</p>
            {/each}
        </div>
    </section>
{/if}
{#if data.project.blog}
    <section id='blog-title' class='border-below'>
        <h1>Blog</h1>
    </section>
    <section id='blog'>
        {#each data.project.blog as element}
            {#if element.type == 'p'}
                <p>{element.content}</p>
            {:else if element.type == 'img'}
                <img class='blog-img' src={element.src} alt={element.alt}>
                <p>{element.description}</p>
            {/if}
        {/each}
    </section>
{/if}
{#if data.project.images}
    <section id='images' class='border-below'>
    	<h1>Gallery</h1>
    </section>
    <section id='image-gallery'>
        {#each data.project.images as {src, alt}}
            <img {src} {alt}>
        {/each}
    </section>
{/if}
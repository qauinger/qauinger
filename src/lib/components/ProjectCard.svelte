<script lang='ts'>
    let { id, title, live_link, download_link, teaser, images, skills } = $props();
</script>

<style>
    #card {
        background-color: rgb(33, 41, 60);
        padding: 20px;
        border-radius: 20px;
    }

    #top-bar {
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
    }

    #skills {
        overflow: auto;
        white-space: nowrap;
        display: inline-flex;
        flex-flow: wrap;
        gap: 10px;
    }

    #skills * {
        padding: 0.25em 0.5em;
        gap: 10px;
        color: rgb(192, 192, 192);
        transition-duration: 0.25s;
        border: 2px solid rgb(192, 192, 192);
        border-radius: 1em;
        font-size: 1em;
    }

    #skills *:hover {
        cursor: pointer;
        transition-duration: 0.25s;
        background-color: rgb(192, 192, 192);
        color: rgb(33, 41, 60);
    }

    #image-carousel {
        display: block;
        overflow: auto;
        white-space: nowrap;
    }

    #image-carousel img {
        display: inline-flex;
        width: 60%;
        padding: 10px;
    }

    h2 {
        font-size: 2em;
        color: white;
        padding-bottom: 0.5em;
    }

    #buttons {
        display: inline-flex;
        justify-content: left;
        gap: 10px;
        height: min-content;
        padding-bottom: 10px;
    }

    .button {
        font-size: 1.25em;
        padding: 0.25em 0.5em;
        border-radius: 1em;
    }

    #learn-more {
        transition-duration: 0.25s;
        color: rgb(0, 255, 153);
        border: 2px solid rgb(0, 255, 153);
    }

    #learn-more:hover {
        transition-duration: 0.25s;
        background-color: rgb(0, 255, 153);
        color: rgb(33, 41, 60);
    }

    #live-link {
        transition-duration: 0.25s;
        color: rgb(239, 68, 68);
        border: 2px solid rgb(239, 68, 68);
    }

    #live-link:hover {
        transition-duration: 0.25s;
        background-color: rgb(239, 68, 68);
        color: rgb(33, 41, 60);
    }

    #download-link {
        transition-duration: 0.25s;
        color: rgb(7, 194, 188);
        border: 2px solid rgb(7, 194, 188);
    }

    #download-link:hover {
        transition-duration: 0.25s;
        background-color: rgb(7, 194, 188);
        color: rgb(33, 41, 60);
    }

    #teaser {
        color: rgb(192, 192, 192);
        font-size: 1.5em;
        padding-bottom: 0.5em;
    }

    .icon {
        font-family: 'fontello';
        padding-right: 5px;
    }

    @media only screen and (max-width: 600px) {
        #image-carousel img {
            display: inline-flex;
            width: 100%;
            padding: 10px;
        }
    }
</style>

<div id='card'>
    <div id='top-bar'>
        <a href='/projects/{id}'><h2>{title}</h2></a>
        <div id='buttons'>
            {#if live_link}
                <a href={live_link} id='live-link' class='button'><span class="icon link-ext-alt-icon blink">&#xf14c;</span>Live</a>
            {/if}
            {#if download_link}
                <a href={download_link} id='download-link' class='button'><span class="icon link-ext-alt-icon blink">&#xe803;</span>Download</a>
            {/if}
            <a href='/projects/{id}' id='learn-more' class='button'><span class="icon link-ext-alt-icon blink">&#xE802;</span>Learn More</a>
        </div>
    </div>
    {#if teaser}
        <p id='teaser'>{teaser}</p>
    {/if}
    {#if skills}
        <div id='skills'>
            {#each skills as {skill, description}}
                <p class='skill'>{skill}</p>
            {/each}
        </div>
    {/if}
    <div id='image-carousel'>
        {#each images as {src, alt}}
            <img {src} {alt}>
        {/each}
    </div>
</div>

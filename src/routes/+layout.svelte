<script lang="ts">
	import '../app.css';
	let {children, data} = $props();
	import { page } from '$app/stores';
	import { onMount } from "svelte";

	function updateWidth() {
    	if(window.innerWidth > 1000) {
			openNavbar();
		}
  	}

  	onMount(() => {
    	window.addEventListener("resize", updateWidth);
		if(window.innerWidth > 1000) {
			openNavbar();
		}
    	return () => window.removeEventListener("resize", updateWidth);
  	});

	let navbarOpen = $state(false);

  	function toggleNavbar() {
		if(window.innerWidth > 1000) {
			navbarOpen = true;
		} else {
			navbarOpen = !navbarOpen;
		}
  	}

	function closeNavbar() {
		if(window.innerWidth > 1000) {
			navbarOpen = true;
		} else {
			navbarOpen = false;
		}
	}

	function openNavbar() {
		navbarOpen = true;
	}
</script>

<style>
	@font-face {
        font-family: 'fontello';
        src: url('/fontello/font/fontello.eot?38397587');
        src: url('/fontello/font/fontello.eot?38397587#iefix') format('embedded-opentype'),
           url('/fontello/font/fontello.woff?38397587') format('woff'),
           url('/fontello/font/fontello.ttf?38397587') format('truetype'),
           url('/fontello/font/fontello.svg?38397587#fontello') format('svg');
        font-weight: normal;
        font-style: normal;
    }

	#page {
		display: flex;
	}

	#navbar {
		background-color: rgb(33, 41, 60);
		width: 300px;
		height: 100vh;
		position: fixed;
		top: 0px;
		border-right: 1px solid rgb(13, 15, 20);
		padding: 20px;
	}

	#navbar-content {
		display: none;
	}

	#navbar-content.show {
		display: block;
	}

	#content {
		width: 100%;
		padding-left: 300px;
	}

	#footer {
		color: rgb(0, 255, 153);
		padding: 10px;
		padding-left: 300px;
		text-align: center;
	}

	#navbar h2 {
		color: white;
		font-size: 1.5em;
	}

	#navbar div {
		display: flex;
		flex-direction: column;
		color: white;
		padding-bottom: 40px;
	}

	#navbar div a {
		transition-duration: 0.25s;
		font-size: 1.3em;
		padding: 5px 15px;
		background-color: rgb(24, 31, 44);
		margin: 5px;
		border-radius: 10px;
	}

	#navbar div a:hover {
		transition-duration: 0.25s;
		color: rgb(23, 28, 40);
		background-color: rgb(192, 192, 192);
	}

	.icon {
        font-family: 'fontello';
        color: white;
        font-size: 1em;
		padding-right: 0.5em;
    }

	#navbar div a.selected .icon {
		color: rgb(23, 28, 40);
	}

	#navbar div a:hover .icon {
		transition-duration: 0.25s;
		color: rgb(23, 28, 40);
	}

	#navbar div a.selected {
		color: rgb(23, 28, 40);
		background-color: rgb(0, 255, 153);
	}

	.menu-icon {
		display: none;
	}

	@media only screen and (max-width: 1000px) {
		#page {
			display: flex;
			flex-direction: column;
		}

		#navbar {
			width: 100%;
			position: relative;
			padding: 20px;
			height: min-content;
			position: sticky;
    		top: 0;
		}

		#content {
			width: 100%;
			padding: 0px;
		}

		#footer {
			padding: 10px;
		}

		#navbar h2:not(:first-child) {
			font-size: 2em;
			border-bottom: 2px solid white;
			margin-bottom: 0.5em;
		}

		#navbar div {
			padding-bottom: 0;
			font-size: 1.4em;
		}

		.menu-icon {
			display: inline;
		}

		#navbar-projects {
			display: none;
		}
    }
</style>

<div id='page'>
	<div id='navbar'>
		<button onclick={toggleNavbar}><h2><span class='icon menu-icon'>&#xf0c9;</span>Quentin Auinger</h2></button>
		<span id='navbar-content' class={navbarOpen ? 'show' : ''}>
			<div>
				<a href='/' onclick={closeNavbar} class={$page.url.pathname == '/' ? 'selected' : ''}><span class="icon home-icon">&#xe800;</span>Me</a>
				<a href='/projects' onclick={closeNavbar} class={$page.url.pathname == '/projects' ? 'selected' : ''}><span class="icon cube-icon">&#xf1b2;</span>Projects</a>
				<a href='/resume' onclick={closeNavbar} class={$page.url.pathname == '/resume' ? 'selected' : ''}><span class="icon doc-icon">&#xf15c;</span>Résumé</a>
				<a href='/contact' onclick={closeNavbar} class={$page.url.pathname == '/contact' ? 'selected' : ''}><span class="icon mail-icon">&#xf0e0;</span>Contact</a>
			</div>
			<span id='navbar-projects'>
				<h2>Featured Projects</h2>
				<div>
					{#each data.summaries as {id, title}}
						<a href='/projects/{id}' class={$page.url.pathname == `/projects/${id}` ? 'selected' : ''}>{title}</a>
					{/each}
				</div>
			</span>
		</span>
	</div>
	<div id='content'>
		{@render children()}
	</div>
</div>
<div id='footer'>
	© {new Date().getFullYear()} Quentin Auinger
</div>

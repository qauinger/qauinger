<style>
	h1 {
		font-size: 2.5em;
		color: white;
	}

    h2 {
        font-size: 2em;
		color: rgb(192, 192, 192);
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

    .link {
        text-decoration: underline;
        color: white;
    }

    .icon {
        font-family: 'fontello';
        padding-right: 5px;
    }

    .linkedin-icon {
        color: rgb(45, 100, 188);
        font-size: 1.2em;
    }

    .white {
        color: white;
    }

    label {
        font-size: 1.25em;
        color: white;
    }

    #form {
        display: block;
    }

    #form input, #form textarea {
        background-color: rgb(41, 48, 62);
        color: white;
        font-size: 1.5em;
        border-radius: 10px;
        border: none;
    }

    #form-name, #form-email {
        width: 50%;
        display: block;
    }

    #form-message {
        width: 100%;
        resize: vertical;
        height: 10em;
    }

    #form-submit {
        cursor: pointer;
        font-size: 1.5em;
        padding: 5px 15px;
        border-radius: 10px;
        color: rgb(23, 28, 40);
        transition-duration: 0.5s;
		background-color: rgb(0, 255, 153);
    }

    #form-submit:hover {
        transition-duration: 0.5s;
        background-color: white;
    }

    @media only screen and (max-width: 1200px) {
        section {
        	width: 95%;
		}
    }
</style>

<section id='title' class='border-below'>
	<h1>Get in Touch!</h1>
</section>
<section id='contacts'>
    <h2>
        Email me 👉 <a href='mailto:qaa4664@rit.edu' class='link'>qaa4664@rit.edu</a>
    </h2>
    <h2>
        Connect on LinkedIn 👉 <a href='https://linkedin.com/in/qauinger' class='white'><span class="icon linkedin-icon">&#xf30c;</span><span class='link'>qauinger</span></a>
    </h2>
    <h2>
        Follow me on GitHub 👉 <a href='https://github.com/qauinger' class='white'><span class="icon github-icon">&#xf09b;</span><span class='link'>qauinger</span></a>
    </h2>
</section>
<section class='border-below'>
    <h1>Send Me a Message</h1>
</section>
<section>
    <form id='form' on:submit|preventDefault={submitForm}>
        <label for="form-name">Name</label>
        <input id='form-name' type='text' placeholder='Name' bind:value={name} required>
        <label for="form-email">Email</label>
        <input id='form-email' type='email' placeholder='Email' bind:value={email} required>
        <label for="form-message">Message</label>
        <textarea name="" id="form-message" placeholder='Message' bind:value={message} required></textarea>
        <button id='form-submit'>Submit</button>
    </form>
</section>

<script lang='ts'>
    let name = "";
    let email = "";
    let message = "";

    async function submitForm() {
        const response = await fetch("/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            alert("Message sent successfully!");
            name = "";
            email = "";
            message = "";
        } else {
            alert("Failed to send message.");
        }
    }
</script>
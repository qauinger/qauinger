<style>
    * {
        color: white;
    }

    span.green {
        color: rgb(0, 255, 153);
    }

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 1.7em;
        color: rgb(197, 197, 197);
    }

    p {
        font-size: 1.5em;
        padding: 10px 0;
    }

    section:first-of-type {
        padding-top: 50px;
    }

    section {
        padding: 20px 0;
        width: 70%;
        margin: 0 auto;
    }

    section.border-below {
        border-bottom: 1px solid rgb(197, 197, 197);
    }

    #mugshot {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 10px auto;
    }

    #hey, #greeting {
        text-align: center;
    }

    .info-banner {
        width: 70%;
        margin-left: 0;
        display: inline-block;
    }

    .banner {
        background-color: rgb(0, 255, 153);
        color: rgb(23, 28, 40);
        padding: 10px;
        text-align: right;
        font-size: 2em;
        font-weight: 600;
        padding-right: 20px;
    }

    .banner.red {
        background-color: rgb(239, 193, 68);
        color: rgb(23, 28, 40);
        font-weight: bold;
    }

    .banner.small {
        font-size: 1.25em;
    }

    #social-icons {
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .icon {
        font-family: 'fontello';
        color: rgb(197, 197, 197);
        font-size: 1.5em;
    }

    @media only screen and (max-width: 1000px) {
        section {
        	width: 95%;
        }

        .info-banner {
            width: 80%;
            margin-left: 0;
            display: inline-block;
        }

        .banner {
            font-size: 3vw;
        }

        h1 {
            font-size: 2em;
        }

        h2 {
            font-size: 1.5em;
        }

        p {
            font-size: 1.5em;
        }
    }

    @media only screen and (max-width: 1000px) {
        .banner {
            font-size: 3.5vw;
        }
    }
</style>

<section class='info-banner'>
    <h2 class='banner'>Searching for Summer/Fall 2025 Co-Op!</h2>
</section>

<section class='info-banner'>
    <h2 class='banner red small'>Heads up! I'm currently still in the process of updating my site to this new version!</h2>
</section>
<section id='hero'>
    <img id='mugshot' src='me.png' alt='Quentin Auinger'>
    <h2 id='hey'>Hey there! <span id='wave'>👋</span></h2>
    <h1 id='greeting'>I'm <span class='green'>Quentin Auinger</span>, an aspiring software engineer focused on building impactful experiences.</h1>
</section>
<section id='socials' class='border-below'>
    <div id='social-icons'>
        <a href="mailto:qaa4664@rit.edu"><h2 class="icon mail-icon">&#xf0e0;</h2></a>
        <a href="https://github.com/qauinger"><h2 class="icon github-icon">&#xf09b;</h2></a>
        <a href="https://linkedin.com/in/qauinger"><h2 class="icon linkedin-icon">&#xf30c;</h2></a>
    </div>
</section>
<section id='background'>
    <p>I am currently a first year student at Rochester Institute of Technology studying software engineering. I have a diverse range of experiences and a deep love for creating innovative solutions.</p>
    <p>I have honed my skills in front-end and back-end development, as well as database management. As you navigate through my portfolio, you will encounter a compilation of my noteworthy projects, each serving as a testament to my continuous pursuit of acquiring new skills and languages. Every project undertaken represents a deliberate effort to expand my expertise and delve into uncharted territories. Through these endeavors, I have embraced the challenge of mastering diverse technologies, enabling me to broaden my skill set and enhance my problem-solving capabilities. Within my portfolio, you will witness the outcomes of these immersive experiences, showcasing not only the proficiency I have gained but also my unwavering dedication to lifelong learning.</p>
    <p>Whenever I'm not coding, you'll find me hitting the slopes, biking, exploring the world, or petting my cat.</p>
</section>
<section id='skills'>

</section>

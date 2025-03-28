export const projects = [
	{
		id: 'mountainstats-live',
		title: 'mountainstats.live',
		live_link: 'https://mountainstats.live/',
		description: 'mountainstats.live takes live data reported by ski resorts and generates live maps for displaying which ski trails and chairlifts are open.',
		skills: [
			{ skill: 'Svelte', description: 'I used svelte as the framework for this project.' },
			{ skill: 'PostgreSQL', description: 'Used for a database for storing statistics and map data.' },
			{ skill: 'OverpassAPI', description: 'OverpassAPI is used for querying OpenStreetMap data for generating real-world maps. Its very cool to use.' }
		],
		images: [
			{ src: 'https://picsum.photos/id/328/1800/1200', alt: 'An alt description' },
			{ src: 'https://picsum.photos/id/565/1800/1200', alt: 'An alt description' },
			{ src: 'https://picsum.photos/id/327/1800/1200', alt: 'An alt description' },
			{ src: 'https://picsum.photos/id/377/1800/1200', alt: 'An alt description' },
			{ src: 'https://picsum.photos/id/423/1800/1200', alt: 'An alt description' },
			{ src: 'https://picsum.photos/id/559/1800/1200', alt: 'An alt description' }
		],
		blog: [
			{type: 'p', content: 'This is a test paragraph.'},
			{type: 'p', content: 'This is a test paragraph.'},
			{type: 'img', src: 'https://picsum.photos/id/328/1800/1200', alt: 'An image', description: 'Hello! this is an extremely long description of the image above. it should look good when displayed.'},
			{type: 'p', content: 'This is a test paragraph.'},
			{type: 'p', content: 'This is a test paragraph.'},
		]
	},
	{
		id: 'brainwave',
		title: 'brainwave',
		live_link: 'https://brainwave.qauinger.com/',
		description: 'Brainwave is an online learning platform that allows teachers to create extremely customizable, individualized activities for discrete students or classes as a whole.',
		skills: [
			{ skill: 'ExpressJS', description: 'I used expressjs as the framework for this project.' },
			{ skill: 'PostgreSQL', description: 'Postgres was used as a database.' }
		],
		images: [
			{
				src: 'https://picsum.photos/id/20/1800/1200',
				alt: 'An alt description'
			}
		]
	},
	{
		id: 'ninjabank',
		title: 'NinjaBank',
		description: 'NinjaBank is an online banking system I developed while working at Code Ninjas Rochester for keeping track of transactions and running balances of "NinjaBucks", the play currency used with the children who attend.',
		images: [
			{
				src: 'https://picsum.photos/id/1031/1800/1200',
				alt: 'An alt description'
			}
		]
	},
	{
		id: 'esoterpreter',
		title: 'esoterpreter',
		description: 'An online interpreter for esoteric languages.',
		images: [
			{
				src: 'https://picsum.photos/id/5/1800/1200',
				alt: 'An alt description'
			}
		]
	},
	{
		id: 'ir-data-compiler',
		title: 'ir-data-compiler',
		description: 'A compiler for Bruker OPUS spectroscopy data point table (.dpt) files.',
		images: [
			{
				src: 'https://picsum.photos/id/319/1800/1200',
				alt: 'An alt description'
			}
		]
	}
];

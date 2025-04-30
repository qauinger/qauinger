export const projects = [
	{
		id: 'qauinger-com',
		title: 'qauinger.com',
		live_link: 'https://qauinger.com/',
		teaser: 'My portfolio and how I host all my projects!',
		description: 'My portfolio and how I host all my projects!'
	},
	{
		id: 'mountainstats',
		title: 'MountainStats',
		live_link: 'https://qauinger.dev/mountainstats',
		teaser: 'Maps generated for displaying live ski resort data!',
		description: 'MountainStats takes live data reported by ski resorts and generates live maps for displaying which ski trails and chairlifts are open.'
	},
	{
		id: 'mountainstats-live',
		title: 'mountainstats.live',
		// live_link: 'https://mountainstats.live/',
		teaser: 'Next generation of my MountainStats project!',
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
			{type: 'p', content: 'This is a test paragraph 1.'},
			{type: 'p', content: 'This is a test paragraph 2.'},
			{type: 'img', src: 'https://picsum.photos/id/328/1800/1200', alt: 'An image', description: 'Hello! this is an extremely long description of the image above. it should look good when displayed.'},
			{type: 'p', content: 'This is a test paragraph 3.'},
			{type: 'p', content: 'This is a test paragraph 4.'},
		]
	},
	{
		id: 'encoded-polyline-api',
		title: 'Encoded Polyline API',
		live_link: 'https://qauinger.dev/encoded-polyline-api',
		teaser: 'An API for converting Google\'s Encoded Polyline Algorithm Format.',
		description: 'You can use this API to easily convert between common geo-data formats such as GeoJSON, WKT, and simple coordinate arrays and Google\'s Encoded Polyline Algorithm Format. Encoded Polylines are ',
		images: [
			{
				src: '/image/encoded-polyline-api/encode.png',
				alt: 'API documentation for encoding'
			},
			{
				src: '/image/encoded-polyline-api/decode.png',
				alt: 'API documentation for decoding'
			}
		]
	},
	{
		id: 'dhss101-final',
		title: 'DHSS101 Final',
		live_link: 'https://qauinger.dev/dhss101-final',
		teaser: 'Interactive data visualization presentation for my Computation & Culture course.',
		// description: 'NinjaBank is an online banking system I developed while working at Code Ninjas Rochester for keeping track of transactions and running balances of "NinjaBucks", the play currency used with the children who attend.',
		images: [
			{
				src: 'https://picsum.photos/id/1031/1800/1200',
				alt: 'An alt description'
			}
		]
	},
	{
		id: 'brainwave',
		title: 'brainwave',
		// live_link: 'https://brainwave.qauinger.com/',
		teaser: 'Customized learning activities for teachers!',
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
		live_link: 'https://qauinger.dev/esoterpreter',
		teaser: 'Esoteric language interpreter!',
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
		download_link: 'https://github.com/qauinger/ir-data-compiler/releases',
		teaser: 'A compiler for Bruker OPUS spectroscopy data files.',
		description: 'A compiler for Bruker OPUS spectroscopy data point table (.dpt) files.',
		images: [
			{
				src: 'https://picsum.photos/id/319/1800/1200',
				alt: 'An alt description'
			}
		]
	}
];

type PortfolioEntry = {
	title: string;
	artwork: {
		big: string;
		thumbnail?: string;
	};
	progress: Array<{
		big: string;
		thumbnail?: string;
	}>;
	type: Array<'pixel_art' | 'game' | 'chiptune' | 'original_creation'>;
	dateFinished: Date;
	descriptionParagraphs: Array<
		Array<{
			text: string;
			bold?: boolean;
			linkUrl?: string;
		}>
	>;
	publications: {
		instagramUrl?: string;
		itchUrl?: string;
		xUrl?: string;
	};
};

export const portfolioEntries: PortfolioEntry[] = [
	{
		title: 'Dart-07',
		artwork: {
			big: 'dart07_mission_1_b.gif',
		},
		type: ['pixel_art', 'game', 'chiptune', 'original_creation'],
		dateFinished: new Date('2022-09-25'),
		descriptionParagraphs: [
			[
				{
					text: 'My third ',
				},
				{
					text: 'PICO-8',
					linkUrl: 'https://www.lexaloffle.com/pico-8.php',
				},
				{
					text: ' game, created for the ',
				},
				{
					text: 'Basic Shmup Showcase jam',
					linkUrl: 'https://itch.io/jam/basic-shmup',
				},
				{
					text: ' organized by ',
				},
				{
					text: '@LazyDevs',
					linkUrl: 'https://youtube.com/@lazydevs',
				},
				{
					text: '.',
				},
				{
					text: 'You can play it on ',
					bold: true,
				},
				{
					text: 'beetrootpaul.itch.io/dart-07',
					linkUrl: 'https://beetrootpaul.itch.io/dart-07',
					bold: true,
				},
				{
					text: ' 🚀',
					bold: true,
				},
			],
			// Degug: Additional paragraphs to enforce container higher than its thumbnail.
			// [
			// 	{
			// 		text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
			// 	},
			// ],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/Cjamvvqo7y1/',
			itchUrl: 'https://beetrootpaul.itch.io/dart-07',
			xUrl: 'https://x.com/beetrootpaul/status/1578389963124637698',
		},
		progress: [
			{
				big: 'dart07_mockup_02_vertical_export_x4.gif',
			},
		],
	},
	{
		title: 'Encounter',
		artwork: {
			big: 'encounter_square_x8.png',
			thumbnail: 'encounter_square_x1.png',
		},
		type: ['pixel_art', 'original_creation'],
		dateFinished: new Date('2022-05-28'),
		descriptionParagraphs: [
			[
				{
					text: 'A piece created for a ',
				},
				{
					text: 'Concept Art challenge',
					linkUrl: 'https://youtu.be/6z60_H_S_gg',
				},
				{
					text: ' organized by ',
				},
				{
					text: '@Saultoons',
					linkUrl: 'https://www.youtube.com/@saultoons',
				},
				{
					text: '. Started with a textual concept, then drew several drafts, and gradually moved towards a final polished art.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/aap-splendor128',
					linkUrl: 'https://lospec.com/palette-list/aap-splendor128',
				},
			],
			// Degug: Additional paragraphs to enforce container higher than its thumbnail.
			// [
			// 	{
			// 		text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
			// 	},
			// ],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CeLj5mxI3BE/',
			xUrl: 'https://x.com/beetrootpaul/status/1531235677446328322',
		},
		progress: [
			{
				big: 'encounter_designs_ABCD_01_draft_square_collage.png',
			},
			{
				big: 'encounter_progress_07.png',
			},
			{
				big: 'encounter_progress_09.png',
			},
			{
				big: 'encounter_progress_18_switched_to_comfy52.png',
			},
			{
				big: 'encounter_progress_25.png',
			},
		],
	},
	{
		title: 'Table Corner',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Floating Windmill 2022',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'No Longer a Hero',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Void Bringer',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Sorren',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Winter Cottage',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Black Hole',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Dune',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Bright Future',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: '#SeptemBIT 2021',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Let The Adventure Begin',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Forgotten Planet',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Animated Emoji ":same:"',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Flail',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Study of a Supermarket Fridge',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Kitchen Knife 256px',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'CFG 1',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Castlevania Remaster',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Lucid Oenn Fanart',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Escalator',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Outnumbered',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Tape: Nostalgia',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'One of a Kind',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'To Be Continued',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Ground Cumin',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'Pair of Curly Brackets',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
	{
		title: 'exercise – tileset',
		artwork: {
			// TODO: fill in
			big: 'TODO',
		},
		// TODO: fill in
		type: [],
		// TODO: fill in
		dateFinished: new Date('1990-01-01'),
		// TODO: fill in
		descriptionParagraphs: [],
		// TODO: fill in
		publications: {},
		// TODO: fill in
		progress: [],
	},
];

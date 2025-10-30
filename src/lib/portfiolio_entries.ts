import { DEBUG } from './debug';

export type PortfolioEntry = {
	title: string;
	artwork:
		| {
				big: string;
				thumbnail: string;
		  }
		| {
				youtubeUrl: string;
				thumbnail: string;
		  };
	progress: Array<{
		big: string;
	}>;
	type: Array<'animation' | 'chiptune' | 'game' | 'oc' | 'pixel_art'>;
	dateFinished: Date;
	descriptionParagraphs: Array<
		Array<{
			text: string;
			bold?: boolean;
			linkUrl?: string;
		}>
	>;
	publications: {
		displateUrl?: string;
		instagramUrl?: string;
		itchUrl?: string;
		lospecUrl?: string;
		mastodonUrl?: string;
		xUrl?: string;
		youtubeUrl?: string;
	};
};

export const portfolioEntries: PortfolioEntry[] = [
	{
		title: 'Dart-07',
		artwork: {
			big: 'dart07_mission_1_b.gif',
			thumbnail: 'dart07_mission_1_b.gif',
		},
		type: ['pixel_art', 'game', 'chiptune', 'oc'],
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
			...(DEBUG
				? // Additional paragraphs to enforce container higher than its thumbnail.
					[
						[
							{
								text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
							},
						],
					]
				: []),
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
			thumbnail: DEBUG
				? // Debug: Non-square low image.
					'encounter_square_x1_debug_low.png'
				: 'encounter_square_x1.png',
		},
		type: ['pixel_art', 'oc'],
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
			...(DEBUG
				? // Additional paragraphs to enforce container higher than its thumbnail.
					[
						[
							{
								text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
							},
						],
					]
				: []),
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			youtubeUrl: 'https://youtu.be/D7zTWePkF88',
			thumbnail: DEBUG
				? // Debug: Non-square low image.
					'nolongerahero_x1_debug_low.gif'
				: 'nolongerahero_x1.gif',
		},
		type: ['pixel_art', 'animation', 'oc', 'chiptune'],
		dateFinished: new Date('2022-03-06'),
		descriptionParagraphs: [
			[
				{
					text: 'I started with a chiptune in which I wanted to depict a hero who became a villain. Then, I created an animation with 4 colors only. My reference was a ',
				},
				{
					text: 'photo from The Pose Archives',
					linkUrl: 'https://x.com/theposearchives/status/1443798560806293507',
				},
				{
					text: '.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/fuzzyfour',
					linkUrl: 'https://lospec.com/palette-list/fuzzyfour',
				},
			],
		],
		publications: {
			instagramUrl:
				'https://twitter.com/beetrootpaul/status/1500782518110466051',
			xUrl: 'https://x.com/beetrootpaul/status/1500782518110466051',
			youtubeUrl: 'https://youtu.be/D7zTWePkF88',
		},
		progress: [
			{
				big: 'nolongerahero_progress_01.png',
			},
			{
				big: 'nolongerahero_progress_02.gif',
			},
			{
				big: 'nolongerahero_progress_05.png',
			},
			{
				big: 'nolongerahero_progress_11.gif',
			},
		],
	},
	{
		title: 'Void Bringer',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			thumbnail: 'TODO',
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
			big: 'pairofcurlybrackets_Twitter.png',
			thumbnail: 'pairofcurlybrackets_x1.png',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-03-31'),
		descriptionParagraphs: [
			[
				{
					text: 'A minimalistic drawing of piece of software code, which can be recognized by both a syntax highlighting (various keywords are printed with use of different colors) and the presence of a pair of curly braces.',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CNGC1T2nWLS/',
			lospecUrl:
				'https://lospec.com/gallery/beetrootpaul/pair-of-curly-brackets',
			mastodonUrl: 'https://mastodon.art/web/@beetrootpaul/109297894876051958',
			xUrl: 'https://x.com/nkoder/status/1377337270835945476',
		},
		progress: [],
	},
	{
		title: 'exercise – tileset',
		artwork: {
			big: 'exercisetileset_20210328_Udemy_challenge_6_tiles_Twitter.png',
			thumbnail:
				'exercisetileset_20210328_Udemy_challenge_6_tiles_original.png',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-03-29'),
		descriptionParagraphs: [
			[
				{
					text: 'My first ever tileset. Drawn in a GameBoy style.',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5147863',
			instagramUrl: 'https://www.instagram.com/p/CM-1trvHVGY/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/exercise-tileset',
			mastodonUrl: 'https://mastodon.art/web/@beetrootpaul/109297886350382852',
			xUrl: 'https://x.com/nkoder/status/1376324457413931010',
		},
		progress: [
			{
				big: 'exercisetileset_20210328_Udemy_challenge_6_tiles_behind_the_scenes.png',
			},
		],
	},
];

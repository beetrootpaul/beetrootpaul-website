import { text } from '@sveltejs/kit';
import { DEBUG } from './debug';

export type PortfolioEntry = {
	// An unique segment of a URL path. Please keep it really unique so it can be also
	// treated as an ID.
	//
	// NOTE: Not used yet, but might be useful to have it already filled in.
	slug: string;
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		// TODO: todo
		slug: 'TODO',
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
		slug: '088-kitchen-knife-256px',
		title: 'Kitchen Knife 256px',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-08-10'),
		// TODO: fill in
		descriptionParagraphs: [
			[
				{
					text: 'Just a 1-bit drawing of a kitchen knife 🤷♂️',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/ys-funky-jam',
					linkUrl: 'https://lospec.com/palette-list/ys-funky-jam',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5125102',
			instagramUrl: 'https://www.instagram.com/p/CSclv1mIeSs/',
			xUrl: 'https://twitter.com/nkoder/status/1425545951071162368',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '079-castlevania-remaster',
		title: 'Castlevania Remaster',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art'],
		dateFinished: new Date('2021-07-18'),
		descriptionParagraphs: [
			[
				{
					text: 'My version of a level 1 scene from Castlevania video game as provided by a ',
				},
				{
					text: 'special PixelDailies prompt',
					linkUrl:
						'https://twitter.com/Pixel_Dailies/status/1416367078542434310',
				},
				{
					text: '. I decided for a kinda futuristic look and challenged myself to use 4 colors only.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/jb4',
					linkUrl: 'https://lospec.com/palette-list/jb4',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CRd73Zdnr9X/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/castlevania-remaster',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/109693373908423426',
			xUrl: 'https://twitter.com/nkoder/status/1416728880359092227',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '073-lucid-oenn-fanart',
		title: 'Lucid Oenn Fanart',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'animation'],
		dateFinished: new Date('2021-06-26'),
		descriptionParagraphs: [
			[
				{
					text: 'An animated pixel art drawing of Oenn character from yet-to-be-released ',
				},
				{
					text: 'Lucid game by The Matte Black Studio',
					linkUrl: 'https://twitter.com/_theMatteBlack',
				},
				{
					text: '. In a style of a poster or a short teaser.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/eulbink',
					linkUrl: 'https://lospec.com/palette-list/eulbink',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CQj9T-fBKvs/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/lucid-oenn',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/109597986300673322',
			xUrl: 'https://twitter.com/nkoder/status/1408570346815557639',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '065-escalator',
		title: 'Escalator',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-06-10'),
		descriptionParagraphs: [
			[
				{
					text: 'Minimalistic depiction of an escalator (for example in a supermarket), in 4 colors.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/that-one-tacobell-table',
					linkUrl: 'https://lospec.com/palette-list/that-one-tacobell-table',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5125067',
			instagramUrl: 'https://www.instagram.com/p/CP6vkkFHhaY/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/escalator',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/109548621475081262',
			xUrl: 'https://twitter.com/nkoder/status/1402769123956887552',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '056-outnumbered',
		title: 'Outnumbered',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc', 'animation'],
		dateFinished: new Date('2021-05-23'),
		descriptionParagraphs: [
			[
				{
					text: 'My first longer animation. I started with a storyboard, processed to a raw draft to check if the timing makes sense and gives a proper feel. Then, I drew a proper polished animation.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/blk-neo',
					linkUrl: 'https://lospec.com/palette-list/blk-neo',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CPUBEDKHhNO/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/outnumbered',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/109469135834677093',
			xUrl: 'https://twitter.com/nkoder/status/1397318896739291138',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '045-tape-nostalgia',
		title: 'Tape: Nostalgia',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art'],
		dateFinished: new Date('2021-04-27'),
		descriptionParagraphs: [
			[
				{
					text: 'There is this type of a cassettes collage photo which you can easily find in internet. So… I decided to drew mine as well 😄',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/resurrect-64',
					linkUrl: 'https://lospec.com/palette-list/resurrect-64',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5125072',
			instagramUrl: 'https://www.instagram.com/p/COKM5GOIwig/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/tape-nostalgia',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/109353522417380991',
			xUrl: 'https://twitter.com/nkoder/status/1386960810463973378',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '044-one-of-a-kind',
		title: 'One of a Kind',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art'],
		dateFinished: new Date('2021-04-25'),
		descriptionParagraphs: [
			[
				{
					text: 'A drawing of that one special LEGO piece – a brick separator.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/resurrect-64',
					linkUrl: 'https://lospec.com/palette-list/resurrect-64',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/COFGyP6Ig83/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/one-of-a-kind',
			mastodonUrl: 'https://mastodon.art/web/@beetrootpaul/109344425916447792',
			xUrl: 'https://twitter.com/nkoder/status/1386243586639892480',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '040-to-be-continued',
		title: 'To Be Continued',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art'],
		dateFinished: new Date('2021-04-21'),
		descriptionParagraphs: [
			[
				{
					text: 'My own favorite piece so far. Minimalistic. In a mood of a lunch break taken in a middle of a hot summer day. 4 colors only.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/oil-6',
					linkUrl: 'https://lospec.com/palette-list/oil-6',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5125094',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/to-be-continued',
			mastodonUrl: 'https://mastodon.art/web/@beetrootpaul/109320338976771133',
			xUrl: 'https://twitter.com/nkoder/status/1384794033017417738',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '032-ground-cumin',
		title: 'Ground Cumin',
		artwork: {
			big: 'groundcumin_x8.png',
			thumbnail: 'groundcumin_x1.png',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-04-11'),
		descriptionParagraphs: [
			[
				{
					text: 'Just a 1-bit drawing of a tiny jar of ground cumin.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/bluerown-1bit',
					linkUrl: 'https://lospec.com/palette-list/bluerown-1bit',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5125077',
			instagramUrl: 'https://www.instagram.com/p/CNib0j-nOi_/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/ground-cumin',
			mastodonUrl: 'https://mastodon.art/web/@beetrootpaul/109308786462574894',
			xUrl: 'https://x.com/nkoder/status/1381333727658311683',
		},
		progress: [],
	},
	{
		slug: '020-pair-of-curly-brackets',
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
		slug: '017-exercise-tileset',
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

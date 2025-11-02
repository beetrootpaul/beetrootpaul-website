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
		slug: '155-dart-07',
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
		slug: '148-encounter',
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
		slug: '147-table-corner',
		title: 'Table Corner',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2022-04-24'),
		descriptionParagraphs: [
			[
				{
					text: 'A simplistic drawing of table corner with use of 6 colors only.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/bauhaus',
					linkUrl: 'https://lospec.com/palette-list/bauhaus',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CcvvZSPoAV9/',
			xUrl: 'https://twitter.com/beetrootpaul/status/1518314071929634818',
		},
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
		slug: '145-no-longer-a-hero',
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
		slug: '143-void-bringer',
		title: 'Void Bringer',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2022-02-18'),
		descriptionParagraphs: [
			[
				{
					text: 'My inspiration came from a ',
				},
				{
					text: 'Loop Hero game',
					linkUrl: 'https://loophero.com/',
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
					text: 'lospec.com/palette-list/bubblegum-16',
					linkUrl: 'https://lospec.com/palette-list/bubblegum-16',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CaGQPonoWCT/',
			xUrl: 'https://twitter.com/beetrootpaul/status/1494461076536233990',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '142-sorren',
		title: 'Sorren',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['animation', 'pixel_art', 'chiptune', 'oc'],
		dateFinished: new Date('2022-02-09'),
		descriptionParagraphs: [
			[
				{
					text: 'For this animated piece I used a ',
				},
				{
					text: 'photo from The Pose Archives',
					linkUrl:
						'https://twitter.com/theposearchives/status/1462541055509741569',
				},
				{
					text: ' as a character pose reference.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/deadbeat-gb',
					linkUrl: 'https://lospec.com/palette-list/deadbeat-gb',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CZwC2InocCb/',
			xUrl: 'https://twitter.com/beetrootpaul/status/1491335341965717508',
			youtubeUrl: 'https://youtu.be/9dIv1o3X500',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '136-winter-cottage',
		title: 'Winter Cottage',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-12-24'),
		descriptionParagraphs: [
			[
				{
					text: 'My goals was an izometric cozy winter piece. And I think I achieved it 🙂',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/archerer48',
					linkUrl: 'https://lospec.com/palette-list/archerer48',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CX3RGgIoAKc/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/winter-cottage',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/110728641604817064',
			xUrl: 'https://twitter.com/beetrootpaul/status/1474337434401976324',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '132-black-hole',
		title: 'Black Hole',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-11-24'),
		descriptionParagraphs: [
			[
				{
					text: `A depiction of a black hole based on they way it's portraited since Interstellar movie.`,
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/slso8',
					linkUrl: 'https://lospec.com/palette-list/slso8',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5189620',
			instagramUrl: 'https://www.instagram.com/p/CWqw-FrI-xk/',
			lospecUrl: 'https://www.instagram.com/p/CWqw-FrI-xk/',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/110689216034906640',
			xUrl: 'https://twitter.com/beetrootpaul/status/1463570850528038920',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '131-dune',
		title: 'Dune',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art'],
		dateFinished: new Date('2021-11-20'),
		descriptionParagraphs: [
			[
				{
					text: 'A 6-colors pixel art drawing of a dune, based on a ',
				},
				{
					text: 'reference photo',
					linkUrl:
						'https://www.pexels.com/photo/sand-dunes-under-blue-sky-2403629/',
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
					text: 'lospec.com/palette-list/archerer48',
					linkUrl: 'https://lospec.com/palette-list/archerer48',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CWiGPkuIV7F/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/dune',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/110646621231421984',
			xUrl: 'https://twitter.com/beetrootpaul/status/1462349828617289729',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '103-forgotten-planet',
		title: 'Forgotten Planet',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-10-09'),
		descriptionParagraphs: [
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/slso8',
					linkUrl: 'https://lospec.com/palette-list/slso8',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5125008',
			instagramUrl: 'https://www.instagram.com/p/CTnoxDAICJM/',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/forgotten-planet',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/110067928858851883',
			xUrl: 'https://twitter.com/nkoder/status/1436108746711777287',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '126-bright-future',
		title: 'Bright Future',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-09-29'),
		descriptionParagraphs: [
			[
				{
					text: 'My trial on depicting a dystopian, polluted future. Partially inspired by an intro sequence of a first Blade Runner movie.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/temple-ruins',
					linkUrl: 'https://lospec.com/palette-list/temple-ruins',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5147865',
			instagramUrl: 'https://www.instagram.com/p/CUYki-rox4F',
			lospecUrl: 'https://lospec.com/gallery/beetrootpaul/bright-future',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/110564413732031677',
			xUrl: 'https://twitter.com/nkoder/status/1442995743938256896',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '120-let-the-adventure-begin',
		title: 'Let The Adventure Begin',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'animation', 'oc'],
		dateFinished: new Date('2021-09-24'),
		descriptionParagraphs: [
			[
				{
					text: 'An animated 4-colors piece based on a tileset which is supposed to look like a screen from a vide game.',
				},
			],
			[
				{
					text: 'Palette: ',
				},
				{
					text: 'lospec.com/palette-list/nintendo-super-gameboy',
					linkUrl: 'https://lospec.com/palette-list/nintendo-super-gameboy',
				},
			],
		],
		publications: {
			displateUrl: 'https://displate.com/displate/5133010',
			instagramUrl: 'https://www.instagram.com/p/CUQKrLNIhlm/',
			lospecUrl:
				'https://lospec.com/gallery/beetrootpaul/septembit-2021-evil-eye-trap-chest-treasure-boss-key',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/110510806769708971',
			xUrl: 'https://twitter.com/nkoder/status/1441812729564745736',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '097-125-septembit-2021',
		title: '#SeptemBIT 2021',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art', 'oc'],
		dateFinished: new Date('2021-09-19'),
		descriptionParagraphs: [
			[
				{
					text: 'A series of pixel art piece drawn during ',
				},
				{
					text: '#SeptemBit 2021 challenge',
					linkUrl: 'https://twitter.com/septembit/status/1432742915550351360',
				},
				{
					text: ' organized by ',
				},
				{
					text: 'Saultoons',
					linkUrl: 'https://www.youtube.com/@saultoons',
				},
				{
					text: '.',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CUQKrLNIhlm/',
			lospecUrl:
				'https://lospec.com/gallery/beetrootpaul/septembit-2021-evil-eye-trap-chest-treasure-boss-key',
			mastodonUrl: 'https://mastodon.art/@beetrootpaul/110510806769708971',
			xUrl: 'https://twitter.com/nkoder/status/1441812729564745736',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '099-animated-emoji-same',
		title: 'Animated Emoji ":same:"',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['animation', 'pixel_art', 'oc'],
		dateFinished: new Date('2021-09-04'),
		descriptionParagraphs: [
			[
				{
					text: 'An animated emoji meant to be used on Discord servers. My main focus was text legibility. ',
				},
				{
					text: 'You can download it from ',
					bold: true,
				},
				{
					text: 'beetrootpaul.itch.io/animated-emoji-same',
					bold: true,
					linkUrl: 'https://beetrootpaul.itch.io/animated-emoji-same',
				},
				{
					text: ' 🎁',
					bold: true,
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CTYKFfdICRz/',
			itchUrl: 'https://beetrootpaul.itch.io/animated-emoji-same',
			xUrl: 'https://twitter.com/nkoder/status/1433928472204910592',
		},
		// TODO: fill in
		progress: [],
	},
	{
		slug: '090-study-of-a-supermarket-fridge',
		title: 'Study of a Supermarket Fridge',
		artwork: {
			// TODO: fill in
			big: 'TODO',
			thumbnail: 'TODO',
		},
		type: ['pixel_art'],
		dateFinished: new Date('2021-08-17'),
		descriptionParagraphs: [
			[
				{
					text: 'A pixel art drawing based on a ',
				},
				{
					text: 'reference photo',
					linkUrl:
						'https://www.dreamstime.com/milk-yoghurt-product-glass-door-fridge-horizontal-photo-mockup-plastic-diary-bottles-vertical-freezer-supermarket-image209124609',
				},
				{
					text: ' made by ',
				},
				{
					text: 'whatsontheshelf',
					linkUrl: 'https://twitter.com/whatsontheshel1',
				},
				{
					text: '. This piece is full of dithering used in order to achieve more colors than the 8 available in the ',
				},
				{
					text: 'DB8 palette',
					linkUrl: 'https://lospec.com/palette-list/dawnbringers-8-color',
				},
				{
					text: '.',
				},
			],
		],
		publications: {
			instagramUrl: 'https://www.instagram.com/p/CSqvjaRIlFl/',
			xUrl: 'https://twitter.com/nkoder/status/1427538453718315018',
		},
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

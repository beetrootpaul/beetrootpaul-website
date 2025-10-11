type Link = {
	label: string;
	href: string;
	icon?: boolean;
};

export const links: Link[] = [
	{
		label: 'BeetPx game framework',
		href: 'https://beetpx.dev/',
	},
	{
		label: 'my portfolio',
		href: '/portfolio',
	},
	{
		label: 'my metal posters',
		href: 'https://displate.com/beetrootpaul?art=61810f4206832',
	},
	{
		label: 'Bluesky',
		href: 'https://bsky.app/profile/beetrootpaul.bsky.social',
		icon: true,
	},
	{
		label: 'Cara',
		href: 'https://cara.app/beetrootpaul',
		icon: true,
	},
	{
		label: 'GitHub',
		href: 'https://github.com/beetrootpaul',
		icon: true,
	},
	{
		label: 'itch.io',
		href: 'https://beetrootpaul.itch.io/',
		icon: true,
	},
	{
		label: 'Mastodon',
		href: 'https://mastodon.social/@beetrootpaul',
		icon: true,
	},
	{
		label: 'YouTube',
		href: 'https://www.youtube.com/@beetrootpaul',
		icon: true,
	},
];

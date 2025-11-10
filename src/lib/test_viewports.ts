type TestViewport = {
	id: string;
	viewport: [number, number];
	name: string;
};

export const testViewports: TestViewport[] = [
	{ id: 'iphone_se_p', viewport: [375, 667], name: 'iPhone SE portrait' },
	{ id: 'iphone_se_l', viewport: [667, 375], name: 'iPhone SE landscape' },
	{ id: 'ipad_mini_p', viewport: [768, 1024], name: 'iPad Mini portrait' },
	{ id: 'ipad_mini_l', viewport: [1024, 768], name: 'iPad Mini landscape' },
	{ id: 'ipad_pro_p', viewport: [1024, 1366], name: 'iPad Pro portrait' },
	{ id: 'ipad_pro_l', viewport: [1366, 1024], name: 'iPad Pro landscape' },
	{ id: 'full_hd', viewport: [1920, 1080], name: 'Full HD' },
];

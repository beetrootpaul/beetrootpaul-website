import { expect, test } from 'vitest';
import { page } from 'vitest/browser';

test('button looks correct', async () => {
	const button = page.getByRole('button');
	await expect(button).toMatchScreenshot('primary-button');
});

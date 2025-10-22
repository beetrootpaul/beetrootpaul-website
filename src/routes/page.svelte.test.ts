import { logger, multiplier, multiplier2 } from '$lib/multiplier.svelte';
import { describe } from 'node:test';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test } from 'vitest';
// import { page } from 'vitest/browser'
// import Page from './+page.svelte';


describe('many', () => {

    test('/ page (home)', async () => {
        // Instantiate the component using Svelte's `mount` API
        // const component = mount(Page, {
        //     target: document.body, // `document` exists because of jsdom
        //     props: {}
        // });
        //
        // await expect(page.getByTestId('hero')).toMatchScreenshot('hero-section')
        // // expect(document.body.innerHTML).toBe('<button>0</button>');
        //
        // // Click the button, then flush the changes so you can synchronously write expectations
        // // document.body.querySelector('button').click();
        // flushSync();
        //
        // expect(document.body.innerHTML).toBe('<button>1</button>');
        //
        // // Remove the component from the DOM
        // unmount(component);

        let count = $state(0);
        let double = multiplier2(() => count, 2);

        expect(double.value).toEqual(0);

        count = 5;

        expect(double.value).toEqual(10);
    });

    test('Effect', () => {
        expect(2).toEqual(2);

        const cleanup = $effect.root(() => {
            let count = $state(0);

            // logger uses an $effect to log updates of its input
            let log = logger(() => count);

            // effects normally run after a microtask,
            // use flushSync to execute all pending effects synchronously
            flushSync();
            expect(log).toEqual([123]);

            count = 1;
            flushSync();

            expect(log).toEqual([0, 123]);
        });

        cleanup();
    });


});

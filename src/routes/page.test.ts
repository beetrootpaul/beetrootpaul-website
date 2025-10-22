import { multiplier } from '$lib/multiplier.svelte';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test } from 'vitest';
// import { page } from 'vitest/browser'
// import Page from './+page.svelte';


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

    let double = multiplier(0, 2);

    expect(double.value).toEqual(0);

    double.set(5);

    expect(double.value).toEqual(10);
});

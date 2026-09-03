# beetrootpaul-website

Codebase of the beetrootpaul.com website

## Initial steps

```shell
nvm use
npm install
```

## Development

```shell
npm run dev -- --open
```

## Static build

```shell
npm run build
npm run preview -- --open
```

## Tests

```shell
npm test
```

or to update the reference screenshots:

```shell
npm test -- --update
```

## Common questions

### How to quickly update some portfolio URL?

1. Go to `src/lib/portfiolio_entries.ts` and edit the URL (might occur more than once).
2. Build the static version of the app.
3. Commit and push to GitHub.

### Why my YouTube Shorts URL break the fslightbox integration for YT videos?

First, you might see "invalid source" in the correctly working fslightbox if the URL domain is `youtube.com`. The supported format is either `www.youtube.com` or `youtu.be`.

Then, the corrected URL makes the fslightbox not open for any of
the YT videos on the page. This happens when the URL does not match
an expected pattern. Shorts have a format of `https://youtube.com/shorts/<video_id>`. Is is not supported. The workaroung is
to use a regular video short URL and just re-use the ID:
`https://youtu.be/<video_id>`.

## Helpful links

- Prettier options: <https://prettier.io/docs/options>

## Attributions

### Fullscreen Lightbox Basic

- website: <https://fslightbox.com/javascript>
- creator: Piotr Zdziarski
- license: The MIT License

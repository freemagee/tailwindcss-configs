# Tailwindcss configs

For Tailwindcss v1.4.4

## Default

**See** `tailwind.config.default.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.default.css -c tailwind.config.default.js
```

This is the default config generated by running `npx tailwind init` in the root of your project.

| Lines of CSS | Filesize |
| :----------- | -------: |
| 92727        |   1.95Mb |

---

## Empty

**See** `tailwind.config.empty.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.default.css -c tailwind.config.empty.js
```

This config has nothing default enabled. A good place to begin adding what you need to corePlugins.

| Lines of CSS | Filesize |
| :----------- | -------: |
| 0            |      0Kb |

---

## Bare

**See** `tailwind.config.bare.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.bare.css -c tailwind.config.bare.js
```

This config shows how to control what styles are being generated and how to produce a minimal filesize. Only certain `corePlugins` are enabled. Only certain `theme` values are set. Only the `variants` needed are enabled.

| Lines of CSS | Filesize |
| :----------- | -------: |
| 143          |   1.33Kb |

---

# Additional Boilerplates

The following are special configs and are not meant to be used as they are. They list all available options for a specific topic. Combining some of these will allow you to control your Tailwindcss output filesize.

### Before you proceed

I noticed there were some missing `corePlugins` from the [Tailwindcss documentation](https://tailwindcss.com/docs/configuration/#core-plugins). I have added any I have found. The list of corePlugins currently missing from their documentation is below:

- divideOpacity
- transformOrigin
- transitionDelay

## All core plugins enabled

**See** `tailwind.config.allCorePlugins.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.allCorePlugins.css -c tailwind.config.allCorePlugins.js
```

### What is this useful for?

If you only want to use specific corePlugins, then you can edit the `corePlugins` object and remove any you do not need or set them to `false`. If you only need `margin`, `padding`, `textColor` and `flex` for example, then this will allow you to control your output size.

**Note** The output css from this config if unedited is the same as the default config. Because everything is enabled.

| Lines of CSS | Filesize |
| :----------- | -------: |
| 92727        |   1.95Mb |

---

## All core plugins disabled

**See** `tailwind.config.allCorePluginsDisabled.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.allCorePluginsDisabled.css -c tailwind.config.allCorePluginsDisabled.js
```

### What is this useful for?

If you only want to enable specific corePlugins, then you can edit the `corePlugins` object and set any you want to use to `true`. If you do need `objectFit` and `objectPosition` for example, then this will allow you to control your output size.

| Lines of CSS | Filesize |
| :----------- | -------: |
| 0            |      0Kb |

---

## No variants

**See** `tailwind.config.noVariants.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.noVariants.css -c tailwind.config.noVariants.js
```

### What is this useful for?

All corePlugins are enabled. This config prevents any variants from being generated. If you want responsive for a particular corePlugin, then you can edit it like so `container: ["responsive"]`. Gives more control of the final output css. Edit the `variants` object and take control.

| Lines of CSS | Filesize |
| :----------- | -------: |
| 11336        | 200.82Kb |

---

# Real world

**See** `tailwind.config.realWorld.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.realWorld.css -c tailwind.config.realWorld.js
```

### What is this useful for?

This is similar to the config I have used on [Responsive Hacker News](https://github.com/freemagee/hn). It is an example of how to add your own theme configuration and cherry pick what `corePlugins` and `variants` you want to use.

**Note** The real world CSS filesize generated from this config is a lot smaller than the example table below, because in production it uses the `purge` option and removes all class names that are not present in the template files. After minification, the filesize is actually **4Kb**!

| Lines of CSS | Filesize |
| :----------- | -------: |
| 6056         |  73.68Kb |

# Tailwindcss configs

For Tailwindcss v1.1.3

## Default

**See** `tailwind.config.default.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.default.css -c tailwind.config.default.js
```

This is the default config generated by running `npx tailwind init` in the root of your project.

| Lines of CSS | Filesize |
| :- | -: |
| 54309 | 855Kb |

---

## Empty

**See** `tailwind.config.empty.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.default.css -c tailwind.config.empty.js
```

This config has nothing default enabled. A good place to begin adding what you need to corePlugins.

| Lines of CSS | Filesize |
| :- | -: |
| 0 | 0Kb |

---

## Bare

**See** `tailwind.config.bare.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.bare.css -c tailwind.config.bare.js
```

This config shows how to control what styles are being generated and how to produce a minimal filesize. Only certain `corePlugins` are enabled. Only certain `theme` values are set. Only the `variants` needed are enabled.

| Lines of CSS | Filesize |
| :- | -: |
| 143 | 2Kb |

---

# Additional Boilerplates

The following are special configs and are not meant to be used as they are. They list all available options for a specific topic. Combining some of these will allow you to control your Tailwindcss output filesize.

## All core plugins enabled

**See** `tailwind.config.allCorePlugins.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.allCorePlugins.css -c tailwind.config.allCorePlugins.js
```

### What is this useful for?

If you only want to use specific corePlugins, then you can edit the `corePlugins` array and remove any you do not need. If you only need `margin`, `padding`, `textColor` and `flex` for example, then this will allow you to control your output size.

**Note** The output css from this config if unedited is the same as the default config.

| Lines of CSS | Filesize |
| :- | -: |
| 54309 | 855Kb |

---

## All core plugins disabled

**See** `tailwind.config.allCorePluginsDisabled.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.allCorePluginsDisabled.css -c tailwind.config.allCorePluginsDisabled.js
```

### What is this useful for?

If you only want to disable specific corePlugins, then you can edit the `corePlugins` array and remove any you want to use. If you do not need `objectFit` and `objectPosition` for example, then this will allow you to control your output size.

| Lines of CSS | Filesize |
| :- | -: |
| 0 | 0Kb |

---

## No variants

**See** `tailwind.config.noVariants.js`

```bash
npx tailwind build CSS/input.css -o CSS/tailwind.noVariants.css -c tailwind.config.noVariants.js
```

### What is this useful for?

Prevents any variants from being generated. If you want responsive for a particular corePlugin, then you can edit it like so `container: ["responsive"]`. Gives more control of the final output css. Edit the `variants` object and remove any corePlugins you are not using or trying to limit.

| Lines of CSS | Filesize |
| :- | -: |
| 7046 | 88Kb |
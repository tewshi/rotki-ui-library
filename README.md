# @rotki/ui-library

A vue component library and design system for rotki

### Installation

To install the dependencies you need to run on the root of the repository

```
pnpm install
```

### Compiles and minifies for production
The following command when executed from the project root will build the `@rotki/ui-library` bundle.
This command will create the bundle for both Vue version 2.7 and 3.
```
pnpm run build:prod
```

If you want to build for specific version, you can run:
```
pnpm run build:v2
pnpm run build:v3
```

by default if you run this command, it will build the package for version 2, the version that installed by default in this package
```
pnpm run build
```

### Lint check
```
pnpm run lint
```

### Lints and fixes files
```
pnpm run lint:fix
```

# Storybook
In order to run the storybook, you can run:

```
pnpm run storybook
```

# How to test the usage locally.
After you build the bundle, in the `package.json` on your main project, you can add this to the dependencies:

```json
{
  "@rotki/ui-library": "file:...path_of_this_directory"
}
```

When the dependency installed on the main project, it will run the `postinstall` script to determine which dist version will be used, based on the Vue version on the main project.

Don't forget to import the `style.css` file from `@rotki/ui-library`

```typescript
import '@rotki/ui-library/dist/style.css';
```

And then you can use the component 
```vue
<script setup lang="ts">
import { Button as RotkiButton } from '@rotki/ui-library';
</script>

<template>
  <v-container>
    <rotki-button label="This is button" outlined />
  </v-container>
</template>
```

## License

[AGPL-3.0](./LICENSE) License &copy; 2023- [Rotki Solutions GmbH](https://github.com/rotki)


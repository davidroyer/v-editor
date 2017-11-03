# v-editor

My polished Vue component.

## Install

```bash
yarn add v-editor
```

CDN: [UNPKG](https://unpkg.com/v-editor/) | [jsDelivr](https://cdn.jsdelivr.net/npm/v-editor/) (available as `window.VEditor`)

## Usage

```vue
<template>
  <v-editor v-model="content"></v-editor>
</template>

<script>
import VEditor from 'v-editor'

export default {
  components: {
    VEditor
  },
  data() {
    return {
      content: '<h1>Content for editor</h1>'
    }
  }
}
</script>
```

## License

MIT &copy; [David Royer](https://davidroyer.me)

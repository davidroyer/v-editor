<template>
  <div id="app">
    <v-editor v-model="contentForEditor"></v-editor>
    <div class="preview" v-html="contentForEditor"></div>

  </div>
</template>

<script>
import VEditor from '../src/VEditor.vue'

export default {
  components: {
    VEditor
  },
  data() {
    return {
    contentForEditor: '<p><strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit. Asperiores facere rem nostrum molestiae. Minus, amet recusandae nam vel explicabo nisi error quaerat magnam excepturi veniam.</p>'
    }
  }
}
</script>

<template>
  <textarea ref="editor" id="editor" v-bind:value="value" name="content"></textarea>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'v-editor',
  props: ['value'],
  data: function () {
    return {
      editor: null
    }
  },

  mounted: function () {
    this.createEditor()
  },

  methods: {
    createEditor() {
      return ClassicEditor.create(this.$refs.editor)
        .then(editor => {
          this.editor = editor;
          this.handleUpdates()
        })
        .catch(error => {
          console.error(error);
        });
    },

    handleUpdates () {
      this.editor.document.on('changesDone', () => {
        this.$emit('input', this.editor.getData())
      })
    }
  }
}
</script>

<style lang="css">
  .ck-editor__editable {
    min-height: 220px;
  }
</style>

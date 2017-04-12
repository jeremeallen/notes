<template>
  <div id="note-editor">
    <textarea
      :value="displayText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>

export default {
  computed: {
    displayText() {
      return this.$store.getters.activeNote.text;
    },
  },
  methods: {
    editNote(e) {
      this.$store.dispatch('editNote', e.target.value);
    },
  },
};
</script>

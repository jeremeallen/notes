<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeNoteText: this.$store.getters.activeNote.text,
    };
  },
  methods: {
    editNote() {
      this.$store.dispatch('editNote', this.activeNoteText);
    },
  },
};
</script>

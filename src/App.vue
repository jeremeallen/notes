<template>
  <div id="app">
      <toolbar></toolbar>
      <notes-list></notes-list>
      <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';
import NotesList from './components/NotesList';
import Editor from './components/Editor';

export default {
  name: 'app',
  components: {
    Toolbar,
    NotesList,
    Editor,
  },
};
</script>


import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

Vue.use(Vuex);

// the root, initial state object
const state = {
  notes: [],
  activeNote: {
    favorite: false,
  },
};

// define the possible mutations that can be applied to our state
const mutations = {
  ADD_NOTE(appState) {
    const theState = appState;
    const newNote = {
      text: 'New note',
      favorite: false,
    };

    // only mutators can mutate the state
    theState.notes.push(newNote);
    theState.activeNote = newNote;
  },
  EDIT_NOTE(appState, text) {
    const theState = appState;
    theState.activeNote.text = text;
  },
  DELETE_NOTE(appState) {
    const theState = appState;
    state.notes.$remove(state.activeNote);
    theState.activeNote = state.notes[0];
  },
  TOGGLE_FAVORITE(appState) {
    const theState = appState;
    theState.activeNote.favorite = !state.activeNote.favorite;
  },
  SET_ACTIVE_NOTE(appState, note) {
    const theState = appState;
    theState.activeNote = note;
  },
};

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions: {
    addNote(context) {
      context.commit('ADD_NOTE');
    },
    editNote(context, text) {
      context.commit('EDIT_NOTE', text);
    },
    deleteNote(context) {
      context.commit('DELETE_NOTE');
    },
    updateActiveNote(context, note) {
      context.commit('SET_ACTIVE_NOTE', note);
    },
    toggleFavorite(context) {
      context.commit('TOGGLE_FAVORITE');
    },
  },
});

import Ember from 'ember';
import computed from 'ember-new-computed';

const { Component, computed: { empty } } = Ember;

export default Component.extend({
  emptySnippet: empty('snippet'),
  exampleFrameClass: 'col s12 position-relative',
  init() {
    this._super(...arguments);
    this.tar = this.get('targetObject') || this.get('_targetObject');
  },
  partialName: computed('snippet', {
    get() {
      return `snippets/${this.get('snippet') || 'none'}`;
    }
  }),
  snippetName: computed('snippet', {
    get() {
      return `${this.get('snippet') || 'none'}.hbs`;
    }
  }),
  send() {
    this.tar.send(...arguments);
  }
});

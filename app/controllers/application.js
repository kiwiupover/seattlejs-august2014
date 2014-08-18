import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    showMessage: function() {
      this.toggleProperty('showTheMessage');
    },

    cancel: function() {
      this.toggleProperty('showTheMessage');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['tooLong:warn'],

  totalCount: function() {
    return this.get('value.length');
  }.property('value'),

  tooLong: function(){
   return this.get('value.length') > 50;
  }.property('value')
});

define([
  'jquery',
  'pat-base',
], function($, Base) {
  'use strict';

  var Pattern = Base.extend({
    name: 'exercise5',
    trigger: '.pat-exercise5',
    parser: 'mockup',
    defaults: {
    },
    init: function() {
      var that = this;
      that.$el.append(' <span>Exercise 5 was here</span>');
    }
  });

  return Pattern;
});

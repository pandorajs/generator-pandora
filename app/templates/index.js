'use strict';

var <%= extendClassName %> = require('<%= _.slugify(extendName) %>');

var <%= varName %> = <%= extendClassName %>.extend({

  defaults: {

  },

  setup: function() {

  }

});

module.exports = <%= varName %>;


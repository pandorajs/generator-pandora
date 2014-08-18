define(function(require, exports, module) {

  'use strict';

  var <%= extendedby %> = require('<%= _.slugify(extendedby) %>');

  var <%= name %> = <%= extendedby %>.extend({

    defaults: {

    },

    setup: function() {

    }

  });

  module.exports = <%= name %>;

});

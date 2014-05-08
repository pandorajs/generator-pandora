define(function (require, exports, module) {

'use strict';

var $ = require('$'), // if $ is never used in this file, please remove it!!!
  <%= extendedby %> = require('<%= _.slugify(extendedby) %>');

var <%= name %> = <%= extendedby %>.extend({

  defaults: {

  },

  setup: function () {

  }

});

module.exports = <%= name %>;

});

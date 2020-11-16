define(['exports'], function (exports) { 'use strict';

    var homepage = {
      'css': null,

      'exports': {
        onMounted() {
            console.log("mounted");
        },

        onUnmounted() {
            console.log("unmounted");
        },

        onUpdated() {
            console.log("updated");
        }
      },

      'template': function(template, expressionTypes, bindingTypes, getComponent) {
        return template(' <img expr35="expr35" src="image1.jpg" need-loading/>', [{
          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,

            'evaluate': function(scope) {
              return ['HOME ', Math.round(Math.random() * 32)].join('');
            }
          }]
        }, {
          'redundantAttribute': 'expr35',
          'selector': '[expr35]',

          'expressions': [{
            'type': expressionTypes.EVENT,
            'name': 'onclick',

            'evaluate': function(scope) {
              return () => { scope.update(); };
            }
          }]
        }]);
      },

      'name': 'homepage'
    };

    exports.default = homepage;

});
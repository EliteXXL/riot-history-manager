define(['exports'], function (exports) { 'use strict';

    var rhmHomepage = {
      'css': null,

      'exports': {
        onMounted() {
            console.log("homepage mounted");
        },

        onUnmounted() {
            console.log("homepage unmounted");
        },

        onUpdated() {
            console.log("homepage updated");
        }
      },

      'template': function(
        template,
        expressionTypes,
        bindingTypes,
        getComponent
      ) {
        return template(
          '<div><img expr33="expr33" src="image1.jpg" need-loading/></div><div expr34="expr34"> </div>',
          [
            {
              'redundantAttribute': 'expr33',
              'selector': '[expr33]',

              'expressions': [
                {
                  'type': expressionTypes.EVENT,
                  'name': 'onclick',

                  'evaluate': function(
                    _scope
                  ) {
                    return _scope.update.bind(_scope);
                  }
                }
              ]
            },
            {
              'redundantAttribute': 'expr34',
              'selector': '[expr34]',

              'expressions': [
                {
                  'type': expressionTypes.TEXT,
                  'childNodeIndex': 0,

                  'evaluate': function(
                    _scope
                  ) {
                    return [
                      'HOME ',
                      Math.round(Math.random() * 32)
                    ].join(
                      ''
                    );
                  }
                }
              ]
            }
          ]
        );
      },

      'name': 'rhm-homepage'
    };

    exports['default'] = rhmHomepage;

});

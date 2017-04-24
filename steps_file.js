
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    say : function(text){
      console.log(text);
    }

  });
}

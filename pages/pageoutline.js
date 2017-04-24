
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  // insert your locators and methods here
    addCard(){
        var editorContainer ="http://hydra.dit-ord.cobalt.com/hydra-graph/wsm/route/base-view/pageOutlineConfigurator?configCtx=%7B%22webId%22%3A%22gmps-hydra01%22%2C%22locale%22%3A%22en_US%22%2C%22version%22%3A%22WIP%22%2C%22page%22%3A%22HomePage%22%7D&allStyles=true"
        I.amOnPage(editorContainer);

        I.see('Page');
      I.say("Hello");
    }
}

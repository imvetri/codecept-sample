
Feature('IframeSwitchTest');

var editorContainer ="http://hydra.dit-ord.cobalt.com/hydra-graph/wsm/route/base-view/pageOutlineConfigurator?configCtx=%7B%22webId%22%3A%22gmps-hydra01%22%2C%22locale%22%3A%22en_US%22%2C%22version%22%3A%22WIP%22%2C%22page%22%3A%22HomePage%22%7D&allStyles=true"

Scenario('test clicking unclickable items', (I) => {
    I.amOnPage(editorContainer);

    I.see('Page');
    I.click('Hero Rotator');
    I.wait(1);
    I.click('replace',false);
    pause();
});

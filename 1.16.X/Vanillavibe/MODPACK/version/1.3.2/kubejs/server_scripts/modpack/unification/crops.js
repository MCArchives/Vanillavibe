//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
//╔════════════════════════════════════════╗
//║            REPLACE OUTPUT              ║
//╚════════════════════════════════════════╝

 event.replaceOutput({}, "#c:blueberries", "promenade:blueberries");
 event.replaceOutput({}, "#c:fruits/blueberries", "promenade:blueberries");
 event.replaceOutput({}, "#c:fruits/raspberries", "alaskanativecraft:raspberries");
 event.replaceOutput({}, "#c:grains/rice", "farmersdelight:rice");
 event.replaceOutput({}, "#c:lettuce_head", "croptopia:lettuce");
 event.replaceOutput({}, "#c:onion", "farmersdelight:onion");
 event.replaceOutput({}, "#c:tomato", "farmersdelight:tomato");
 event.replaceOutput({}, "#c:vegetables/cabbage", "farmersdelight:cabbage");
 event.replaceOutput({}, "#c:vegetables/onion", "farmersdelight:onion");

//╔════════════════════════════════════════╗
//║             REPLACE INPUT              ║
//╚════════════════════════════════════════╝


 event.replaceInput({}, "#c:blueberries", "promenade:blueberries");
 event.replaceInput({}, "#c:fruits/blueberries", "promenade:blueberries");
 event.replaceInput({}, "#c:fruits/raspberries", "alaskanativecraft:raspberries");
 event.replaceInput({}, "#c:grains/rice", "farmersdelight:rice");
 event.replaceInput({}, "#c:lettuce_head", "croptopia:lettuce");
 event.replaceInput({}, "#c:onion", "farmersdelight:onion");
 event.replaceInput({}, "#c:tomato", "farmersdelight:tomato");
 event.replaceInput({}, "#c:vegetables/cabbage", "farmersdelight:cabbage");
 event.replaceInput({}, "#c:vegetables/onion", "farmersdelight:onion");
});
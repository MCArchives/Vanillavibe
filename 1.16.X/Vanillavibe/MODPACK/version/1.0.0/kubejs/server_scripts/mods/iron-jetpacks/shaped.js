//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║             IRON-JETPACKS              ║
  //╚════════════════════════════════════════╝
  // Coils
  event.remove({
    output: "iron-jetpacks:basic_coil"
  });
  event.shaped(item.of("iron-jetpacks:basic_coil"), [
    ["null", "minecraft:redstone", "null"],
    ["minecraft:redstone", "#c:iron_ingots", "minecraft:redstone"],
    ["null", "minecraft:redstone", "null"],
  ]);
});

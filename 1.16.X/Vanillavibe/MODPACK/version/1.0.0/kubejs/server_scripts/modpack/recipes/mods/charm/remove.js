//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║              CHARM/MISC                ║
//╚════════════════════════════════════════╝

  event.replaceInput({}, "#c:wooden_chests", "#c:wooden_chests");
  
  event.replaceInput(
    { type: "minecraft:crafting_shaped" },
    "minecraft:barrel",
    "#charm:barrels"
  );
  
  event.remove({ type: "crafting_shaped", output: "#c:workbench" });

     event.remove({ output: "minecraft:barrel" });

   event.shapeless('charm:spruce_barrel', ['minecraft:barrel'])
   event.shapeless('minecraft:barrel', ['charm:spruce_barrel'])
});
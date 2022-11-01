//priority: 777

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║              TECHREBORN                ║
//╚════════════════════════════════════════╝

    // compressor
    event.remove({ output: "techreborn:compressor" });
    event.shaped(item.of("techreborn:compressor"), [
    ["techreborn:iron_plate", "techreborn:iron_plate"         , "techreborn:iron_plate"],
    ["#c:stone"             , "techreborn:advanced_circuit"   , "#c:stone"             ],
    ["#c:stone"             , "techreborn:basic_machine_frame", "#c:stone"             ],
    ]);

	// cell
	event.remove({ id: "techreborn:crafting_table/cell" });
	event.shaped(item.of("techreborn:cell", 4), [
	["#c:glass", "#c:tin_ingots", "#c:glass"],
	["#c:glass", "#c:tin_ingots", "#c:glass"],
	["#c:glass", "#c:tin_ingots", "#c:glass"],
	]);

	// quantum Suit
	event.remove({ output: "techreborn:quantum_chestplate" });
	event.shaped(item.of("techreborn:quantum_chestplate"), [
	["techreborn:electronic_circuit",  null,                                   "techreborn:electronic_circuit"],
	["techreborn:superconductor_cable", "modern_industrialization:steeless", "techreborn:superconductor_cable"],
	["techreborn:data_storage_chip",    "techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
	]);
  
});
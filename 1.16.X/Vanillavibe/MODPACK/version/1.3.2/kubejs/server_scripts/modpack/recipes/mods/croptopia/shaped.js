//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║              CROPTOPIA                 ║
//╚════════════════════════════════════════╝

	// crakers
	event.remove({ output: "croptopia:flour" });
	event.shaped(item.of("croptopia:flour" ), [
	["minecraft:wheat", "minecraft:wheat", null],
	["minecraft:wheat", "minecraft:wheat", null],
	]);
});
//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║            FABRIC FURNACES             ║
//╚════════════════════════════════════════╝
  
	event.shaped(item.of("fabric-furnaces:crystal_ethereal_furnace"), [
	["#c:glass", "#c:glass"                         , "#c:glass"],
	["#c:glass", "fabric-furnaces:ethereal_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                         , "#c:glass"],
	]);	
	
	event.remove({ output: "fabric-furnaces:ethereal_furnace" });
	event.shaped(item.of("fabric-furnaces:ethereal_furnace"), [
	["charm:smooth_glowstone"   , "minecraft:dragon_head"      , "charm:smooth_glowstone"   ],
	["minecraft:netherite_block", "fabric-furnaces:end_furnace" , "minecraft:netherite_block"],
	["minecraft:sea_lantern"    , "minecraft:shulker_shell", "minecraft:sea_lantern"    ],
	]);	

	event.remove({ output: "fabric-furnaces:crystal_iron_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_iron_furnace"), [
	["#c:glass", "#c:glass"                     , "#c:glass"],
	["#c:glass", "fabric-furnaces:iron_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                     , "#c:glass"],
	]);	

	event.remove({ output: "fabric-furnaces:iron_furnace" });
	event.shaped(item.of("fabric-furnaces:iron_furnace"), [
	["pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot"       , "pigsteel:pigsteel_ingot"],
	["pigsteel:pigsteel_ingot", "fabric-furnaces:fabric_furnace", "pigsteel:pigsteel_ingot"],
	["pigsteel:pigsteel_ingot", "pigsteel:pigsteel_ingot"       , "pigsteel:pigsteel_ingot"],
	]);		
	
	// Glass variants //
	event.remove({ output: "fabric-furnaces:crystal_gold_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_gold_furnace"), [
	["#c:glass", "#c:glass"                     , "#c:glass"],
	["#c:glass", "fabric-furnaces:gold_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                     , "#c:glass"],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_diamond_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_diamond_furnace"), [
	["#c:glass", "#c:glass"                        , "#c:glass"],
	["#c:glass", "fabric-furnaces:diamond_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                        , "#c:glass"],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_emerald_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_emerald_furnace"), [
	["#c:glass", "#c:glass"                        , "#c:glass"],
	["#c:glass", "fabric-furnaces:emerald_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                        , "#c:glass"],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_nether_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_nether_furnace"), [
	["#c:glass", "#c:glass"                       , "#c:glass"],
	["#c:glass", "fabric-furnaces:nether_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                       , "#c:glass"],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_obsidian_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_obsidian_furnace"), [
	["#c:glass"   , "#c:glass"                      , "#c:glass"],
	["#c:glass", "fabric-furnaces:obsidian_furnace" , "#c:glass"],
	["#c:glass"    , "#c:glass"                     , "#c:glass"],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_end_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_end_furnace"), [
	["#c:glass", "#c:glass"      		       , "#c:glass"],
	["#c:glass", "fabric-furnaces:end_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                    , "#c:glass"],
	]);	
	
	event.remove({ output: "fabric-furnaces:crystal_fabric_furnace" });
	event.shaped(item.of("fabric-furnaces:crystal_fabric_furnace"), [
	["#c:glass", "#c:glass"                       , "#c:glass"],
	["#c:glass", "fabric-furnaces:fabric_furnace" , "#c:glass"],
	["#c:glass", "#c:glass"                       , "#c:glass"],
	]);	
});
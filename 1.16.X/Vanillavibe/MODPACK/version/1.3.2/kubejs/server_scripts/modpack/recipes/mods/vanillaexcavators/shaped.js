//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

//╔════════════════════════════════════════╗
//║           VANILLA EXCAVATORS           ║
//╚════════════════════════════════════════╝
	
	// Pigsteel (variant) Hammer	
	event.remove({ output: "vanillaexcavators:iron_excavator" });	
	event.shaped(item.of("vanillaexcavators:iron_excavator"), [
	["null"                   , "pigsteel:pigsteel_ingot", "null"				  ],
	["pigsteel:pigsteel_block", "minecraft:stick"        , "pigsteel:pigsteel_block"],
	["null"                   , "minecraft:stick"        , "null"				  ],
	]);
	
	// Fiery Excavator
	event.remove({ output: "vanillaexcavators:fiery_excavator" });	
	event.shaped(item.of("vanillaexcavators:fiery_excavator"), [
	["null"                 , "minecraft:magma_block", "null"				  ],
	["minecraft:magma_block", "adorn:stone_rod"      , "minecraft:magma_block"],
	["null"                 , "adorn:stone_rod"      , "null"				  ],
	]);
	
	// Diamond Excavator
	event.remove({ output: "vanillaexcavators:diamond_excavator" });	
	event.shaped(item.of("vanillaexcavators:diamond_excavator"), [
	["null"				   	  , "minecraft:diamond"              , "null"                   ],
	["minecraft:diamond_block", "betterend:leather_wrapped_stick", "minecraft:diamond_block"],
	["null"					  , "betterend:leather_wrapped_stick", "null"                   ],
	]);
	
	// Stone Excavator
	event.remove({ output: "vanillaexcavators:stone_excavator" });	
	event.shaped(item.of("vanillaexcavators:stone_excavator"), [
	["null"    , "#c:stone"	      , "null"    ],
	["#c:stone", "betterend:leather_wrapped_stick", "#c:stone"],
	["null"	   , "betterend:leather_wrapped_stick", "null"    ],
	]);
	
	// Ender Excavator
	event.remove({ output: "vanillaexcavators:ender_excavator" });	
	event.shaped(item.of("vanillaexcavators:ender_excavator"), [
	["null"                      , "minecraft:dragon_head"     , "null"    ],
	["minecraft:end_stone_bricks", "adabraniummod:obsidian_rod", "minecraft:end_stone_bricks"],
	["null"	                     , "adabraniummod:obsidian_rod", "null"    ],
	]);
})
//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
//
////╔════════════════════════════════════════╗
////║              BOOKSHELVES               ║
////╚════════════════════════════════════════╝
//
//  var bookshelf_toggle = [
//	'spruce',
//	'birch',
//	'jungle',
//	'acacia',
//	'dark_oak',
//	'crimson',
//	'warped',
//	'dragon_tree',
//	'end_lotus',
//	'helix_tree',
//	'jellyshroom',
//	'lacugrove',
//	'lucernia',
//	'mossy_glowshroom',
//	'pythadendron',
//	'tenanea',
//	'umbrella_tree',
//   ];
//	
//	bookshelf_toggle.forEach(function (item, index) {
//    event.remove({ output: "atbyw:" + item + "_bookshelf_toggle" })
//    event.remove({ input: "atbyw:" + item + "_bookshelf_toggle" })
//    event.remove({ id: "atbyw:" + item + "_bookshelf_toggle" })
//	});
//
////╔════════════════════════════════════════╗
////║               LADDERS                  ║
////╚════════════════════════════════════════╝
//
//  var ladders = [
//	"spruce",
//	"birch",
//	"jungle",
//	"acacia",
//	"dark_oak",
//	"crimson",
//	"warped",
//   ];
//	
//	ladders.forEach(function (item, index) {
//    event.replaceOutput({}, "atbyw:" + item + "_ladder", "charm:" + item + "_ladder");
//	});
//	
//	event.replaceOutput({}, "charm:oak_ladder", "minecraft:ladder");
//	event.replaceOutput({}, "atbyw:bamboo_ladder", "bambootweaks:bamboo_ladder");
//	
//	ladders.forEach(function (item, index) {
//	event.remove({ output: "atbyw:" + item + "_ladder" })
//	});
//	
//	event.remove({ id: "charm:oak_ladder" });
//    event.remove({ id: "atbyw:bamboo_ladder" });
//	
//	event.remove({ output: "atbyw:acacia_railing" });
//	
//	event.replaceInput({}, "atbyw:bamboo_stick", "minecraft:bamboo");
//
})
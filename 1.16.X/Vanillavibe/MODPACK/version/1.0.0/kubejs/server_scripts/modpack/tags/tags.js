//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen('item.tags', function (event) {
//╔════════════════════════════════════════╗
//║             BYG/TABLES                 ║
//╚════════════════════════════════════════╝

  var crafting = [
    'byg:blue_enchanted_crafting_table',
    'byg:bulbis_crafting_table',
    'byg:ether_crafting_table',
    'byg:imparius_crafting_table',
    'byg:nightshade_crafting_table',
   ];

   crafting.forEach(function (item, index) {
    event.get("c:workbench").add(item)
	});
	
	event
	.get('c:workbench')
	.remove('minecraft:crafting_table');
	
//╔════════════════════════════════════════╗
//║           BETTEREND/STORAGE            ║
//╚════════════════════════════════════════╝

  var wood_type = [
	"mossy_glowshroom",
	"pythadendron",
	"end_lotus",
	"lacugrove",
	"lucernia",
	"dragon_tree",
	"tenanea",
	"helix_tree",
	"umbrella_tree",
	"jellyshroom",
   ];

  wood_type.forEach(function (item, index) {
   event.get("c:wooden_chests").add("betterend:" + item + "_chest")
   event.get("charm:barrels").add("betterend:" + item + "_barrel")
  });

//╔════════════════════════════════════════╗
//║             DANKSTORAGE                ║
//╚════════════════════════════════════════╝

  event
    .get("dankstorage:blacklisted_storage")
    .remove("minecraft:stone");

//╔════════════════════════════════════════╗
//║             CHARM/STORAGE              ║
//╚════════════════════════════════════════╝

  var wood = [
    "oak",
	"spruce",
	"birch",
	"jungle",
	"acacia",
	"dark_oak",
	"crimson",
	"warped",
   ];

   wood.forEach(function (item, index) {
    event
	.get("c:wooden_chests")
	.add("charm:" + item + "_chest");
    event
	.get("c:wooden_chests")
	.add("charm:" + item + "_trapped_chest");
    });

//╔════════════════════════════════════════╗
//║                IRON                    ║
//╚════════════════════════════════════════╝
  
  event
    .get('c:iron_ingots')
    .remove('betterend:thallasium_ingot');
	
  event
    .get('c:iron_blocks')
	.remove('pigsteel:pigsteel_block');
	
  event
    .get('c:iron_ingots')
	.remove('pigsteel:pigsteel_ingot');

  event
    .get('c:iron_nuggets')
	.remove('pigsteel:pigsteel_nugget');
 
  event
    .get('pigsteel:irons')	
	.remove('minecraft:iron_ingot');

//╔════════════════════════════════════════╗
//║           SPACE DIMENSION              ║
//╚════════════════════════════════════════╝
	
  event
    .get('c:aluminum_blocks')
	.add('agape_space:aluminum_block');

  event
    .get('c:aluminum_plates')
	.add('agape_space:aluminum_plate');

  event
    .get('c:aluminum_ores')
	.add('agape_space:aluminum_ore');
	
  event
    .get('c:aluminum_ingots')
	.add('agape_space:aluminum_ingot');
 
   event
    .get('c:gold_wires')
	.add('modern_industrialization:electrum_wire');
	
   event
    .get('c:copper_wires')
	.add('modern_industrialization:copper_wire');

   event
    .get('c:copper_wires')
	.add('agape_space:copper_wire');

   event
    .get('c:steel_gear')
	.add('agape_space:netherite_gear');
})
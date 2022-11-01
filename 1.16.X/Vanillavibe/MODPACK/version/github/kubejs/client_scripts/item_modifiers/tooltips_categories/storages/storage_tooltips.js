//╔════════════════════════════════════════╗
//║            CREATED BY CSS              ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
onEvent('item.tooltip', (event) => {

  const recipes = [{
      items: [
        'agape_space:storage_box',
        'betterend:dragon_tree_barrel',
        'betterend:dragon_tree_chest',
        'betterend:end_lotus_barrel',
        'betterend:end_lotus_chest',
        'betterend:helix_tree_barrel',
        'betterend:helix_tree_chest',
        'betterend:jellyshroom_barrel',
        'betterend:jellyshroom_chest',
        'betterend:lacugrove_barrel',
        'betterend:lacugrove_chest',
        'betterend:lucernia_barrel',
        'betterend:lucernia_chest',
        'betterend:mossy_glowshroom_barrel',
        'betterend:mossy_glowshroom_chest',
        'betterend:pythadendron_barrel',
        'betterend:pythadendron_chest',
        'betterend:tenanea_barrel',
        'betterend:tenanea_chest',
        'betterend:umbrella_tree_barrel',
        'betterend:umbrella_tree_chest',
        'betternether:chest_crimson',
        'betternether:chest_anchor_tree',
        'betternether:chest_warped',
        'betternether:chest_stalagnate',
        'betternether:chest_reed',
        'betternether:chest_willow',
        'betternether:chest_wart',
        'betternether:chest_rubeus',
        'betternether:chest_mushroom',
        'betternether:chest_mushroom_fir',
        'betternether:chest_nether_sakura',
        'betternether:barrel_crimson',
        'betternether:barrel_anchor_tree',
        'betternether:barrel_warped',
        'betternether:barrel_stalagnate',
        'betternether:barrel_reed',
        'betternether:barrel_willow',
        'betternether:barrel_wart',
        'betternether:barrel_rubeus',
        'betternether:barrel_mushroom',
        'betternether:barrel_mushroom_fir',
        'betternether:barrel_nether_sakura',
        'blockus:bamboo_barrel',
        'blockus:charred_barrel',
        'blockus:white_oak_barrel',
        'campanion:camping_pack',
        'campanion:day_pack',
        'campanion:hiking_pack',
        'charm:acacia_barrel',
        'charm:acacia_chest',
        'charm:acacia_crate',
        'charm:birch_barrel',
        'charm:birch_chest',
        'charm:birch_crate',
        'charm:crimson_barrel',
        'charm:crimson_chest',
        'charm:crimson_crate',
        'charm:dark_oak_barrel',
        'charm:dark_oak_chest',
        'charm:dark_oak_crate',
        'charm:jungle_barrel',
        'charm:jungle_chest',
        'charm:jungle_crate',
        'charm:oak_barrel',
        'charm:oak_chest',
        'charm:oak_crate',
        'charm:spruce_barrel',
        'charm:spruce_chest',
        'charm:spruce_crate',
        'charm:warped_barrel',
        'charm:warped_chest',
        'charm:warped_crate',
        'dankstorage:dank_1',
        'dankstorage:dank_2',
        'dankstorage:dank_3',
        'dankstorage:dank_4',
        'dankstorage:dank_5',
        'dankstorage:dank_6',
        'dankstorage:dank_7',
        'expandedstorage:christmas_chest',
        'expandedstorage:diamond_barrel',
        'expandedstorage:diamond_chest',
        'expandedstorage:gold_barrel',
        'expandedstorage:gold_chest',
        'expandedstorage:iron_barrel',
        'expandedstorage:iron_chest',
        'expandedstorage:netherite_barrel',
        'expandedstorage:netherite_chest',
        'expandedstorage:obsidian_barrel',
        'expandedstorage:obsidian_chest',
        'expandedstorage:old_diamond_chest',
        'expandedstorage:old_gold_chest',
        'expandedstorage:old_iron_chest',
        'expandedstorage:old_netherite_chest',
        'expandedstorage:old_obsidian_chest',
        'expandedstorage:old_wood_chest',
        'expandedstorage:pumpkin_chest',
        'expandedstorage:wood_chest',
        'inmis:baby_backpack',
        'inmis:bejeweled_backpack',
        'inmis:blazing_backpack',
        'inmis:ender_pouch',
        'inmis:endless_backpack',
        'inmis:frayed_backpack',
        'inmis:gilded_backpack',
        'inmis:plated_backpack',
        'inmis:withered_backpack',
        'minecraft:barrel',
        'expandedstorage:vanilla_wood_mini_chest',
        'expandedstorage:wood_mini_chest',
        'expandedstorage:pumpkin_mini_chest',
        'expandedstorage:red_mini_present',
        'expandedstorage:white_mini_present',
        'expandedstorage:candy_cane_mini_present',
        'expandedstorage:green_mini_present',
        'expandedstorage:lavender_mini_present',
        'expandedstorage:pink_amethyst_mini_present',
        'expandedstorage:vanilla_wood_mini_chest_with_sparrow',
        'expandedstorage:wood_mini_chest_with_sparrow',
        'expandedstorage:pumpkin_mini_chest_with_sparrow',
        'expandedstorage:red_mini_present_with_sparrow',
        'expandedstorage:white_mini_present_with_sparrow',
        'expandedstorage:candy_cane_mini_present_with_sparrow',
        'expandedstorage:green_mini_present_with_sparrow',
        'expandedstorage:lavender_mini_present_with_sparrow',
        'expandedstorage:pink_amethyst_mini_present_with_sparrow'
      ],
      text: [Text.of('Storage').gray()]
    },
    {
      items: [
        'dankstorage:1_to_2',
        'dankstorage:2_to_3',
        'dankstorage:3_to_4',
        'dankstorage:4_to_5',
        'dankstorage:5_to_6',
        'dankstorage:6_to_7',
        'expandedstorage:wood_to_iron_conversion_kit',
        'expandedstorage:wood_to_gold_conversion_kit',
        'expandedstorage:wood_to_diamond_conversion_kit',
        'expandedstorage:wood_to_obsidian_conversion_kit',
        'expandedstorage:wood_to_netherite_conversion_kit',
        'expandedstorage:iron_to_gold_conversion_kit',
        'expandedstorage:iron_to_diamond_conversion_kit',
        'expandedstorage:iron_to_obsidian_conversion_kit',
        'expandedstorage:iron_to_netherite_conversion_kit',
        'expandedstorage:gold_to_diamond_conversion_kit',
        'expandedstorage:gold_to_obsidian_conversion_kit',
        'expandedstorage:gold_to_netherite_conversion_kit',
        'expandedstorage:diamond_to_obsidian_conversion_kit',
        'expandedstorage:diamond_to_netherite_conversion_kit',
        'expandedstorage:obsidian_to_netherite_conversion_kit'
      ],
      text: [Text.of('Storage Upgrades').gray()]
    },
  ];

  recipes.forEach((recipe) => {
    event.add(recipe.items, recipe.text);
  });
});
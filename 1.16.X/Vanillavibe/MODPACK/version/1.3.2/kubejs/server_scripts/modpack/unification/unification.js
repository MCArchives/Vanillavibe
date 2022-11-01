//priority: 11

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
//║     VANILLAVIBE UNIFICATION SCRIPT     ║
//╚════════════════════════════════════════╝

var ae_dusts = ["gold", "iron"];
var salt_materials = ["sandwichable:salt", "modern_industrialization:salt_dust"];

var space_plates = ["iron", "gold", "copper", "aluminum"];
var space_metals = ["copper", "aluminum"];
var space_ores = ["copper"];

var indrev_materials = ["copper", "gold", "iron", "tin", "steel", "silver", "lead", "electrum", "bronze", "tungsten"];
var indrev_dusts = ["copper", "gold", "iron", "tin", "steel", "diamond", "coal", "silver", "lead", "electrum", "bronze", "tungsten"];
var indrev_metals = ["copper", "tin", "steel", "lead", "silver", "electrum", "bronze", "tungsten"];
var indrev_ores = ["copper", "tin", "lead", "silver", "tungsten"];

var modern_materials = ["copper", "aluminum", "bronze", "chrome", "diamond", "electrum", "emerald", "gold", "invar", "redstone", "iron", "quartz", "lead", "platinum", "nickel", "silver", "steel", "tin", "titanium", "tungsten"];
var modern_dusts = ["charcoal", "coal", "copper", "aluminum", "bronze", "bauxite", "chrome", "diamond", "electrum", "emerald", "gold", "invar", "nickel", "redstone", "manganese", "iron", "quartz", "lead", "ruby", "nickel", "silver", "steel", "tin", "titanium", "tungsten", "platinum"];
var modern_nuggets = ["copper", "aluminum", "bronze", "chrome", "electrum", "invar", "nickel", "lead", "nickel", "silver", "steel", "tin", "titanium", "iridium", "platinum", "tungsten"];
var modern_metals = ["copper", "aluminum", "bronze", "chrome", "electrum", "invar", "iridium", "redstone", "lead", "nickel", "silver", "steel", "tin", "titanium", "tungsten", "platinum"];
var modern_ores = ["copper", "bauxite", "iridium", "lead", "silver", "tin", "tungsten"];

var materials = ["aluminum", "bronze", "chrome", "copper", "diamond", "electrum", "emerald", "gold", "invar", "iron", "lead", "nickel", "platinum", "silicon", "silver", "steel", "tin", "titanium", "tungsten"];
var ingots = ["aluminum", "bronze", "chrome", "copper", "electrum", "invar", "iridium", "lead", "nickel", "platinum", "silver", "steel", "tin", "titanium", "tungsten"];
var dusts = ["aluminum", "bauxite", "bronze", "charcoal", "chrome", "coal", "copper", "diamond", "electrum", "emerald", "gold", "invar", "iron", "lead", "manganese", "nickel", "quartz", "ruby", "silver", "steel", "tin", "titanium", "tungsten"];
var ores = ["tin", "copper", "lead", "bauxite", "silver", "tungsten"];


//╔════════════════════════════════════════╗
//║          APPLIED ENERGISTICS 2         ║
//╚════════════════════════════════════════╝


// DUST
ae_dusts.forEach(function (item, index) {
   event.remove({ id: "appliedenergistics2:smelting/" + item + "_ingot"});
});


//╔════════════════════════════════════════╗
//║            SPACE DIMENSION             ║
//╚════════════════════════════════════════╝


// PLATES
space_plates.forEach(function (item, index) {
	event.replaceOutput({}, "agape_space:" + item + "_plate", "techreborn:" + item + "_plate");
});


// BLOCKS
space_metals.forEach(function (item, index) {
    event.replaceOutput({}, "agape_space:" + item + "_block", "techreborn:" + item + "_storage_block");
});


// INGOTS
space_metals.forEach(function (item, index) {
	event.replaceOutput({}, "agape_space:" + item + "_ingot", "techreborn:" + item + "_ingot");

});


// ORE
space_ores.forEach(function (item, index) {
    event.replaceOutput({}, "agape_space:" + item + "_ore", "techreborn:" + item + "_ore");
});


//╔════════════════════════════════════════╗
//║                 SALT                   ║
//╚════════════════════════════════════════╝


// SALT
salt_materials.forEach(function (item, index) {
    event.replaceOutput({}, item, "croptopia:salt");
    event.replaceInput({}, item, "croptopia:salt");
});


//╔════════════════════════════════════════╗
//║        INDUSTRIAL REVOLUTION           ║
//╚════════════════════════════════════════╝


// PLATES
indrev_materials.forEach(function (item, index) {
	event.replaceOutput({}, "indrev:" + item + "_plate", "techreborn:" + item + "_plate");
});


// INGOTS
indrev_metals.forEach(function (item, index) {
	event.replaceOutput({}, "indrev:" + item + "_ingot", "techreborn:" + item + "_ingot");
});


// BLOCKS
indrev_metals.forEach(function (item, index) {
    event.replaceOutput({}, "indrev:" + item + "_block", "techreborn:" + item + "_storage_block");
});


// DUST
indrev_dusts.forEach(function (item, index) {
    event.replaceOutput({}, "indrev:" + item + "_dust", "techreborn:" + item + "_dust");
    event.replaceOutput({}, "indrev:sawdust", "techreborn:saw_dust");
});

  
// ORE
indrev_ores.forEach(function (item, index) {
    event.replaceOutput({}, "indrev:" + item + "_ore", "techreborn:" + item + "_ore");
});


//╔════════════════════════════════════════╗
//║        MODERN INDUSTRIALIZATION        ║
//╚════════════════════════════════════════╝


// PLATES
modern_materials.forEach(function (item, index) {
    event.replaceOutput({}, "modern_industrialization:" + item + "_plate", "techreborn:" + item + "_plate");
});


// NUGGETS
modern_nuggets.forEach(function (item, index) {
    event.replaceOutput({}, "modern_industrialization:" + item + "_nugget", "techreborn:" + item + "_nugget");
});


// INGOTS
modern_metals.forEach(function (item, index) {
    event.replaceOutput({}, "modern_industrialization:" + item + "_ingot", "techreborn:" + item + "_ingot");
});


// BLOCKS
modern_metals.forEach(function (item, index) {
    event.replaceInput({}, "modern_industrialization:" + item + "_block", "techreborn:" + item + "_storage_block");
});


// DUST
modern_dusts.forEach(function (item, index) {
    event.replaceOutput({}, "modern_industrialization:" + item + "_dust", "techreborn:" + item + "_dust");
});


// ORE
modern_ores.forEach(function (item, index) {
    event.replaceOutput({}, "modern_industrialization:" + item + "_ore", "techreborn:" + item + "_ore");
});


//╔════════════════════════════════════════╗
//║             COMMON TAGS                ║
//╚════════════════════════════════════════╝


// DUST
dusts.forEach(function (item, index) {
	event.replaceInput({}, "#c:" + item + "_dusts", "techreborn:" + item + "_dust");
});


// PLATES
materials.forEach(function (item, index) {
    event.replaceInput({}, "#c:" + item + "_plates", "techreborn:" + item + "_plate");
});


// INGOTS
ingots.forEach(function (item, index) {
    event.replaceInput({}, "#c:" + item + "_ingots", "techreborn:" + item + "_ingot");
});


// BLOCKS
ingots.forEach(function (item, index) {
    event.replaceInput({}, "#c:" + item + "_blocks", "techreborn:" + item + "_storage_block");
});


// NUGGETS
ingots.forEach(function (item, index) {
    event.replaceInput({}, "#c:" + item + "_nuggets", "techreborn:" + item + "_nugget");
});


// ORE
ores.forEach(function (item, index) {
    event.replaceInput({}, "#c:" + item + "_ores", "techreborn:" + item + "_ore");
});


//╔════════════════════════════════════════╗
//║               REMOVED                  ║
//╚════════════════════════════════════════╝

indrev_metals.forEach(function (item, index) {
	event.remove({ id: "indrev:shaped/" + item + "_ingot_from_nuggets" });
    event.remove({ id: "indrev:shaped/" + item + "_block" });
    event.remove({ id: "indrev:shaped/" + item + "_block_from_nugget" });
    event.remove({ id: "indrev:shaped/" + item + "_ingot_from_nugget" });
});

indrev_metals.forEach(function (item, index) {
    event.remove({ id: "indrev:shapeless/" + item + "_ingot_from_block" });
    event.remove({ id: "indrev:shapeless/" + item + "_nugget" });
    event.remove({ id: "indrev:shapeless/" + item + "_plate" + "_from_hammer" });
});

indrev_materials.forEach(function (item, index) {
    event.remove({ id: "indrev:smelting/" + item + "_ingot" });
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_dust" });
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_smelting" });
});

indrev_materials.forEach(function (item, index) {
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_dust" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_smelting" });
});

indrev_metals.forEach(function (item, index) {
    event.remove({ type: "crafting_shaped", output: "techreborn:" + item + "_plate" });
});

indrev_ores.forEach(function (item, index) {
    event.remove({ id: "indrev:smelting/" + item + "_ingot_from_ore" });
    event.remove({ id: "indrev:blasting/" + item + "_ingot_from_ore" });
});

modern_materials.forEach(function (item, index) {
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/smelting/dust_blasting" });
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/smelting/dust_smelting" });
});

modern_metals.forEach(function (item, index) {	
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/craft/block_from_ingot" });
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/craft/ingot_from_block" });		
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/craft/ingot_from_nugget" });		
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/craft/nugget_from_ingot" });		
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/craft/nugget_from_ingot" });		
});

modern_ores.forEach(function (item, index) {
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/smelting/ore_smelting" });	
    event.remove({ id: "modern_industrialization:generated/materials/" + item + "/smelting/ore_blasting" });
});

modern_ores.forEach(function (item, index) {
    event.remove({ id: "modern_industrialization:generated/materials/quartz/smelting/ore_smelting"});
    event.remove({ id: "modern_industrialization:generated/materials/quartz/smelting/ore_blasting"});
});

//╔════════════════════════════════════════╗
//║            REPLACE OUTPUT              ║
//╚════════════════════════════════════════╝
  
   event.replaceOutput({}, "agape_space:copper_wire", "modern_industrialization:copper_wire");
   event.replaceOutput({}, "agape_space:gold_wire", "modern_industrialization:electrum_wire");
   event.replaceOutput({}, "agape_space:iron_gear", "modern_industrialization:iron_gear");
   event.replaceOutput({}, "agape_space:netherite_gear", "modern_industrialization:steel_gear");
   event.replaceOutput({}, "modern_industrialization:platinum_ore", "techreborn:sheldonite_ore");
   event.replaceOutput({}, "modern_industrialization:quartz_ore", "minecraft:nether_quartz_ore");
   event.replaceOutput({}, "modern_industrialization:salt_ore", "croptopia:salt_ore");
   event.replaceOutput({}, "modern_industrialization:silicon_plate", "techreborn:silicon_plate");
  
//╔════════════════════════════════════════╗
//║             REPLACE INPUT              ║
//╚════════════════════════════════════════╝
   
   event.replaceInput({}, "#c:ender_pearl_dusts", "techreborn:ender_pearl_dust");
   event.replaceInput({}, "#c:platinum_ores", "techreborn:sheldonite_ore");
   event.replaceInput({}, "indrev:sawdust", "techreborn:saw_dust");
   event.replaceInput({}, "minecraft:quartz", "#c:quartz");

//╔════════════════════════════════════════╗
//║                REMOVED                 ║
//╚════════════════════════════════════════╝
   
   event.remove({ id: "agape_space:component_coil" });
   event.remove({ input: "agape_space:copper_ore" });
   event.remove({ input: "agape_space:iron_gear" });
   event.remove({ input: "agape_space:netherite_gear" });
   event.remove({ input: "modern_industrialization:quartz_ore" });	
})
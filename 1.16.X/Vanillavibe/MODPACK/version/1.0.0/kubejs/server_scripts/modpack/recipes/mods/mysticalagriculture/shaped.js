//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

//╔════════════════════════════════════════╗
//║  MYSTICAL AGRICULTURE/INFUSION CRYSTAL ║
//╚════════════════════════════════════════╝

    event.remove({ output: "mysticalagriculture:master_infusion_crystal" });
	event.shaped(item.of("mysticalagriculture:master_infusion_crystal"), [
	['mysticalagriculture:supremium_ingot' , 'mysticalagriculture:infusion_crystal'        , 'mysticalagriculture:supremium_ingot' ],
	['mysticalagriculture:infusion_crystal', 'mysticalagriculture:supremium_gemstone_block', 'mysticalagriculture:infusion_crystal'],
	['mysticalagriculture:supremium_ingot' , 'mysticalagriculture:infusion_crystal'        , 'mysticalagriculture:supremium_ingot' ],
	]);
})
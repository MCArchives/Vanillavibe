//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║       APPLIED ENERGETICS2/TOOLS        ║
//╚════════════════════════════════════════╝

  var ae2_tools = ["certus", "nether"];
  
  ae2_tools.forEach(function (item, index) {
	event.remove({ output: "appliedenergistics2:" + item + "_quartz_axe" });
	event.remove({ output: "appliedenergistics2:" + item + "_quartz_hoe" });
	event.remove({ output: "appliedenergistics2:" + item + "_quartz_pickaxe" });
	event.remove({ output: "appliedenergistics2:" + item + "_quartz_shovel" });
	event.remove({ output: "appliedenergistics2:" + item + "_quartz_sword" });
  });

//╔════════════════════════════════════════╗
//║       APPLIED ENERGETICS2/MISC         ║
//╚════════════════════════════════════════╝

  	event.remove({ id: "appliedenergistics2:grindstone" });
})
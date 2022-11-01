//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║         BYG/EMPTY_RECIPE_BOOK          ║
//╚════════════════════════════════════════╝	
	
  event.remove({ id: "byg:gray_dye" });
  
  
//╔════════════════════════════════════════╗
//║              BYG/SCYTHES               ║
//╚════════════════════════════════════════╝
 
 var scythe = [
    "terminite",
    "wooden",
    "aeternium",
  ];
  
  scythe.forEach(function (item, index) {
   event.remove({ output: "harvest_scythes:" + item + "_scythe" });
   event.remove({ output: "harvest_scythes:" + item + "_machete" });
  });
});
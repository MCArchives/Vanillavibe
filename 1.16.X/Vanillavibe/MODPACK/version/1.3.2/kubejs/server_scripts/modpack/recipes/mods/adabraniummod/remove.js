//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║           ADABRANIUM/SCYTHES           ║
//╚════════════════════════════════════════╝
 
 var harvests = [
    "adb_vibranium",
	"adb_adamantium",
  ];
  
  harvests.forEach(function (item, index) {
   event.remove({ output: "harvest_scythes:" + item + "_scythe" });
   event.remove({ output: "harvest_scythes:" + item + "_machete" });
  });
});
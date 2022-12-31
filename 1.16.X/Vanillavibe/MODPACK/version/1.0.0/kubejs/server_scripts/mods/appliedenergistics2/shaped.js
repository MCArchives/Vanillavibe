//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║       APPLIED ENERGETICS2/TOOLS        ║
  //╚════════════════════════════════════════╝
  
  // Charged Staff
  event.remove({
    output: "appliedenergistics2:charged_staff"
  });
  event.shaped(item.of("appliedenergistics2:charged_staff", 1), [
    ["appliedenergistics2:charged_certus_quartz_crystal", null, null],
    [null, "#c:iron_ingots", null],
    [null, null, "#c:iron_ingots"],
  ]);
})
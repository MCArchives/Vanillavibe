//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function(event) {
  //╔════════════════════════════════════════╗
  //║           IRON PROBE FIX               ║
  //╚════════════════════════════════════════╝

  event.remove({
    output: "ezpas:pipe_probe"
  });
  event.shaped(item.of("ezpas:pipe_probe"), [
    ["null", "#c:iron_nuggets", "null"],
    ["null", "gateofbabylon:extended_stick", "null"],
    ["null", "null", "null"],
  ]);
});
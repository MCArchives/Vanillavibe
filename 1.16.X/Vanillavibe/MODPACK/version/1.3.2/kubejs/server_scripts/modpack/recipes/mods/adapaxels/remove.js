//╔════════════════════════════════════════╗
//║         Copyright © 2021 CSS           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝

events.listen("recipes", function (event) {

//╔════════════════════════════════════════╗
//║                 PAXELS                 ║
//╚════════════════════════════════════════╝

	event.remove({ output: "adapaxels:tech_reborn_bronze_paxel"});
	event.remove({ output: "adapaxels:ruby_paxel"});
	event.remove({ output: "adapaxels:sapphire_paxel"});
	event.remove({ output: "adapaxels:peridot_paxel"});
	event.remove({ output: "adapaxels:pendorite_paxel"});
});
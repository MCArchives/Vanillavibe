//╔════════════════════════════════════════╗
//║         Copyright © 2021 SZU           ║
//╚════════════════════════════════════════╝
//╔════════════════════════════════════════╗
//║     GNU Free Documentation License     ║
//╚════════════════════════════════════════╝
events.listen("recipes", function (event) {

//╔════════════════════════════════════════╗
//║   MODERN_INDUSTRIALIZATION/EQUIPMENT   ║
//╚════════════════════════════════════════╝

	event.remove({ output: 'modern_industrialization:rubber_boots' });	
	event.remove({ output: 'modern_industrialization:rubber_helmet' });
})
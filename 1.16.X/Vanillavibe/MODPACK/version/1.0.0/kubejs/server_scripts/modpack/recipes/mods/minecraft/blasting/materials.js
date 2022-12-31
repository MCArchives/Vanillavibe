//╔════════════════════════════════════════╗
//║            CREATED BY SZU              ║
//╚════════════════════════════════════════╝

events.listen("recipes", function (event) {
	
//╔════════════════════════════════════════╗
//║             ROTTEN FLESH               ║
//╚════════════════════════════════════════╝

	event.recipes.minecraft.blasting( 
	item.of("minecraft:rotten_flesh"), 
	"minecraft:leather")
})


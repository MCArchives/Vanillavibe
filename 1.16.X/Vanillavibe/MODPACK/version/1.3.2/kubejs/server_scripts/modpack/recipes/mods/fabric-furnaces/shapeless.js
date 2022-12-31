//+----------------------------------------+
//�         Copyright � 2021 SZU           �
//+----------------------------------------+
//+----------------------------------------+
//�     GNU Free Documentation License     �
//+----------------------------------------+
events.listen("recipes", function (event) {
	
//+----------------------------------------+
//�            FABRIC FURNACES             �
//+----------------------------------------+

	event.shapeless('fabric-furnaces:iron_furnace', ['fabric-furnaces:crystal_iron_furnace'])
	event.shapeless('fabric-furnaces:ethereal_furnace', ['fabric-furnaces:crystal_ethereal_furnace'])

});
//+----------------------------------------+
//�         Copyright � 2021 SZU           �
//+----------------------------------------+
//+----------------------------------------+
//�     GNU Free Documentation License     �
//+----------------------------------------+
events.listen("recipes", function (event) {

//+----------------------------------------+
//�         MYSTICAL AGRICULTURE           �
//+----------------------------------------+

event.recipes.modern_industrialization.macerator({
  eu: 2,
  duration: 300,
  id: "modern_industrialization:macerator/inferium_ore",
  item_inputs: [
      {
          item: "mysticalagriculture:inferium_ore",
          amount: 1
      }
  ],
  item_outputs: [
      {
          item: "mysticalagriculture:inferium_essence",
          amount: 8
      }
   ],
 });

event.recipes.modern_industrialization.macerator({
  eu: 2,
  duration: 300,
  id: "modern_industrialization:macerator/prosperity_ore",
  item_inputs: [
      {
          item: "mysticalagriculture:prosperity_ore",
          amount: 1
      }
  ],
  item_outputs: [
      {
          item: "mysticalagriculture:prosperity_shard",
          amount: 6
      }
   ],
 });
});
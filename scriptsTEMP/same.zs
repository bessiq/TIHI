// conflict resolution

// Yurt-a-vator Fix-er-ator
craftingTable.removeByName("bagofyurting:bag_of_yurting");
craftingTable.addShaped("boy_tier_1", <item:bagofyurting:bag_of_yurting>.withTag({radius: 0}),
 [[<tag:minecraft:wool>, <item:silentgems:gilded_string>, <tag:minecraft:wool>],
  [<item:immersiveengineering:hemp_fabric>, <item:minecraft:ender_eye>, <item:immersiveengineering:hemp_fabric>],
  [<item:minecraft:leather>, <item:silentgems:fluffy_fabric>, <item:minecraft:leather>],
  ]);

// 2 Chainz went to a Bar
craftingTable.removeByName("forbidden_arcanus:iron_chain");
craftingTable.addShaped("fna_iron_chain", <item:forbidden_arcanus:iron_chain>,
  [[<item:minecraft:air>, <item:minecraft:iron_nugget>, <item:minecraft:air>],
  [<item:minecraft:air>, <item:minecraft:chain>, <item:minecraft:air>],
  [<item:minecraft:air>, <item:minecraft:iron_nugget>, <item:minecraft:air>],
  ]);

// Rod steward
craftingTable.removeByName("buildersaddition:iron_rod");
mods.jei.JEI.hideItem(<item:buildersaddition:iron_rod>);
craftingTable.removeByName("silentgear:iron_rod");
mods.jei.JEI.hideItem(<item:silentgear:iron_rod>);
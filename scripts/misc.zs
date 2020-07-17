// Conflict resolution

# BoY
craftingTable.removeByName("bagofyurting:bag_of_yurting");
craftingTable.addShaped("BoY_tier_1", <item:bagofyurting:bag_of_yurting>.withTag({radius: 0}),
 [[<tag:forge:leather>, <tag:minecraft:wool>, <tag:forge:leather>],
  [<tag:minecraft:wool>, <item:minecraft:ender_eye>, <tag:minecraft:wool>],
  [<tag:forge:leather>, <tag:minecraft:wool>, <tag:forge:leather>],
  ]);

# 2 OP

craftingTable.removeByName("mekanism:cardboard_box");
craftingTable.addShaped("Meka_cardboard_box", <item:mekanism:cardboard_box>,
 [[<item:packingtape:tape>, <item:mekanism:sawdust>, <item:packingtape:tape>],
  [<item:mekanism:sawdust>, <tag:forge:heads>, <item:mekanism:sawdust>],
  [<item:packingtape:tape>, <item:mekanism:sawdust>, <item:packingtape:tape>],
  ]);

# Metal Barrels
craftingTable.addShapeless("Netherite_barrel", <item:metalbarrels:netherite_barrel>,
 [<item:minecraft:netherite_ingot>, <item:metalbarrels:diamond_barrel>
  ]);
craftingTable.addShapeless("Wood2Netherite_barrel_upgrade", <item:metalbarrels:wood_to_netherite>,
 [<item:metalbarrels:wood_to_iron>, <item:metalbarrels:iron_to_gold>, <item:metalbarrels:gold_to_diamond>, <item:minecraft:netherite_ingot>
  ]);

# JEI Info
// mods.jei.JEI.addInfo(IItemStack stack, String[] information);

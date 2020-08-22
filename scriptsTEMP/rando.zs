// odds & ends & bits & bobs

// Stinky peat
<item:byg:peat>.burnTime = 1200;

// Too many cooks
craftingTable.removeByName("ediblebugs:vegetableoil");

// Paper or plastic?
craftingTable.removeByName("silents_mechanisms:hand_pump");
craftingTable.removeByName("silents_mechanisms:upgrade_case");

craftingTable.addShaped("smech_hand_pump", <item:silents_mechanisms:hand_pump>,
  [[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
  [<tag:forge:ingots/aluminum>, <item:silents_mechanisms:empty_canister>, <tag:forge:plastic>],
  [<item:minecraft:air>, <item:silents_mechanisms:battery>, <tag:forge:plastic>],
  ]);
craftingTable.addShaped("smech_upgrade_case", <item:silents_mechanisms:upgrade_case>,
  [[<tag:forge:plastic>, <tag:forge:plastic>, <tag:forge:plastic>],
  [<tag:forge:plastic>, <tag:forge:plastic>, <tag:forge:plastic>],
  [<tag:forge:nuggets/gold>, <tag:forge:nuggets/gold>, <tag:forge:nuggets/gold>],
  ]);

// Re-crushed with datapack
<recipetype:mekanism:crushing>.removeByRegex("mekanism:crushing/biofuel/.*");

// \m/etal barrels
craftingTable.addShapeless("netherite_barrel", <item:metalbarrels:netherite_barrel>,
 [<item:minecraft:netherite_ingot>, <item:metalbarrels:diamond_barrel>
  ]);
craftingTable.addShapeless("wood_to_netherite_barrel_upgrade", <item:metalbarrels:wood_to_netherite>,
 [<item:metalbarrels:wood_to_iron>, <item:metalbarrels:iron_to_gold>, <item:metalbarrels:gold_to_diamond>, <item:minecraft:netherite_ingot>
  ]);
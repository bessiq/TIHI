// odds & ends & bits & bobs

// Stinky peat
<item:byg:peat>.burnTime = 1200;

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

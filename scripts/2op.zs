// not so fast

// WHAT'S IN THE BOX?!?!
craftingTable.removeByName("mekanism:cardboard_box");
craftingTable.addShaped("meka_cardboard_box", <item:mekanism:cardboard_box>,
 [[<item:mekanism:sawdust>, <item:packingtape:tape>, <item:mekanism:sawdust>],
  [<item:packingtape:tape>, <tag:forge:heads>, <item:packingtape:tape>],
  [<item:mekanism:sawdust>, <item:packingtape:tape>, <item:mekanism:sawdust>],
  ]);

// \m/etal barrels
craftingTable.addShapeless("netherite_barrel", <item:metalbarrels:netherite_barrel>,
 [<item:minecraft:netherite_ingot>, <item:metalbarrels:diamond_barrel>
  ]);
craftingTable.addShapeless("wood_to_netherite_barrel_upgrade", <item:metalbarrels:wood_to_netherite>,
 [<item:metalbarrels:wood_to_iron>, <item:metalbarrels:iron_to_gold>, <item:metalbarrels:gold_to_diamond>, <item:minecraft:netherite_ingot>
  ]);

// Entity Entrapment Equality
craftingTable.removeByName("mobcatcher:net");
craftingTable.removeByName("mobcatcher:net_launcher");

craftingTable.addShapeless("mobcatcher_net", <item:mobcatcher:net>,
 [<item:industrialforegoing:mob_imprisonment_tool>]);

craftingTable.addShapeless("if_mit", <item:industrialforegoing:mob_imprisonment_tool>,
 [<item:mobcatcher:net>]);

craftingTable.addShaped("mobcatcher_launcher", <item:mobcatcher:net_launcher>,
 [[<item:rats:rat_tube_green>, <item:minecraft:air>, <item:minecraft:air>],
  [<item:minecraft:air>, <item:immersiveengineering:homing>, <item:minecraft:air>],
  [<item:minecraft:air>, <item:powah:dielectric_rod>, <item:mekanism:enriched_gold>],
  ]);

// Uncomfortable
craftingTable.removeByName("comforts:sleeping_bag_black");
craftingTable.removeByName("comforts:sleeping_bag_blue");
craftingTable.removeByName("comforts:sleeping_bag_brown");
craftingTable.removeByName("comforts:sleeping_bag_cyan");
craftingTable.removeByName("comforts:sleeping_bag_gray");
craftingTable.removeByName("comforts:sleeping_bag_green");
craftingTable.removeByName("comforts:sleeping_bag_light_blue");
craftingTable.removeByName("comforts:sleeping_bag_light_gray");
craftingTable.removeByName("comforts:sleeping_bag_lime");
craftingTable.removeByName("comforts:sleeping_bag_magenta");
craftingTable.removeByName("comforts:sleeping_bag_orange");
craftingTable.removeByName("comforts:sleeping_bag_pink");
craftingTable.removeByName("comforts:sleeping_bag_purple");
craftingTable.removeByName("comforts:sleeping_bag_red");
craftingTable.removeByName("comforts:sleeping_bag_white");
craftingTable.removeByName("comforts:sleeping_bag_yellow");
craftingTable.addShaped("comforts_sleeping_bag_white", <item:comforts:sleeping_bag_white>,
  [[<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>],
    [<tag:forge:string>, <tag:forge:string>, <tag:forge:string>],
    [<item:minecraft:white_wool>, <item:minecraft:white_wool>, <item:minecraft:white_wool>],
  ]);

// If Betweenlands and Midnight had a baby
craftingTable.removeByName("undergarden:catalyst");
craftingTable.addShaped("ug_catalyst", <item:undergarden:catalyst>,
  [[<item:silentgems:chaos_gold_ingot>, <item:forbidden_arcanus:stellarite_piece>, <item:silentgems:chaos_gold_ingot>],
    [<item:forbidden_arcanus:stellarite_piece>, <item:botania:mana_diamond>, <item:forbidden_arcanus:stellarite_piece>],
    [<item:mekanism:ingot_refined_glowstone>, <item:forbidden_arcanus:stellarite_piece>, <item:mekanism:ingot_refined_glowstone>],
  ]);

// Locating biomes before Mojang decided it was cool
craftingTable.removeByName("naturescompass:natures_compass");
craftingTable.addShaped("natures_compass", <item:naturescompass:naturescompass>,
  [[<item:silentgear:netherwood_sapling>, <item:forbidden_arcanus:edelwood_log>, <item:undergarden:wigglewood_sapling>],
    [<tag:minecraft:logs>, <item:minecraft:compass>, <tag:minecraft:logs>],
    [<tag:forge:saplings>, <item:forbidden_arcanus:edelwood_log>, <tag:quark:saplings>],
  ]);

// A regular stick can't hold a whole crafting table, silly!
craftingTable.removeByName("extendedcrafting:handheld_table");

// Is the best Metallica album Load or Reload?
craftingTable.removeByName("chunk:loader");

// Just didn't have the right Ring to them
mods.jei.JEI.hideItem(<item:ringsofascension:ring_flight>);
mods.jei.JEI.hideItem(<item:ringsofascension:ring_wither>);

// Easy recipes, no power required, wireless item transfer, and MORE - the definition of OP


// imma changin mah lazer
craftingTable.removeByName("mininggadgets:mininggadget");
craftingTable.removeByName("mininggadgets:upgrade_empty");
craftingTable.removeByName("mininggadgets:upgrade_magnet");
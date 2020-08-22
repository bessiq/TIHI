// not so fast

// This is the remix to ignition
craftingTable.removeByName("ender_bags:white_bag");

// WHAT'S IN THE BOX?!?!
craftingTable.removeByName("mekanism:cardboard_box");
craftingTable.addShaped("meka_cardboard_box", <item:mekanism:cardboard_box>,
 [[<item:mekanism:sawdust>, <item:packingtape:tape>, <item:mekanism:sawdust>],
  [<item:packingtape:tape>, <tag:forge:heads>, <item:packingtape:tape>],
  [<item:mekanism:sawdust>, <item:packingtape:tape>, <item:mekanism:sawdust>],
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

craftingTable.removeByName("comforts:sleeping_bag_yellow");

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

// Just didn't have the right Ring to them
mods.jei.JEI.hideItem(<item:ringsofascension:ring_flight>);
mods.jei.JEI.hideItem(<item:ringsofascension:ring_wither>);

// Easy recipes, no power required, wireless item transfer, and MORE - the definition of OP
craftingTable.removeByName("modularrouters:item_router");
craftingTable.removeByName("modularrouters:blank_upgrade");
craftingTable.removeByName("modularrouters:blank_module");

// imma changin mah lazer
craftingTable.removeByName("mininggadgets:mininggadget");
craftingTable.removeByName("mininggadgets:upgrade_empty");
craftingTable.removeByName("mininggadgets:upgrade_magnet");
// datapacks can't do everything...yet

// This is the remix to ignition
craftingTable.removeByName("ender_bags:white_bag");

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

// Stinky peat
<item:byg:peat>.burnTime = 1200;

// Burn your game plan
<recipetype:mekanism:crushing>.removeByRegex("mekanism:crushing/biofuel/.*");

// Rod steward
craftingTable.removeByName("buildersaddition:iron_rod");
mods.jei.JEI.hideItem(<item:buildersaddition:iron_rod>);
craftingTable.removeByName("silentgear:iron_rod");
mods.jei.JEI.hideItem(<item:silentgear:iron_rod>);

// Too many bakers
craftingTable.removeByName("pneumaticcraft:wheat_flour");
mods.jei.JEI.hideItem(<item:pneumaticcraft:wheat_flour>);
craftingTable.removeByName("appliedenergistics2:flour");
mods.jei.JEI.hideItem(<item:appliedenergistics2:flour>);
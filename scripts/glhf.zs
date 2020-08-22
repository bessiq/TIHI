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
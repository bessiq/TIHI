//  resolving redundant ores and their outputs

// Aluminum / Aluminium / Bauxite - pick a name already!
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_aluminum>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_aluminum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_aluminum>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_aluminum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_aluminum>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_aluminum>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_aluminum>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_aluminum>);

furnace.removeRecipe(<item:immersiveengineering:ingot_aluminum>);
<recipetype:mekanism:smelting>.removeRecipe(<item:immersiveengineering:ingot_aluminum>);

craftingTable.addShapeless("aluminum_block_sm_to_ie", <item:immersiveengineering:storage_aluminum>,
 [<item:silents_mechanisms:aluminum_block>]);
craftingTable.addShapeless("aluminum_block_ie_to_sm", <item:silents_mechanisms:aluminum_block>,
 [<item:immersiveengineering:storage_aluminum>]);

// Bronze - 3rd place isn't so bad
craftingTable.removeRecipe(<item:silents_mechanisms:bronze_ingot>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:bronze_ingot>);
craftingTable.removeRecipe(<item:silents_mechanisms:bronze_nugget>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:bronze_nugget>);
craftingTable.removeRecipe(<item:silents_mechanisms:bronze_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:bronze_dust>);
craftingTable.removeRecipe(<item:silents_mechanisms:bronze_block>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:bronze_block>);

furnace.removeRecipe(<item:silents_mechanisms:bronze_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silents_mechanisms:bronze_ingot>);
<recipetype:silents_mechanisms:alloy_smelting>.removeRecipe(<item:silents_mechanisms:bronze_ingot>);
<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:bronze_dust>);

// Coal...miner's daughter
craftingTable.removeRecipe(<item:silents_mechanisms:coal_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:coal_dust>);

<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:coal_dust>);

// Copper...tone sunscreen SPF9000
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_copper>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:copper_ore>);
craftingTable.removeRecipe(<item:silents_mechanisms:copper_ingot>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:copper_ingot>);
craftingTable.removeRecipe(<item:silents_mechanisms:copper_block>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:copper_block>);
craftingTable.removeRecipe(<item:silents_mechanisms:copper_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:copper_dust>);
craftingTable.removeRecipe(<item:silents_mechanisms:copper_nugget>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:copper_nugget>);

furnace.removeRecipe(<item:silents_mechanisms:copper_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silents_mechanisms:copper_ingot>);
furnace.removeRecipe(<item:immersiveengineering:ingot_copper>);
<recipetype:mekanism:smelting>.removeRecipe(<item:immersiveengineering:ingot_copper>);
furnace.removeRecipe(<item:silents_mechanisms:copper_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silents_mechanisms:copper_ingot>);
<recipetype:silents_mechanisms:alloy_smelting>.removeRecipe(<item:silents_mechanisms:copper_ingot>);
<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:copper_dust>);

craftingTable.addShapeless("copper_block_meka_to_ie", <item:immersiveengineering:storage_copper>,
 [<item:mekanism:block_copper>]);
craftingTable.addShapeless("copper_block_ie_to_meka", <item:mekanism:block_copper>,
 [<item:immersiveengineering:storage_copper>]);

// Gold
craftingTable.removeRecipe(<item:silents_mechanisms:gold_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:gold_dust>);

<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:gold_dust>);

// Iron
craftingTable.removeRecipe(<item:silents_mechanisms:iron_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:iron_dust>);

<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:iron_dust>);

// Lead...Zeppelin rulz
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_lead>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:lead_ore>);
craftingTable.removeRecipe(<item:silents_mechanisms:lead_ingot>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:lead_ingot>);
craftingTable.removeRecipe(<item:silents_mechanisms:lead_block>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:lead_block>);
craftingTable.removeRecipe(<item:silents_mechanisms:lead_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:lead_dust>);
craftingTable.removeRecipe(<item:silents_mechanisms:lead_nugget>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:lead_nugget>);

furnace.removeRecipe(<item:silents_mechanisms:lead_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silents_mechanisms:lead_ingot>);
<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:lead_dust>);

craftingTable.addShapeless("lead_block_meka_to_ie", <item:immersiveengineering:storage_lead>,
 [<item:mekanism:block_lead>]);
craftingTable.addShapeless("lead_block_ie_to_meka", <item:mekanism:block_lead>,
 [<item:immersiveengineering:storage_lead>]);

// Nickel..back sucks
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_nickel>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_nickel>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_nickel>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_nickel>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_nickel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_nickel>);

craftingTable.addShapeless("nickel_block_sm_to_ie", <item:immersiveengineering:storage_nickel>,
 [<item:silents_mechanisms:nickel_block>]);
craftingTable.addShapeless("nickel_block_ie_to_sm", <item:silents_mechanisms:nickel_block>,
 [<item:immersiveengineering:storage_nickel>]);

// Ruby...in the sky with diamonds
craftingTable.removeRecipe(<item:earthtojavamobs:ruby>);
mods.jei.JEI.hideItem(<item:earthtojavamobs:ruby>);
mods.jei.JEI.hideItem(<item:earthtojavamobs:ruby_ore>);
craftingTable.removeRecipe(<item:earthtojavamobs:ruby_block>);
mods.jei.JEI.hideItem(<item:earthtojavamobs:ruby_block>);

furnace.removeRecipe(<item:earthtojavamobs:ruby>);
<recipetype:minecraft:blasting>.removeRecipe(<item:earthtojavamobs:ruby>);
<recipetype:mekanism:smelting>.removeRecipe(<item:earthtojavamobs:ruby>);
<recipetype:mekanism:enriching>.removeRecipe(<item:earthtojavamobs:ruby>);

craftingTable.addShapeless("e2j_ruby_to_sgems_ruby", <item:silentgems:ruby>,
 [<item:earthtojavamobs:ruby>]);

// Silver...chair is okay I guess
mods.jei.JEI.hideItem(<item:silentgems:silver_ore>);
craftingTable.removeRecipe(<item:silentgems:silver_block>);
mods.jei.JEI.hideItem(<item:silentgems:silver_block>);
craftingTable.removeRecipe(<item:silentgems:silver_ingot>);
mods.jei.JEI.hideItem(<item:silentgems:silver_ingot>);
craftingTable.removeRecipe(<item:silentgems:silver_nugget>);
mods.jei.JEI.hideItem(<item:silentgems:silver_nugget>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_silver>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_silver>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_silver>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_silver>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_silver>);

furnace.removeRecipe(<item:immersiveengineering:ingot_silver>);
<recipetype:minecraft:blasting>.removeRecipe(<item:immersiveengineering:ingot_silver>);
<recipetype:mekanism:smelting>.removeRecipe(<item:immersiveengineering:ingot_silver>);
furnace.removeRecipe(<item:silentgems:silver_ingot>);
<recipetype:minecraft:blasting>.removeRecipe(<item:silentgems:silver_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silentgems:silver_ingot>);

craftingTable.addShapeless("silver_block_sm_to_ie", <item:immersiveengineering:storage_silver>,
 [<item:silents_mechanisms:silver_block>]);
craftingTable.addShapeless("silver_block_ie_to_sm", <item:silents_mechanisms:silver_block>,
 [<item:immersiveengineering:storage_silver>]);

// Steel - just glad mods stopped adding steel ORE
craftingTable.removeRecipe(<item:immersiveengineering:ingot_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_steel>);
craftingTable.removeRecipe(<item:silents_mechanisms:steel_ingot>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:steel_ingot>);
craftingTable.removeRecipe(<item:silents_mechanisms:steel_nugget>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:steel_nugget>);
craftingTable.removeRecipe(<item:silents_mechanisms:steel_block>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:steel_block>);
craftingTable.removeRecipe(<item:silents_mechanisms:steel_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:steel_dust>);

furnace.removeRecipe(<item:silents_mechanisms:steel_ingot>);
<recipetype:minecraft:blasting>.removeRecipe(<item:silents_mechanisms:steel_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silents_mechanisms:steel_ingot>);
<recipetype:silents_mechanisms:alloy_smelting>.removeRecipe(<item:silents_mechanisms:steel_ingot>);
<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:steel_dust>);

craftingTable.addShapeless("steel_block_meka_to_ie", <item:immersiveengineering:storage_steel>,
 [<item:mekanism:block_steel>]);
craftingTable.addShapeless("steel_block_ie_to_meka", <item:mekanism:block_steel>,
 [<item:immersiveengineering:storage_steel>]);

// Tin...der lovin' recipe-tweakin'
mods.jei.JEI.hideItem(<item:silents_mechanisms:tin_ore>);
craftingTable.removeRecipe(<item:silents_mechanisms:tin_ingot>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:tin_ingot>);
craftingTable.removeRecipe(<item:silents_mechanisms:tin_nugget>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:tin_nugget>);
craftingTable.removeRecipe(<item:silents_mechanisms:tin_block>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:tin_block>);
craftingTable.removeRecipe(<item:silents_mechanisms:tin_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:tin_dust>);

furnace.removeRecipe(<item:silents_mechanisms:tin_ingot>);
<recipetype:minecraft:blasting>.removeRecipe(<item:silents_mechanisms:tin_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silents_mechanisms:tin_ingot>);
<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:tin_dust>);

// Uranium...is HEAVY METAL \m/
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_uranium>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:uranium_ore>);
craftingTable.removeRecipe(<item:silents_mechanisms:uranium_ingot>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:uranium_ingot>);
craftingTable.removeRecipe(<item:silents_mechanisms:uranium_nugget>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:uranium_nugget>);
craftingTable.removeRecipe(<item:silents_mechanisms:uranium_block>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:uranium_block>);
craftingTable.removeRecipe(<item:silents_mechanisms:uranium_dust>);
mods.jei.JEI.hideItem(<item:silents_mechanisms:uranium_dust>);

furnace.removeRecipe(<item:silents_mechanisms:uranium_ingot>);
<recipetype:minecraft:blasting>.removeRecipe(<item:silents_mechanisms:uranium_ingot>);
<recipetype:mekanism:smelting>.removeRecipe(<item:silents_mechanisms:uranium_ingot>);
<recipetype:silents_mechanisms:crushing>.removeRecipe(<item:silents_mechanisms:uranium_dust>);

craftingTable.addShapeless("uranium_block_meka_to_ie", <item:immersiveengineering:storage_uranium>,
 [<item:mekanism:block_uranium>]);
craftingTable.addShapeless("uranium_block_ie_to_meka", <item:mekanism:block_uranium>,
 [<item:immersiveengineering:storage_uranium>]);
/*
  Resolving redundant ores and their outputs
*/

# Copper
mods.jei.JEI.hideItem(<item:bluepower:copper_ore>);
craftingTable.removeRecipe(<item:bluepower:copper_ingot>);
mods.jei.JEI.hideItem(<item:bluepower:copper_ingot>);
craftingTable.removeRecipe(<item:bluepower:copper_block>);
mods.jei.JEI.hideItem(<item:bluepower:copper_block>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_copper>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_copper>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_copper>);
furnace.addRecipe("copper_block_m2ie", <item:immersiveengineering:storage_copper>,
 <item:mekanism:block_copper>, 0, 100);
furnace.addRecipe("copper_block_ie2m", <item:mekanism:block_copper>,
 <item:immersiveengineering:storage_copper>, 0, 100);

# Lead
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_lead>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_lead>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_lead>);
furnace.addRecipe("lead_block_m2ie", <item:immersiveengineering:storage_lead>,
 <item:mekanism:block_lead>, 0, 100);
furnace.addRecipe("lead_block_ie2m", <item:mekanism:block_lead>,
 <item:immersiveengineering:storage_lead>, 0, 100);

# Silver
craftingTable.removeRecipe(<item:bluepower:silver_block>);
mods.jei.JEI.hideItem(<item:bluepower:silver_block>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_silver>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_silver>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_silver>);
craftingTable.removeRecipe(<item:bluepower:silver_ingot>);
craftingTable.addShapeless("silver_ingot_ieb2bpi", <item:bluepower:silver_ingot> * 9, [<item:immersiveengineering:storage_silver>]);

# Steel
craftingTable.removeRecipe(<item:immersiveengineering:ingot_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_steel>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_steel>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_steel>);
furnace.addRecipe("steel_block_m2ie", <item:immersiveengineering:storage_steel>,
 <item:mekanism:block_steel>, 0, 100);
furnace.addRecipe("steel_block_ie2m", <item:mekanism:block_steel>,
 <item:immersiveengineering:storage_steel>, 0, 100);

#Tungsten
craftingTable.removeRecipe(<item:endreborn:tungsten_nugget>);
furnace.removeRecipe(<item:bluepower:tungsten_nugget>);
mods.jei.JEI.hideItem(<item:endreborn:tungsten_nugget>);
mods.jei.JEI.hideItem(<item:endreborn:tungsten_ore>);
furnace.removeRecipe(<item:endreborn:tungsten_ingot>);
craftingTable.removeRecipe(<item:endreborn:tungsten_ingot>);
mods.jei.JEI.hideItem(<item:endreborn:tungsten_ingot>);
craftingTable.removeRecipe(<item:endreborn:tungsten_block>);
mods.jei.JEI.hideItem(<item:endreborn:tungsten_block>);
furnace.addRecipe("tungsten_ingot_smelting", <item:bluepower:tungsten_ingot>, <item:bluepower:tungsten_ore>, 1.2, 40);
furnace.addRecipe("end_tungsten_ingot_smelting", <item:bluepower:tungsten_ingot>, <item:endreborn:end_tungsten_ore>, 1.2, 40);
<recipetype:bluepower:alloy_smelting>.addJSONRecipe("tungsten_carbide_ingot", 
  {
  ingredients: [
      {
      item: <item:bluepower:tungsten_ingot>.registryName,
      count: 2
      },
      {
      item: <item:bluepower:silver_ingot>.registryName
      }
    ],
  result: {
      item: <item:bluepower:tungsten_carbide>.registryName,
      count: 3
      }
  });

# Uranium
mods.jei.JEI.hideItem(<item:immersiveengineering:ore_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:ingot_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:ingot_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:nugget_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:nugget_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:storage_uranium>);
craftingTable.removeRecipe(<item:immersiveengineering:dust_uranium>);
mods.jei.JEI.hideItem(<item:immersiveengineering:dust_uranium>);
furnace.addRecipe("uranium_block_m2ie", <item:immersiveengineering:storage_uranium>,
 <item:mekanism:block_uranium>, 0, 100);
furnace.addRecipe("uranium_block_ie2m", <item:mekanism:block_uranium>,
 <item:immersiveengineering:storage_uranium>, 0, 100);
// Conflict resolution

craftingTable.removeByName("bagofyurting:bag_of_yurting");
craftingTable.addShaped("BoY_tier_1", <item:bagofyurting:bag_of_yurting>.withTag({radius: 0}),
 [[<tag:forge:leather>, <tag:minecraft:wool>, <tag:forge:leather>],
  [<tag:minecraft:wool>, <item:minecraft:ender_pearl>, <tag:minecraft:wool>],
  [<tag:forge:leather>, <tag:minecraft:wool>, <tag:forge:leather>],
  ]);

craftingTable.removeRecipe(<item:morevanillaarmor:lapis_helmet>);
mods.jei.JEI.hideItem(<item:morevanillaarmor:lapis_helmet>);
craftingTable.removeRecipe(<item:morevanillaarmor:lapis_chestplate>);
mods.jei.JEI.hideItem(<item:morevanillaarmor:lapis_chestplate>);
craftingTable.removeRecipe(<item:morevanillaarmor:lapis_leggings>);
mods.jei.JEI.hideItem(<item:morevanillaarmor:lapis_leggings>);
craftingTable.removeRecipe(<item:morevanillaarmor:lapis_boots>);
mods.jei.JEI.hideItem(<item:morevanillaarmor:lapis_boots>);
craftingTable.removeRecipe(<item:morevanillatools:lapis_sword>);
mods.jei.JEI.hideItem(<item:morevanillatools:lapis_sword>);
craftingTable.removeRecipe(<item:morevanillatools:lapis_axe>);
mods.jei.JEI.hideItem(<item:morevanillatools:lapis_axe>);
craftingTable.removeRecipe(<item:morevanillatools:lapis_pickaxe>);
mods.jei.JEI.hideItem(<item:morevanillatools:lapis_pickaxe>);
craftingTable.removeRecipe(<item:morevanillatools:lapis_shovel>);
mods.jei.JEI.hideItem(<item:morevanillatools:lapis_shovel>);
craftingTable.removeRecipe(<item:morevanillatools:lapis_hoe>);
mods.jei.JEI.hideItem(<item:morevanillatools:lapis_hoe>);

// Info
// mods.jei.JEI.addInfo(IItemStack stack, String[] information);

// priority: 0

events.listen('item.registry', event => {
})

events.listen('block.registry', event => {

  // Dacite
  event.create('byg:compat/dacite_copper_ore').material('rock').hardness(3.0).displayName('Dacite Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Mossy Stone
  event.create('byg:compat/mossy_stone_copper_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('byg:compat/mossy_stone_amethyst_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('byg:compat/mossy_stone_bauxite_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('byg:compat/mossy_stone_fluorite_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('byg:compat/mossy_stone_lead_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('byg:compat/mossy_stone_nickel_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('byg:compat/mossy_stone_osmium_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('byg:compat/mossy_stone_sapphire_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('byg:compat/mossy_stone_silver_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('byg:compat/mossy_stone_tin_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('byg:compat/mossy_stone_uranium_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Red Rock
  event.create('byg:compat/red_rock_copper_ore').material('rock').hardness(3.0).displayName('Red Rock Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Rocky Stone
  event.create('byg:compat/rocky_stone_copper_ore').material('rock').hardness(3.0).displayName('Rocky Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Scoria Stone
  event.create('byg:compat/scoria_stone_copper_ore').material('rock').hardness(3.0).displayName('Scoria Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Soapstone
  event.create('byg:compat/soapstone_copper_ore').material('rock').hardness(3.0).displayName('Soapstone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Blue Netherrack
  event.create('byg:blue_netherrack_quartz_ore').material('rock').hardness(3.0).displayName('Blue Nether Quartz Ore').requiresTool(true).harvestTool('pickaxe', 0)

  // Brimstone
  event.create('byg:brimstone_quartz_ore').material('rock').hardness(3.0).displayName('Brimstone Quartz Ore').requiresTool(true).harvestTool('pickaxe', 0)

})
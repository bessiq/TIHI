// priority: 1

events.listen('item.registry', event => {
})

/* New blocks on the...block */
events.listen('block.registry', event => {

  // Dacite
  event.create('tihi:byg/dacite_copper_ore').material('rock').hardness(3.0).displayName('Dacite Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Mossy Stone
  event.create('tihi:byg/mossy_stone_copper_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('tihi:byg/mossy_stone_amethyst_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('tihi:byg/mossy_stone_bauxite_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('tihi:byg/mossy_stone_fluorite_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('tihi:byg/mossy_stone_lead_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('tihi:byg/mossy_stone_nickel_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('tihi:byg/mossy_stone_osmium_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('tihi:byg/mossy_stone_sapphire_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('tihi:byg/mossy_stone_silver_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 2)
  event.create('tihi:byg/mossy_stone_tin_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)
  event.create('tihi:byg/mossy_stone_uranium_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Red Rock
  event.create('tihi:byg/red_rock_copper_ore').material('rock').hardness(3.0).displayName('Red Rock Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Rocky Stone
  event.create('tihi:byg/rocky_stone_copper_ore').material('rock').hardness(3.0).displayName('Rocky Stone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Scoria Stone
  event.create('tihi:byg/scoria_stone_copper_ore').material('rock').hardness(3.0).displayName('Scoria Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Soapstone
  event.create('tihi:byg/soapstone_copper_ore').material('rock').hardness(3.0).displayName('Soapstone Copper Ore').requiresTool(true).harvestTool('pickaxe', 1)

  // Blue Netherrack
  event.create('tihi:byg/blue_netherrack_quartz_ore').material('rock').hardness(3.0).displayName('Blue Nether Quartz Ore').requiresTool(true).harvestTool('pickaxe', 0)

  // Brimstone
  event.create('tihi:byg/brimstone_quartz_ore').material('rock').hardness(3.0).displayName('Brimstone Quartz Ore').requiresTool(true).harvestTool('pickaxe', 0)

})
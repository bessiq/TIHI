// priority: 0

console.info('HELLO BROOKLYN!')

events.listen('item.registry', event => {
  // event.create('example_item').displayName('Example Item')
})

events.listen('block.registry', event => {
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
  event.create('byg:compat/dacite_copper_ore').material('rock').hardness(3.0).displayName('Dacite Copper Ore').requiresTool(true)
  event.create('byg:compat/mossy_stone_copper_ore').material('rock').hardness(3.0).displayName('Mossy Stone Copper Ore').requiresTool(true)
  event.create('byg:compat/red_rock_copper_ore').material('rock').hardness(3.0).displayName('Red Rock Copper Ore').requiresTool(true)
  event.create('byg:compat/rocky_stone_copper_ore').material('rock').hardness(3.0).displayName('Rocky Stone Copper Ore').requiresTool(true)
  event.create('byg:compat/scoria_stone_copper_ore').material('rock').hardness(3.0).displayName('Scoria Copper Ore').requiresTool(true)
  event.create('byg:compat/soapstone_copper_ore').material('rock').hardness(3.0).displayName('Soapstone Copper Ore').requiresTool(true)
  event.create('byg:blue_netherrack_quartz_ore').material('rock').hardness(3.0).displayName('Blue Nether Quartz Ore').requiresTool(true)
  event.create('byg:brimstone_quartz_ore').material('rock').hardness(3.0).displayName('Brimstone Quartz Ore').requiresTool(true)

  event.create('tihi:tihinium_ore').material('rock').hardness(666.0).displayName('Tihinium Ore').requiresTool(true)

})
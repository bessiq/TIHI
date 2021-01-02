// priority: 0

console.info('HELLOOOOOOOOOOOO BROOKLYN!')

events.listen('item.registry', event => {

  // event.create('tihi:my_mom').displayName('MY MOM')
  
  event.create('tihi:red_clay_ball').displayName('Red Clay Ball')
})

/* You do it to yourself, you do, and that's what really hurts */
events.listen('block.registry', event => {

  // Let the hate flow through you
  event.create('tihi:tihinium_ore').material('rock').hardness(666.0).displayName('Tihinium "Ore"').requiresTool(true).harvestTool('pickaxe', 5)

  // Georgia on my mind
  event.create('tihi:red_clay').material('clay').hardness(0.6).displayName('Red Clay').requiresTool(true).harvestTool('shovel', 0)
})
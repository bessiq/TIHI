// priority: 0

console.info('HELLO BROOKLYN!')

events.listen('item.registry', event => {
  // event.create('tihi:my_mom').displayName('MY MOM')
})

/* You do it to yourself, you do, and that's what really hurts */
events.listen('block.registry', event => {

  // Let the hate flow through you
  event.create('tihi:tihinium_ore').material('rock').hardness(666.0).displayName('Tihinium "Ore"').requiresTool(true).harvestTool('pickaxe', 5)

})
// priority: 0

console.info('HELLO BROOKLYN!')

events.listen('item.registry', event => {
  // event.create('tihi:my_mom').displayName('MY MOM')
})

events.listen('block.registry', event => {

  // Let the hate flow through you
  event.create('tihi:tihinium_ore').material('rock').hardness(666.0).displayName('Tihinium "Ore"').requiresTool(true).harvestTool('pickaxe', 4)

})
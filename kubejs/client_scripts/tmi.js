// TIHI TMI

// JEI-spy with my little i
events.listen('jei.information', function (event) {

    event.add('appliedenergistics2:quartz_ore', ["Cooler than a polar bear's toenails."])
    event.add('ars_nouveau:arcane_ore', ['In the oldest forests and twilit realms.'])
    event.add('byg:pendorite_ore', ["It's the forest's fault."])
    event.add('byg:ametrine_ore', ['In the boundless void it can be found, hidden among the shattered.'])
    event.add('farlanders:endumium_ore', ['Rumor is it hangs out with emeralds.'])
    event.add('tihi:tihinium', ['This "ore" is strange, stubborn, and has been crashing on my couch for a week now. I would avoid it.'])
    event.add('bagofyurting:bag_of_yurting', ['These bags can be upgraded to gobble up massive areas. How much can you yurt, bruh?', '', 'Warning: some things may not be...yurtable?'])
    event.add('mekanism:osmium_ore', ['Mysteriously absent from the Overworld, except for trace amounts that are sometimes found deep underground in an area the locals call a...Baseball Beretta? Bath Salt Banderas? Bay Saw Barchetta? Man, idk. That was a crazy night.'])
    event.add('mekanism:fluorite_ore', ['Fluorite has not been seen in the Overworld for eons, but some claim they have spied it at extreme altitudes. No one believes them.'])
    event.add('weeping_angels:kontron_ore', ['Infrequent inhabitant of icy environs.'])
    event.add('druidcraft:amber_ore', ['Found in the bleakest biomes, or at least those with zero-percent humidity.'])
    event.add('iceandfire:amythest_ore', ['Where the lion sleeps tonight.'])
    event.add('iceandfire:amythest_ore', ['Under the sea,', 'Where the fish pee.'])
    event.add('druidcraft:fiery_glass_ore', ['Hot and bothered.'])
    event.add('druidcraft:moonstone_ore', ['Hangs out in high-density digs, and is also known to frequent the forest where the sun goes down...permanently.'])
    event.add('druidcraft:rockroot_ore', ['Ask the Ents.'])
})

// Voila!
events.listen('jei.add.items', function (event) {
    event.add('minecraft:dragon_egg')
})

// Tooltips of the trade
onEvent('item.tooltip', tooltip => {
    tooltip.add('tihi:tihinium', 'What are you looking at?')
})
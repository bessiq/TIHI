// TIHI TMI

// JEI-spy with my little i
events.listen('jei.information', function (event) {

    event.add('appliedenergistics2:quartz_ore', ['Certus quartz often forms beneath ice and snow.'])
    event.add('byg:pendorite_ore', ['Forest Faults are rumored to be a source of Pendorite.'])
    event.add('byg:ametrine_ore', ['Ametrine can be found in stone forests and the Guiana Shield region.'])
    event.add('farlanders:endumium_ore', ['Endumium is usually found in mountainous regions.'])
    event.add('tihi:tihinium_ore', ['This ore is strange and smells funny. I would avoid it.'])
    event.add('bagofyurting:bag_of_yurting', ['These bags can be upgraded to gobble up massive areas. How much can you yurt, bruh?', '', 'Warning: some things may not be...yurtable?'])
    event.add('mekanism:osmium_ore', ['Mysteriously absent from the Overworld, except for trace amounts that are sometimes found deep underneath an area called %^#^!~ %^&&*&^.'])
    event.add('mekanism:fluorite_ore', ['Fluorite has not been seen in the Overworld for eons, but some claim they have spotted it at extreme altitudes. No one believes them.'])
    event.add('mining_dimension:teleporter', ['This realm may contain what you are seeking...and also some things you are not...seeking.', ' ', 'Also, just look at that recipe. Eesh.'])
})

// Voila!
events.listen('jei.add.items', function (event) {
    event.add('minecraft:dragon_egg')
    event.add(item.of('appliedenergistics2:facade').nbt({item: 'minecraft:stone'}))
})

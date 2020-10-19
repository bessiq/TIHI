// TIHI TMI

// JEI-spy with my little i
events.listen('jei.information', function (event) {

    event.add('byg:pendorite_ore', ['Forest Faults are rumored to be a source of Pendorite.'])
    event.add('byg:ametrine_ore', ['Ametrine can be found in the Guiana Shield region.'])
    event.add('farlanders:endumium_ore', ['Endumium is usually found in mountainous regions.'])

})

// Voila!
events.listen('jei.add.items', function (event) {

    event.add('minecraft:dragon_egg')
})

// J-E-bye
events.listen('jei.hide.items', function (event) {

    event.hide('appliedenergistics2:facade')
    event.hide('buildersaddition:iron_rod')
})
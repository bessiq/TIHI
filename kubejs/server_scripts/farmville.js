// future farmers of minecraft

onEvent('recipes', event => {

    const yeehaw = (name, crop, seed) => {
        event.replaceOutput('#forge:crops/' + name, crop)
        event.replaceOutput('#forge:seeds/' + name, seed)

        event.replaceInput({ mod: 'thermal' }, 'thermal:' + name, '#forge:crops/' + name)
        event.replaceInput({ mod: 'thermal' }, 'thermal:strawberry', '#forge:crops/strawberry')
        event.replaceInput({ mod: 'druidcraft' }, 'druidcraft:blueberries', '#forge:fruits/blueberries')
        event.replaceInput({ mod: 'druidcraft' }, 'druidcraft:elderberries', '#forge:fruits/elderberry')
        event.replaceInput({ mod: 'mysticalworld' }, 'mysticalworld:aubergine', '#forge:crops/eggplant')

        var modname = ['minecraft', 'mysticalworld', 'pneumaticcraft', 'gobber2', 'thermal', 'enigmaticlegacy', 'astralsorcery', 'naturesaura', 'eidolon', 'botania', 'xreliquary', 'immersiveengineering']
        event.replaceInput({ mod: modname }, 'minecraft:apple', '#forge:fruits/apple')
    }

    yeehaw(
        'barley',
        'pamhc2crops:barleyitem',
        'pamhc2crops:barleyseeditem',
    )
    yeehaw(
        'bell_pepper',
        'pamhc2crops:bellpepperitem',
        'pamhc2crops:bellpepperseeditem',
    )
    yeehaw(
        'coffee',
        'pamhc2crops:coffeebeanitem',
        'pamhc2crops:coffeebeanseeditem',
    )
    yeehaw(
        'corn',
        'pamhc2crops:cornitem',
        'pamhc2crops:cornseeditem',
    )
    yeehaw(
        'eggplant',
        'pamhc2crops:eggplantitem',
        'pamhc2crops:eggplantseeditem',
    )
    yeehaw(
        'onion',
        'pamhc2crops:onionitem',
        'pamhc2crops:onionseeditem',
    )
    yeehaw(
        'peanut',
        'pamhc2crops:peanutitem',
        'pamhc2crops:peanutseeditem',
    )
    yeehaw(
        'radish',
        'pamhc2crops:radishitem',
        'pamhc2crops:radishseeditem',
    )
    yeehaw(
        'rice',
        'pamhc2crops:riceitem',
        'pamhc2crops:riceseeditem',
    )
    yeehaw(
        'spinach',
        'pamhc2crops:spinachitem',
        'pamhc2crops:spinachseeditem',
    )
    yeehaw(
        'tea',
        'pamhc2crops:tealeafitem',
        'pamhc2crops:tealeafseeditem',
    )
    yeehaw(
        'tomato',
        'pamhc2crops:tomatoitem',
        'pamhc2crops:tomatoseeditem',
    )
})
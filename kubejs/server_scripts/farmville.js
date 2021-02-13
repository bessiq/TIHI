// future farmers of minecraft

onEvent('recipes', event => {
    // Possibly pointless future-proofing for this purple potato
    event.replaceInput({ mod: 'mysticalworld' }, 'mysticalworld:aubergine', '#forge:crops/eggplant')

    // The Carb Suite
    event.replaceOutput({}, '#forge:flour', 'create:wheat_flour')
    event.replaceOutput({}, '#forge:dough', 'create:dough')
    event.replaceInput({}, 'pneumaticcraft:wheat_flour', '#forge:flour')
    event.replaceInput({}, 'appliedenergistics2:flour', '#forge:flour')
    event.replaceInput({}, 'create:wheat_flour', '#forge:flour')
    event.replaceInput({}, 'farmersdelight:wheat_dough', '#forge:dough')
    event.replaceInput({ mod: 'farmersdelight' }, 'minecraft:wheat', '#forge:dough')
    event.replaceInput({ output: 'druidcraft:apple_elderberry_crumble' }, 'minecraft:wheat', '#forge:dough')
    event.replaceInput({ output: 'druidcraft:blueberry_muffin' }, 'minecraft:wheat', '#forge:dough')
    event.replaceInput({ output: 'minecraft:cake' }, 'minecraft:wheat', '#forge:dough')
    event.replaceInput({ output: 'minecraft:cookie' }, 'minecraft:wheat', '#forge:dough')
    event.replaceInput({ id: 'minecolonies:blockhutbaker' }, 'minecraft:wheat', '#forge:dough')
    event.replaceInput({ id: 'rats:rat_cage' }, 'minecraft:wheat', 'farmersdelight:straw')
    event.remove({ type: 'minecraft:crafting_shaped', output: 'minecraft:bread' })
    event.remove({ type: 'minecraft:crafting_shapeless', output: 'minecraft:bread' })
    event.remove({ type: 'minecraft:crafting_shaped', output: 'create:dough' })
    event.remove({ type: 'minecraft:crafting_shapeless', output: 'create:dough' })
    event.remove({ id: 'appliedenergistics2:smelting/bread' })

    // Not much left after yeeting all the other crop mods; I don't miss Pam really (cries in rainbow bacon)
    const yeehaw = (name, crop, seed) => {
        event.replaceOutput('#forge:crops/' + name, crop)
        event.replaceOutput('#forge:seeds/' + name, seed)
    }
    yeehaw(
        'cabbage',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_seeds',
    )
    yeehaw(
        'eggplant',
        'mysticalworld:aubergine',
        'mysticalworld:aubergine_seeds',
    )
    yeehaw(
        'onion',
        'farmersdelight:onion',
        '',
    )
    yeehaw(
        'rice',
        'farmersdelight:rice',
        'farmersdelight:rice',
    )
    yeehaw(
        'tomato',
        'farmersdelight:tomato',
        'farmersdelight:tomato_seeds',
    )
})
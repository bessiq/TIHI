
// priority: 5

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

// GLHF - stuff removed or remixed with datapacks
onEvent('recipes', event => {

    event.replaceOutput({}, '#forge:flour', 'create:wheat_flour')
    event.replaceInput({}, 'pneumaticcraft:wheat_flour', '#forge:flour')
    event.replaceInput({}, 'appliedenergistics2:flour', '#forge:flour')
    event.remove({ type: 'minecraft:crafting_shaped', output: 'minecraft:bread' })
    event.remove({ type: 'minecraft:crafting_shapeless', output: 'minecraft:bread' })
    event.remove({ id: 'appliedenergistics2:smelting/bread' })

    event.replaceOutput({}, '#forge:crude_oil', 'pneumaticcraft:oil')
    event.replaceInput({}, 'pneumaticcraft:oil', '#forge:crude_oil')
    event.replaceInput({}, 'thermal:crude_oil', '#forge:crude_oil')

    event.replaceOutput({}, '#forge:creosote', 'immersiveengineering:creosote')
    event.replaceInput({}, 'thermal:creosote', '#forge:creosote')
    event.replaceInput({}, 'immersiveengineering:creosote', '#forge:creosote')

    event.replaceOutput({}, '#forge:plastic', 'mekanism:hdpe_sheet')
    event.replaceInput({}, 'pneumaticcraft:plastic', '#forge:plastic')
    event.replaceInput({}, 'mekanism:hdpe_sheet', '#forge:plastic')

    event.remove({ output: 'mekanism:bio_fuel', mod: 'mekanism' })
    event.remove({ mod: 'chancecubes' })
    event.remove({ output: '#inventorypets:all_pets' })
    event.remove({ id: 'druidcraft:lead' })

    event.remove({ output: 'expandedstorage:old_wood_chest' })
    event.remove({ output: 'expandedstorage:old_iron_chest' })
    event.remove({ output: 'expandedstorage:old_gold_chest' })
    event.remove({ output: 'expandedstorage:old_diamond_chest' })
    event.remove({ output: 'expandedstorage:old_obsidian_chest' })
    event.remove({ output: 'expandedstorage:old_netherite_chest' })
    event.remove({ id: 'expandedstorage:old_wood_to_wood' })
    event.remove({ id: 'expandedstorage:old_iron_to_iron' })
    event.remove({ id: 'expandedstorage:old_gold_to_gold' })
    event.remove({ id: 'expandedstorage:old_diamond_to_diamond' })
    event.remove({ id: 'expandedstorage:old_obsidian_to_obsidian' })
    event.remove({ id: 'expandedstorage:old_netherite_to_netherite' })

    event.replaceInput({ id: 'druidcraft:white_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:orange_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:magenta_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:light_blue_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:yellow_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:lime_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:pink_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:gray_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:light_gray_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:cyan_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:purple_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:blue_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:brown_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:green_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:red_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')
    event.replaceInput({ id: 'druidcraft:black_bedroll' }, 'minecraft:wheat', 'druidcraft:rope')

})
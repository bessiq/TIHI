
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
    event.remove({type: 'minecraft:crafting_shaped', output: 'minecraft:bread'})
    event.remove({type: 'minecraft:crafting_shapeless', output: 'minecraft:bread'})
    event.remove({id: 'appliedenergistics2:smelting/bread'})

    event.replaceOutput({}, '#forge:crude_oil', 'pneumaticcraft:oil')
    event.replaceInput({}, 'pneumaticcraft:oil', '#forge:crude_oil')
    event.replaceInput({}, 'thermal:crude_oil', '#forge:crude_oil')

    event.replaceOutput({}, '#forge:creosote', 'immersiveengineering:creosote')
    event.replaceInput({}, 'thermal:creosote', '#forge:creosote')
    event.replaceInput({}, 'immersiveengineering:creosote', '#forge:creosote')

    event.replaceInput({}, 'simplefarming:cheese_slice', '#forge:cheese')
    event.replaceInput({}, 'rats:cheese', '#forge:cheese')

    event.remove({ output: 'mekanism:bio_fuel', mod: 'mekanism' })
    event.remove({ output: 'minecraft:slime_ball', mod: 'aquaculture' })
    event.remove({ mod: 'chancecubes' })

    event.remove({ output: 'expandedstorage:old_wood_chest' })
    event.remove({ output: 'expandedstorage:old_iron_chest' })
    event.remove({ output: 'expandedstorage:old_gold_chest' })
    event.remove({ output: 'expandedstorage:old_diamond_chest' })
    event.remove({ output: 'expandedstorage:old_obsidian_chest' })
    event.remove({ output: 'expandedstorage:old_netherite_chest' })

    event.remove({ output: '#mysticalworld:copper_items' })
    event.remove({ output: '#mysticalworld:silver_items' })
    event.replaceInput({}, 'mysticalworld:copper_sword', 'iceandfire:copper_sword')
    event.replaceInput({}, 'mysticalworld:silver_sword', 'iceandfire:silver_sword')
})
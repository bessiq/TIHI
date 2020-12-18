// GLHF - stuff removed or remixed with datapacks

settings.logAddedRecipes = true
settings.logRemovedRecipes = true

// Hey, listen!
events.listen('recipes', function (event) {

    // too beaucoup
    event.replaceOutput({}, 'pneumaticcraft:wheat_flour', 'appliedenergistics2:flour')
    event.replaceInput({}, 'pneumaticcraft:wheat_flour', 'appliedenergistics2:flour')

    event.replaceInput({}, 'simplefarming:cheese_slice', '#forge:cheese')

    event.remove({ output: 'mekanism:bio_fuel', mod: 'mekanism' })

    event.remove({ output: 'expandedstorage:old_wood_chest' })
    event.remove({ output: 'expandedstorage:old_iron_chest' })
    event.remove({ output: 'expandedstorage:old_gold_chest' })
    event.remove({ output: 'expandedstorage:old_diamond_chest' })
    event.remove({ output: 'expandedstorage:old_obsidian_chest' })
    event.remove({ output: 'expandedstorage:old_netherite_chest' })
    event.remove({ output: 'minecraft:slime_ball', mod: 'aquaculture' })


})
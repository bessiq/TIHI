
// priority: 5

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

// odds & ends
onEvent('recipes', event => {
    // in dust real
    event.replaceOutput({}, '#forge:sawdust', 'mekanism:sawdust')
    event.replaceInput({}, 'immersiveengineering:dust_wood', '#forge:sawdust')
    event.replaceInput({}, 'mekanism:sawdust', '#forge:sawdust')
    event.replaceOutput({}, '#forge:plastic', 'mekanism:hdpe_sheet')
    event.replaceInput({}, 'pneumaticcraft:plastic', '#forge:plastic')
    event.replaceInput({}, 'mekanism:hdpe_sheet', '#forge:plastic')
    event.remove({ output: 'mekanism:bio_fuel', mod: 'mekanism' })
    event.replaceInput({ mod: 'immersiveengineering' }, '#forge:clay', 'minecraft:clay')

    // rope-a-dope
    event.remove({ id: 'druidcraft:lead' })
    event.remove({ id: 'farmersdelight:lead_from_rope' })
    event.replaceInput({ id: 'minecraft:lead' }, '#forge:string', '#tihi:rope')
    colors.forEach((color) => {
        event.replaceInput({ id: 'druidcraft:' + color + '_bedroll' }, 'minecraft:wheat', '#tihi:rope')
    })

    // I just think they're kinda ugly
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

    // guess we'll see
    event.remove({ mod: 'chancecubes' })
    event.remove({ output: '#inventorypets:all_pets' })
    event.replaceOutput({}, '#forge:tallow', 'occultism:tallow')
    event.replaceInput({}, 'eidolon:tallow', '#forge:tallow')
    event.replaceInput({}, 'quark:tallow', '#forge:tallow')
    event.remove({ id: 'minecolonies:supplycampdeployer' })
    event.remove({ id: 'minecolonies:supplychestdeployer' })
})
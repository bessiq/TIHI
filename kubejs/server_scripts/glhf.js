
// priority: 5

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

// odds & ends

onEvent('recipes.type_registry', event => {
    event.ignore('ars_nouveau:glyph_recipe')
})

onEvent('recipes', event => {
    // in dust real
    event.replaceOutput({}, '#forge:plastic', 'mekanism:hdpe_sheet')
    event.replaceInput({}, 'mekanism:hdpe_sheet', '#forge:plastic')
    event.remove({ output: 'mekanism:bio_fuel', mod: 'mekanism' })
    event.replaceInput({ mod: 'immersiveengineering' }, '#forge:storage_blocks/clay', 'minecraft:clay')
    event.replaceInput({ mod: 'immersiveengineering' }, '#forge:clay', 'minecraft:clay_ball')
    event.replaceInput({}, 'iceandfire:witherbone', '#forge:wither_bones')
    event.replaceInput({}, 'tconstruct:necrotic_bone', '#forge:wither_bones')
    event.remove({ id: 'eidolon:pewter_blend' })
    event.replaceInput({}, 'astralsorcery:marble_raw', '#forge:marble')
    event.replaceInput({}, 'quark:marble', '#forge:marble')
    event.recipes.mekanism.enriching('minecraft:ender_pearl', "#forge:dusts/ender_pearl")

    // andesite alloy
    event.remove({ type: 'minecraft:crafting_shaped', output: 'create:andesite_alloy' })
    event.recipes.immersiveengineering.alloy('create:andesite_alloy', 'minecraft:andesite', '#forge:nuggets/zinc')
    event.recipes.immersiveengineering.alloy('create:andesite_alloy', 'minecraft:andesite', '#forge:nuggets/iron')
    event.recipes.immersiveengineering.arc_furnace(['create:andesite_alloy'], 'minecraft:andesite', ['#forge:nuggets/zinc'])
    event.recipes.immersiveengineering.arc_furnace(['create:andesite_alloy'], 'minecraft:andesite', ['#forge:nuggets/iron'])

    // silicon
    event.remove({ id: 'appliedenergistics2:smelting/silicon' })
    event.recipes.mekanism.metallurgic_infusing('appliedenergistics2:silicon', 'mekanism:dust_quartz', 'mekanism:carbon', 10)

    // Gonna end up a big ol' pile of them bones
    const ie_crush = event.recipes.immersiveengineering.crusher
    const meka_crush = event.recipes.mekanism.crushing
    var bm = 'minecraft:bone_meal'
    
    event.remove({ type: 'minecraft:crafting_shapeless', output: bm })
    event.remove({ type: 'minecraft:crafting_shaped', output: bm })

    ie_crush(item.of(bm, 3), 'minecraft:bone')
    ie_crush(item.of(bm, 9), 'minecraft:bone_block')
    ie_crush(item.of(bm, 5), '#iceandfire:mob_skulls')
    ie_crush(item.of(bm, 3), 'ars_nouveau:wilden_horn')
    ie_crush(item.of(bm, 5), 'iceandfire:troll_tusk')
    ie_crush(item.of(bm, 1), 'rats:rat_skull')
    ie_crush(item.of(bm, 4), '#fins:snail_shells')
    ie_crush(item.of(bm, 3), 'gaiadimension:shiny_bone')
    ie_crush(item.of(bm, 4), 'undergarden:brute_tusk')

    meka_crush(item.of(bm, 3), 'minecraft:bone')
    meka_crush(item.of(bm, 9), 'minecraft:bone_block')
    meka_crush(item.of(bm, 5), '#iceandfire:mob_skulls')
    meka_crush(item.of(bm, 3), 'ars_nouveau:wilden_horn')
    meka_crush(item.of(bm, 5), 'iceandfire:troll_tusk')
    meka_crush(item.of(bm, 1), 'rats:rat_skull')
    meka_crush(item.of(bm, 4), '#fins:snail_shells')
    meka_crush(item.of(bm, 3), 'gaiadimension:shiny_bone')
    meka_crush(item.of(bm, 4), 'undergarden:brute_tusk')

    // rope-a-dope
    event.remove({ id: 'druidcraft:lead' })
    event.remove({ id: 'farmersdelight:lead_from_rope' })
    event.replaceInput({ id: 'minecraft:lead' }, '#forge:string', '#forge:rope')
    colors.forEach((color) => {
        event.replaceInput({ id: 'druidcraft:' + color + '_bedroll' }, 'minecraft:wheat', '#forge:rope')
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
    event.replaceOutput({}, '#forge:tallow', 'eidolon:tallow')
    event.replaceInput({}, 'eidolon:tallow', '#forge:tallow')
    event.replaceInput({}, 'quark:tallow', '#forge:tallow')
    event.remove({ id: 'twilightforest:uncrafting_table' })
    event.remove({ id: 'twilightforest:uncrafting_table' })
    event.remove({ output: 'sonicraft:gold_ring' })

    /* TO DO */
    // glowcane dust crushing

})
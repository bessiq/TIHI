
// priority: 6

// Watch your fingers
onEvent('recipes', event => {
    event.remove({ type: 'immersiveengineering:sawmill' })
    const ie_saw = event.recipes.immersiveengineering.sawmill
    var sawdust = 'mekanism:sawdust'

    /* MINECRAFT */
    // common
    mc_logs.forEach((mc_logs) => {
        ie_saw(item.of('minecraft:' + mc_logs + '_planks', 6), 'minecraft:' + mc_logs + '_log', [{ stripping: true, output: sawdust }], 'minecraft:stripped_' + mc_logs + '_log')
        ie_saw(item.of('minecraft:' + mc_logs + '_planks', 6), 'minecraft:' + mc_logs + '_wood', [{ stripping: true, output: sawdust }], 'minecraft:stripped_' + mc_logs + '_wood')
        ie_saw('minecraft:' + mc_logs + '_planks', 'minecraft:' + mc_logs + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('minecraft:' + mc_logs + '_planks', 'minecraft:' + mc_logs + '_stairs', [{ stripping: false, output: sawdust }])
    })

    // stems
    mc_stems.forEach((mc_stem) => {
        ie_saw(item.of('minecraft:' + mc_stem + '_planks', 6), 'minecraft:' + mc_stem + '_stem', [{ stripping: true, output: sawdust }], 'minecraft:stripped_' + mc_stem + '_stem')
        ie_saw(item.of('minecraft:' + mc_stem + '_planks', 6), 'minecraft:' + mc_stem + '_hyphae', [{ stripping: true, output: sawdust }], 'minecraft:stripped_' + mc_stem + '_hyphae')
        ie_saw('minecraft:' + mc_stem + '_planks', 'minecraft:' + mc_stem + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('minecraft:' + mc_stem + '_planks', 'minecraft:' + mc_stem + '_stairs', [{ stripping: false, output: sawdust }])
    })


    /* BYG */
    // common
    byg_logs.forEach((byg_log) => {
        ie_saw(item.of('byg:' + byg_log + '_planks', 6), 'byg:' + byg_log + '_log', [{ stripping: true, output: sawdust }], 'byg:stripped_' + byg_log + '_log')
        ie_saw(item.of('byg:' + byg_log + '_planks', 6), 'byg:' + byg_log + '_wood', [{ stripping: true, output: sawdust }], 'byg:stripped_' + byg_log + '_wood')
        ie_saw('byg:' + byg_log + '_planks', 'byg:' + byg_log + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('byg:' + byg_log + '_planks', 'byg:' + byg_log + '_stairs', [{ stripping: false, output: sawdust }])
    })

    // blue enchanted logs
    ie_saw(item.of('byg:blue_enchanted_planks', 6), 'byg:blue_enchanted_log', [{ stripping: true, output: sawdust }], 'byg:stripped_blue_enchanted_log')
    ie_saw(item.of('byg:blue_enchanted_planks', 6), 'byg:blue_enchanted_wood', [{ stripping: true, output: sawdust }], 'byg:stripped_blue_enchanted_wood')
    ie_saw('byg:blue_enchanted_planks', 'byg:blue_enchanted_door', [{ stripping: false, output: sawdust }])
    ie_saw('byg:blue_enchanted_planks', 'byg:blue_enchanted_stairs', [{ stripping: false, output: sawdust }])

    // green enchanted logs
    ie_saw(item.of('byg:green_enchanted_planks', 6), 'byg:green_enchanted_log', [{ stripping: true, output: sawdust }], 'byg:stripped_green_enchanted_log')
    ie_saw(item.of('byg:green_enchanted_planks', 6), 'byg:green_enchanted_wood', [{ stripping: true, output: sawdust }], 'byg:stripped_green_enchanted_wood')
    ie_saw('byg:green_enchanted_planks', 'byg:green_enchanted_door', [{ stripping: false, output: sawdust }])
    ie_saw('byg:green_enchanted_planks', 'byg:green_enchanted_stairs', [{ stripping: false, output: sawdust }])

    // palo verde logs
    ie_saw(item.of('minecraft:stick', 6), 'byg:palo_verde_log', [{ stripping: true, output: item.of(sawdust) }, { stripping: false, output: item.of(sawdust) }], 'byg:stripped_palo_verde_log')
    ie_saw(item.of('minecraft:stick', 6), 'byg:palo_verde_wood', [{ stripping: true, output: item.of(sawdust) }, { stripping: false, output: item.of(sawdust) }], 'byg:stripped_palo_verde_wood')

    // embur pedus
    ie_saw(item.of('byg:embur_planks', 6), 'byg:embur_pedu', [{ stripping: true, output: 'byg:embur_wart' }], 'byg:stripped_embur_pedu')
    ie_saw(item.of('byg:embur_planks', 6), 'byg:embur_hyphae', [{ stripping: true, output: 'byg:embur_gel_ball' }], 'byg:stripped_embur_hyphae')
    ie_saw('byg:embur_planks', 'byg:embur_door', [{ stripping: false, output: sawdust }])
    ie_saw('byg:embur_planks', 'byg:embur_stairs', [{ stripping: false, output: sawdust }])

    // sythian stems
    ie_saw(item.of('byg:sythian_planks', 6), 'byg:sythian_stem', [{ stripping: true, output: 'byg:sythian_fungus' }], 'byg:stripped_sythian_stem')
    ie_saw(item.of('byg:sythian_planks', 6), 'byg:sythian_hyphae', [{ stripping: true, output: 'byg:sythian_fungus' }], 'byg:stripped_sythian_hyphae')
    ie_saw('byg:sythian_planks', 'byg:sythian_door', [{ stripping: false, output: sawdust }])
    ie_saw('byg:sythian_planks', 'byg:sythian_stairs', [{ stripping: false, output: sawdust }])

    // bulbis stems
    ie_saw(item.of('byg:bulbis_planks', 6), 'byg:bulbis_stem', [{ stripping: true, output: 'byg:purple_bulbis_oddity' }], 'byg:stripped_bulbis_stem')
    ie_saw(item.of('byg:bulbis_planks', 6), 'byg:bulbis_wood', [{ stripping: true, output: 'byg:bulbis_oddity' }], 'byg:stripped_bulbis_wood')
    ie_saw('byg:bulbis_planks', 'byg:bulbis_door', [{ stripping: false, output: sawdust }])
    ie_saw('byg:bulbis_planks', 'byg:bulbis_stairs', [{ stripping: false, output: sawdust }])

    // (fungal) imparius stems
    ie_saw(item.of('byg:imparius_planks', 6), 'byg:fungal_imparius_stem', [{ stripping: true, output: 'byg:fungal_imparius' }], 'byg:imparius_stem')
    ie_saw(item.of('byg:imparius_planks', 6), 'byg:fungal_imparius_hyphae', [{ stripping: true, output: 'byg:imparius_mushroom' }], 'byg:imparius_hyphae')
    ie_saw('byg:imparius_planks', 'byg:imparius_door', [{ stripping: false, output: sawdust }])
    ie_saw('byg:imparius_planks', 'byg:imparius_stairs', [{ stripping: false, output: sawdust }])

    // (imbued) nightshade stems
    ie_saw(item.of('byg:nightshade_planks', 6), 'byg:imbued_nightshade_log', [{ stripping: true, output: 'byg:therium_shard' }], 'byg:nightshade_log')


    /* MISC */
    // ars nouveau
    ars_logs.forEach((ars_log) => {
        ie_saw(item.of('ars_nouveau:archwood_planks', 6), 'ars_nouveau:' + ars_log + '_log', [{ stripping: true, output: sawdust }], 'ars_nouveau:stripped_' + ars_log + '_log')
        ie_saw(item.of('ars_nouveau:archwood_planks', 6), 'ars_nouveau:' + ars_log + '_wood', [{ stripping: true, output: sawdust }], 'ars_nouveau:stripped_' + ars_log + '_wood')
        ie_saw('ars_nouveau:archwood_planks', 'ars_nouveau:archwood_door', [{ stripping: false, output: sawdust }])
        ie_saw('ars_nouveau:archwood_planks', 'ars_nouveau:archwood_stairs', [{ stripping: false, output: sawdust }])
    })

    // atum
    atum_logs.forEach((atum_log) => {
        ie_saw(item.of('atum:' + atum_log + '_planks', 6), 'atum:' + atum_log + '_log', [{ stripping: true, output: sawdust }], 'atum:stripped_' + atum_log + '_log')
        ie_saw(item.of('atum:' + atum_log + '_planks', 6), 'atum:' + atum_log + '_wood', [{ stripping: true, output: sawdust }], 'atum:stripped_' + atum_log + '_wood')
        ie_saw('atum:' + atum_log + '_planks', 'atum:' + atum_log + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('atum:' + atum_log + '_planks', 'atum:' + atum_log + '_stairs', [{ stripping: false, output: sawdust }])
    })

    // druidcraft
    dc_logs.forEach((dc_log) => {
        ie_saw(item.of('druidcraft:' + dc_log + '_planks', 6), 'druidcraft:' + dc_log + '_log', [{ stripping: true, output: sawdust }], 'druidcraft:stripped_' + dc_log + '_log')
        ie_saw(item.of('druidcraft:' + dc_log + '_planks', 6), 'druidcraft:' + dc_log + '_wood', [{ stripping: true, output: sawdust }], 'druidcraft:stripped_' + dc_log + '_wood')
        ie_saw('druidcraft:' + dc_log + '_planks', 'druidcraft:' + dc_log + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('druidcraft:' + dc_log + '_planks', 'druidcraft:' + dc_log + '_stairs', [{ stripping: false, output: sawdust }])
    })

    // forbidden & arcanus
    fa_logs.forEach((fa_log) => {
        ie_saw(item.of('forbidden_arcanus:' + fa_log + '_planks', 6), 'forbidden_arcanus:' + fa_log + '_log', [{ stripping: true, output: sawdust }], 'forbidden_arcanus:stripped_' + fa_log + '_log')
        ie_saw(item.of('forbidden_arcanus:' + fa_log + '_planks', 6), 'forbidden_arcanus:' + fa_log, [{ stripping: true, output: sawdust }], 'forbidden_arcanus:stripped_' + fa_log)
        ie_saw('forbidden_arcanus:' + fa_log + '_planks', 'forbidden_arcanus:' + fa_log + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('forbidden_arcanus:' + fa_log + '_planks', 'forbidden_arcanus:' + fa_log + '_stairs', [{ stripping: false, output: sawdust }])
    })

    // gaia
    gaia_logs.forEach((gaia_log) => {
        ie_saw(item.of('gaiadimension:' + gaia_log + '_planks', 6), 'gaiadimension:' + gaia_log + '_log', [{ stripping: true, output: sawdust }], 'gaiadimension:stripped_' + gaia_log + '_log')
        ie_saw(item.of('gaiadimension:' + gaia_log + '_planks', 6), 'gaiadimension:' + gaia_log + '_wood', [{ stripping: true, output: sawdust }], 'gaiadimension:stripped_' + gaia_log + '_wood')
        ie_saw('gaiadimension:' + gaia_log + '_planks', 'gaiadimension:' + gaia_log + '_plank_stairs', [{ stripping: false, output: sawdust }])
    })

    // good night's sleep
    gns_logs.forEach((gns_log) => {
        ie_saw(item.of('good_nights_sleep:' + gns_log + '_planks', 6), 'good_nights_sleep:' + gns_log + '_log', [{ stripping: true, output: sawdust }], 'good_nights_sleep:stripped_' + gns_log + '_log')
        ie_saw(item.of('good_nights_sleep:' + gns_log + '_planks', 6), 'good_nights_sleep:' + gns_log + '_wood', [{ stripping: true, output: sawdust }], 'good_nights_sleep:stripped_' + gns_log + '_wood')
        ie_saw('good_nights_sleep:' + gns_log + '_planks', 'good_nights_sleep:' + gns_log + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('good_nights_sleep:' + gns_log + '_planks', 'good_nights_sleep:' + gns_log + '_stairs', [{ stripping: false, output: sawdust }])
    })

    // nature's aura
    ie_saw(item.of('naturesaura:ancient_planks', 4), 'naturesaura:ancient_log', [{ stripping: false, output: 'naturesaura:ancient_stick' }], 'naturesaura:ancient_log')
    ie_saw(item.of('naturesaura:ancient_planks', 4), 'naturesaura:ancient_bark', [{ stripping: false, output: 'naturesaura:ancient_stick' }], 'naturesaura:ancient_bark')
    ie_saw('naturesaura:ancient_planks', 'naturesaura:ancient_stairs', [{ stripping: false, output: sawdust }])

    // rats
    ie_saw(item.of('rats:pirat_planks', 6), 'rats:pirat_log', [{ stripping: true, output: sawdust }], 'rats:stripped_pirat_log')
    ie_saw(item.of('rats:pirat_planks', 6), 'rats:pirat_wood', [{ stripping: true, output: sawdust }], 'rats:stripped_pirat_wood')
    ie_saw('rats:pirat_planks', 'rats:pirat_stairs', [{ stripping: false, output: sawdust }])
    ie_saw('rats:pirat_planks', 'rats:pirat_door', [{ stripping: false, output: sawdust }])

    // tinker's construct
    tcon_logs.forEach((tcon_log) => {
        ie_saw(item.of('tconstruct:' + tcon_log + '_planks', 6), 'tconstruct:' + tcon_log + '_log', [{ stripping: true, output: sawdust }], 'tconstruct:stripped_' + tcon_log + '_log')
        ie_saw(item.of('tconstruct:' + tcon_log + '_planks', 6), 'tconstruct:' + tcon_log + '_wood', [{ stripping: true, output: sawdust }], 'tconstruct:stripped_' + tcon_log + '_wood')
        ie_saw('tconstruct:' + tcon_log + '_planks', 'tconstruct:' + tcon_log + '_door', [{ stripping: false, output: sawdust }])
    })

    // undergarden
    ug_logs.forEach((ug_log) => {
        ie_saw(item.of('undergarden:' + ug_log + '_planks', 6), 'undergarden:' + ug_log + '_log', [{ stripping: true, output: sawdust }], 'undergarden:stripped_' + ug_log + '_log')
        ie_saw(item.of('undergarden:' + ug_log + '_planks', 6), 'undergarden:' + ug_log + '_wood', [{ stripping: true, output: sawdust }], 'undergarden:stripped_' + ug_log + '_wood')
        ie_saw('undergarden:' + ug_log + '_planks', 'undergarden:' + ug_log + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('undergarden:' + ug_log + '_planks', 'undergarden:' + ug_log + '_stairs', [{ stripping: false, output: sawdust }])
    })

    ie_saw(item.of('undergarden:grongle_planks', 6), 'undergarden:grongle_log', [{ stripping: true, output: sawdust }], 'undergarden:stripped_grongle_log')
    ie_saw(item.of('undergarden:grongle_planks', 6), 'undergarden:grongle_wood', [{ stripping: true, output: sawdust }], 'undergarden:stripped_grongle_wood')
    ie_saw('undergarden:grongle_planks', 'undergarden:grongle_door', [{ stripping: false, output: sawdust }])
    ie_saw('undergarden:grongle_planks', 'undergarden:grongle_stairs', [{ stripping: false, output: sawdust }])


    /* TWILIGHT FOREST */
    // wood with a consistent naming convention
    tf_logs.forEach((tf_log) => {
        ie_saw(item.of('twilightforest:' + tf_log + '_planks', 4), 'twilightforest:' + tf_log + '_log', [{ stripping: false, output: sawdust }], 'twilightforest:' + tf_log + '_log')
        ie_saw(item.of('twilightforest:' + tf_log + '_planks', 4), 'twilightforest:' + tf_log + '_wood', [{ stripping: false, output: sawdust }], 'twilightforest:' + tf_log + '_wood')
        ie_saw('twilightforest:' + tf_log + '_planks', 'twilightforest:' + tf_log + '_door', [{ stripping: false, output: sawdust }])
        ie_saw('twilightforest:' + tf_log + '_planks', 'twilightforest:' + tf_log + '_stairs', [{ stripping: false, output: sawdust }])
    })

    // dark(wood)
    ie_saw(item.of('twilightforest:dark_planks', 4), 'twilightforest:dark_log', [{ stripping: false, output: sawdust }], 'twilightforest:dark_log')
    ie_saw(item.of('twilightforest:dark_planks', 4), 'twilightforest:dark_wood', [{ stripping: false, output: sawdust }], 'twilightforest:dark_wood')
    ie_saw('twilightforest:dark_planks', 'twilightforest:dark_door', [{ stripping: false, output: sawdust }])
    ie_saw('twilightforest:dark_planks', 'twilightforest:dark_stairs', [{ stripping: false, output: sawdust }])

    // time(wood)
    ie_saw(item.of('twilightforest:time_planks', 4), 'twilightforest:time_log', [{ stripping: false, output: sawdust }], 'twilightforest:time_log')
    ie_saw(item.of('twilightforest:time_planks', 4), 'twilightforest:time_wood', [{ stripping: false, output: sawdust }], 'twilightforest:time_wood')
    ie_saw('twilightforest:time_planks', 'twilightforest:time_door', [{ stripping: false, output: sawdust }])
    ie_saw('twilightforest:time_planks', 'twilightforest:time_stairs', [{ stripping: false, output: sawdust }])

    // mine(ing)
    ie_saw(item.of('twilightforest:mine_planks', 4), 'twilightforest:mining_log', [{ stripping: false, output: sawdust }], 'twilightforest:mining_log')
    ie_saw(item.of('twilightforest:mine_planks', 4), 'twilightforest:mining_wood', [{ stripping: false, output: sawdust }], 'twilightforest:mining_wood')
    ie_saw('twilightforest:mine_planks', 'twilightforest:mine_stairs', [{ stripping: false, output: sawdust }])
    ie_saw('twilightforest:mine_planks', 'twilightforest:mine_door', [{ stripping: false, output: sawdust }])

    // sort(ing)
    ie_saw(item.of('twilightforest:sort_planks', 4), 'twilightforest:sorting_log', [{ stripping: false, output: sawdust }], 'twilightforest:sorting_log')
    ie_saw(item.of('twilightforest:sort_planks', 4), 'twilightforest:sorting_wood', [{ stripping: false, output: sawdust }], 'twilightforest:sorting_wood')
    ie_saw('twilightforest:sort_planks', 'twilightforest:sort_stairs', [{ stripping: false, output: sawdust }])
    ie_saw('twilightforest:sort_planks', 'twilightforest:sort_door', [{ stripping: false, output: sawdust }])

    // trans(formation)
    ie_saw(item.of('twilightforest:trans_planks', 4), 'twilightforest:transformation_log', [{ stripping: false, output: sawdust }], 'twilightforest:transformation_log')
    ie_saw(item.of('twilightforest:trans_planks', 4), 'twilightforest:transformation_wood', [{ stripping: false, output: sawdust }], 'twilightforest:transformation_wood')
    ie_saw('twilightforest:trans_planks', 'twilightforest:trans_stairs', [{ stripping: false, output: sawdust }])
    ie_saw('twilightforest:trans_planks', 'twilightforest:trans_door', [{ stripping: false, output: sawdust }])

})
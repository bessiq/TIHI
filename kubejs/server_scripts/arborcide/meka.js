
// priority: 6

// THE SAW IS LAW
onEvent('recipes', event => {
    event.replaceOutput({}, '#forge:sawdust', 'mekanism:sawdust')
    event.replaceInput({}, 'immersiveengineering:dust_wood', '#forge:sawdust')
    event.replaceInput({}, 'mekanism:sawdust', '#forge:sawdust')

    const meka_saw = event.recipes.mekanism.sawing

    /* MINECRAFT */
    // common
    mc_logs.forEach((mc_log) => {
        meka_saw(item.of('minecraft:' + mc_log + '_planks', 6), '#minecraft:' + mc_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('minecraft:' + mc_log + '_planks', 5), 'minecraft:' + mc_log + '_boat')
        meka_saw(item.of('minecraft:' + mc_log + '_planks', 2), 'minecraft:' + mc_log + '_door')
        meka_saw(item.of('minecraft:' + mc_log + '_planks', 2), 'minecraft:' + mc_log + '_fence_gate', item.of('minecraft:stick', 4))
        meka_saw(item.of('minecraft:' + mc_log + '_planks', 2), 'minecraft:' + mc_log + '_pressure_plate')
        meka_saw(item.of('minecraft:' + mc_log + '_planks', 3), 'minecraft:' + mc_log + '_trapdoor')
    })

    // crimson stems
    meka_saw(item.of('minecraft:crimson_planks', 6), '#minecraft:crimson_stems', item.of('mekanism:dust_quartz').withChance(0.03))
    meka_saw(item.of('minecraft:crimson_planks', 2), 'minecraft:crimson_door')
    meka_saw(item.of('minecraft:crimson_planks', 2), 'minecraft:crimson_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('minecraft:crimson_planks', 2), 'minecraft:crimson_pressure_plate')
    meka_saw(item.of('minecraft:crimson_planks', 3), 'minecraft:crimson_trapdoor')

    // warped stems
    meka_saw(item.of('minecraft:warped_planks', 6), '#minecraft:warped_stems', item.of('minecraft:glowstone_dust').withChance(0.03))
    meka_saw(item.of('minecraft:warped_planks', 2), 'minecraft:warped_door')
    meka_saw(item.of('minecraft:warped_planks', 2), 'minecraft:warped_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('minecraft:warped_planks', 2), 'minecraft:warped_pressure_plate')
    meka_saw(item.of('minecraft:warped_planks', 3), 'minecraft:warped_trapdoor')


    /* BYG */
    // common
    byg_logs.forEach((byg_log) => {
        meka_saw(item.of('byg:' + byg_log + '_planks', 6), '#byg:' + byg_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        if (item.exists('byg:' + byg_log + '_boat')) {
            meka_saw(item.of('byg:' + byg_log + '_planks', 5), 'byg:' + byg_log + '_boat')
        }
        meka_saw(item.of('byg:' + byg_log + '_planks', 2), 'byg:' + byg_log + '_door')
        meka_saw(item.of('byg:' + byg_log + '_planks', 2), 'byg:' + byg_log + '_fence_gate', item.of('minecraft:stick', 4))
        meka_saw(item.of('byg:' + byg_log + '_planks', 2), 'byg:' + byg_log + '_pressure_plate')
        meka_saw(item.of('byg:' + byg_log + '_planks', 3), 'byg:' + byg_log + '_trapdoor')
    })

    // blue enchanted logs
    meka_saw(item.of('byg:blue_enchanted_planks', 6), '#byg:blue_enchanted_logs', item.of('mekanism:dust_lapis_lazuli').withChance(0.03))
    meka_saw(item.of('byg:blue_enchanted_planks', 5), 'byg:blue_enchanted_boat')
    meka_saw(item.of('byg:blue_enchanted_planks', 2), 'byg:blue_enchanted_door')
    meka_saw(item.of('byg:blue_enchanted_planks', 2), 'byg:blue_enchanted_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('byg:blue_enchanted_planks', 2), 'byg:blue_enchanted_pressure_plate')
    meka_saw(item.of('byg:blue_enchanted_planks', 3), 'byg:blue_enchanted_trapdoor')

    // green enchanted logs
    meka_saw(item.of('byg:green_enchanted_planks', 6), '#byg:green_enchanted_logs', item.of('mekanism:dust_emerald').withChance(0.03))
    meka_saw(item.of('byg:green_enchanted_planks', 5), 'byg:green_enchanted_boat')
    meka_saw(item.of('byg:green_enchanted_planks', 2), 'byg:green_enchanted_door')
    meka_saw(item.of('byg:green_enchanted_planks', 2), 'byg:green_enchanted_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('byg:green_enchanted_planks', 2), 'byg:green_enchanted_pressure_plate')
    meka_saw(item.of('byg:green_enchanted_planks', 3), 'byg:green_enchanted_trapdoor')

    // palo verde logs
    meka_saw(item.of('minecraft:stick', 12), '#byg:palo_verde_logs', item.of('mekanism:sawdust', 2).withChance(0.35))

    // embur pedus
    meka_saw(item.of('byg:embur_planks', 6), '#byg:embur_pedus', item.of('byg:embur_gel_ball').withChance(0.05))
    meka_saw(item.of('byg:embur_planks', 2), 'byg:embur_door')
    meka_saw(item.of('byg:embur_planks', 2), 'byg:embur_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('byg:embur_planks', 2), 'byg:embur_pressure_plate')
    meka_saw(item.of('byg:embur_planks', 3), 'byg:embur_trapdoor')

    // sythian stems
    meka_saw(item.of('byg:sythian_planks', 6), '#byg:sythian_stems', item.of('eidolon:sulfur').withChance(0.03))
    meka_saw(item.of('byg:sythian_planks', 2), 'byg:sythian_door')
    meka_saw(item.of('byg:sythian_planks', 2), 'byg:sythian_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('byg:sythian_planks', 2), 'byg:sythian_pressure_plate')
    meka_saw(item.of('byg:sythian_planks', 3), 'byg:sythian_trapdoor')

    // bulbis stems
    meka_saw(item.of('byg:bulbis_planks', 6), '#byg:bulbis_stems', item.of('appliedenergistics2:ender_dust').withChance(0.02))
    meka_saw(item.of('byg:bulbis_planks', 2), 'byg:bulbis_door')
    meka_saw(item.of('byg:bulbis_planks', 2), 'byg:bulbis_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('byg:bulbis_planks', 2), 'byg:bulbis_pressure_plate')
    meka_saw(item.of('byg:bulbis_planks', 3), 'byg:bulbis_trapdoor')

    // (fungal) imparius stems
    meka_saw(item.of('byg:imparius_planks', 6), '#byg:imparius_stems', item.of('byg:imparius_mushroom', 1).withChance(0.85))
    meka_saw(item.of('byg:imparius_planks', 2), 'byg:imparius_door')
    meka_saw(item.of('byg:imparius_planks', 2), 'byg:imparius_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('byg:imparius_planks', 2), 'byg:imparius_pressure_plate')
    meka_saw(item.of('byg:imparius_planks', 3), 'byg:imparius_trapdoor')

    // (imbued) nightshade logs
    meka_saw(item.of('byg:nightshade_planks', 6), 'byg:imbued_nightshade_log', item.of('byg:therium_shard', 2).withChance(0.75))


    /* MISC */
    // ars nouveau
    ars_logs.forEach((ars_log) => {
        meka_saw(item.of('ars_nouveau:archwood_planks', 6), 'ars_nouveau:' + ars_log + '_log', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('ars_nouveau:archwood_planks', 6), 'ars_nouveau:' + ars_log + '_wood', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('ars_nouveau:archwood_planks', 6), 'ars_nouveau:stripped_' + ars_log + '_log', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('ars_nouveau:archwood_planks', 6), 'ars_nouveau:stripped_' + ars_log + '_wood', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('ars_nouveau:archwood_planks', 2), 'ars_nouveau:archwood_door')
        meka_saw(item.of('ars_nouveau:archwood_planks', 2), 'ars_nouveau:archwood_fence_gate', item.of('minecraft:stick', 4))
        meka_saw(item.of('ars_nouveau:archwood_planks', 2), 'ars_nouveau:archwood_pressure_plate')
        meka_saw(item.of('ars_nouveau:archwood_planks', 3), 'ars_nouveau:archwood_trapdoor')
    })

    // druidcraft
    dc_logs.forEach((dc_log) => {
        meka_saw(item.of('druidcraft:' + dc_log + '_planks', 6), '#druidcraft:' + dc_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('druidcraft:' + dc_log + '_planks', 2), 'druidcraft:' + dc_log + '_door')
        meka_saw(item.of('druidcraft:' + dc_log + '_planks', 2), 'druidcraft:' + dc_log + '_fence_gate', item.of('minecraft:stick', 4))
        meka_saw(item.of('druidcraft:' + dc_log + '_planks', 2), 'druidcraft:' + dc_log + '_pressure_plate')
        meka_saw(item.of('druidcraft:' + dc_log + '_planks', 3), 'druidcraft:' + dc_log + '_trapdoor')
    })

    // forbidden & arcanus
    fa_logs.forEach((fa_log) => {
        meka_saw(item.of('forbidden_arcanus:' + fa_log + '_planks', 6), '#forbidden_arcanus:' + fa_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('forbidden_arcanus:' + fa_log + '_planks', 2), 'forbidden_arcanus:' + fa_log + '_door')
        meka_saw(item.of('forbidden_arcanus:' + fa_log + '_planks', 2), 'forbidden_arcanus:' + fa_log + '_fence_gate', item.of('forbidden_arcanus:edelwood_stick', 4).withChance(0.50))
        meka_saw(item.of('forbidden_arcanus:' + fa_log + '_planks', 2), 'forbidden_arcanus:' + fa_log + '_pressure_plate')
        meka_saw(item.of('forbidden_arcanus:' + fa_log + '_planks', 3), 'forbidden_arcanus:' + fa_log + '_trapdoor')
    })

    // gaia
    gaia_logs.forEach((gaia_log) => {
        meka_saw(item.of('gaiadimension:' + gaia_log + '_planks', 6), '#gaiadimension:' + gaia_log + '_logs', item.of('gaiadimension:agate_stick').withChance(0.10))
    })

    // good night's sleep
    gns_logs.forEach((gns_log) => {
        meka_saw(item.of('good_nights_sleep:' + gns_log + '_planks', 6), '#good_nights_sleep:' + gns_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('good_nights_sleep:' + gns_log + '_planks', 2), 'good_nights_sleep:' + gns_log + '_door')
        meka_saw(item.of('good_nights_sleep:' + gns_log + '_planks', 2), 'good_nights_sleep:' + gns_log + '_fence_gate', item.of('minecraft:stick', 4))
        meka_saw(item.of('good_nights_sleep:' + gns_log + '_planks', 2), 'good_nights_sleep:' + gns_log + '_pressure_plate')
        meka_saw(item.of('good_nights_sleep:' + gns_log + '_planks', 3), 'good_nights_sleep:' + gns_log + '_trapdoor')
    })

    // nature's aura
    meka_saw(item.of('naturesaura:ancient_planks', 6), 'naturesaura:ancient_log', item.of('naturesaura:ancient_stick').withChance(0.25))
    meka_saw(item.of('naturesaura:ancient_planks', 6), 'naturesaura:ancient_bark', item.of('naturesaura:ancient_stick').withChance(0.25))

    // rats
    meka_saw(item.of('rats:pirat_planks', 6), 'rats:pirat_log', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('rats:pirat_planks', 6), 'rats:pirat_wood', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('rats:pirat_planks', 2), 'rats:pirat_door')
    meka_saw(item.of('rats:pirat_planks', 2), 'rats:pirat_fence_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('rats:pirat_planks', 2), 'rats:pirat_pressure_plate')
    meka_saw(item.of('rats:pirat_planks', 3), 'rats:pirat_trapdoor')

    // tinker's construct
    tcon_logs.forEach((tcon_log) => {
        meka_saw(item.of('tconstruct:' + tcon_log + '_planks', 6), '#tconstruct:' + tcon_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('tconstruct:' + tcon_log + '_planks', 2), 'tconstruct:' + tcon_log + '_door')
        meka_saw(item.of('tconstruct:' + tcon_log + '_planks', 2), 'tconstruct:' + tcon_log + '_fence_gate', item.of('minecraft:stick', 4))
        meka_saw(item.of('tconstruct:' + tcon_log + '_planks', 2), 'tconstruct:' + tcon_log + '_pressure_plate')
        meka_saw(item.of('tconstruct:' + tcon_log + '_planks', 3), 'tconstruct:' + tcon_log + '_trapdoor')
    })

    // undergarden
    ug_logs.forEach((ug_log) => {
        meka_saw(item.of('undergarden:' + ug_log + '_planks', 6), '#undergarden:' + ug_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('undergarden:' + ug_log + '_planks', 5), 'undergarden:' + ug_log + '_boat')
        meka_saw(item.of('undergarden:' + ug_log + '_planks', 2), 'undergarden:' + ug_log + '_door')
        meka_saw(item.of('undergarden:' + ug_log + '_planks', 2), 'undergarden:' + ug_log + '_fence_gate', item.of('undergarden:twistytwig', 4))
        meka_saw(item.of('undergarden:' + ug_log + '_planks', 2), 'undergarden:' + ug_log + '_pressure_plate')
        meka_saw(item.of('undergarden:' + ug_log + '_planks', 3), 'undergarden:' + ug_log + '_trapdoor')
    })

    meka_saw(item.of('undergarden:grongle_planks', 6), '#undergarden:grongle_stems', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('undergarden:grongle_planks', 5), 'undergarden:grongle_boat')
    meka_saw(item.of('undergarden:grongle_planks', 2), 'undergarden:grongle_door')
    meka_saw(item.of('undergarden:grongle_planks', 2), 'undergarden:grongle_fence_gate', item.of('undergarden:twistytwig', 4))
    meka_saw(item.of('undergarden:grongle_planks', 2), 'undergarden:grongle_pressure_plate')
    meka_saw(item.of('undergarden:grongle_planks', 3), 'undergarden:grongle_trapdoor')


    /* TWILIGHT FOREST */
    // wood with a consist(ent) nam(ing) convention
    tf_logs.forEach((tf_log) => {
        meka_saw(item.of('twilightforest:' + tf_log + '_planks', 6), '#twilightforest:' + tf_log + '_logs', item.of('mekanism:sawdust').withChance(0.25))
        meka_saw(item.of('twilightforest:' + tf_log + '_planks', 2), 'twilightforest:' + tf_log + '_door')
        meka_saw(item.of('twilightforest:' + tf_log + '_planks', 2), 'twilightforest:' + tf_log + '_gate', item.of('minecraft:stick', 4))
        meka_saw(item.of('twilightforest:' + tf_log + '_planks', 2), 'twilightforest:' + tf_log + '_plate')
        meka_saw(item.of('twilightforest:' + tf_log + '_planks', 3), 'twilightforest:' + tf_log + '_trapdoor')
    })

    // dark(wood)
    meka_saw(item.of('twilightforest:dark_planks', 6), '#twilightforest:darkwood_logs', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('twilightforest:dark_planks', 2), 'twilightforest:dark_door')
    meka_saw(item.of('twilightforest:dark_planks', 2), 'twilightforest:dark_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('twilightforest:dark_planks', 2), 'twilightforest:dark_plate')
    meka_saw(item.of('twilightforest:dark_planks', 3), 'twilightforest:dark_trapdoor')

    // time(wood)
    meka_saw(item.of('twilightforest:time_planks', 6), '#twilightforest:timewood_logs', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('twilightforest:time_planks', 2), 'twilightforest:time_door')
    meka_saw(item.of('twilightforest:time_planks', 2), 'twilightforest:time_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('twilightforest:time_planks', 2), 'twilightforest:time_plate')
    meka_saw(item.of('twilightforest:time_planks', 3), 'twilightforest:time_trapdoor')

    // mine(ing)
    meka_saw(item.of('twilightforest:mine_planks', 6), '#twilightforest:mining_logs', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('twilightforest:mine_planks', 2), 'twilightforest:mine_door')
    meka_saw(item.of('twilightforest:mine_planks', 2), 'twilightforest:mine_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('twilightforest:mine_planks', 2), 'twilightforest:mine_plate')
    meka_saw(item.of('twilightforest:mine_planks', 3), 'twilightforest:mine_trapdoor')

    // sort(ing)
    meka_saw(item.of('twilightforest:sort_planks', 6), '#twilightforest:sortwood_logs', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('twilightforest:sort_planks', 2), 'twilightforest:sort_door')
    meka_saw(item.of('twilightforest:sort_planks', 2), 'twilightforest:sort_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('twilightforest:sort_planks', 2), 'twilightforest:sort_plate')
    meka_saw(item.of('twilightforest:sort_planks', 3), 'twilightforest:sort_trapdoor')

    // trans(formation)
    meka_saw(item.of('twilightforest:trans_planks', 6), '#twilightforest:transwood_logs', item.of('mekanism:sawdust').withChance(0.25))
    meka_saw(item.of('twilightforest:trans_planks', 2), 'twilightforest:trans_door')
    meka_saw(item.of('twilightforest:trans_planks', 2), 'twilightforest:trans_gate', item.of('minecraft:stick', 4))
    meka_saw(item.of('twilightforest:trans_planks', 2), 'twilightforest:trans_plate')
    meka_saw(item.of('twilightforest:trans_planks', 3), 'twilightforest:trans_trapdoor')

})
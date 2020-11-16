// GLHF - stuff removed or remixed with datapacks

settings.logAddedRecipes = true
settings.logRemovedRecipes = true

// Hey, listen!
events.listen('recipes', function (event) {

    var ro = event.replaceOutput
    var ri = event.replaceInput

    // too beaucoup
    event.replaceOutput({}, 'pneumaticcraft:wheat_flour', 'appliedenergistics2:flour')
    event.replaceInput({}, 'pneumaticcraft:wheat_flour', 'appliedenergistics2:flour')
    event.replaceInput({}, 'simplefarming:cheese_slice', '#forge:cheese')

    event.remove({ output: 'mekanism:bio_fuel', mod: 'mekanism' })

    /* 
    event.remove({
        id: [
            'mekanism:crushing/biofuel/acacia_leaves',
            'mekanism:crushing/biofuel/acacia_sapling',
            'mekanism:crushing/biofuel/allium',
            'mekanism:crushing/biofuel/apple',
            'mekanism:crushing/biofuel/azure_bluet',
            'mekanism:crushing/biofuel/baked_potato',
            'mekanism:crushing/biofuel/beetroot_seeds',
            'mekanism:crushing/biofuel/beetroot',
            'mekanism:crushing/biofuel/birch_leaves',
            'mekanism:crushing/biofuel/birch_sapling',
            'mekanism:crushing/biofuel/blue_orchid',
            'mekanism:crushing/biofuel/bread',
            'mekanism:crushing/biofuel/brown_mushroom_block',
            'mekanism:crushing/biofuel/brown_mushroom',
            'mekanism:crushing/biofuel/cactus',
            'mekanism:crushing/biofuel/cake',
            'mekanism:crushing/biofuel/carrot',
            'mekanism:crushing/biofuel/carved_pumpkin',
            'mekanism:crushing/biofuel/cocoa_beans',
            'mekanism:crushing/biofuel/cookie',
            'mekanism:crushing/biofuel/cornflower',
            'mekanism:crushing/biofuel/crimson_fungus',
            'mekanism:crushing/biofuel/crimson_roots',
            'mekanism:crushing/biofuel/dandelion',
            'mekanism:crushing/biofuel/dark_oak_leaves',
            'mekanism:crushing/biofuel/dark_oak_sapling',
            'mekanism:crushing/biofuel/dried_kelp_block',
            'mekanism:crushing/biofuel/dried_kelp',
            'mekanism:crushing/biofuel/fern',
            'mekanism:crushing/biofuel/grass',
            'mekanism:crushing/biofuel/hay_block',
            'mekanism:crushing/biofuel/jungle_leaves',
            'mekanism:crushing/biofuel/jungle_sapling',
            'mekanism:crushing/biofuel/kelp',
            'mekanism:crushing/biofuel/large_fern',
            'mekanism:crushing/biofuel/lilac',
            'mekanism:crushing/biofuel/lily_of_the_valley',
            'mekanism:crushing/biofuel/lily_pad',
            'mekanism:crushing/biofuel/melon_seeds',
            'mekanism:crushing/biofuel/melon_slice',
            'mekanism:crushing/biofuel/melon',
            'mekanism:crushing/biofuel/mushroom_stem',
            'mekanism:crushing/biofuel/nether_sprouts',
            'mekanism:crushing/biofuel/nether_wart',
            'mekanism:crushing/biofuel/nether_wart_block',
            'mekanism:crushing/biofuel/oak_leaves',
            'mekanism:crushing/biofuel/oak_sapling',
            'mekanism:crushing/biofuel/orange_tulip',
            'mekanism:crushing/biofuel/oxeye_daisy',
            'mekanism:crushing/biofuel/peony',
            'mekanism:crushing/biofuel/pink_tulip',
            'mekanism:crushing/biofuel/poppy',
            'mekanism:crushing/biofuel/potato',
            'mekanism:crushing/biofuel/pumpkin_pie',
            'mekanism:crushing/biofuel/pumpkin_seeds',
            'mekanism:crushing/biofuel/pumpkin',
            'mekanism:crushing/biofuel/red_mushroom_block',
            'mekanism:crushing/biofuel/red_mushroom',
            'mekanism:crushing/biofuel/red_tulip',
            'mekanism:crushing/biofuel/rose_bush',
            'mekanism:crushing/biofuel/sea_pickle',
            'mekanism:crushing/biofuel/seagrass',
            'mekanism:crushing/biofuel/shroomlight',
            'mekanism:crushing/biofuel/spruce_leaves',
            'mekanism:crushing/biofuel/spruce_sapling',
            'mekanism:crushing/biofuel/sugar_cane',
            'mekanism:crushing/biofuel/sunflower',
            'mekanism:crushing/biofuel/sweet_berries',
            'mekanism:crushing/biofuel/tall_grass',
            'mekanism:crushing/biofuel/twisting_vines',
            'mekanism:crushing/biofuel/vine',
            'mekanism:crushing/biofuel/warped_fungus',
            'mekanism:crushing/biofuel/warped_roots',
            'mekanism:crushing/biofuel/warped_wart_block',
            'mekanism:crushing/biofuel/weeping_vines',
            'mekanism:crushing/biofuel/wheat_seeds',
            'mekanism:crushing/biofuel/wheat',
            'mekanism:crushing/biofuel/white_tulip',
            'mekanism:crushing/biofuel/wither_rose'
        ]
    })
    */
})
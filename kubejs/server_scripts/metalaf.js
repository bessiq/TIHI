// throw up the horns

onEvent('recipes', event => {

    const metalaf = (name, dustY, ingotY, nuggetY, blockY, plateY, gemY) => {
        event.replaceOutput('#forge:dusts/' + name, dustY)
        event.replaceOutput('#forge:ingots/' + name, ingotY)
        event.replaceOutput('#forge:nuggets/' + name, nuggetY)
        event.replaceOutput('#forge:storage_blocks/' + name, blockY)
        event.replaceOutput('#forge:plates/' + name, plateY)
        event.replaceOutput('#forge:gems/' + name, gemY)

        event.replaceInput(dustY, '#forge:dusts/' + name)
        event.replaceInput(ingotY, '#forge:ingots/' + name)
        event.replaceInput(nuggetY, '#forge:nuggets/' + name)
        event.replaceInput(blockY, '#forge:storage_blocks/' + name)
        event.replaceInput(plateY, '#forge:plates/' + name)
        event.replaceInput(gemY, '#forge:gems/' + name)

        // re.dun.dant.
        event.remove({ id: 'more_jellyfish:emerald_from_fragments' })
        event.remove({ id: 'more_jellyfish:diamond_from_fragments' })
        event.remove({ id: 'forbidden_arcanus:ender_pearl' })
        event.remove({ id: 'forbidden_arcanus:ender_pearl_fragment' })

        // a) recipes not supported above, or b) i am bad
        event.replaceInput('appliedenergistics2:ender_dust', '#forge:dusts/ender_pearl')

        event.replaceInput('create:powdered_obsidian', '#forge:dusts/obsidian')

        event.replaceInput('mysticalworld:' + name + '_block', '#forge:storage_blocks/' + name)
        event.replaceInput('mysticalworld:amethyst', '#forge:gems/amethyst')

        event.replaceInput('forbidden_arcanus:' + name + '_ingot', '#forge:ingots/' + name)
        event.replaceInput('forbidden_arcanus:' + name + '_nugget', '#forge:nuggets/' + name)
        event.replaceInput('forbidden_arcanus:' + name + '_block', '#forge:storage_blocks/' + name)
        event.replaceInput('forbidden_arcanus:' + name + '_fragment', '#forge:nuggets/' + name)

        event.replaceOutput('#forge:coal_coke', 'thermal:coal_coke')
        event.replaceOutput('#forge:storage_blocks/coal_coke', 'thermal:coal_coke_block')
    }

    metalaf(
        'amethyst',
        '',
        '',
        '',
        'iceandfire:amythest_block',
        '',
        'iceandfire:amythest_gem'
    )
    metalaf(
        'arcane_gold',
        '',
        'eidolon:arcane_gold_ingot',
        'eidolon:arcane_gold_nugget',
        'eidolon:arcane_gold_block',
        '',
        '',
    )
    metalaf(
        'brass',
        'create:crushed_brass',
        'create:brass_ingot',
        'create:brass_nugget',
        'create:brass_block',
        'create:brass_sheet',
        '',
    )
    metalaf(
        'bronze',
        'thermal:bronze_dust',
        'thermal:bronze_ingot',
        'thermal:bronze_nugget',
        'thermal:bronze_block',
        'thermal:bronze_plate',
        '',
    )
    metalaf(
        'cinnabar',
        'thermal:cinnabar_dust',
        '',
        '',
        'thermal:cinnabar_block',
        '',
        'thermal:cinnabar'
    )
    metalaf(
        'coal',
        'mekanism:dust_coal',
        '',
        'inventorypets:nugget_coal',
        'minecraft:coal_block',
        '',
        '',
    )
    metalaf(
        'coal_coke',
        'immersiveengineering:dust_coke',
        '',
        '',
        'thermal:coal_coke_block',
        '',
        '',
    )
    metalaf(
        'constantan',
        'thermal:constantan_dust',
        'thermal:constantan_ingot',
        'thermal:constantan_nugget',
        'thermal:constantan_block',
        'thermal:constantan_plate',
        '',
    )
    metalaf(
        'copper',
        'thermal:copper_dust',
        'thermal:copper_ingot',
        'thermal:copper_nugget',
        'thermal:copper_block',
        'thermal:copper_plate',
        '',
    )
    metalaf(
        'diamond',
        'thermal:diamond_dust',
        '',
        'inventorypets:nugget_diamond',
        'minecraft:diamond_block',
        '',
        'minecraft:diamond',
    )
    metalaf(
        'electrum',
        'thermal:electrum_dust',
        'thermal:electrum_ingot',
        'thermal:electrum_nugget',
        'thermal:electrum_block',
        'thermal:electrum_plate',
        '',
    )
    metalaf(
        'emerald',
        'thermal:emerald_dust',
        '',
        'inventorypets:nugget_emerald',
        'minecraft:emerald_block',
        '',
        'minecraft:emerald',
    )
    metalaf(
        'ender_pearl',
        'thermal:ender_pearl_dust',
        '',
        'inventorypets:nugget_ender',
        '',
        '',
        '',
    )
    metalaf(
        'enderium',
        'thermal:enderium_dust',
        'thermal:enderium_ingot',
        'thermal:enderium_nugget',
        'thermal:enderium_block',
        'thermal:enderium_plate',
        '',
    )
    metalaf(
        'gold',
        'thermal:gold_dust',
        'minecraft:gold_ingot',
        'minecraft:gold_nugget',
        'minecraft:gold_block',
        'thermal:gold_plate',
        '',
    )
    metalaf(
        'invar',
        'thermal:invar_dust',
        'thermal:invar_ingot',
        'thermal:invar_nugget',
        'thermal:invar_block',
        'thermal:invar_plate',
        '',
    )
    metalaf(
        'iron',
        'thermal:iron_dust',
        'minecraft:iron_ingot',
        'minecraft:iron_nugget',
        'minecraft:iron_block',
        'thermal:iron_plate',
        '',
    )
    metalaf(
        'lapis',
        'thermal:lapis_dust',
        '',
        'inventorypets:nugget_lapis',
        'minecraft:lapis_block',
        'create:lapis_sheet',
        'minecraft:lapis_lazuli'
    )
    metalaf(
        'lead',
        'thermal:lead_dust',
        'thermal:lead_ingot',
        'thermal:lead_nugget',
        'thermal:lead_block',
        'thermal:lead_plate',
        '',
    )
    metalaf(
        'lumium',
        'thermal:lumium_dust',
        'thermal:lumium_ingot',
        'thermal:lumium_nugget',
        'thermal:lumium_block',
        'thermal:lumium_plate',
        '',
    )
    metalaf(
        'moonstone',
        'gaiadimension:moonstone_powder',
        '',
        '',
        'druidcraft:moonstone_block',
        '',
        'druidcraft:moonstone',
    )
    metalaf(
        'netherite',
        'mekanism:dust_netherite',
        'minecraft:netherite_ingot',
        '',
        'minecraft:netherite_block',
        '',
        '',
    )
    metalaf(
        'nickel',
        'thermal:nickel_dust',
        'thermal:nickel_ingot',
        'thermal:nickel_nugget',
        'thermal:nickel_block',
        'thermal:nickel_plate',
        '',
    )
    metalaf(
        'niter',
        'thermal:niter_dust',
        '',
        '',
        'thermal:niter_block',
        '',
        'thermal:niter',
    )
    metalaf(
        'obsidian',
        'mekanism:dust_obsidian',
        'forbidden_arcanus:obsidian_ingot',
        'inventorypets:nugget_obsidian',
        '',
        '',
        '',
    )
    metalaf(
        'quartz',
        'thermal:quartz_dust',
        '',
        '',
        'minecraft:quartz_block',
        '',
        'minecraft:quartz',
    )
    metalaf(
        'quicksilver',
        'mysticalworld:quicksilver_dust',
        'mysticalworld:quicksilver_ingot',
        'mysticalworld:quicksilver_nugget',
        'mysticalworld:quicksilver_block',
        '',
        '',
    )
    metalaf(
        'saltpeter',
        'thermal:niter_dust',
        '',
        '',
        'thermal:niter_block',
        '',
        'thermal:niter',
    )
    metalaf(
        'sapphire',
        '',
        '',
        '',
        'iceandfire:sapphire_block',
        '',
        'iceandfire:sapphire_gem',
    )
    metalaf(
        'signalum',
        'thermal:signalum_dust',
        'thermal:signalum_ingot',
        'thermal:signalum_nugget',
        'thermal:signalum_block',
        'thermal:signalum_plate',
        '',
    )
    metalaf(
        'silver',
        'thermal:silver_dust',
        'thermal:silver_ingot',
        'thermal:silver_nugget',
        'thermal:silver_block',
        'thermal:silver_plate',
        '',
    )
    metalaf(
        'steel',
        'mekanism:dust_steel',
        'mekanism:ingot_steel',
        'mekanism:nugget_steel',
        'mekanism:block_steel',
        'immersiveengineering:plate_steel',
        '',
    )
    metalaf(
        'sulfur',
        'thermal:sulfur_dust',
        '',
        '',
        'thermal:sulfur_block',
        '',
        'thermal:sulfur',
    )
    metalaf(
        'tin',
        'thermal:tin_dust',
        'thermal:tin_ingot',
        'thermal:tin_nugget',
        'thermal:tin_block',
        'thermal:tin_plate',
        '',
    )
    metalaf(
        'uranium',
        'mekanism:dust_uranium',
        'mekanism:ingot_uranium',
        'mekanism:nugget_uranium',
        'mekanism:block_uranium',
        'immersiveengineering:plate_uranium',
        '',
    )
})
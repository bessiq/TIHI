// throw up the horns

onEvent('recipes', event => {

    const metalaf = (material, dust, ingot, nugget, block, plate, gem) => {
        event.replaceOutput('#forge:dusts/' + material, dust)
        event.replaceOutput('#forge:ingots/' + material, ingot)
        event.replaceOutput('#forge:nuggets/' + material, nugget)
        event.replaceOutput('#forge:storage_blocks/' + material, block)
        event.replaceOutput('#forge:plates/' + material, plate)
        event.replaceOutput('#forge:gems/' + material, gem)

        event.replaceInput(dust, '#forge:dusts/' + material)
        event.replaceInput(ingot, '#forge:ingots/' + material)
        event.replaceInput(nugget, '#forge:nuggets/' + material)
        event.replaceInput(block, '#forge:storage_blocks/' + material)
        event.replaceInput(plate, '#forge:plates/' + material)
        event.replaceInput(gem, '#forge:gems/' + material)

        // re.dun.dant.
        event.remove({ id: 'forbidden_arcanus:ender_pearl' })
        event.remove({ id: 'forbidden_arcanus:ender_pearl_fragment' })

        // a) recipes not supported above, or b) i am bad
        event.replaceInput({ mod: 'ars_nouveau' }, '#forge:gems/' + material, gem)
        event.replaceInput({ mod: 'ars_nouveau' }, '#forge:storage_blocks/' + material, block)
        
        event.replaceInput('appliedenergistics2:ender_dust', '#forge:dusts/ender_pearl')

        event.replaceInput('create:powdered_obsidian', '#forge:dusts/obsidian')

        event.replaceInput('forbidden_arcanus:' + material + '_ingot', '#forge:ingots/' + material)
        event.replaceInput('forbidden_arcanus:' + material + '_nugget', '#forge:nuggets/' + material)
        event.replaceInput('forbidden_arcanus:' + material + '_block', '#forge:storage_blocks/' + material)
        event.replaceInput('forbidden_arcanus:' + material + '_fragment', '#forge:nuggets/' + material)
    }
    metalaf(
        'aluminum',
        'create:crushed_aluminum_ore',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:nugget_aluminum',
        'immersiveengineering:storage_aluminum',
        'immersiveengineering:plate_aluminum',
        '',
    )
    metalaf(
        'amber',
        '',
        '',
        '',
        'druidcraft:amber_block',
        '',
        'druidcraft:amber'
    )
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
        'mekanism:dust_bronze',
        'mekanism:ingot_bronze',
        'mekanism:nugget_bronze',
        'mekanism:block_bronze',
        '',
        '',
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
        'immersiveengineering:coke',
        '',
        '',
    )
    metalaf(
        'constantan',
        'immersiveengineering:dust_constantan',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:nugget_constantan',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:plate_constantan',
        '',
    )
    metalaf(
        'copper',
        'create:crushed_copper_ore',
        'create:copper_ingot',
        'create:copper_nugget',
        'create:copper_block',
        'create:copper_sheet',
        '',
    )
    metalaf(
        'diamond',
        'mekanism:dust_diamond',
        '',
        'inventorypets:nugget_diamond',
        'minecraft:diamond_block',
        '',
        'minecraft:diamond',
    )
    metalaf(
        'electrum',
        'immersiveengineering:dust_electrum',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:nugget_electrum',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:plate_electrum',
        '',
    )
    metalaf(
        'emerald',
        'mekanism:dust_emerald',
        '',
        'inventorypets:nugget_emerald',
        'minecraft:emerald_block',
        '',
        'minecraft:emerald',
    )
    metalaf(
        'ender_pearl',
        'appliedenergistics2:ender_dust',
        '',
        'inventorypets:nugget_ender',
        '',
        '',
        '',
    )
    metalaf(
        'gold',
        'create:crushed_gold_ore',
        'minecraft:gold_ingot',
        'minecraft:gold_nugget',
        'minecraft:gold_block',
        'create:golden_sheet',
        '',
    )
    metalaf(
        'iron',
        'create:crushed_iron_ore',
        'minecraft:iron_ingot',
        'minecraft:iron_nugget',
        'minecraft:iron_block',
        'create:iron_sheet',
        '',
    )
    metalaf(
        'lapis',
        'mekanism:dust_lapis_lazuli',
        '',
        'inventorypets:nugget_lapis',
        'minecraft:lapis_block',
        'create:lapis_sheet',
        'minecraft:lapis_lazuli'
    )
    metalaf(
        'lead',
        'create:crushed_lead_ore',
        'eidolon:lead_ingot',
        'eidolon:lead_nugget',
        'eidolon:lead_block',
        'immersiveengineering:plate_lead',
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
        'create:crushed_nickel_ore',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:nugget_nickel',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:plate_nickel',
        '',
    )
    metalaf(
        'niter',
        'immersiveengineering:dust_saltpeter',
        '',
        '',
        '',
        '',
        '',
    )
    metalaf(
        'obsidian',
        'create:powdered_obsidian',
        'forbidden_arcanus:obsidian_ingot',
        'inventorypets:nugget_obsidian',
        '',
        '',
        '',
    )
    metalaf(
        'osmium',
        'create:crushed_osmium_ore',
        'mekanism:ingot_osmium',
        'mekanism:nugget_osmium',
        'mekanism:block_osmium',
        '',
        '',
    )
    metalaf(
        'pearl',
        '',
        '',
        '',
        'fins:spindly_pearl_block',
        '',
        'fins:spindly_pearl',
    )
    metalaf(
        'quartz',
        'mekanism:dust_quartz',
        '',
        '',
        'minecraft:quartz_block',
        '',
        'minecraft:quartz',
    )
    metalaf(
        'ruby',
        '',
        '',
        '',
        'fins:spindly_ruby_block',
        '',
        'fins:spindly_ruby',
    )
    metalaf(
        'saltpeter',
        'immersiveengineering:dust_saltpeter',
        '',
        '',
        '',
        '',
        '',
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
        'silver',
        'create:crushed_silver_ore',
        'iceandfire:silver_ingot',
        'iceandfire:silver_nugget',
        'iceandfire:silver_block',
        'immersiveengineering:plate_silver',
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
        'eidolon:sulfur',
        '',
        '',
        '',
        '',
        '',
    )
    metalaf(
        'tin',
        'create:crushed_tin_ore',
        'mekanism:ingot_tin',
        'mekanism:nugget_tin',
        'mekanism:block_tin',
        '',
        '',
    )
    metalaf(
        'uranium',
        'create:crushed_uranium_ore',
        'mekanism:ingot_uranium',
        'mekanism:nugget_uranium',
        'mekanism:block_uranium',
        'immersiveengineering:plate_uranium',
        '',
    )
})
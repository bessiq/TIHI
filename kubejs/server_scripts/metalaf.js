// throw up the horns

onEvent('recipes', event => {
    
    const metalaf = (name, dustY, ingotY, nuggetY, blockY, plateY, gemY) => {
        event.replaceOutput('#forge:dusts/' + name, dustY)
        event.replaceOutput('#forge:ingots/' + name, ingotY)
        event.replaceOutput('#forge:nuggets/' + name, nuggetY)
        event.replaceOutput('#forge:storage_blocks/' + name, blockY)
        event.replaceOutput('#forge:plates/' + name, plateY)
        event.replaceOutput('#forge:gems/' + name, gemY)
/* 
        event.replaceInput(dustY, '#forge:dusts/' + name)
        event.replaceInput(ingotY, '#forge:ingots/' + name)
        event.replaceInput(nuggetY, '#forge:nuggets/' + name)
        event.replaceInput(blockY, '#forge:storage_blocks/' + name)
        event.replaceInput(plateY, '#forge:plates/' + name)
        event.replaceInput(gemY, '#forge:gems/' + name)

        event.replaceInput('mysticalworld:' + name + '_block', '#forge:storage_blocks/' + name)
        event.replaceOutput('mysticalworld:' + name + '_block', blockY)
        event.replaceInput('mysticalworld:amethyst', '#forge:gems/amethyst')
        event.replaceOutput('mysticalworld:amethyst', 'iceandfire:amythest_gem')
*/
        event.replaceOutput('mahoutsukai:powdered_' + name, dustY)
        event.replaceInput('mahoutsukai:powdered_' + name, '#forge:dusts/' + name)
        event.replaceOutput('mahoutsukai:powdered_ender', 'thermal:ender_pearl_dust')
        event.replaceInput('mahoutsukai:powdered_ender', '#forge:dusts/ender_pearl')

        event.replaceOutput('appliedenergistics2:ender_dust', 'thermal:ender_pearl_dust')
        event.replaceInput('appliedenergistics2:ender_dust', '#forge:dusts/ender_pearl')

        event.replaceOutput('gaiadimension:cinnabar', 'thermal:cinnabar')
        event.replaceInput('gaiadimension:cinnabar', '#forge:gems/cinnabar')
        event.replaceOutput('gaiadimension:cinnabar_block', 'thermal:cinnabar_block')
        event.replaceInput('gaiadimension:cinnabar_block', '#forge:storage_blocks/cinnabar')
        event.replaceOutput('gaiadimension:cinnabar_powder', 'thermal:cinnabar_dust')
        event.replaceInput('gaiadimension:cinnabar_powder', '#forge:dusts/cinnabar')

        event.replaceOutput('#forge:storage_blocks/coal_coke', 'thermal:coal_coke_block')
        event.replaceInput('immersiveengineering:coke', '#forge:storage_blocks/coal_coke')
        event.replaceOutput('#forge:coal_coke', 'thermal:coal_coke')
        event.replaceInput('immersiveengineering:coal_coke', '#forge:coal_coke')

        event.replaceOutput('naturesaura:' + name + '_powder', dustY)
        event.replaceInput('naturesaura:' + name + '_powder', '#forge:dusts/' + name)
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
        'bronze',
        'thermal:bronze_dust',
        'thermal:bronze_ingot',
        'thermal:bronze_nugget',
        'thermal:bronze_block',
    )
    metalaf(
        'coal',
        'mekanism:dust_coal',
    )
    metalaf(
        'constantan',
        'thermal:constantan_dust',
        'thermal:constantan_ingot',
        'thermal:constantan_nugget',
        'thermal:constantan_block',
        'thermal:constantan_plate',
    )
    metalaf(
        'copper',
        'thermal:copper_dust',
        'thermal:copper_ingot',
        'thermal:copper_nugget',
        'thermal:copper_block',
        'thermal:copper_plate',
    )
    metalaf(
        'diamond',
        'thermal:diamond_dust',
    )
    metalaf(
        'electrum',
        'thermal:electrum_dust',
        'thermal:electrum_ingot',
        'thermal:electrum_nugget',
        'thermal:electrum_block',
        'thermal:electrum_plate',
    )
    metalaf(
        'emerald',
        'thermal:emerald_dust',
    )
    metalaf(
        'gold',
        'thermal:gold_dust',
        'minecraft:gold_ingot',
        'minecraft:gold_nugget',
        'minecraft:gold_block',
        'thermal:gold_plate',
    )
    metalaf(
        'iron',
        'thermal:iron_dust',
        'minecraft:iron_ingot',
        'minecraft:iron_nugget',
        'minecraft:iron_block',
        'thermal:iron_plate',
    )
    metalaf(
        'lapis',
        'thermal:lapis_dust',
    )
    metalaf(
        'lead',
        'thermal:lead_dust',
        'thermal:lead_ingot',
        'thermal:lead_nugget',
        'thermal:lead_block',
        'thermal:lead_plate',
    )
    metalaf(
        'netherite',
        'mekanism:dust_netherite',
    )
    metalaf(
        'nickel',
        'thermal:nickel_dust',
        'thermal:nickel_ingot',
        'thermal:nickel_nugget',
        'thermal:nickel_block',
        'thermal:nickel_plate',
    )
    metalaf(
        'quartz',
        'thermal:quartz_dust',
    )
    metalaf(
        'saltpeter',
        'thermal:niter_dust',
    )
    metalaf(
        'silver',
        'thermal:silver_dust',
        'thermal:silver_ingot',
        'thermal:silver_nugget',
        'thermal:silver_block',
        'thermal:silver_plate',
    )
    metalaf(
        'steel',
        'mekanism:dust_steel',
        'mekanism:ingot_steel',
        'mekanism:nugget_steel',
        'mekanism:block_steel'
    )
    metalaf(
        'sulfur',
        'thermal:sulfur_dust',
    )
    metalaf(
        'tin',
        'thermal:tin_dust',
        'thermal:tin_ingot',
        'thermal:tin_nugget',
        'thermal:tin_block',
    )
    metalaf(
        'uranium',
        'mekanism:dust_uranium',
        'mekanism:ingot_uranium',
        'mekanism:nugget_uranium',
        'mekanism:block_uranium',
    )
})
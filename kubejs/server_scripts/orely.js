// orely? - resolving redundant ores and their outputs

// Recipes for disaster
events.listen('recipes', function (event) {

    // Hey, 3rd place isn't so bad
    event.replaceOutput({}, 'mekanism:nugget_bronze', 'thermal:bronze_nugget')
    event.replaceOutput({}, 'mekanism:ingot_bronze', 'thermal:bronze_ingot')
    event.replaceOutput({}, 'mekanism:block_bronze', 'thermal:bronze_block')
    event.replaceOutput({}, 'mekanism:dust_bronze', 'thermal:bronze_dust')

    event.replaceOutput({}, 'forge:dusts/bronze', 'thermal:bronze_dust')
    event.replaceOutput({}, 'forge:ingots/bronze', 'thermal:bronze_ingot')

    // Constantan - may lead to skin cancer
    event.replaceOutput({}, 'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget')
    event.replaceOutput({}, 'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot')
    event.replaceOutput({}, 'immersiveengineering:storage_constantan', 'thermal:constantan_block')
    event.replaceOutput({}, 'immersiveengineering:dust_constantan', 'thermal:constantan_dust')

    event.replaceOutput({}, 'forge:dusts/constantan', 'thermal:constantan_dust')
    event.replaceOutput({}, 'forge:ingots/constantan', 'thermal:constantan_ingot')

    event.replaceInput({}, 'immersiveengineering:nugget_constantan', 'forge:nuggets/constantan')
    event.replaceInput({}, 'immersiveengineering:ingot_constantan', 'forge:ingots/constantan')
    event.replaceInput({}, 'immersiveengineering:storage_constantan', 'forge:storage_blocks/constantan')
    event.replaceInput({}, 'immersiveengineering:dust_constantan', 'forge:dusts/constantan')

    // Coppertone sunscreen - SPF9000
    event.replaceOutput({}, 'iceandfire:copper_ore', 'thermal:copper_ore')
    event.replaceOutput({}, 'iceandfire:copper_nugget', 'thermal:copper_nugget')
    event.replaceOutput({}, 'iceandfire:copper_ingot', 'thermal:copper_ingot')
    event.replaceOutput({}, 'iceandfire:copper_block', 'thermal:copper_block')

    event.replaceOutput({}, 'immersiveengineering:ore_copper', 'thermal:copper_ore')
    event.replaceOutput({}, 'immersiveengineering:nugget_copper', 'thermal:copper_nugget')
    event.replaceOutput({}, 'immersiveengineering:ingot_copper', 'thermal:copper_ingot')
    event.replaceOutput({}, 'immersiveengineering:storage_copper', 'thermal:copper_block')
    event.replaceOutput({}, 'immersiveengineering:dust_copper', 'thermal:copper_dust')

    event.replaceOutput({}, 'mekanism:copper_ore', 'thermal:copper_ore')
    event.replaceOutput({}, 'mekanism:nugget_copper', 'thermal:copper_nugget')
    event.replaceOutput({}, 'mekanism:ingot_copper', 'thermal:copper_ingot')
    event.replaceOutput({}, 'mekanism:block_copper', 'thermal:copper_block')
    event.replaceOutput({}, 'mekanism:dust_copper', 'thermal:copper_dust')

    event.replaceOutput({}, 'forge:dusts/copper', 'thermal:copper_dust')
    event.replaceOutput({}, 'forge:ingots/copper', 'thermal:copper_ingot')

    event.replaceInput({}, 'iceandfire:copper_ore', 'forge:ores/copper')
    event.replaceInput({}, 'iceandfire:copper_nugget', 'forge:nuggets/copper')
    event.replaceInput({}, 'iceandfire:copper_ingot', 'forge:ingots/copper')
    event.replaceInput({}, 'iceandfire:copper_block', 'forge:storage_blocks/copper')

    event.replaceInput({}, 'immersiveengineering:ore_copper', 'forge:ores/copper')
    event.replaceInput({}, 'immersiveengineering:nugget_copper', 'forge:nuggets/copper')
    event.replaceInput({}, 'immersiveengineering:ingot_copper', 'forge:ingots/copper')
    event.replaceInput({}, 'immersiveengineering:storage_copper', 'forge:storage_blocks/copper')
    event.replaceInput({}, 'immersiveengineering:dust_copper', 'forge:dusts/copper')

    event.replaceInput({}, 'mekanism:copper_ore', 'forge:ores/copper')
    event.replaceInput({}, 'mekanism:nugget_copper', 'forge:nuggets/copper')
    event.replaceInput({}, 'mekanism:ingot_copper', 'forge:ingots/copper')
    event.replaceInput({}, 'mekanism:block_copper', 'forge:storage_blocks/copper')
    event.replaceInput({}, 'mekanism:dust_copper', 'forge:dusts/copper')

    event.replaceInput({}, 'thermal:copper_ore', 'forge:ores/copper')

    // Electrum - it's like gold, but SPICY

    // You get a gold star for trying
    event.replaceOutput({}, 'appliedenergistics2:gold_dust', 'thermal:gold_dust')
    event.replaceInput({}, 'appliedenergistics2:gold_dust', 'thermal:gold_dust')

    // I. Am. Iron. Man.
    event.replaceOutput({}, 'appliedenergistics2:iron_dust', 'thermal:iron_dust')
    event.replaceInput({}, 'appliedenergistics2:iron_dust', 'thermal:iron_dust')

    // Led Zeppelin rulz
    event.replaceOutput({}, 'immersiveengineering:ore_lead', 'mekanism:lead_ore')
    event.replaceOutput({}, 'immersiveengineering:nugget_lead', 'mekanism:nugget_lead')
    event.replaceOutput({}, 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead')
    event.replaceOutput({}, 'immersiveengineering:storage_lead', 'mekanism:block_lead')
    event.replaceOutput({}, 'immersiveengineering:dust_lead', 'mekanism:dust_lead')

    event.replaceOutput({}, 'mekanism:lead_ore', '')
    event.replaceOutput({}, 'mekanism:nugget_lead', '')
    event.replaceOutput({}, 'mekanism:ingot_lead', '')
    event.replaceOutput({}, 'mekanism:block_lead', '')
    event.replaceOutput({}, 'mekanism:dust_lead', '')

    event.replaceOutput({}, 'forge:dusts/lead', 'mekanism:dust_lead')
    event.replaceOutput({}, 'forge:ingots/lead', 'mekanism:ingot_lead')

    event.replaceInput({}, 'immersiveengineering:ore_lead', 'mekanism:lead_ore')
    event.replaceInput({}, 'immersiveengineering:nugget_lead', 'mekanism:nugget_lead')
    event.replaceInput({}, 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead')
    event.replaceInput({}, 'immersiveengineering:storage_lead', 'mekanism:block_lead')
    event.replaceInput({}, 'immersiveengineering:dust_lead', 'mekanism:dust_lead')

    // Nickelback sux

    // Quartz in session
    event.replaceOutput({}, 'appliedenergistics2:nether_quartz_dust', 'mekanism:dust_quartz')
    event.replaceInput({}, 'appliedenergistics2:nether_quartz_dust', 'mekanism:dust_quartz')

    event.replaceInput({}, 'minecraft:nether_quartz_ore', 'forge:ores/quartz')

    // Silverchair does not care for the tap water
    event.replaceOutput({}, 'iceandfire:silver_ore', 'immersiveengineering:ore_silver')
    event.replaceOutput({}, 'iceandfire:silver_nugget', 'immersiveengineering:nugget_silver')
    event.replaceOutput({}, 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver')
    event.replaceOutput({}, 'iceandfire:silver_block', 'immersiveengineering:storage_silver')

    event.replaceOutput({}, 'immersiveengineering:ore_silver', '')
    event.replaceOutput({}, 'immersiveengineering:nugget_silver', '')
    event.replaceOutput({}, 'immersiveengineering:ingot_silver', '')
    event.replaceOutput({}, 'immersiveengineering:storage_silver', '')
    event.replaceOutput({}, 'immersiveengineering:dust_silver', '')

    event.replaceInput({}, 'iceandfire:silver_ore', 'immersiveengineering:ore_silver')
    event.replaceInput({}, 'iceandfire:silver_nugget', 'immersiveengineering:nugget_silver')
    event.replaceInput({}, 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver')
    event.replaceInput({}, 'iceandfire:silver_block', 'immersiveengineering:storage_silver')

    // Steely Dan is not a man
    event.replaceOutput({}, 'immersiveengineering:nugget_steel', 'mekanism:nugget_steel')
    event.replaceOutput({}, 'immersiveengineering:ingot_steel', 'mekanism:ingot_steel')
    event.replaceOutput({}, 'immersiveengineering:storage_steel', 'mekanism:block_steel')
    event.replaceOutput({}, 'immersiveengineering:dust_steel', 'mekanism:dust_steel')

    event.replaceOutput({}, 'forge:dusts/steel', 'mekanism:dust_steel')
    event.replaceOutput({}, 'forge:ingots/steel', 'mekanism:ingot_steel')
    
    event.replaceInput({}, 'immersiveengineering:nugget_steel', 'mekanism:nugget_steel')
    event.replaceInput({}, 'immersiveengineering:ingot_steel', 'mekanism:ingot_steel')
    event.replaceInput({}, 'immersiveengineering:storage_steel', 'mekanism:block_steel')
    event.replaceInput({}, 'immersiveengineering:dust_steel', 'mekanism:dust_steel')

    // Sulfur, so good
    event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')
    event.replaceOutput({}, 'forge:dusts/sulfur', 'mekanism:dust_sulfur')
    event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')

    // Tin Cans With Strings To You

    // Uranium is HEAVY METAL \m/
    event.replaceOutput({}, 'immersiveengineering:ore_uranium', 'mekanism:uranium_ore')
    event.replaceOutput({}, 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium')
    event.replaceOutput({}, 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium')
    event.replaceOutput({}, 'immersiveengineering:storage_uranium', 'mekanism:block_uranium')
    event.replaceOutput({}, 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium')

    event.replaceOutput({}, 'forge:dusts/uranium', 'mekanism:dust_uranium')
    event.replaceOutput({}, 'forge:ingots/uranium', 'mekanism:ingot_uranium')

    event.replaceInput({}, 'immersiveengineering:ore_uranium', 'mekanism:uranium_ore')
    event.replaceInput({}, 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium')
    event.replaceInput({}, 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium')
    event.replaceInput({}, 'immersiveengineering:storage_uranium', 'mekanism:block_uranium')
    event.replaceInput({}, 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium')

})
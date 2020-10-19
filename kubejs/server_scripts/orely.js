// orely? - resolving redundant ores and their outputs

// Recipes for disaster
events.listen('recipes', function (event) {

    // Coppertone sunscreen - SPF9000
    event.replaceOutput({}, 'iceandfire:copper_ore', 'mekanism:copper_ore')
    event.replaceOutput({}, 'iceandfire:copper_nugget', 'mekanism:nugget_copper')
    event.replaceOutput({}, 'iceandfire:copper_ingot', 'mekanism:ingot_copper')
    event.replaceOutput({}, 'iceandfire:copper_block', 'mekanism:block_copper')
    event.replaceOutput({}, 'immersiveengineering:ore_copper', 'mekanism:copper_ore')
    event.replaceOutput({}, 'immersiveengineering:nugget_copper', 'mekanism:nugget_copper')
    event.replaceOutput({}, 'immersiveengineering:ingot_copper', 'mekanism:ingot_copper')
    event.replaceOutput({}, 'immersiveengineering:storage_copper', 'mekanism:block_copper')
    event.replaceOutput({}, 'immersiveengineering:dust_copper', 'mekanism:dust_copper')
    event.replaceInput({}, 'iceandfire:copper_ore', 'mekanism:copper_ore')
    event.replaceInput({}, 'iceandfire:copper_nugget', 'mekanism:nugget_copper')
    event.replaceInput({}, 'iceandfire:copper_ingot', 'mekanism:ingot_copper')
    event.replaceInput({}, 'iceandfire:copper_block', 'mekanism:block_copper')
    event.replaceInput({}, 'immersiveengineering:ore_copper', 'mekanism:copper_ore')
    event.replaceInput({}, 'immersiveengineering:nugget_copper', 'mekanism:nugget_copper')
    event.replaceInput({}, 'immersiveengineering:ingot_copper', 'mekanism:ingot_copper')
    event.replaceInput({}, 'immersiveengineering:storage_copper', 'mekanism:block_copper')
    event.replaceInput({}, 'immersiveengineering:dust_copper', 'mekanism:dust_copper')

    // You get a gold star for trying
    event.replaceOutput({}, 'appliedenergistics2:gold_dust', 'mekanism:dust_gold')
    event.replaceInput({}, 'appliedenergistics2:gold_dust', 'mekanism:dust_gold')

    // I. Am. Iron. Man.
    event.replaceOutput({}, 'appliedenergistics2:iron_dust', 'mekanism:dust_iron')
    event.replaceInput({}, 'appliedenergistics2:iron_dust', 'mekanism:dust_iron')

    // Led Zeppelin rulz
    event.replaceOutput({}, 'immersiveengineering:ore_lead', 'mekanism:lead_ore')
    event.replaceOutput({}, 'immersiveengineering:nugget_lead', 'mekanism:nugget_lead')
    event.replaceOutput({}, 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead')
    event.replaceOutput({}, 'immersiveengineering:storage_lead', 'mekanism:block_lead')
    event.replaceOutput({}, 'immersiveengineering:dust_lead', 'mekanism:dust_lead')
    event.replaceInput({}, 'immersiveengineering:ore_lead', 'mekanism:lead_ore')
    event.replaceInput({}, 'immersiveengineering:nugget_lead', 'mekanism:nugget_lead')
    event.replaceInput({}, 'immersiveengineering:ingot_lead', 'mekanism:ingot_lead')
    event.replaceInput({}, 'immersiveengineering:storage_lead', 'mekanism:block_lead')
    event.replaceInput({}, 'immersiveengineering:dust_lead', 'mekanism:dust_lead')

    // Quartz in session
    event.replaceOutput({}, 'appliedenergistics2:nether_quartz_dust', 'mekanism:dust_quartz')
    event.replaceInput({}, 'appliedenergistics2:nether_quartz_dust', 'mekanism:dust_quartz')

    // Silverchair does not care for the tap water
    event.replaceOutput({}, 'iceandfire:silver_ore', 'immersiveengineering:ore_silver')
    event.replaceOutput({}, 'iceandfire:silver_nugget', 'immersiveengineering:nugget_silver')
    event.replaceOutput({}, 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver')
    event.replaceOutput({}, 'iceandfire:silver_block', 'immersiveengineering:storage_silver')
    event.replaceInput({}, 'iceandfire:silver_ore', 'immersiveengineering:ore_silver')
    event.replaceInput({}, 'iceandfire:silver_nugget', 'immersiveengineering:nugget_silver')
    event.replaceInput({}, 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver')
    event.replaceInput({}, 'iceandfire:silver_block', 'immersiveengineering:storage_silver')

    // Steely Dan is not a man
    event.replaceOutput({}, 'immersiveengineering:nugget_steel', 'mekanism:nugget_steel')
    event.replaceOutput({}, 'immersiveengineering:ingot_steel', 'mekanism:ingot_steel')
    event.replaceOutput({}, 'immersiveengineering:storage_steel', 'mekanism:block_steel')
    event.replaceOutput({}, 'immersiveengineering:dust_steel', 'mekanism:dust_steel')
    event.replaceInput({}, 'immersiveengineering:nugget_steel', 'mekanism:nugget_steel')
    event.replaceInput({}, 'immersiveengineering:ingot_steel', 'mekanism:ingot_steel')
    event.replaceInput({}, 'immersiveengineering:storage_steel', 'mekanism:block_steel')
    event.replaceInput({}, 'immersiveengineering:dust_steel', 'mekanism:dust_steel')

    // Sulfur, so good
    event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')
    event.replaceInput({}, 'immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur')

    // Uranium is HEAVY METAL \m/
    event.replaceOutput({}, 'immersiveengineering:ore_uranium', 'mekanism:uranium_ore')
    event.replaceOutput({}, 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium')
    event.replaceOutput({}, 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium')
    event.replaceOutput({}, 'immersiveengineering:storage_uranium', 'mekanism:block_uranium')
    event.replaceOutput({}, 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium')
    event.replaceInput({}, 'immersiveengineering:ore_uranium', 'mekanism:uranium_ore')
    event.replaceInput({}, 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium')
    event.replaceInput({}, 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium')
    event.replaceInput({}, 'immersiveengineering:storage_uranium', 'mekanism:block_uranium')
    event.replaceInput({}, 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium')

})
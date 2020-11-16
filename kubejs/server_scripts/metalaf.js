// orely? - resolving redundant ores and their outputs

// Recipes for disaster
events.listen('recipes', function (event) {
    const metalaf = (name, dustY, ingotY, nuggetY, blockY, plateY, gearY) => {
        event.replaceOutput('#forge:dusts/' + name, dustY)
        event.replaceOutput('#forge:ingots/' + name, ingotY)
        event.replaceOutput('#forge:nuggets/' + name, nuggetY)
        event.replaceOutput('#forge:storage_blocks/' + name, blockY)
        event.replaceOutput('#forge:plates/' + name, plateY)
        event.replaceOutput('#forge:gears/' + name, gearY)
    }

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
        '',
        '',
        'minecraft:diamond_block',
        '',
        'thermal:diamond_gear',
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
        'thermal:gold_gear',
    )
    metalaf(
        'iron',
        'thermal:iron_dust',
        'minecraft:iron_ingot',
        'minecraft:iron_nugget',
        'minecraft:iron_block',
        'thermal:iron_plate',
        'thermal:iron_gear',
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
        'nickel',
        'thermal:nickel_dust',
        'thermal:nickel_ingot',
        'thermal:nickel_nugget',
        'thermal:nickel_block',
        'thermal:nickel_plate',
    )
    metalaf(
        'saltpeter',
        'immersiveengineering:dust_saltpeter',
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

    /*            
            // Bronze - Hey, 3rd place isn't so bad
            event.replaceOutput({}, 'mekanism:dust_bronze', 'thermal:bronze_dust')
            event.replaceOutput({}, 'mekanism:ingot_bronze', 'thermal:bronze_ingot')
            event.replaceOutput({}, 'mekanism:nugget_bronze', 'thermal:bronze_nugget')
            event.replaceOutput({}, 'mekanism:block_bronze', 'thermal:bronze_block')
        
            event.replaceOutput({}, '#forge:dusts/bronze', 'thermal:bronze_dust')
            event.replaceOutput({}, '#forge:ingots/bronze', 'thermal:bronze_ingot')
            event.replaceOutput({}, '#forge:nuggets/bronze', 'thermal:bronze_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/bronze', 'thermal:bronze_block')
        
            // Coal miner's daughter
            event.replaceOutput({}, 'bloodmagic:coalsand', 'mekanism:dust_coal')
            event.replaceOutput({}, '#forge:dusts/coal', 'mekanism:dust_coal')
        
            event.replaceInput({}, 'bloodmagic:coalsand', '#forge:dusts/coal')
            event.replaceInput({}, 'mekanism:dust_coal', '#forge:dusts/coal')
        
            // Constantan - may lead to skin cancer
            event.replaceOutput({}, 'immersiveengineering:dust_constantan', 'thermal:constantan_dust')
            event.replaceOutput({}, 'immersiveengineering:ingot_constantan', 'thermal:constantan_ingot')
            event.replaceOutput({}, 'immersiveengineering:nugget_constantan', 'thermal:constantan_nugget')
            event.replaceOutput({}, 'immersiveengineering:storage_constantan', 'thermal:constantan_block')
            event.replaceOutput({}, 'immersiveengineering:plate_constantan', 'thermal:constantan_plate')
        
            event.replaceOutput({}, '#forge:dusts/constantan', 'thermal:constantan_dust')
            event.replaceOutput({}, '#forge:ingots/constantan', 'thermal:constantan_ingot')
            event.replaceOutput({}, '#forge:nuggets/constantan', 'thermal:constantan_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/constantan', 'thermal:constantan_block')
            event.replaceOutput({}, '#forge:plates/constantan', 'thermal:constantan_plate')
        
            event.replaceInput({}, 'immersiveengineering:dust_constantan', '#forge:dusts/constantan')
            event.replaceInput({}, 'immersiveengineering:ingot_constantan', '#forge:ingots/constantan')
            event.replaceInput({}, 'immersiveengineering:nugget_constantan', '#forge:nuggets/constantan')
            event.replaceInput({}, 'immersiveengineering:storage_constantan', '#forge:storage_blocks/constantan')
            event.replaceInput({}, 'immersiveengineering:plate_constantan', '#forge:plates/constantan')
        
            // Coppertone sunscreen - SPF9000
            event.replaceOutput({}, 'iceandfire:copper_ore', 'thermal:copper_ore')
            event.replaceOutput({}, 'iceandfire:copper_ingot', 'thermal:copper_ingot')
            event.replaceOutput({}, 'iceandfire:copper_nugget', 'thermal:copper_nugget')
            event.replaceOutput({}, 'iceandfire:copper_block', 'thermal:copper_block')
        
            event.replaceOutput({}, 'immersiveengineering:ore_copper', 'thermal:copper_ore')
            event.replaceOutput({}, 'immersiveengineering:dust_copper', 'thermal:copper_dust')
            event.replaceOutput({}, 'immersiveengineering:ingot_copper', 'thermal:copper_ingot')
            event.replaceOutput({}, 'immersiveengineering:nugget_copper', 'thermal:copper_nugget')
            event.replaceOutput({}, 'immersiveengineering:storage_copper', 'thermal:copper_block')
            event.replaceOutput({}, 'immersiveengineering:plate_copper', 'thermal:copper_plate')
        
            event.replaceOutput({}, 'mekanism:copper_ore', 'thermal:copper_ore')
            event.replaceOutput({}, 'mekanism:dust_copper', 'thermal:copper_dust')
            event.replaceOutput({}, 'mekanism:ingot_copper', 'thermal:copper_ingot')
            event.replaceOutput({}, 'mekanism:nugget_copper', 'thermal:copper_nugget')
            event.replaceOutput({}, 'mekanism:block_copper', 'thermal:copper_block')
        
            event.replaceOutput({}, '#forge:ores/copper', 'thermal:copper_ore')
            event.replaceOutput({}, '#forge:dusts/copper', 'thermal:copper_dust')
            event.replaceOutput({}, '#forge:ingots/copper', 'thermal:copper_ingot')
            event.replaceOutput({}, '#forge:nuggets/copper', 'thermal:copper_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/copper', 'thermal:copper_block')
            event.replaceOutput({}, '#forge:plates/copper', 'thermal:copper_plate')
        
            event.replaceInput({}, 'iceandfire:copper_ore', '#forge:ores/copper')
            event.replaceInput({}, 'iceandfire:copper_ingot', '#forge:ingots/copper')
            event.replaceInput({}, 'iceandfire:copper_nugget', '#forge:nuggets/copper')
            event.replaceInput({}, 'iceandfire:copper_block', '#forge:storage_blocks/copper')
        
            event.replaceInput({}, 'immersiveengineering:ore_copper', '#forge:ores/copper')
            event.replaceInput({}, 'immersiveengineering:dust_copper', '#forge:dusts/copper')
            event.replaceInput({}, 'immersiveengineering:ingot_copper', '#forge:ingots/copper')
            event.replaceInput({}, 'immersiveengineering:nugget_copper', '#forge:nuggets/copper')
            event.replaceInput({}, 'immersiveengineering:storage_copper', '#forge:storage_blocks/copper')
            event.replaceInput({}, 'immersiveengineering:plate_copper', '#forge:plates/copper')
        
            event.replaceInput({}, 'mekanism:copper_ore', '#forge:ores/copper')
            event.replaceInput({}, 'mekanism:dust_copper', '#forge:dusts/copper')
            event.replaceInput({}, 'mekanism:ingot_copper', '#forge:ingots/copper')
            event.replaceInput({}, 'mekanism:nugget_copper', '#forge:nuggets/copper')
            event.replaceInput({}, 'mekanism:block_copper', '#forge:storage_blocks/copper')
        
            event.replaceInput({}, 'thermal:copper_ore', '#forge:ores/copper')
                
            // Electrum - it's like gold, but SPICY
            event.replaceOutput({}, 'immersiveengineering:dust_electrum', 'thermal:electrum_dust')
            event.replaceOutput({}, 'immersiveengineering:ingot_electrum', 'thermal:electrum_ingot')
            event.replaceOutput({}, 'immersiveengineering:nugget_electrum', 'thermal:electrum_nugget')
            event.replaceOutput({}, 'immersiveengineering:storage_electrum', 'thermal:electrum_block')
            event.replaceOutput({}, 'immersiveengineering:plate_electrum', 'thermal:electrum_plate')
        
            event.replaceOutput({}, '#forge:dusts/electrum', 'thermal:electrum_dust')
            event.replaceOutput({}, '#forge:ingots/electrum', 'thermal:electrum_ingot')
            event.replaceOutput({}, '#forge:nuggets/electrum', 'thermal:electrum_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/electrum', 'thermal:electrum_block')
            event.replaceOutput({}, '#forge:plates/electrum', 'thermal:electrum_plate')
        
            event.replaceInput({}, 'immersiveengineering:dust_electrum', '#forge:dusts/electrum')
            event.replaceInput({}, 'immersiveengineering:ingot_electrum', '#forge:ingots/electrum')
            event.replaceInput({}, 'immersiveengineering:nugget_electrum', '#forge:nuggets/electrum')
            event.replaceInput({}, 'immersiveengineering:storage_electrum', '#forge:storage_blocks/electrum')
            event.replaceInput({}, 'immersiveengineering:plate_electrum', '#forge:plates/electrum')
        
            // You get a gold star for trying
            event.replaceOutput({}, 'appliedenergistics2:gold_dust', 'thermal:gold_dust')
            event.replaceOutput({}, 'bloodmagic:goldsand', 'thermal:gold_dust')
            event.replaceOutput({}, 'immersiveengineering:dust_gold', 'thermal:gold_dust')
            event.replaceOutput({}, 'immersiveengineering:plate_gold', 'thermal:gold_plate')
            event.replaceOutput({}, '#forge:dusts/gold', 'thermal:gold_dust')
            event.replaceOutput({}, '#forge:plates/gold', 'thermal:gold_plate')
        
            event.replaceInput({}, 'bloodmagic:goldsand', '#forge:dusts/gold')
            event.replaceInput({}, 'appliedenergistics2:gold_dust', '#forge:dusts/gold')
            event.replaceInput({}, 'immersiveengineering:dust_gold', '#forge:dusts/gold')
            event.replaceInput({}, 'immersiveengineering:plate_gold', '#forge:plates/gold')
        
            // I. Am. Iron. Man.
            event.replaceOutput({}, 'bloodmagic:ironsand', 'thermal:iron_dust')
            event.replaceOutput({}, 'appliedenergistics2:iron_dust', 'thermal:iron_dust')
            event.replaceOutput({}, 'immersiveengineering:dust_iron', 'thermal:iron_dust')
            event.replaceOutput({}, 'immersiveengineering:plate_iron', 'thermal:iron_plate')
            event.replaceOutput({}, '#forge:dusts/iron', 'thermal:iron_dust')
            event.replaceOutput({}, '#forge:plates/iron', 'thermal:iron_plate')
        
            event.replaceInput({}, 'bloodmagic:ironsand', '#forge:dusts/iron')
            event.replaceInput({}, 'appliedenergistics2:iron_dust', '#forge:dusts/iron')
            event.replaceInput({}, 'immersiveengineering:dust_iron', '#forge:dusts/iron')
            event.replaceInput({}, 'immersiveengineering:plate_iron', '#forge:plates/iron')
        
            // Led Zeppelin rulz
            event.replaceOutput({}, 'immersiveengineering:ore_lead', 'thermal:lead_ore')
            event.replaceOutput({}, 'immersiveengineering:dust_lead', 'thermal:lead_dust')
            event.replaceOutput({}, 'immersiveengineering:ingot_lead', 'thermal:lead_ingot')
            event.replaceOutput({}, 'immersiveengineering:nugget_lead', 'thermal:lead_nugget')
            event.replaceOutput({}, 'immersiveengineering:storage_lead', 'thermal:lead_block')
            event.replaceOutput({}, 'immersiveengineering:plate_lead', 'thermal:lead_plate')
        
            event.replaceOutput({}, 'mekanism:lead_ore', 'thermal:lead_ore')
            event.replaceOutput({}, 'mekanism:dust_lead', 'thermal:lead_dust')
            event.replaceOutput({}, 'mekanism:ingot_lead', 'thermal:lead_ingot')
            event.replaceOutput({}, 'mekanism:nugget_lead', 'thermal:lead_nugget')
            event.replaceOutput({}, 'mekanism:block_lead', 'thermal:lead_block')
        
            event.replaceOutput({}, '#forge:ores/lead', 'thermal:lead_ore')
            event.replaceOutput({}, '#forge:dusts/lead', 'thermal:lead_dust')
            event.replaceOutput({}, '#forge:ingots/lead', 'thermal:lead_ingot')
            event.replaceOutput({}, '#forge:nuggets/lead', 'thermal:lead_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/lead', 'thermal:lead_block')
            event.replaceOutput({}, '#forge:plates/lead', 'thermal:lead_plate')
        
            event.replaceInput({}, 'immersiveengineering:ore_lead', '#forge:ores/lead')
            event.replaceInput({}, 'immersiveengineering:dust_lead', '#forge:dusts/lead')
            event.replaceInput({}, 'immersiveengineering:ingot_lead', '#forge:ingots/lead')
            event.replaceInput({}, 'immersiveengineering:nugget_lead', '#forge:nuggets/lead')
            event.replaceInput({}, 'immersiveengineering:storage_lead', '#forge:storage_blocks/lead')
            event.replaceInput({}, 'immersiveengineering:plate_lead', '#forge:plates/lead')
        
            event.replaceInput({}, 'mekanism:lead_ore', '#forge:ores/lead')
            event.replaceInput({}, 'mekanism:dust_lead', '#forge:dusts/lead')
            event.replaceInput({}, 'mekanism:ingot_lead', '#forge:ingots/lead')
            event.replaceInput({}, 'mekanism:nugget_lead', '#forge:nuggets/lead')
            event.replaceInput({}, 'mekanism:block_lead', '#forge:storage_blocks/lead')
        
            event.replaceInput({}, 'thermal:lead_ore', '#forge:ores/lead')
        
            // Nickelback sux
            event.replaceOutput({}, 'immersiveengineering:ore_nickel', 'thermal:nickel_ore')
            event.replaceOutput({}, 'immersiveengineering:dust_nickel', 'thermal:nickel_dust')
            event.replaceOutput({}, 'immersiveengineering:ingot_nickel', 'thermal:nickel_ingot')
            event.replaceOutput({}, 'immersiveengineering:nugget_nickel', 'thermal:nickel_nugget')
            event.replaceOutput({}, 'immersiveengineering:storage_nickel', 'thermal:nickel_block')
            event.replaceOutput({}, 'immersiveengineering:plate_nickel', 'thermal:nickel_plate')
        
            event.replaceOutput({}, '#forge:ores/nickel', 'thermal:nickel_ore')
            event.replaceOutput({}, '#forge:dusts/nickel', 'thermal:nickel_dust')
            event.replaceOutput({}, '#forge:ingots/nickel', 'thermal:nickel_ingot')
            event.replaceOutput({}, '#forge:nuggets/nickel', 'thermal:nickel_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/nickel', 'thermal:nickel_block')
            event.replaceOutput({}, '#forge:plates/nickel', 'thermal:nickel_plate')
        
            event.replaceInput({}, 'immersiveengineering:ore_nickel', '#forge:ores/nickel')
            event.replaceInput({}, 'immersiveengineering:dust_nickel', '#forge:dusts/nickel')
            event.replaceInput({}, 'immersiveengineering:ingot_nickel', '#forge:ingots/nickel')
            event.replaceInput({}, 'immersiveengineering:nugget_nickel', '#forge:nuggets/nickel')
            event.replaceInput({}, 'immersiveengineering:storage_nickel', '#forge:storage_blocks/nickel')
            event.replaceInput({}, 'immersiveengineering:plate_nickel', '#forge:plates/nickel')
        
            event.replaceInput({}, 'thermal:nickel_ore', '#forge:ores/nickel')
        
            // Quartz in session
            event.replaceOutput({}, 'appliedenergistics2:nether_quartz_dust', 'thermal:quartz_dust')
            event.replaceOutput({}, 'mekanism:dust_quartz', 'thermal:quartz_dust')
            event.replaceOutput({}, '#forge:dusts/quartz', 'thermal:quartz_dust')
            event.replaceOutput({}, '#forge:ores/quartz', 'minecraft:nether_quartz_ore')
        
            event.replaceInput({}, 'appliedenergistics2:nether_quartz_dust', '#forge:dusts/quartz')
            event.replaceInput({}, 'mekanism:dust_quartz', '#forge:dusts/quartz')
            event.replaceInput({}, 'minecraft:nether_quartz_ore', '#forge:ores/quartz')
        
            // SaltPeter, Paul and Mary
            event.replaceOutput({}, 'bloodmagic:saltpeter', 'immersiveengineering:dust_saltpeter')
            event.replaceOutput({}, '#forge:dusts/saltpeter', 'immersiveengineering:dust_saltpeter')
        
            event.replaceInput({}, 'bloodmagic:saltpeter', '#forge:dusts/saltpeter')
            event.replaceInput({}, 'immersiveengineering:dust_saltpeter', '#forge:dusts/saltpeter')
        
            // Silverchair does not care for the tap water
            event.replaceOutput({}, 'iceandfire:silver_ore', 'thermal:silver_ore')
            event.replaceOutput({}, 'iceandfire:silver_ingot', 'thermal:silver_ingot')
            event.replaceOutput({}, 'iceandfire:silver_nugget', 'thermal:silver_nugget')
            event.replaceOutput({}, 'iceandfire:silver_block', 'thermal:silver_block')
        
            event.replaceOutput({}, 'immersiveengineering:ore_silver', 'thermal:silver_ore')
            event.replaceOutput({}, 'immersiveengineering:dust_silver', 'thermal:silver_dust')
            event.replaceOutput({}, 'immersiveengineering:ingot_silver', 'thermal:silver_ingot')
            event.replaceOutput({}, 'immersiveengineering:nugget_silver', 'thermal:silver_nugget')
            event.replaceOutput({}, 'immersiveengineering:storage_silver', 'thermal:silver_block')
            event.replaceOutput({}, 'immersiveengineering:plate_silver', 'thermal:silver_plate')
        
            event.replaceOutput({}, '#forge:ores/silver', 'thermal:silver_ore')
            event.replaceOutput({}, '#forge:dusts/silver', 'thermal:silver_dust')
            event.replaceOutput({}, '#forge:ingots/silver', 'thermal:silver_ingot')
            event.replaceOutput({}, '#forge:nuggets/silver', 'thermal:silver_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/silver', 'thermal:silver_block')
            event.replaceOutput({}, '#forge:plates/silver', 'thermal:silver_plate')
        
            event.replaceInput({}, 'iceandfire:silver_ore', '#forge:ores/silver')
            event.replaceInput({}, 'iceandfire:silver_ingot', '#forge:ingots/silver')
            event.replaceInput({}, 'iceandfire:silver_nugget', '#forge:nuggets/silver')
            event.replaceInput({}, 'iceandfire:silver_block', '#forge:storage_blocks/silver')
        
            event.replaceInput({}, 'immersiveengineering:ore_silver', '#forge:ores/silver')
            event.replaceInput({}, 'immersiveengineering:dust_silver', '#forge:dusts/silver')
            event.replaceInput({}, 'immersiveengineering:ingot_silver', '#forge:ingots/silver')
            event.replaceInput({}, 'immersiveengineering:nugget_silver', '#forge:nuggets/silver')
            event.replaceInput({}, 'immersiveengineering:storage_silver', '#forge:storage_blocks/silver')
            event.replaceInput({}, 'immersiveengineering:plate_silver', '#forge:plates/silver')
        
            event.replaceInput({}, 'thermal:silver_ore', '#forge:ores/silver')
        
            // Steely Dan is not a man
            event.replaceOutput({}, 'immersiveengineering:dust_steel', 'mekanism:dust_steel')
            event.replaceOutput({}, 'immersiveengineering:ingot_steel', 'mekanism:ingot_steel')
            event.replaceOutput({}, 'immersiveengineering:nugget_steel', 'mekanism:nugget_steel')
            event.replaceOutput({}, 'immersiveengineering:storage_steel', 'mekanism:block_steel')
        
            event.replaceOutput({}, '#forge:dusts/steel', 'mekanism:dust_steel')
            event.replaceOutput({}, '#forge:ingots/steel', 'mekanism:ingot_steel')
            event.replaceOutput({}, '#forge:nuggets/steel', 'mekanism:nugget_steel')
            event.replaceOutput({}, '#forge:storage_blocks/steel', 'mekanism:block_steel')
        
            event.replaceInput({}, 'immersiveengineering:dust_steel', '#forge:dusts/steel')
            event.replaceInput({}, 'immersiveengineering:ingot_steel', '#forge:ingots/steel')
            event.replaceInput({}, 'immersiveengineering:nugget_steel', '#forge:nuggets/steel')
            event.replaceInput({}, 'immersiveengineering:storage_steel', '#forge:storage_blocks/steel')
        
            // Sulfur, so good
            event.replaceOutput({}, 'bloodmagic:sulfur', 'thermal:sulfur_dust')
            event.replaceOutput({}, 'immersiveengineering:dust_sulfur', 'thermal:sulfur_dust')
            event.replaceOutput({}, 'mekanism:dust_sulfur', 'thermal:sulfur_dust')
            event.replaceOutput({}, '#forge:dusts/sulfur', 'thermal:sulfur_dust')
        
            event.replaceInput({}, 'bloodmagic:sulfur', '#forge:dusts/sulfur')
            event.replaceInput({}, 'immersiveengineering:dust_sulfur', '#forge:dusts/sulfur')
            event.replaceInput({}, 'mekanism:dust_sulfur', '#forge:dusts/sulfur')
        
            event.replaceInput({}, 'thermal:sulfur_ore', '#forge:ores/sulfur')
        
            // Tin Cans With Strings To You
            event.replaceOutput({}, 'mekanism:tin_ore', 'thermal:tin_ore')
            event.replaceOutput({}, 'mekanism:dust_tin', 'thermal:tin_dust')
            event.replaceOutput({}, 'mekanism:ingot_tin', 'thermal:tin_ingot')
            event.replaceOutput({}, 'mekanism:nugget_tin', 'thermal:tin_nugget')
            event.replaceOutput({}, 'mekanism:block_tin', 'thermal:tin_block')
        
            event.replaceOutput({}, '#forge:ores/tin', 'thermal:tin_ore')
            event.replaceOutput({}, '#forge:dusts/tin', 'thermal:tin_dust')
            event.replaceOutput({}, '#forge:ingots/tin', 'thermal:tin_ingot')
            event.replaceOutput({}, '#forge:nuggets/tin', 'thermal:tin_nugget')
            event.replaceOutput({}, '#forge:storage_blocks/tin', 'thermal:tin_block')
        
            event.replaceInput({}, 'mekanism:tin_ore', '#forge:ores/tin')
            event.replaceInput({}, 'mekanism:dust_tin', '#forge:dusts/tin')
            event.replaceInput({}, 'mekanism:ingot_tin', '#forge:ingots/tin')
            event.replaceInput({}, 'mekanism:nugget_tin', '#forge:nuggets/tin')
            event.replaceInput({}, 'mekanism:block_tin', '#forge:storage_blocks/tin')
        
            event.replaceInput({}, 'thermal:tin_ore', '#forge:ores/tin')
        
            // Uranium is HEAVY METAL \m/
            event.replaceOutput({}, 'immersiveengineering:ore_uranium', 'mekanism:uranium_ore')
            event.replaceOutput({}, 'immersiveengineering:dust_uranium', 'mekanism:dust_uranium')
            event.replaceOutput({}, 'immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium')
            event.replaceOutput({}, 'immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium')
            event.replaceOutput({}, 'immersiveengineering:storage_uranium', 'mekanism:block_uranium')
        
            event.replaceOutput({}, '#forge:ores/uranium', 'mekanism:uranium_ore')
            event.replaceOutput({}, '#forge:dusts/uranium', 'mekanism:dust_uranium')
            event.replaceOutput({}, '#forge:ingots/uranium', 'mekanism:ingot_uranium')
            event.replaceOutput({}, '#forge:nuggets/uranium', 'mekanism:nugget_uranium')
            event.replaceOutput({}, '#forge:storage_blocks/uranium', 'mekanism:block_uranium')
        
            event.replaceInput({}, 'immersiveengineering:ore_uranium', '#forge:ores/uranium')
            event.replaceInput({}, 'immersiveengineering:dust_uranium', '#forge:dusts/uranium')
            event.replaceInput({}, 'immersiveengineering:ingot_uranium', '#forge:ingots/uranium')
            event.replaceInput({}, 'immersiveengineering:nugget_uranium', '#forge:nuggets/uranium')
            event.replaceInput({}, 'immersiveengineering:storage_uranium', '#forge:storage_blocks/uranium')
        
            event.replaceInput({}, 'mekanism:uranium_ore', '#forge:ores/uranium')
        */
})
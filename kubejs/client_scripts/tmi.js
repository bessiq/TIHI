// TIHI TMI

// JEI-spy with my little i
events.listen('jei.information', function (event) {

    event.add('appliedenergistics2:quartz_ore', ["Cooler than a polar bear's toenails."])
    event.add('ars_nouveau:arcane_ore', ['In the oldest forests and twilit realms.'])
    event.add('byg:pendorite_ore', ["Nether here nor there."])
    event.add('byg:ametrine_ore', ['In the boundless void it can be found, hidden among the shattered.'])
    event.add('farlanders:endumium_ore', ['Rumor is it hangs out with emeralds.'])
    event.add('tihi:tihinium', ['This "ore" is strange, stubborn, and has been crashing on my couch for a week now. I would avoid it.'])
    event.add('bagofyurting:bag_of_yurting', ['These bags can be upgraded to gobble up massive areas. How much can you yurt, bruh?', '', 'Warning: some things may not be...yurtable?'])
    event.add('mekanism:osmium_ore', ['Mysteriously absent from the Overworld, except for trace amounts that are sometimes found deep underground in an area the locals call a...Baseball Beretta? Bath Salt Banderas? Bay Saw Barchetta? Man, idk. That was a crazy night.'])
    event.add('mekanism:fluorite_ore', ['Fluorite has not been seen in the Overworld for eons, but some claim they have spied it at extreme altitudes. No one believes them.'])
    event.add('weeping_angels:kontron_ore', ['Infrequent inhabitant of icy environs.'])
    event.add('druidcraft:amber_ore', ['Found in the bleakest biomes, or at least those with zero-percent humidity.'])
    event.add('iceandfire:amythest_ore', ['Where the lion sleeps tonight.'])
    event.add('iceandfire:amythest_ore', ['Under the sea,', 'Where the fish pee.'])
    event.add('druidcraft:fiery_glass_ore', ['Hot and bothered.'])
    event.add('druidcraft:moonstone_ore', ['Hangs out in high-density digs, and is also known to frequent the forest where the sun goes down...permanently.'])
    event.add('druidcraft:rockroot_ore', ['Ask the Ents.'])
})

// Voila!
onEvent('jei.add.items', event => {
    event.add('minecraft:dragon_egg')
})

// Tooltips of the trade
onEvent('item.tooltip', tooltip => {
    tooltip.add('tihi:tihinium', 'What are you looking at?')
})

// Could condense this a bit I guess
onEvent('jei.hide.items', event => {
    event.hide([
        /appliedenergistics2:facade/,
        'appliedenergistics2:flour',
        'appliedenergistics2:gold_dust',
        'appliedenergistics2:iron_dust',
        'appliedenergistics2:nether_quartz_dust',

        'ars_nouveau:arcane_brick',
        'ars_nouveau:debug',

        '@chancecubes',

        'druidcraft:blazing_steel',
        'druidcraft:brightstone',
        'druidcraft:crushed_fiery_glass',
        'druidcraft:debug',
        'druidcraft:heart_of_blaze',
        'druidcraft:hellkiln',
        'druidcraft:hellkiln_igniter',
        'druidcraft:knife',
        'druidcraft:tempered_fiery_glass',
        
        /expandedstorage:old.+/,

        'farmersdelight:wheat_dough',

        'fins:spindly_amber_block',
        'fins:spindly_emerald_block',
        'fins:spindly_sapphire_block',

        'forbidden_arcanus:arcane_gold_block',
        'forbidden_arcanus:arcane_gold_ingot',
        'forbidden_arcanus:arcane_gold_nugget',
        'forbidden_arcanus:ender_pearl_fragment',
        'forbidden_arcanus:pixie_spawn_egg',

        'iceandfire:copper_block',
        'iceandfire:copper_ingot',
        'iceandfire:copper_nugget',
        'iceandfire:copper_ore',

        'immersiveengineering:dust_aluminum',
        'immersiveengineering:dust_copper',
        'immersiveengineering:dust_gold',
        'immersiveengineering:dust_iron',
        'immersiveengineering:dust_lead',
        'immersiveengineering:dust_nickel',
        'immersiveengineering:dust_silver',
        'immersiveengineering:dust_steel',
        'immersiveengineering:dust_sulfur',
        'immersiveengineering:dust_uranium',
        'immersiveengineering:dust_wood',
        'immersiveengineering:ingot_copper',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_steel',
        'immersiveengineering:ingot_uranium',
        'immersiveengineering:nugget_copper',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:nugget_silver',
        'immersiveengineering:nugget_steel',
        'immersiveengineering:nugget_uranium',
        'immersiveengineering:ore_copper',
        'immersiveengineering:ore_lead',
        'immersiveengineering:ore_silver',
        'immersiveengineering:ore_uranium',
        'immersiveengineering:plate_copper',
        'immersiveengineering:plate_iron',
        'immersiveengineering:storage_copper',
        'immersiveengineering:storage_lead',
        'immersiveengineering:storage_silver',
        'immersiveengineering:storage_steel',
        'immersiveengineering:storage_uranium',

        /mekanism:creative_fluid_tank/,
        /mekanism:creative_chemical_tank/,
        'mekanism:creative_energy_cube:filled',
        'mekanism:block_copper',
        'mekanism:block_lead',
        'mekanism:copper_ore',
        'mekanism:dust_copper',
        'mekanism:dust_gold',
        'mekanism:dust_iron',
        'mekanism:dust_lead',
        'mekanism:dust_obsidian',
        'mekanism:dust_sulfur',
        'mekanism:dust_tin',
        'mekanism:dust_uranium',
        'mekanism:ingot_copper',
        'mekanism:ingot_lead',
        'mekanism:lead_ore',
        'mekanism:nugget_copper',
        'mekanism:nugget_lead',

        'quark:backpack',
        'quark:beetroot_crate',
        'quark:bonded_ravager_hide',
        'quark:carrot_crate',
        'quark:charcoal_block',
        'quark:potato_crate',
        'quark:ravager_hide',
        'quark:tallow',
        
        '@sonicraft',

        'spartanshields:shield_basic_invar',
        'spartanshields:shield_basic_platinum',
        'spartanshields:shield_tower_invar',
        'spartanshields:shield_tower_platinum',

        'tconstruct:copper_block',
        'tconstruct:copper_ingot',
        'tconstruct:copper_nugget',
        'tconstruct:copper_ore',
    ])
})

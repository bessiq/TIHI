// what a chORE

onEvent('recipes', event => {

    const orely = (name, oreY) => {
        event.replaceOutput('#forge:ores/' + name, oreY)
        event.replaceInput(oreY, '#forge:ores/' + name)
    }
    orely(
        'aluminum',
        'immersiveengineering:ore_aluminum',
    )
    orely(
        'amethyst',
        'mysticalworld:amethyst_ore',
    )
    orely(
        'ametrine',
        'byg:ametrine_ore',
    )
    orely(
        'coal',
        'minecraft:coal_ore',
    )
    orely(
        'copper',
        'create:copper_ore',
    )
    orely(
        'diamond',
        'minecraft:diamond_ore',
    )
    orely(
        'emerald',
        'minecraft:emerald_ore',
    )
    orely(
        'fluorite',
        'mekanism:fluorite_ore',
    )
    orely(
        'gold',
        'minecraft:gold_ore',
    )
    orely(
        'iron',
        'minecraft:iron_ore',
    )
    orely(
        'lapis',
        'minecraft:lapis_ore',
    )
    orely(
        'lead',
        'eidolon:lead_ore',
    )
    orely(
        'nickel',
        'immersiveengineering:ore_nickel',
    )
    orely(
        'osmium',
        'mekanism:osmium_ore',
    )
    orely(
        'pendorite',
        'byg:pendorite_ore',
    )
    orely(
        'quartz',
        'minecraft:nether_quartz_ore',
    )
    orely(
        'quicksilver',
        'mysticalworld:quicksilver_ore',
    )
    orely(
        'redstone',
        'minecraft:redstone_ore',
    )
    orely(
        'sapphire',
        'iceandfire:sapphire_ore',
    )
    orely(
        'silver',
        'occultism:silver_ore',
    )
    orely(
        'tin',
        'mysticalworld:tin_ore',
    )
    orely(
        'uranium',
        'mekanism:uranium_ore',
    )
})
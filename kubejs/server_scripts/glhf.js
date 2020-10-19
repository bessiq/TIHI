// GLHF - stuff removed or remixed with datapacks

settings.logAddedRecipes = true
settings.logRemovedRecipes = true

// Hey, listen!
events.listen('recipes', function (event) {

    // too beaucoup
    event.replaceOutput({}, 'pneumaticcraft:wheat_flour', 'pamhc2foodcore:flouritem')
    event.replaceOutput({}, 'appliedenergistics2:flour', 'pamhc2foodcore:flouritem')
    event.replaceOutput({}, 'pamhc2foodcore:cheeseitem', 'rats:cheese')

    event.remove({ id: 'mekanism:crushing/biofuel/' })
    event.remove({ id: 'buildersaddition:iron_rod' })
})
// future farmers of minecraft

onEvent('recipes', event => {
    
    const yeehaw = (name, cropY, seedY, vegetableY, fruitY) => {
        event.replaceOutput('#forge:crops/' + name, cropY)
        event.replaceOutput('#forge:seeds/' + name, seedY)
        event.replaceOutput('#forge:vegetables/' + name, vegetableY)
        event.replaceOutput('#forge:fruits/' + name, fruitY)

        event.replaceInput(cropY, '#forge:crops/' + name)
        event.replaceInput(seedY, '#forge:seeds/' + name)
        event.replaceInput(vegetableY, '#forge:vegetables/' + name)
        event.replaceInput(fruitY, '#forge:fruits/' + name)
    }

    yeehaw(
        'barley',
        'simplefarming:barley',
        'simplefarming:barley_seeds',
    )
    yeehaw(
        'corn',
        'simplefarming:corn',
        'simplefarming:corn_seeds',
        'simplefarming:corn',
    )
    yeehaw(
        'onion',
        'simplefarming:onion',
        'simplefarming:onion_seeds',
        'simplefarming:onion',
    )
    yeehaw(
        'radish',
        'simplefarming:radish',
        'simplefarming:radish_seeds',
        'simplefarming:radish',
    )
    yeehaw(
        'rice',
        'simplefarming:rice',
        'simplefarming:rice_seeds',
    )
    yeehaw(
        'spinach',
        'simplefarming:spinach',
        'simplefarming:spinach_seeds',
        'simplefarming:spinach',
    )
    yeehaw(
        'pepper',
        'simplefarming:pepper',
        'simplefarming:pepper_seeds',
        'simplefarming:pepper',
    )
    yeehaw(
        'eggplant',
        'simplefarming:eggplant',
        'simplefarming:eggplant_seeds',
        'simplefarming:eggplant',
    )
    yeehaw(
        'peanut',
        'simplefarming:peanut',
        'simplefarming:peanut_seeds',
    )
    yeehaw(
        'strawberry',
        'simplefarming:strawberries',
    )
    yeehaw(
        'tomato',
        'simplefarming:tomato',
        'simplefarming:tomato_seeds',
        'simplefarming:tomato',
    )
})
$(document).ready(function(){

    var controller = new ScrollMagic.Controller({
        
    });
    

    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#one',
        triggerHook: 0,
    })
    .setPin('#one', {pushFollowers: false})
    .addTo(controller);

    var pinIntroScene2 = new ScrollMagic.Scene({
        triggerElement: '#two',
        triggerHook: 0,
    })
    .setPin('#pin', {pushFollowers: false})
    .addTo(controller);

    var pinIntroScene3 = new ScrollMagic.Scene({
        triggerElement: '#three',
        triggerHook: 0,
    })
    .setPin('#three', {pushFollowers: false})
    .addTo(controller);

    var pinIntroScene4 = new ScrollMagic.Scene({
        triggerElement: '#four',
        triggerHook: 0,
    })
    .setPin('#four', {pushFollowers: false})
    .addTo(controller);

    $('section').each(function(){

        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.9
        })
        
        .setClassToggle(this, 'fade-in')
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695',
            colorEnd: 'pink'
        })
        .addTo(controller);
    });
    
});
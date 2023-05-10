const {Howl} = require('howler');

// music_loop; SE_navigate; SE_winstate; SE_loseState; 12 sounds for Melis; 12 sounds for Diego
// Melis: slippers, backpack rustle, sterio, stepstool, hairdryer, cologne, umbrellas in vase, slam door, TV remote, thermostat, baseball mitt, car alarm
// Diego: smelly sock (growl?), shoes, flashlight, pillow *poof*, toilet paper, drink water, roomba, squeaky toy, bark, ahhh, tennis ball, mouse


const sfx = {

    background: new Howl({
        src: './audioFiles/background1.mp3',
        loop: true
    }),

    door: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    slippers: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    backpack_rustle: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    stereo: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    stepstool: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    hairdryer: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    cologne: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    umbrellas_in_vase: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    slam_door: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    tv_remote: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    thermostat: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    baseball_mitt: new Howl({
        src: './audioFiles/placeholder.wav'
    }),

    car_alarm: new Howl({
        src: './audioFiles/placeholder.wav'
    })

}

module.exports = {sfx};

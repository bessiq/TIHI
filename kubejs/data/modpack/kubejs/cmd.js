// cmd
events.listen('player.logged_in', function (event) {

    event.server.schedule(MINUTE * 5, event.server, function (callback) {
        //plz work idk
        callback.data.runCommand('/summon yeeter:tnt_yeeter ~ ~ ~ {CustomName:"\"Yee The Inevitable\"",ActiveEffects:[{Id:1,Amplifier:0,Duration:999999},{Id:10,Amplifier:0,Duration:999999},{Id:11,Amplifier:0,Duration:999999},{Id:21,Amplifier:0,Duration:999999}]}')
        callback.reschedule()
    })
})
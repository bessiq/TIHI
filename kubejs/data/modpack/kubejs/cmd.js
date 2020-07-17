// cmd
events.listen('player.logged_in', function (event) {

    event.server.schedule(MINUTE * 5, event.server, function (callback) {
        //plz work idk
        callback.data.runCommand('/summon yeeter:tnt_yeeter ~ ~ ~')
        callback.reschedule()
    })
})
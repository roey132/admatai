var countDownDate = new Date('Jun 30, 2022 00:00:00').getTime()

var myfunc = setInterval(function() {
    var now = new Date().getTime()
    var timeleft = countDownDate-now

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    const fixedhours = (''+hours).padStart(2,'0')
    const fixedminutes = (''+minutes).padStart(2,'0')
    const fixedseconds = (''+seconds).padStart(2,'0')
    
    var counter = `${days}:${fixedhours}:${fixedminutes}:${fixedseconds}`

    document.getElementById('timer').innerHTML = counter
},1000)
setInterval(function() {
    var b =JSON.parse(localStorage.getItem('x'));
    for(var i=0;i<b.length;i++){
        document.getElementById(b[i]).style.display='block';
    }
    localStorage.clear()
}, 2000);
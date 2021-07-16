var button = document.getElementById('button')
button.onclick = async () => {
    var helpr = prompt('What do you need help with?')
    fetch('/api', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            helpr
        })
    })
    var api = await fetch('/api')
    var json = await api.json()
    for (let i = 0; i < json.length; i++) {
        var root = document.createElement('div')
        var helpdiv = document.createElement('div')
        helpdiv.textContent = `help:${json[i].helpr}`
        root.append(helpdiv)
        document.body.append(root)
    }
}
window.onload = async () => {
    var api = await fetch('/api')
    var json = await api.json()
    for (let i = 0; i < json.length; i++) {
        var root = document.createElement('div')
        var helpdiv = document.createElement('div')
        helpdiv.textContent = `help:${json[i].helpr}`
        root.append(helpdiv)
        document.body.append(root)
    }
}
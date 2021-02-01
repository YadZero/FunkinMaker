// TOASTS MODULE

window.TOASTS = {
    create: function(mode, title, message, time) {
        let toastsList = document.getElementById('toastShower')
        let toastBackground = document.getElementById('toastBackground')
        if(!mode) mode = "neutral";
        if(!title) return new Error('No Title Assigned')
        if(!message) return new Error('No Message Assigned')
        let template = `
        <div class="title">${title}</div>
        <div class="message">${message}</div>
        `
        let toastDiv = document.createElement('div')
        toastDiv.classList = `toast ${mode}`
        toastDiv.innerHTML = template;
        setTimeout(() => {
            toastsList.prepend(toastDiv)
            toastBackground.classList.add('visible')
            setTimeout(() => {
                toastDiv.classList = `toast show ${mode}`
                setTimeout(() => {
                    toastDiv.classList = `toast ${mode}`
                    setTimeout(() => {
                        toastDiv.remove()
                        toastBackground.classList.remove('visible')
                    }, 520);
                }, time * 1000);
            }, 200);
        }, 100);
    },
    createChanger: function(mode, mode2, title, message, time, changeTime) {
        let toastsList = document.getElementById('toastShower')
        let toastBackground = document.getElementById('toastBackground')
        if(!mode) mode = "neutral";
        if(!title) return new Error('No Title Assigned')
        if(!message) return new Error('No Message Assigned')
        let template = `
        <div class="title">${title}</div>
        <div class="message">${message}</div>
        `
        let toastDiv = document.createElement('div')
        toastDiv.classList = `toast ${mode}`
        toastDiv.innerHTML = template;
        setTimeout(() => {
            toastsList.prepend(toastDiv)
            toastBackground.classList.add('visible')
            setTimeout(() => {
                toastDiv.classList = `toast show ${mode}`
                setTimeout(() => {
                    toastDiv.classList = `toast show ${mode2}`
                }, changeTime * 1000);
                setTimeout(() => {
                    toastDiv.classList = `toast ${mode}`
                    setTimeout(() => {
                        toastDiv.remove()
                        toastBackground.classList.remove('visible')
                    }, 520);
                }, time * 1000);
            }, 200);
        }, 100);
    }
}
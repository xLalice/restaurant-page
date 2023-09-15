const createInitialPage = (function() {
    const content = document.getElementById("content")

    function clearContent() {
        content.innerHTML = '';
    }

    function addHeader(){
        const header = document.createElement("div")
        header.id = "header"
        
        const navbar = document.createElement('navbar');
        const title = document.createElement("h1")
        title.textContent = "Alchemy Bar"

        header.appendChild(title)
        header.appendChild(navbar)
        content.appendChild(header)
    }

    return {
        addHeader
    }

})()

export {createInitialPage};
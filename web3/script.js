/* 
-   File: script.js
*/

window.addEventListener('load', () => {

    let navlink = document.querySelectorAll('#nav a')

    let donate = document.getElementById('donation')

    donate.style.display = 'none'
    
    function navActive(index) {
        navlink.forEach((link) => link.style.color = 'var(--dark0)')
        navlink[index].style.color = 'var(--theme2)'

        if (navlink[index].innerText.toLowerCase() === 'support') {
            donate.style.display = 'block'
        } else {
            donate.style.display = 'none'
        }
    }

    navlink.forEach((link, index) => {
        link.onclick = () => navActive(index)
    })

    navActive(0)

    document.title = `Mayank`
})

/* developed by mayank | ( https://github.com/MayankDevil ) */
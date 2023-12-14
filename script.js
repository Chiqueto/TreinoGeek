function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')


    const img = document.querySelector("#profile img")


    if(html.classList.contains('light')) {
        img.setAttribute('src','./assets/avatar-light.png') & img.setAttribute('alt','hinata sério iluminado')
    } else {
        img.setAttribute('src','./assets/avatar-dark.png') & img.setAttribute('alt','hinata baddas full dark')
        
    }
    
    
}


/*
    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else{
        html.classList.add('light')
    }
*/
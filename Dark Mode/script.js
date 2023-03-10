let icon = document.getElementById('icon')

icon.onclick = function(){
    document.body.classList.toggle('dark-theme');

    let mode = icon.getAttribute('title')
    if(mode == 'Dark Mode'){
        icon.setAttribute('title',"Light Mode")
    }else{
        icon.setAttribute('title',"Dark Mode")

    }
}
document.querySelector('.fa-eye').addEventListener('click',()=>{
    let showPass = document.getElementById('pass')
    if(showPass.type == 'password'){
        showPass.type = 'text'
    }else{
        showPass.type = 'password'

    }
})
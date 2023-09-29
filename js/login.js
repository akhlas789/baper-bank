document.getElementById('btn-submit').addEventListener('click',function(){
    const emailFild = document.getElementById ('user-email')
    const email = emailFild.value;

    const passFild = document.getElementById('user-password')
    const password = passFild.value;

    if(email === 'shron@gmail.com' && password === 'shron'){
        window.location.href = 'bank.html'
    }else{
        alert('invalid user')
    }
})
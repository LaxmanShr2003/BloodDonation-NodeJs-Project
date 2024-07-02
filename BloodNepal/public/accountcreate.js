document.getElementById('register').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const username=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirm_password=document.getElementById('confirm-password').value;

    const response = await fetch('/accountcreate',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
    },
    body:JSON.stringify({username,email,password,confirm_password})
});
const result = await response.text();
alert(result);
})
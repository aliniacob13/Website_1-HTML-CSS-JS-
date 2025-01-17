window.onload=function(){
    const loginForm=document.getElementById("loginForm");
    const signupButton=document.getElementById("signupButton");

    const dateContainer = document.getElementById('dateContainer');
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateContainer.textContent = currentDate.toLocaleDateString(undefined, options);
    function login_pressed(event){
        event.preventDefault(); 
        
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        console.log('Username:', username);
        console.log('Password:', password);
        let checkpassword=localStorage.getItem(username);
        //alert(username);
        //alert(password);
        if (checkpassword==null){
            alert('Username does not exist');
        }
        else if (checkpassword!==password){
            alert('Incorrect password');
        }
        else{
            alert('Login successful');
            window.location.href = 'form.html';
        }
    }
    loginForm.addEventListener("submit", function(){
        login_pressed(event);
    });
    signupButton.addEventListener('click', function () {
        window.location.href = 'signup.html';
    });
}
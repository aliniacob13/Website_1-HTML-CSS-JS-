window.onload = function () {
    const signupForm = document.getElementById('signupForm');
    const loginButton = document.getElementById('loginButton');

    const dateContainer = document.getElementById('dateContainer');
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateContainer.textContent = currentDate.toLocaleDateString(undefined, options);

    function add_check(event) {
        event.preventDefault();
        const newUsername = document.getElementById('email').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const confirmPasswordInput = document.getElementById('confirmPassword');
        
        if (newPassword !== confirmPassword) 
            alert('Passwords do not match');
        
        else if (localStorage.getItem(newUsername)) {
                alert('Username already exists');
            } else {
                //alert(newUsername);
                //alert(newPassword);
                localStorage.setItem(newUsername, newPassword);
                alert('Sign-up successful! You can now log in.');
                window.location.href = 'login.html';
                }
        }
        signupForm.addEventListener('submit', function (event) {
            add_check(event);
        });


        loginButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }
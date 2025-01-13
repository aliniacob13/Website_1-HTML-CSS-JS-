window.onload=function(){
    const feedbackForm = document.getElementsByClassName('div3')[0];
    let x = document.getElementById("rating");
    function afisare_valoare(value) {
    document.getElementById('rating_value').textContent=event.currentTarget.value;
    }
    x.addEventListener("input", function (){document.getElementById('rating_value').textContent=event.currentTarget.value;})

    function formular(event){
        event.preventDefault();

        const character = document.getElementById('character').value;
        const music = document.getElementById('music').value;
        const ending = document.getElementById('ending').value;
        const recommend = document.querySelector('input[name="recommend"]:checked').value;
        const rating = document.getElementById('rating').value;
        const email = document.getElementById('email').value;
        const sendEmail = document.getElementById('sendEmail').checked;

        const characterPattern = /^(mia|mia dolan|Mia dolan|Mia Dolan|seb|Seb|sebastian wilder|Sebastian wilder|sebastian Wilder|Sebastian Wilder)$/i;

        if (!characterPattern.test(character)) {
            alert('Invalid character name. Please enter a valid name.');
            return;
        }

        const feedback = {
            character: character,
            music: music,
            ending: ending,
            recommend: recommend,
            rating: rating,
            email: email
        };

        localStorage.setItem('feedback', JSON.stringify(feedback));
        if(!sendEmail)
        {
            alert('Data submitted');
            event.stopPropagation();
        }
        alert(`Data submitted and sent to ${email}`);
    }
    feedbackForm.addEventListener('submit', function(){
        formular(event);
    });
    const experienceForm = document.getElementById('experienceForm');
    function opinion(event){
        event.preventDefault();
        const easeOfUse = document.getElementById('easeOfUse').value;
        const design = document.getElementById('design').value;
        const comments = document.getElementById('comments').value;

        const experienceFeedback = {
            easeOfUse: easeOfUse,
            design: design,
            comments: comments
        };

        localStorage.setItem('experienceFeedback', JSON.stringify(experienceFeedback));
        alert('Thank you for filling this form! I hope you had a great time while navigating on my page!');
    }
    experienceForm.addEventListener('submit', function(){
        opinion(event);
    });

    const designInput = document.getElementById('design');
    const designValue = document.getElementById('design_value');
    function afisare_valoare_1(value){
        document.getElementById('design_value').textContent = value;
    }
    designInput.addEventListener('input', function() {
        afisare_valoare_1(designInput.value);
    });
    /*
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click',function(){
        window.location.href = 'login.html';
    })
    */
   const body=document.querySelector('body');
   const information=window.getComputedStyle(body,null);
   //console.log(information.getPropertyValue('width'));
   const div3=document.querySelector('.div3');
   const div4=document.querySelector('.div4');
   function adjustLayout() {
   var body=document.querySelector('body');
   var information=window.getComputedStyle(body,null);
   var bodyWidth=information.getPropertyValue('width').replace('px','');
   //console.log(bodyWidth);
    if (bodyWidth >= 250 && bodyWidth <= 900) {
        div3.appendChild(div4);
    } else {
        document.querySelector('.container').appendChild(div4);
    }
    }
    window.addEventListener('resize', function(){
        adjustLayout();
    });
}
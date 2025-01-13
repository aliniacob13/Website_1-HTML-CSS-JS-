window.onload = function () {
document.getElementById("title").addEventListener("click", function() {
    window.location.href= "index1.html";
});
const existingDiv = document.querySelector('.one');
const displayDiv = document.querySelector('.four');
const div2=document.querySelector('.two');
div2.style.paddingTop="5%";
actors=["Emma Stone","Ryan Gosling","J.K.Simmons","John Legend"];
const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    tooltip.style.color = 'white';
    tooltip.style.padding = '10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.display = 'none';
    tooltip.style.fontSize = '1.5em'; 
    document.body.appendChild(tooltip);

    actors = ["Emma Stone", "Ryan Gosling", "J.K.Simmons", "John Legend"];
    for (let i = 1; i <= 4; i++) {
        const img = document.createElement('img');
        img.src = `POZE/CAST/image${i}.jpg`;
        img.alt = `image${i}`;
        img.className = "cast_img";
        //img.title = actors[i - 1];
        img.setAttribute('data-actor', actors[i - 1]);
        existingDiv.appendChild(img);

        
        img.addEventListener('mouseover', (event) => {
            const actorName = event.target.getAttribute('data-actor');
            tooltip.innerHTML = actorName;
            tooltip.style.display = 'block';
        });

        img.addEventListener('mousemove', (event) => {
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });

        img.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });}
displayDiv.innerHTML = `<a>Miles Teller and Emma Watson were originally slated to star in the leading roles. Watson dropped out to honor her commitments to Disney's live-action Beauty and the Beast remake.<br> Coincidentally, Gosling turned down the Beast role in Beauty and the Beast in favor of La La Land. Chazelle subsequently decided to make his characters somewhat older, with experience in struggling to make their dreams, rather than younger newcomers just arriving in Los Angeles.

Emma Stone plays Mia, an aspiring actress in Los Angeles. Stone has loved musicals since she saw Les Misérables when she was eight years old. She said "bursting into song has always been a real dream of mine", and her favorite film is the 1931 Charlie Chaplin romantic comedy City Lights.</a>`;
existingDiv.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        const img = event.target;
        const identifier = img.alt;

        
        fetch('cast.json').then(function(response){
            return response.json();
        }).then(function(obj){
            const info=obj[identifier];

                
                displayDiv.innerHTML = `
                    <h2>${info.character}</h2>
                    <p>${info.description}</p>
                    <h3>Awards and Nominations:</h3>
                    <ul>${info.awards.map(award => `<li>${award}</li>`).join('')}</ul>
                    <p><strong>Fun Fact:</strong> ${info.funFact}</p>
                `;

           }).catch(function(error){
            console.error('Error fetching information:', error);
           });
    }
});

}

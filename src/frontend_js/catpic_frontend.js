const catbtn = document.querySelector('#cat_image');

catbtn.addEventListener('click', function(e) {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            catbtn.src = data[0].url;
        })
    });
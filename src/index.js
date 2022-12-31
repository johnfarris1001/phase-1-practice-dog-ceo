const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json.message));

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json.message));

    const select = document.querySelector("select")
    select.addEventListener('change', () => {
        filterBreeds(select.value);
    })
});


function renderImages(images) {
    const container = document.getElementById('dog-image-container');

    for (let image of images) {
        const img = document.createElement('img')
        img.src = image
        container.appendChild(img)
    }
}

function renderBreeds(breeds) {
    const list = document.querySelector('ul');

    for (let breed in breeds) {
        if (breeds[breed].length === 0) {
            const li = document.createElement('li');
            li.textContent = breed;
            list.appendChild(li);

            li.addEventListener('click', () => {
                li.style.color = 'blue';
            })
        } else {
            for (let brd of breeds[breed]) {
                const li = document.createElement('li');
                li.textContent = brd + ' ' + breed;
                list.appendChild(li);

                li.addEventListener('click', () => {
                    li.style.color = 'blue';
                })
            }
        }
    }
}

function filterBreeds(letter) {
    const list = document.querySelectorAll('li');
    for (let item of list) {
        if (item.textContent[0] === letter) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
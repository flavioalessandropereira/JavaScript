//const BASE_URL = 'https://thatcopy.pw/catapi/rest';


const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const gatoBtn = document.getElementById('change-cat');

const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then ((res) => res.json())
        .catch ((e) => console.log(e))
        return data.url;
 

    
};

const loadImg = async () => {
    const gatoImg = document.getElementById('cat');
    gatoImg.src = await getCats();
};

gatoBtn.addEventListener ('click', loadImg);

loadImg();

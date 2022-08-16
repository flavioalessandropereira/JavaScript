//const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const BASE_URL = 'https://aws.random.cat/meow';
const catBtn = document.getElementById('change-cat')

const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        
        .catch((e) => console.log(e)); 

    return data.webpurl;
};

const loadImg = async () => {
	const img = document.getElementById('cat');
	img.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();
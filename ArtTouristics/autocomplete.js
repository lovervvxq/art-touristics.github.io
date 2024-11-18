let avaiableKeyword = [
    'Tours Around Armenia and Georgia',
    'Rest Abroad',
    'Transport Services',
    'Air Tickets',
    'Events',
    'Visa Services',
    'Услуги виза',
    'Мероприятия',
    'Авиабилеты',
    'Транспортные услуги',
    'Отдых за границей',
    'Туры в Армении и Грузии',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = avaiableKeyword.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');
    const resultBox = document.querySelector('.result-box');

    const updateResultBoxWidth = () => {
        resultBox.style.width = `${searchBox.offsetWidth}px`;
    };

    // Adjust the width initially
    updateResultBoxWidth();


    window.addEventListener('resize', updateResultBoxWidth);
});

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}
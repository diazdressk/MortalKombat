// 0
// const Scorpion = {
//   name: 'Scorpion',
//   hp: 150,
//   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
//   weapon: ['knife', 'mk16'],
//   attack: function () {
//     console.log(this.name + 'Fight...');
//   }
// };

// const Subzero = {
//   name: 'Subzero',
//   hp: 180,
//   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
//   weapon: ['sword', 'ak47'],
//   attack: function () {
//     console.log(this.name + 'Fight...');
//   }
// };

// 1
// function createPlayer() {
//   const player1 = document.createElement('div');
//   player1.classList.add('player1');
//   const root = document.querySelector('.root');
//   root.appendChild(player1);

//   const progressbar = document.createElement('div');
//   progressbar.classList.add('progressbar');
//   player1.appendChild(progressbar);

//   const character = document.createElement('div');
//   character.classList.add('character');
//   player1.appendChild(character);

//   const life = document.createElement('div');
//   life.classList.add('life');
//   life.style.width = '100%';
//   progressbar.appendChild(life);

//   const name = document.createElement('div');
//   name.classList.add('name');
//   name.innerText = 'Scorpion';
//   progressbar.appendChild(name);

//   const img = document.createElement('img');
//   img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
//   character.appendChild(img);
// }

// createPlayer();

// 2
// function createPlayer(player, name1, hp) {
//   const player1 = document.createElement('div');
//   player1.classList.add(player);
//   const root = document.querySelector('.root');
//   root.appendChild(player1);

//   const progressbar = document.createElement('div');
//   progressbar.classList.add('progressbar');
//   player1.appendChild(progressbar);

//   const character = document.createElement('div');
//   character.classList.add('character');
//   player1.appendChild(character);

//   const life = document.createElement('div');
//   life.classList.add('life');
//   life.style.width = `${hp}%`;
//   progressbar.appendChild(life);

//   const name = document.createElement('div');
//   name.classList.add('name');
//   name.innerText = name1;
//   progressbar.appendChild(name);

//   const img = document.createElement('img');
//   img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
//   character.appendChild(img);
// };

// const player1 = createPlayer('player1', 'SCORPION', 50);
// const player2 = createPlayer('player2', 'SUB-ZERO', 80);

// const arenas = document.querySelector('.arenas');
// arenas.appendChild(player1);
// arenas.appendChild(player2);

// 3
const scorpion = {
    name: 'Scorpion',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'mk16'],
    attack: function () {
        console.log(this.name + 'Fight...');
    },
};

const subzero = {
    name: 'Subzero',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword', 'ak47'],
    attack: function () {
        console.log(this.name + 'Fight...');
    },
};

function createPlayer(player, $name) {
    const arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
    $player.classList.add(player);
    const root = document.querySelector('.root');
    root.appendChild($player);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    $player.appendChild(progressbar);

    const character = document.createElement('div');
    character.classList.add('character');
    $player.appendChild(character);

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = `${$name.hp}%`;
    progressbar.appendChild(life);

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = $name.name;
    progressbar.appendChild(name);

    const img = document.createElement('img');
    img.src = `${$name.img}`;
    character.appendChild(img);

    arenas.appendChild($player);
}

createPlayer('player1', scorpion);
createPlayer('player2', subzero);

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const Scorpion = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'mk16'],
    attack: function (name) {
        console.log(name + 'Fight...');
    },
};

const Subzero = {
    player: 2,
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword', 'ak47'],
    attack: function (name) {
        console.log(name + 'Fight...');
    },
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

// function playerLose(name) {
//     const $loseTitle = createElement('div', 'loseTitle');//div с классом loseTitle
//     $loseTitle.innerText = name + ' lose';

//     return $loseTitle;
// }

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');//div с классом winTitle
    $winTitle.innerText = name + ' wins';

    return $winTitle;
}


function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = player.hp + '%';
        $randomButton.disabled = true;
    }
}

$randomButton.addEventListener('click', function() {
    changeHP(Scorpion);
    changeHP(Subzero);

    if (Scorpion.hp === 0 || Subzero.hp === 0) {
        if (Scorpion.hp > Subzero.hp) {
            $arenas.appendChild(playerWin(Scorpion.name));
        } else {
            $arenas.appendChild(playerWin(Subzero.name));
        }
    }
});

$arenas.appendChild(createPlayer(Scorpion));
$arenas.appendChild(createPlayer(Subzero));


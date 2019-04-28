// user chooses player
//each player is an object in an array

/**** Player Variables ****/
var player = {
    health: 0,
    power: 20,
    getAttack: function () {
        return Math.floor(Math.random() * this.power);
    }

}

var opponent = {
    health: 0,
    power: 20,
    getAttack: function () {
        return Math.floor(Math.random() * this.power);
    }
}

var characterData = [{
        name: $('.char1'),
        health: 150,
        count: 0

    },

    {
        name: $('.char2'),
        health: 20,
        count: 0,

    },

    {
        name: $('.char3'),
        health: 170,
        count: 0,

    },

    {
        name: $('.char4'),
        health: 130,
        count: 0,

    }
];




var moveable = true;


//Disable button
var disableBtn = true;

var prompter = $('#prompter');




$(document).ready(function () {

    characterData[0].name.on('click', function () {
        if (moveable === true) {

            $(this).addClass('hero');

            $('.health-1').addClass('player-health');

            characterData[0].count++;
            moveable = false;
            player.health = characterData[0].health;

            enemyGenerator(characterData);

        } else if (moveable === false && characterData[0].count === 0) {
            //Enables attack button after defender is selected
            fightPrep($('.char1'));

            $('.health-1').addClass('opponent-health');
            



        }

    });

    characterData[1].name.on('click', function () {
        if (moveable === true) {
            $(this).addClass('hero');
            $('.health-2').addClass('player-health');
            characterData[1].count++;
            moveable = false;
            player.health = characterData[1].health;



            enemyGenerator(characterData);

        } else if (moveable === false && characterData[1].count === 0) {

            opponent.health = characterData[1].health;


            fightPrep($('.char2'));
            $('.health-2').addClass('opponent-health');

        }

    });

    characterData[2].name.on('click', function () {
        if (moveable === true) {
            $(this).addClass('hero');
            $('.health-3').addClass('player-health');
            characterData[2].count++;
            player.health = characterData[2].health;
            //Changes to false so Main character wont move to enemies area
            moveable = false;

            // adds the other characters to enemies section
            enemyGenerator(characterData);
        } else if (moveable === false && characterData[2].count === 0) {


            fightPrep($('.char3'));
            $('.health-3').addClass('opponent-health');


        }

    });

    characterData[3].name.on('click', function () {
        if (moveable === true) {
            $(this).addClass('hero');
            $('.health-4').addClass('player-health');
            player.health = characterData[3].health;

            characterData[3].count++;

            moveable = false;

            enemyGenerator(characterData);
        } else if (moveable === false && characterData[3].count === 0) {

            fightPrep($('.char4'));
            $('.health-4').addClass('opponent-health');

        }

    });


});





//**** Player Attack Functions ****/
function attack() {
    var playerAttack = player.getAttack();

    opponent.health -= playerAttack;

    printToScreen();

    if (gameOver(opponent.health)) {

        $('#prompter').html("Player has won the fight, Please Choose You're next Opponent");

        offTheIsland();

        return;
    }

    attackButton.disabled = true;


    $('#prompter').html("<h3>Your Opponent is going to strike</h3>");


    setTimeout(function () {
        var opponentAttack = opponent.getAttack();

        player.health -= opponentAttack;

        printToScreen();

        $('#prompter').html('Opponent inflicted ' + opponentAttack + ' points of your health!');

        if (gameOver(player.health)) {
            $('#prompter').html("opponent has won the fight");
            return;
        }

        attackButton.disabled = false;

    }, 1500);



};

function gameOver(health) {
    return health <= 0;
    //returns boolean

}

function offTheIsland() {

    $('.defender').remove();

}


function printToScreen() {

    $('.opponent-health').html('<p class="card-title opponent-health">' + opponent.health + '</p>');

    $('.player-health').html('<p class="card-title opponent-health">' + player.health + '</p>');
}




function disableClick() {
    $(".char4").off();
    $(".char1").off();
    $(".char2").off();
    $(".char3").off();

}

function fightPrep(char) {
    disableBtn = false;
    $(char).removeClass("col-md-3");
    $(".hide").removeClass("hide");
    $('.versus').html('<h2>VS</h2>');
    $(char).appendTo('.defenderBox').addClass("defender");
    $('#prompter').html('<h3 id="prompter">FIGHT!</h3>');

    $('.hero').append('<button class="btn btn-primary" type="button" id="attack-btn" onclick="attack()">Attack</button>').css("box-sizing", "border-box");


}

function enemyGenerator(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].count === 0) {
            arr[i].name.appendTo('.enemiesBox');
        }
    }
    $('#prompter').html('<h3 id="prompter">Pick Your Enemy Below:</h3>');
}














// Array of character objects

//generate players to choose from


//selected character moves to player section
//set as current player


//the rest are enemies...moves to enemies section
//set as choosable enemies
//if not selected, move down to enemies div




//player picks enemy to battle

//attack phase



//if player loses all points, loses, resets game




//if player beats enemy, then pick another opponent



//if player beats all enemies...wins
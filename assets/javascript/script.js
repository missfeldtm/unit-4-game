$(document).ready(function () {


    // user chooses player
    //each player is an object in an array

    /**** Player Variables ****/

    var characters = [{
            name: "kylo",
            health: 150,
            attack: 20,
            img: "assets/images/kylo.jpeg"
        },

        {
            name: 'rey',
            health: 200,
            attack: 20,
            img: "assets/images/rey.jpg"
        },

        {
            name: 'han',
            health: 170,
            attack: 20,
            img: "assets/images/hanSolo.jpg"
        },

        {
            name: 'luke',
            health: 130,
            attack: 20,
            img: "assets/images/luke.jpg"
        }
    ];


    var char1Count = true;
   

    //Counter
    var kyloCount = 0;
    var reyCount = 0;
    var hanCount = 0;
    var lukeCount = 0;

    //Disable button
    var disableBtn = true;
    /*When character 1 is clicked move the
      other characters to enimes section*/

    $('.char1').on('click', function () {
        if (char1Count === true) {
            $(this).addClass('hero');
            kyloCount++;
            //Changes to false so Main character wont move to enemies area
            char1Count = false;

            // adds the other characters to enemies section
            $('.char2').appendTo('.enemiesBox');
            $('.char3').appendTo('.enemiesBox');
            $('.char4').appendTo('.enemiesBox');

            $('#prompter').html('<h3 id="prompter">Pick Your Enemy Below:</h3>');

        } else if (char1Count === false && kyloCount === 0) {
            //Enables attack button after defender is selected
            reyCount++;
            hanCount++;
            lukeCount++;
            disableBtn = false;
            $(".char1").removeClass("col-md-3");
            $(".hide").removeClass("hide");
            $('.versus').html('<h2>VS</h2>');
            $('.char1').appendTo('.defenderBox').addClass("def");
            $('#prompter').html('<h3 id="prompter">FIGHT!</h3>');


        }

    });

    $('.char2').on('click', function () {
        if (char1Count === true) {
            $(this).addClass('hero');
            reyCount++;
            //Changes to false so Main character wont move to enemies area
            char1Count = false;

            // adds the other characters to enemies section
            $('.char1').appendTo('.enemiesBox');
            $('.char3').appendTo('.enemiesBox');
            $('.char4').appendTo('.enemiesBox');

            $('#prompter').html('<h3 id="prompter">Pick Your Enemy Below:</h3>');
        } else if (char1Count === false && reyCount === 0) {
            //Enables attack button after defender is selected
            reyCount++;
            hanCount++;
            lukeCount++;
            disableBtn = false;
            $(".char2").removeClass("col-md-3");
            $(".hide").removeClass("hide");
            $('.versus').html('<h2>VS</h2>');
            $('.char2').appendTo('.defenderBox').addClass('def');

        }

    });
    $('.char3').on('click', function () {
        if (char1Count === true) {
            $(this).addClass('hero');
            reyCount++;
            //Changes to false so Main character wont move to enemies area
            char1Count = false;

            // adds the other characters to enemies section
            $('.char1').appendTo('.enemiesBox');
            $('.char2').appendTo('.enemiesBox');
            $('.char4').appendTo('.enemiesBox');

            $('#prompter').html('<h3 id="prompter">Pick Your Enemy Below:</h3>');
        } else if (char1Count === false && hanCount === 0) {
            //Enables attack button after defender is selected
            reyCount++;
            hanCount++;
            lukeCount++;
            disableBtn = false;
            $(".char3").removeClass("col-md-3");
            $(".hide").removeClass("hide");
            $('.versus').html('<h2>VS</h2>');
            $('.char3').appendTo('.defenderBox').addClass('def');

        }

    });
    $('.char4').on('click', function () {
        if (char1Count === true) {
            $(this).addClass('hero');
            reyCount++;
            //Changes to false so Main character wont move to enemies area
            char1Count = false;

            // adds the other characters to enemies section
            $('.char1').appendTo('.enemiesBox');
            $('.char2').appendTo('.enemiesBox');
            $('.char3').appendTo('.enemiesBox');

            $('#prompter').html('<h3 id="prompter">Pick Your Enemy Below:</h3>');
        } else if (char1Count === false && lukeCount === 0) {

            //Enables attack button after defender is selected
            reyCount++;
            hanCount++;
            lukeCount++;
            disableBtn = false;

            $(".char4").removeClass("col-md-3");
            $(".hide").removeClass("hide");
            $('.versus').html('<h2>VS</h2>');
            $('.char4').appendTo('.defenderBox').addClass('def');

        }

    });










});











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



/*   function selectChar () {


       var charDiv = $("<div class='character' data-name=" + char.name + "'>");

       var charName = $("<div class='character-name' >").text(char.name);

       var charImg = $("<img alt='image' class='character-image'>").attr("src", char.img);

       var charHealth = $("<div class='character-health'>").text(char.health);

       charDiv.append(charName).append(charImg).append(charHealth);

       $(area).append(charDiv).append(charDiv);

   };


   */



/*  <div class="col-md-3">
      <div class="card text-center char-opt" id="kylo-ren" >
          <h5 class="card-title">Kylo Ren</h5>
          <img class="card-img-top" src="assets/images/kylo.jpeg" alt="kyloRen">
          <div class="card-body">
              <p class="card-title">150</p>
          </div>
      </div>
  </div>

  */
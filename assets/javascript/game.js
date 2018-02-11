<script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>

$(document).ready(function () { 
    
    $("#computerChoice").text(targetNum);
    var counter = 0;
    var wins = 0;
    var losses=0;
//Creates an array of numbers that can be used as the target number

var targetNum = [53, 57, 65, 67, 73, 77, 79, 83, 89, 91, 92, 101]
//Computer chooses a number from targetNum array and displays it

 
//Creates an array of numbers 1-12 that are to be assigned to the crystals
var crysNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//Sets a value of 1-12 (chosen randomly) for each image. Cannot equal another value assigned.
for (var i = 0; i < targetNum.length; i++) {
    var gem= $("button");
    gem.attr("data-gemvalue", crysNum[Math.floor(Math.random() * crysNum.length)]);
    $("#diamond").append("button");

}

//Creates a counter that tracks the values of each image.
var counter = 0

//When user clicks an image, the value of that image increases the counter by that value.

$(".crystal").on("click", function () {
    
    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);

    counter += gemValue;

    $("#targetscore").html("Your current score: " + counter + "<br>" +
                            "Wins: " + wins + "<br>" +
                            "Losses: " + losses)
//If the values clicked add up to === counter value, then win message appears and game resets!

    if (counter === targetNumber) {
      wins++;
      counter = 0;
      alert("You win!");
      $("#userclickScore").html("Your current score: " + counter + "<br>" +
      "Wins: " + wins + "<br>" +
      "Losses: " + losses)
//If the values clicked > counter value, then loss message appears and game resets.

    } else if (counter >= targetNumber) {
      losses++;
      counter = 0; 
      alert("You lose!!");
      $("#userclickScore").html("Your current score: " + counter + "<br>" +
      "Wins: " + wins + "<br>" +
      "Losses: " + losses);
    }
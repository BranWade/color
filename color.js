var colors = generateRandomColors(6)
  

 var squares = document.querySelectorAll(".square");
 var pickedColor= pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");

  colorDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++){
  	//add initial colors to squares
  	squares[i].style.background = colors[i]

  	//add click listeners to squares
  	squares[i].addEventListener("click", function(){
  		//grab color of cliked square
  		var clickedColor = this.style.background;
  		// compare color to pickedColor
  		console.log(clickedColor, pickedColor);
  		if(clickedColor === pickedColor){
  			messageDisplay.textContent = "Correct";
  			changeColors(clickedColor);
  			h1.style.background = clickedColor;
  		} else {
  			this.style.background = "#232323";
  			messageDisplay.textContent = "Try Again"
  		}

  	});
  }


  function changeColors(color){
  	//loop through all squares
  	for(var i = 0; i < squares.length; i++){
  		squares[i].style.background = color;
  	}
  	//change each to match the correct color
  }


  function pickColor(){
  	var random = Math.floor(Math.random() * colors.length);
  	return colors[random];
  }

  function generateRandomColors(num){
  	//make an array
  	var arr = []
  	//add num random color to array
  	for (var i = 0; i < num; i++){
  	  	//get random color and push into arr
		arr.push(randomColor())
}
  		//return that array
  		return arr;
  }
function randomColor(){
//pick a RGB from 0 - 255
 var r = Math.floor(Math.random() * 256 );
 var g = Math.floor(Math.random() * 256 );
 var b = Math.floor(Math.random() * 256 );
 return "rgb(" + r + ", " + g + ", " + b + ")";
}

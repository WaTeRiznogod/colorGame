var numSquares=6;
colors = generateRandomColor(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();

var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
 var messageDisplay = document.querySelector("#message");
 var h1=document.querySelector("h1");
 
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector(".easyBtn");
var hardBtn= document.querySelector(".hardBtn");
easyBtn.addEventListener("click",function () {
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display ="none";
        }
    }
    h1.style.background="steelblue";

})
hardBtn.addEventListener("click", function () {
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        
            squares[i].style.background = colors[i];
            squares[i].style.display="block";
        
    }
    h1.style.background = "steelblue";

})

resetButton.addEventListener("click", function(){
    messageDisplay.textContent = "";
    colors=generateRandomColor(numSquares);
    pickedColor =pickColor();
    this.textContent = "New Colors";

    colorDisplay.textContent = pickedColor;

    for(var i=0;i<colors.length;i++)
    {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
})

for(var i=0; i<squares.length; i++)
{
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click",function() {
        var clickedColor=this.style.background;

        if(clickedColor==pickedColor){
            messageDisplay.textContent ="Correct";
            changeColors(pickedColor);
            h1.style.background= pickedColor;
            resetButton.textContent ="Play Again!";
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent="Try Again";
        }
    })
}
function changeColors(color) {
    for(var i=0; i<squares.length ; i++){
        squares[i].style.background = color;
    }
}
function pickColor() {
     var random=Math.floor(Math.random() * colors.length);
    return colors[random];

}
function generateRandomColor(num) {
    var arr =[];
    for(var i=0; i<num ; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    var r=Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r +", "+ g + ", "+b +")";

}

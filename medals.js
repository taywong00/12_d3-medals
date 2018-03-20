// Charles Weng and Taylor Wong
// SoftDev2 pd7
// K12 -- Medallions ....of Data!
// 2018-03-19

var pic = d3.select("svg");
var switchButton = document.getElementById("switch");
var country = document.getElementById("country"); //country name

var curr = true; //toggle between countries
var width = pic.attr('width');
console.log('width ', width);
var height = pic.attr('height');
console.log('height', height);


var norway = [14, 14, 11]; //norway: 14 gold, 14 silver, 11 bronze
var usa = [9, 8, 6]; //usa: 9 gold, 8 silver, 6 bronze


//create dot with all attributes
//note: medalNum * 10 = radius of circle
var drawDot = function(cx, cy, medalNum, color) {
  var dot = pic.append('circle').attr('cx', cx).attr('cy', cy).attr('r', medalNum * 5).attr('fill', color);

}

//display the dots (trying to stay DRY: Dont Repeat Yourself)
var display = function(country) {
  drawDot(width * 1/2, height * 1/4, country[0], '#FFD700'); //gold
  drawDot(width * 1/4, height * 1/2, country[1], '#C0C0C0'); //silver
  drawDot(width * 3/4, height * 3/4, country[2], '#CD7F32'); //bronze
}

var switchCountries = function(e) {
  pic.selectAll('*').remove();//clear
  if (curr) { //display norway
    display(norway);
    country.innerHTML = 'Country: Norway';
    console.log('swtch to norwy');
  }
  else {//display usa
    display(usa)
    country.innerHTML = 'Country: USA';
    console.log('swictch to usa');
  }
  curr = !curr;
}

switchButton.addEventListener('click', switchCountries);

var opacityValue = 1;
var brightnessValue = 1;
var blurValue = 0;
var contrastValue = 1;
var hueValue = 0;
var invertValue = 0;
var rotateValue = 0;
var rotatexValue = 0;
var rotateyValue = 0;
var scaleValue = 1;

// OPACITY
opacityInput.addEventListener('input', function()
{
  opacityValue = parseFloat(this.value.match(/\d+/)[0]) / 100;
  logo.style.opacity = opacityValue;
});

// BRIGHTNESS
brightnessInput.addEventListener('input', function()
{
  brightnessValue = parseFloat(this.value.match(/\d+/)[0]) / 100;
  logo.style.filter = "brightness(" + brightnessValue + ")";
  shadow.style.filter = "brightness(" + brightnessValue + ")";
});

// BLUR
blurInput.addEventListener('input', function()
{
  blurValue = parseFloat(this.value.match(/\d+/)[0]);
  logo.style.filter = "blur(" + blurValue + "px)";
  shadow.style.filter = "blur(" + blurValue + "px)";
});

// CONTRAST
contrastInput.addEventListener('input', function()
{
  contrastValue = parseFloat(this.value.match(/\d+/)[0]) / 100;
  logo.style.filter = "contrast(" + contrastValue + ")";
  shadow.style.filter = "contrast(" + contrastValue + ")";
});

// HUE ROTATE
hueInput.addEventListener('input', function()
{
  hueValue = parseFloat(this.value.match(/\d+/)[0]);
  logo.style.filter = "hue-rotate(" + hueValue + "deg)";
  shadow.style.filter = "hue-rotate(" + hueValue + "deg)";
});

// INVERT
invertInput.addEventListener('input', function()
{
  invertValue = parseFloat(this.value.match(/\d+/)[0]) / 100;
  logo.style.filter = "invert(" + invertValue + ")";
  shadow.style.filter = "invert(" + invertValue + ")";
});

// ROTATE
rotateInput.addEventListener('input', function()
{
  rotateValue = parseFloat(this.value.match(/\d+/)[0]);
  logo.style.transform = "rotate(" + rotateValue + "deg)";
  shadow.style.transform = "rotate(" + rotateValue + "deg)";
});

// ROTATEX
rotatexInput.addEventListener('input', function()
{
  rotatexValue = parseFloat(this.value.match(/\d+/)[0]);
  logo.style.transform = "rotateX(" + rotatexValue + "deg)";
  shadow.style.transform = "rotateX(" + rotatexValue + "deg)";
});

// ROTATEY
rotateyInput.addEventListener('input', function()
{
  rotateyValue = parseFloat(this.value.match(/\d+/)[0]);
  logo.style.transform = "rotateY(" + rotateyValue + "deg)";
  shadow.style.transform = "rotateY(" + rotateyValue + "deg)";
});

// SCALE
scaleInput.addEventListener('input', function()
{
  scaleValue = parseFloat(this.value.match(/-?\d+(\.\d+)?/)[0]);
  logo.style.transform = "scale(" + scaleValue + ")";
  shadow.style.transform = "scale(" + scaleValue + ")";
});

// SHADOW-LOGO
translateInput.addEventListener('input', function()
{
  var translateValue = this.value.match(/-?\d+(\.\d+)?/g);
  var translateX = parseFloat(translateValue[0]);
  var translateY = parseFloat(translateValue[1]);
  logo.style.transform = "scale(" + scaleValue + ") translate(" + translateX + "px, " + translateY + "px)";

  if (translateX !== 0 || translateY !== 0)
  {
    shadow.style.display = "block";
    shadow.style.opacity = shadowOpacity;
  }
  else
  {
    shadow.style.display = "none";
  }
});

function resetbtn()
{
  var inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(function(input)
  {
    input.value = input.defaultValue;
  });

  var logo = document.getElementById('logo');
  var shadow = document.getElementById('shadow');
  logo.src = '/democss/logoc.png';
  shadow.src = '/democss/logoc.png';

  logo.style.opacity = 1;
  logo.style.filter = 'none';
  logo.style.transform = 'scale(1)';
  shadow.style.opacity = 0.3;
  shadow.style.filter = 'none';
  shadow.style.transform = 'scale(0.9)';
  shadow.style.display = "none";
  scaleValue = 1;
}

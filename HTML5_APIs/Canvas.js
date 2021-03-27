// Canvas is a container used for 2D graphics which uses javascript to draw the graphics
// The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript. 
// These grahics once drawn are forgotten
// by the browser.

<html>
<canvas id="myCanvas" width="200" height="100">
</canvas>

// Draw a line

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script>
</html>

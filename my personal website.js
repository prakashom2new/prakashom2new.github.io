"use strict";

(function () {
	var tile = [], canvas = [], ctx = [], canvasState = [];
	var tileDetails = [];
	var fil = 0;
	
	window.onload = intialize;
	
	function intialize () {
		tile = document.getElementsByClassName ("tile");
		canvas = document.getElementsByClassName ("can");
		
		tileDetails = document.getElementsByClassName ("tileDetail");
		
		for (var i = 0; i < canvas.length; i++) {
			var tileWidth = parseFloat (window.getComputedStyle (tile[i]).getPropertyValue ("width"));
			var tileHeight = parseFloat (window.getComputedStyle (tile[i]).getPropertyValue ("height"));
			
			canvas[i].width = tileWidth;
			canvas[i].height = tileHeight;
			
			// console.log ("canva width: " + canvas[i].width + " tile width: " + tileWidth);
			// console.log ("canva height: " + canvas[i].height + " tile height: " + tileHeight);
			
			ctx[i] = canvas[i].getContext ("2d");
			ctx[i].fillStyle = "grey";
			
			tileDetails[i].style.visibility = "hidden";
			
			canvasState[i] = 1;
		}
		
		setState ();
	}
	function setState () {
		fil = 0;
		for (var j = 0; j < canvasState.length; j++) {
			canvasState[j] = Math.floor ((Math.random () * 4) + 1);
		}
		liveTile ();
		
		console.log (fil);
		setTimeout (setState, 3000);
	}
	function liveTile () {
		for (var i = 0; i < canvasState.length; i++) {
			switch (canvasState[i]) {
				case 1: {
					if ((fil - 10) <= canvas[i].height) {
						ctx[i].fillRect (0, canvas[i].height, canvas[i].width, -fil);
					}
					else {
						tileDetails[i].style.visibility = "visible";
					}
					break;
				}
				case 2: {
					ctx[i].clearRect (0, 0, canvas[i].width, fil);
					if (tileDetails[i].style.visibility){
						tileDetails[i].style.visibility = "hidden";
					}
					break;
				}
				default: {}
			}
		}
		if (fil < 500) {	
			fil = fil + 10;
			setTimeout (liveTile, 20);
		}
		
	}
	
}());
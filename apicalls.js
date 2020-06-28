var obj;
var score1
var score2
var score3
var score4
var score5
var scoreLijst = [score1,score2,score3,score4,score5]

fetch("https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=united+states&limit=3&api_key=4853cb54b551dbb3a43d5dc5470de465&format=json")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => {console.log(data.topartists.artist[0].name);
	      	obj = data;
	      
	      })
	.then( () => {
			var topartists1 = (obj.topartists.artist[0].name);
			var topartists2 = (obj.topartists.artist[1].name);
			var topartists3 = (obj.topartists.artist[2].name);
	      	document.getElementById("locatie1Music").innerHTML = '<h5>Top ranking artists:</h5> <img src="star.png" class="star"/><br><span>' + topartists1 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists2 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists3 + '</span>'
	      	document.getElementById("locatie2Music").innerHTML = '<h5>Top ranking artists:</h5> <img src="star.png" class="star"/><br><span>' + topartists1 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists2 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists3 + '</span>'
	});

	fetch("https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&limit=3&api_key=4853cb54b551dbb3a43d5dc5470de465&format=json")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => {console.log(data.topartists.artist[0].name);
	      	obj = data;
	      
	      })
	.then( () => {
			var topartists1 = (obj.topartists.artist[0].name);
			var topartists2 = (obj.topartists.artist[1].name);
			var topartists3 = (obj.topartists.artist[2].name);
	      	document.getElementById("locatie3Music").innerHTML = '<h5>Top ranking artists:</h5> <img src="star.png" class="star"/><br><span>' + topartists1 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists2 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists3 + '</span>'
	});

	fetch("https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=china&limit=3&api_key=4853cb54b551dbb3a43d5dc5470de465&format=json")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => {console.log(data.topartists.artist[0].name);
	      	obj = data;
	      
	      })
	.then( () => {
			var topartists1 = (obj.topartists.artist[0].name);
			var topartists2 = (obj.topartists.artist[1].name);
			var topartists3 = (obj.topartists.artist[2].name);
	      	document.getElementById("locatie4Music").innerHTML = '<h5>Top ranking artists:</h5> <img src="star.png" class="star"/><br><span>' + topartists1 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists2 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists3 + '</span>'
	});

	fetch("https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=japan&limit=3&api_key=4853cb54b551dbb3a43d5dc5470de465&format=json")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => {console.log(data.topartists.artist[0].name);
	      	obj = data;
	      
	      })
	.then( () => {
			var topartists1 = (obj.topartists.artist[0].name);
			var topartists2 = (obj.topartists.artist[1].name);
			var topartists3 = (obj.topartists.artist[2].name);
	      	document.getElementById("locatie5Music").innerHTML = '<h5>Top ranking artists:</h5> <img src="star.png" class="star"/><br><span>' + topartists1 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists2 + '</span><br><img src="star.png" class="star"/><br><span>' + topartists3 + '</span>'
	});

var obj;

fetch("https://api.openweathermap.org/data/2.5/weather?lat=34.755947&lon=-120.516107&appid=8e1cb556c16a28a0a6f2cb1060dbd210&units=metric")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => { obj = data;
	      console.log(data)
	      })
	.then( () => {
			var main = obj.weather[0].main;
			var description = obj.weather[0].description;
			var temp = obj.main.temp;
			document.getElementById("locatie1Weer").innerHTML = "<h5>Weather:</h5> <span>" + main + "</span><span> " + temp + "&#8451;</span>";
			if(main == "Clear"){
				score1 = temp * 2;
			}
			else if(main == "Clouds"){
				score1 = temp;
			}
			else{
				score1 = temp * 0.5;
			}
	});

	fetch("https://api.openweathermap.org/data/2.5/weather?lat=28.468926&lon=-80.558869&appid=8e1cb556c16a28a0a6f2cb1060dbd210&units=metric")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => { obj = data;
	      console.log(data)
	      })
	.then( () => {
			var main = obj.weather[0].main;
			var description = obj.weather[0].description;
			var temp = obj.main.temp;
			document.getElementById("locatie2Weer").innerHTML = "<h5>Weather:</h5> <span>" + main + "</span><span> " + temp + "&#8451;</span>";
			if(main == "Clear"){
				score2 = temp * 2;
			}
			else if(main == "Clouds"){
				score2 = temp;
			}
			else{
				score2 = temp * 0.5;
			}
	});

		fetch("https://api.openweathermap.org/data/2.5/weather?lat=13.724420&lon=80.226446&appid=8e1cb556c16a28a0a6f2cb1060dbd210&units=metric")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => { obj = data;
	      console.log(data)
	      })
	.then( () => {
			var main = obj.weather[0].main;
			var description = obj.weather[0].description;
			var temp = obj.main.temp;
			document.getElementById("locatie3Weer").innerHTML = "<h5>Weather:</h5> <span>" + main + "</span><span> " + temp + "&#8451;</span>";
			if(main == "Clear"){
				score3 = temp * 2;
			}
			else if(main == "Clouds"){
				score3 = temp;
			}
			else{
				score3 = temp*0.5;
			}
	});

			fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.96056&lon=100.29833&appid=8e1cb556c16a28a0a6f2cb1060dbd210&units=metric")
      .then(response => {
	console.log(response.status);
      return response.json()
})
.then(data => { obj = data;
	      console.log(data)
	      })
	.then( () => {
			var main = obj.weather[0].main;
			var description = obj.weather[0].description;
			var temp = obj.main.temp;
			document.getElementById("locatie4Weer").innerHTML = "<h5>Weather:</h5> <span>" + main + "</span><span> " + temp + "&#8451;</span>";
			if(main == "Clear"){
				score4 = temp * 2;
			}
			else if(main == "Clouds"){
				score4 = temp;
			}
			else{
				score4 = temp*0.5;
			}
	});

					fetch("https://api.openweathermap.org/data/2.5/weather?lat=30.39096&lon=130.96813&appid=8e1cb556c16a28a0a6f2cb1060dbd210&units=metric")
      .then(response => {
	console.log(response.status)
      return response.json()
})
.then(data => { obj = data;
	      console.log(data)
	      })
	.then( () => {
			var main = obj.weather[0].main;
			var description = obj.weather[0].description;
			var temp = obj.main.temp;
			document.getElementById("locatie5Weer").innerHTML = "<h5>Weather:</h5> <span>" + main + "</span><span> " + temp + "&#8451;</span>";
			if(main == "Clear"){
				score5 = temp * 2;
			}
			else if(main == "Clouds"){
				score5 = temp;
			}
			else{
				score5 = temp*0.5;
			}

		})
		.then( () => {

			scoreLijst = [Math.round(score1),Math.round(score2),Math.round(score3),Math.round(score4),Math.round(score5)]
			console.log(scoreLijst);
			scoreLijst = scoreLijst.sort(function (a, b) { return a-b; });


			document.getElementById("locatie1Pos").innerHTML = "#" + (5 - scoreLijst.indexOf(Math.round(score1)));
			document.getElementById("locatie2Pos").innerHTML = "#" + (5 - scoreLijst.indexOf(Math.round(score2)));
			document.getElementById("locatie3Pos").innerHTML = "#" + (5 - scoreLijst.indexOf(Math.round(score3)));
			document.getElementById("locatie4Pos").innerHTML = "#" + (5 - scoreLijst.indexOf(Math.round(score4)));
			document.getElementById("locatie5Pos").innerHTML = "#" + (5 - scoreLijst.indexOf(Math.round(score5)));

			console.log(scoreLijst);
	});
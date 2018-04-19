//Visualizer by Calvin Miller

var songTitle;
var selectedDuration;
var arcCircumference = 70 * 2 * Math.PI;
var remainingTime;
var elapsedWidth;
var elapsedPercent;
var selectedSong;

d3.select('#container')
	.append('audio')
	.attr('id','audioElement')
	.attr('src',selectedSong);




// Background .gif
// Draws on load, never removes

function drawBgGif(){
// Made by 30000fps
	d3.select('#svg')
		.append('image')
		.attr('id','bggif')
		.attr('class','bggif')
		.attr('xlink:href','images/bggif1.gif')
		.attr('x',0)
		.attr('y',-150)
		.attr('height',1024)
		.attr('width',1024)
		.style('pointer-events','none')
		.style('opacity',0).transition().duration(500).style('opacity',.1);
}





// Start Screen Info
// Removes on click of center button

function drawTitle(){
d3.select('#svg')                      
	.append('text')
 	.text('Music Visualizer by Calvin Miller')
    .attr('id','title')
	.attr('x',680)
    .attr('y',700)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','sans-serif')
    //.style('font-weight','regular')
    //.style('font-style','normal')
    .style('text-anchor','left')
	.style('font-size','20px')
    .style('fill','rgb(0,174,240)')
    .style('pointer-events','none')
    .style('fill-opacity',0).transition().duration(1000).style('fill-opacity',.4);
}

function drawI(){
d3.select('#svg')                      
	.append('text')
 	.text('i')
    .attr('id','i')
    .attr('class','info')
	.attr('x',22)
    .attr('y',31)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','sans-serif')
    .style('text-anchor','center')
	.style('font-size','20px')
    .style('fill','rgb(0,174,240)')
    .style('fill-opacity',.3)
    .style('pointer-events','none')
    .style('opacity',0).transition().duration(300).style('opacity',.4)
d3.select('#svg')                      
	.append('circle')
	.attr('id','infocircle')
    .attr('class','info')
	.attr('cx',25)
	.attr('cy',24)
	.attr('r',15)
	.style('fill-opacity',0)
	.style('stroke','rgb(0,174,240)')
	.style('stroke-width',2)
	//.style('cursor','pointer')
	.on('mouseover', function(d,i){
		d3.select(this).transition().duration(300).style('stroke','rgb(250,250,250)')
		d3.select('#i').transition().duration(300).style('fill','rgb(250,250,250)')
		drawInfo();
	})
	.on('mouseout', function(d,i){
		d3.select(this).transition().duration(300).style('stroke','rgb(0,174,240)')
		d3.select('#i').transition().duration(300).style('fill','rgb(0,174,240)')
		d3.selectAll('#info').transition().duration(300).style('opacity',0).remove();
	})
	.style('stroke-opacity',0).transition().duration(300).style('stroke-opacity',.3);
}

function drawInfo(){
	d3.select('#svg')                      
	.append('text')
 	.text('Background .gifs created by Kidmograph & 30000fps')
    .attr('id','info')
    .attr('class','info')
	.attr('x',55)
    .attr('y',29)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','sans-serif')
    .style('text-anchor','left')
	.style('font-size','15px')
    .style('fill','rgb(250,250,250)')
    .style('pointer-events','none')
    .style('opacity',0).transition().duration(600).style('opacity',.2);
}





// Center Button
// Draws identical reset button and removes self

function drawCentertext(){
d3.select('#svg')                      
	.append('text')
 	.text('o p e n')
    .attr('id','centertext')
    .attr('class','center')
	.attr('x',512)
    .attr('y',365)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','sans-serif')
    .style('text-anchor','middle')
	.style('font-size','10pt')
    .style('fill','rgb(0,174,240)')
    .style('fill-opacity',.8)
    .style('pointer-events','none')
    .style('fill','rgb(0,174,240)').transition().duration(1000).style('fill','rgb(250,250,250)').transition().duration(1000).style('fill','rgb(0,174,240)')
    .style('fill','rgb(0,174,240)').transition().duration(1000).style('fill','rgb(250,250,250)').transition().duration(1000).style('fill','rgb(0,174,240)')
    .style('fill','rgb(0,174,240)').transition().duration(1000).style('fill','rgb(250,250,250)').transition().duration(1000).style('fill','rgb(0,174,240)')
    ;
}

function drawCenter(){
	d3.select('#svg')
		.append('circle')
		.attr('id','centercircle')
		.attr('class','center')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',60)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',5)
	    .style('cursor','pointer')
		.on('mouseover',function(d,i) {
			d3.select(this).transition().duration(300).style('stroke','rgb(250,250,250)')
			d3.select('#centertext').transition().duration(300).style('fill','rgb(250,250,250)');
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).transition().duration(300).style('stroke','rgb(0,174,240)')
    		d3.select('#centertext').transition().duration(300).style('fill','rgb(0,174,240)');
 		})
 		.on('click', function(d,i){
 				d3.selectAll('#title').transition().duration(1000).style('fill-opacity',0).remove()
 				d3.selectAll('.info').transition().duration(300).style('opacity',0).remove()
            	drawGenresLeft()
 				drawGenresRight()
 				drawResettext()
 				drawReset()
 				renderChart()
 				d3.selectAll('.center').remove();
 		})
		.style('stroke','rgb(0,174,240)').transition().duration(1000).style('stroke','rgb(250,250,250)').transition().duration(1000).style('stroke','rgb(0,174,240)')
		.style('stroke','rgb(0,174,240)').transition().duration(1000).style('stroke','rgb(250,250,250)').transition().duration(1000).style('stroke','rgb(0,174,240)')
		.style('stroke','rgb(0,174,240)').transition().duration(1000).style('stroke','rgb(250,250,250)').transition().duration(1000).style('stroke','rgb(0,174,240)')
 		;
}





// Reset Button
// Removes everything including itself
// Draws center button and start screen info

function drawResettext(){
d3.select('#svg')                      
	.append('text')
 	.text('r e s e t')
    .attr('id','resettext')
    .attr('class','reset')
	.attr('x',512)
    .attr('y',365)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','sans-serif')
    .style('text-anchor','middle')
	.style('font-size','10pt')
    .style('fill','rgb(250,250,250)')
    .style('fill-opacity',0).transition().duration(1000).style('fill-opacity',.5);
}

function drawReset(){
	d3.select('#svg')
		.append('circle')
		.attr('id','resetcircle')
		.attr('class','reset')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',60)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',5)
		.style('stroke-opacity',1)
	    .style('cursor','pointer')
		.on('mouseover',function() {
			d3.select(this).transition().duration(300).style('stroke','rgb(250,250,250)')
			d3.select('#resettext').transition().duration(300).style('fill-opacity',.8)
			d3.selectAll('.genregif').transition().duration(200).style('opacity',0);
		})
		.on('mouseout', function() {
    		d3.select(this).transition().duration(300).style('stroke','rgb(0,174,240)')
    		d3.select('#resettext').transition().duration(300).style('fill-opacity',.5)
    		d3.selectAll('.genregif').transition().duration(200).style('opacity',.7);
 		})
 		.on('click', function(d){
 			audioElement.pause()
            //d3.selectAll('circle').remove()
            d3.selectAll('.songs').remove()
            d3.selectAll('.toggle').remove()
            d3.selectAll('.nowplaying').remove()
            d3.selectAll('.progressbar').remove()
            d3.selectAll('.genregif').remove()
            d3.selectAll('#genresRight').transition().duration(300).attr('cx',653).style('stroke-opacity',0).remove()
            d3.selectAll('#genresLeft').transition().duration(300).attr('cx',372).style('stroke-opacity',0).remove()
            d3.select('#resettext').transition().duration(300).style('opacity',0).remove()
			drawTitle()
			drawI()
            drawCentertext()
            drawCenter()
            d3.selectAll('.reset').remove();
 		});
}



// Left and Right Genre Buttons; drawn from clicking initial center button
// Draw songs per genre on click, removes all other songs

function drawGenresLeft() {
	d3.select('#svg')
		.append('circle')
		.attr('id','genresLeft')
		.attr('class','genrebuttons')
		.attr('cy',362)
		.attr('r',25)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',3)
	    .style('cursor','pointer')
		.on('mouseover',function(d,i) {
			d3.select(this).transition().duration(200).style('stroke','rgb(250,250,250)');
			genreTitle = 'Boombap'
			drawGenreText();
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).transition().duration(200).style('stroke','rgb(0,174,240)');
    		d3.selectAll('#genreText').remove();
 		})
		.on('click',function(d,i) {
			d3.selectAll('.songs').remove()
			drawSongs1up()
			drawSongs1down()
			d3.selectAll('.genregif').remove()
			drawBoombapGif();
		})
		.attr('cx',372).style('stroke-opacity',0).transition().duration(300).attr('cx',162).style('stroke-opacity',1);
	d3.select('#svg')
		.append('circle')
		.attr('id','genresLeft')
		.attr('class','genrebuttons')
		.attr('cy',362)
		.attr('r',25)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',3)
	    .style('cursor','pointer')
		.on('mouseover',function(d,i) {
			d3.select(this).transition().duration(200).style('stroke','rgb(250,250,250)');
			genreTitle = 'LoFi Hip-Hop'
			drawGenreText();
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).transition().duration(200).style('stroke','rgb(0,174,240)');
    		d3.selectAll('#genreText').remove();
 		})
		.on('click',function(d,i) {
			d3.selectAll('.songs').remove()
			drawSongs2up()
			drawSongs2down()
			d3.selectAll('.genregif').remove()
			drawLofiGif();
		})
		.attr('cx',372).style('stroke-opacity',0).transition().duration(300).attr('cx',267).style('stroke-opacity',1);
	d3.select('#svg')
		.append('circle')
		.attr('id','genresLeft')
		.attr('class','genrebuttons')
		.attr('cy',362)
		.attr('r',25)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',3)
	    .style('cursor','pointer')
		.on('mouseover',function(d,i) {
			d3.select(this).transition().duration(200).style('stroke','rgb(250,250,250)');
			genreTitle = 'Retrowave'
			drawGenreText();
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).transition().duration(200).style('stroke','rgb(0,174,240)');
    		d3.selectAll('#genreText').remove();
 		})
		.on('click',function(d,i) {
			d3.selectAll('.songs').remove()
			drawSongs3up()
			drawSongs3down()
			d3.selectAll('.genregif').remove()
			drawRetrowaveGif();
		})
		.style('stroke-opacity',0).transition().duration(300).attr('cx',372).style('stroke-opacity',1);
}

function drawGenresRight() {
	d3.select('#svg')
		.append('circle')
		.attr('id','genresRight')
		.attr('class','genrebuttons')
		.attr('cy',362)
		.attr('r',25)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',3)
	    .style('cursor','pointer')
		.on('mouseover',function(d,i) {
			d3.select(this).transition().duration(200).style('stroke','rgb(250,250,250)');
			genreTitle = 'Vaporwave'
			drawGenreText();
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).transition().duration(200).style('stroke','rgb(0,174,240)');
    		d3.selectAll('#genreText').remove();
 		})
		.on('click',function(d,i) {
			d3.selectAll('.songs').remove()
			drawSongs6up()
			drawSongs6down()
			d3.selectAll('.genregif').remove()
			drawVaporwaveGif();
		})
		.attr('cx',653).style('stroke-opacity',0).transition().duration(300).attr('cx',862).style('stroke-opacity',1);
	d3.select('#svg')
		.append('circle')
		.attr('id','genresRight')
		.attr('class','genrebuttons')
		.attr('cy',362)
		.attr('r',25)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',3)
	    .style('cursor','pointer')
		.on('mouseover',function(d,i) {
			d3.select(this).transition().duration(200).style('stroke','rgb(250,250,250)');
			genreTitle = 'Underground Hip-Hop'
			drawGenreText();
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).transition().duration(200).style('stroke','rgb(0,174,240)');
    		d3.selectAll('#genreText').remove();
 		})
		.on('click',function(d,i) {
			d3.selectAll('.songs').remove()
			drawSongs5up()
			drawSongs5down()
			d3.selectAll('.genregif').remove()
			drawUndergroundGif();
		})
		.attr('cx',653).style('stroke-opacity',0).transition().duration(300).attr('cx',757).style('stroke-opacity',1);
	d3.select('#svg')
		.append('circle')
		.attr('id','genresRight')
		.attr('class','genrebuttons')
		//.attr('cx',653)
		.attr('cy',362)
		.attr('r',25)
		.style('fill-opacity',0)
		.style('stroke','rgb(0,174,240)')
		.style('stroke-width',3)
	    .style('cursor','pointer')
		.on('mouseover',function(d,i) {
			d3.select(this).transition().duration(200).style('stroke','rgb(250,250,250)');
			genreTitle = 'Trap'
			drawGenreText();
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).transition().duration(200).style('stroke','rgb(0,174,240)');
    		d3.selectAll('#genreText').remove();
 		})
		.on('click',function(d,i) {
			d3.selectAll('.songs').remove()
			drawSongs4up()
			drawSongs4down()
			d3.selectAll('.genregif').remove()
			drawTrapGif();
		})
		.style('stroke-opacity',0).transition().duration(300).attr('cx',653).style('stroke-opacity',1);
}

function drawGenreText() {
	d3.select('#svg')                      
		.append('text')
 		.text(genreTitle)
        .attr('id','genreText')
        .attr('x',512) 
        .attr('y',120) 
        .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
        .style('font-family','sans-serif')
        .style('font-size','12pt')
        .style('text-anchor','middle')
        .style('fill','rgb(0,174,240)')
    	.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.8);
}



// Center .gifs
// Aesthetic purposes only
// Draw on click of genres

function drawBoombapGif() {
	d3.select('#myMask')
		.append('circle')
		.attr('id','circleMask')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',56)
	d3.select('#svg')
		.append('image')
		.attr('id','boombapgif')
		.attr('class','genregif')
		.attr('xlink:href','images/boombapgif.gif')
		.attr('x',430)
		.attr('y',275)
		.attr('height',185)
		.attr('width',185)
		.style('clip-path','url(#myMask)')
		.style('pointer-events','none')
		.style('opacity',0).transition().duration(500).style('opacity',.7);
}

function drawLofiGif() {
//gif made by Kidmograph
	d3.select('#myMask')
		.append('circle')
		.attr('id','circleMask')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',56)
	d3.select('#svg')
		.append('image')
		.attr('id','lofigif')
		.attr('class','genregif')
		.attr('xlink:href','images/lofigif.gif')
		.attr('x',453)
		.attr('y',306)
		.attr('height',120)
		.attr('width',120)
		.style('clip-path','url(#myMask)')
    	.style('pointer-events','none')
    	.style('opacity',0).transition().duration(500).style('opacity',.7);
}

function drawRetrowaveGif() {
//gif made by Kidmograph
	d3.select('#myMask')
		.append('circle')
		.attr('id','circleMask')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',56)
	d3.select('#svg')
		.append('image')
		.attr('id','retrowavegif')
		.attr('class','genregif')
		.attr('xlink:href','images/retrowavegif.gif')
		.attr('x',437)
		.attr('y',287)
		.attr('height',150)
		.attr('width',150)
		.style('clip-path','url(#myMask)')
		.style('pointer-events','none')
		.style('opacity',0).transition().duration(500).style('opacity',.7);
}

function drawTrapGif() {
//gif made by Kidmograph
	d3.select('#myMask')
		.append('circle')
		.attr('id','circleMask')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',56)
	d3.select('#svg')
		.append('image')
		.attr('id','trapgif')
		.attr('class','genregif')
		.attr('xlink:href','images/trapgif.gif')
		.attr('x',453)
		.attr('y',300)
		.attr('height',122)
		.attr('width',122)
		.style('clip-path','url(#myMask)')
		.style('pointer-events','none')
		.style('opacity',0).transition().duration(500).style('opacity',.7);
}

function drawUndergroundGif() {
//gif made by Kidmograph
	d3.select('#myMask')
		.append('circle')
		.attr('id','circleMask')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',56)
	d3.select('#svg')
		.append('image')
		.attr('id','undergroundgif')
		.attr('class','genregif')
		.attr('xlink:href','images/undergroundgif.gif')
		.attr('x',405)
		.attr('y',255)
		.attr('height',213)
		.attr('width',213)
		.style('clip-path','url(#myMask)')
		.style('pointer-events','none')
		.style('opacity',0).transition().duration(500).style('opacity',.7);
}

function drawVaporwaveGif() {
	d3.select('#myMask')
		.append('circle')
		.attr('id','circleMask')
		.attr('cx',512)
		.attr('cy',362)
		.attr('r',56)
	d3.select('#svg')
		.append('image')
		.attr('id','vaporwavegif')
		.attr('class','genregif')
		.attr('xlink:href','images/vaporwavegif.gif')
		.attr('x',430)
		.attr('y',257)
		.attr('height',210)
		.attr('width',210)
		.style('clip-path','url(#myMask)')
		.style('pointer-events','none')
		.style('opacity',0).transition().duration(500).style('opacity',.7);
}





// Song Buttons
// Draw on click of genre buttons
// Attributes radius relative to song length

function drawSongs1up() {
	d3.select('#svg')
		.selectAll('genre1up')
		.data(genre1up) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre1up' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 145 + i * 70; })
		.attr('cx',162)
		.attr('r',function (d,i) {return d[3]/11;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function(d,i) {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		//.attr('cy',362).transition().duration(300)
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs1down() {
	d3.select('#svg')
		.selectAll('genre1down')
		.data(genre1down) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre1down' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 437 + i * 70; })
		.attr('cx',162)
		.attr('r',function (d,i) {return d[3]/11;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
  		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs2up() {
	d3.select('#svg')
		.selectAll('genre2up')
		.data(genre2up) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre2up' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 145 + i * 70; })
		.attr('cx',267)
		.attr('r',function (d,i) {return d[3]/8;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
			d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs2down() {
	d3.select('#svg')
		.selectAll('genre2down')
		.data(genre2down) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre2down' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 437 + i * 70; })
		.attr('cx',267)
		.attr('r',function (d,i) {return d[3]/8;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs3up() {
	d3.select('#svg')
		.selectAll('genre3up')
		.data(genre3up) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre3up' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 145 + i * 70; })
		.attr('cx',371)
		.attr('r',function (d,i) {return d[3]/13;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs3down() {
	d3.select('#svg')
		.selectAll('genre3down')
		.data(genre3down) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre3down' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 437 + i * 70; })
		.attr('cx',371)
		.attr('r',function (d,i) {return d[3]/13;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs4up() {
	d3.select('#svg')
		.selectAll('genre4up')
		.data(genre4up) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre4up' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 145 + i * 70; })
		.attr('cx',652)
		.attr('r',function (d,i) {return d[3]/11;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs4down() {
	d3.select('#svg')
		.selectAll('genre4down')
		.data(genre4down) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre4down' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 437 + i * 70; })
		.attr('cx',652)
		.attr('r',function (d,i) {return d[3]/11;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
			console.log(selectedSong);
			selectedDuration = d[3] * 1000;
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs5up() {
	d3.select('#svg')
		.selectAll('genre5up')
		.data(genre5up) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre5up' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 145 + i * 70; })
		.attr('cx',757)
		.attr('r',function (d,i) {return d[3]/11;})
		.style('fill','rgb(0,174,240)')
		.style('fill-opacity',.4)
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
			console.log(selectedSong);
			selectedDuration = d[3] * 1000;
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs5down() {
	d3.select('#svg')
		.selectAll('genre5down')
		.data(genre5down) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre5down' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 437 + i * 70; })
		.attr('cx',757)
		.attr('r',function (d,i) {return d[3]/11;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs6up() {
	d3.select('#svg')
		.selectAll('genre6up')
		.data(genre6up) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre6up' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 145 + i * 70; })
		.attr('cx',862)
		.attr('r',function (d,i) {return d[3]/11;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongs6down() {
	d3.select('#svg')
		.selectAll('genre6down')
		.data(genre6down) 
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'genre6down' + i; })
		.attr('class','songs')
		.attr('cy',function(d,i) { return 437 + i * 70; })
		.attr('cx',862)
		.attr('r',function (d,i) {return d[3]/8;})
		.style('fill','rgb(0,174,240)')
	    .style('cursor','pointer')
	    .on('mouseover',function(d,i) {
			d3.select(this).style('fill-opacity',1)
			songTitle = d[1]
			drawSongText()
			artistTitle = d[0]
			drawArtistText();
		})
		.on('mouseout', function() {
    		d3.select(this).style('fill-opacity',.4)
    		d3.select('#songText').remove()
    		d3.select('#artistText').remove();
 		})
 		.on('click', function(d,i) {
 			selectedSong = d[4];
 			selectedDuration = d[3] * 1000;
			console.log(selectedSong);
			d3.select('#audioElement').attr('src',selectedSong);
			audioElement.play();
            audioElement.volume = .1;
			d3.selectAll('.toggle').remove()
			d3.selectAll('.nowplaying').remove()
			d3.selectAll('.progressbar').remove()
			drawProgressBar()
			drawNowPlaying()
			drawPlayButton()
			drawStopButton()
			drawDivider()
			drawTogglePlay();
 		})
 		.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}





// Song, Artist, and Now Playing
// Song and artist display on hover of song buttons
// Now playing draws on click of a song

function drawArtistText() {
   	d3.select('#svg')                      
		.append('text')
 		.text(artistTitle)
        .attr('id','artistText')
        .attr('x',512) 
        .attr('y',90) 
        .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
        .style('font-family','sans-serif')
        .style('font-size','12pt')
        .style('text-anchor','middle')
        .style('fill','rgb(0,174,240)')
    	.style('fill-opacity',.5)
    	.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);
}

function drawSongText() {
   	d3.select('#svg')                      
		.append('text')
 		.text(songTitle)
        .attr('id','songText')
        .attr('x',512) 
        .attr('y',60) 
        .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
        .style('font-family','sans-serif')
        .style('font-size','12pt')
        .style('text-anchor','middle')
        .style('fill','rgb(0,174,240)')
    	.style('fill-opacity',.5);
}

function drawNowPlaying() {
	d3.select('#svg')                      
		.append('text')
 		.text('Now Playing:')
        .attr('id','nptext')
        .attr('class','nowplaying')
        .attr('x',10) 
        .attr('y',700) 
        .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
        .style('font-family','sans-serif')
        .style('font-size','12pt')
        .style('text-anchor','left')
        .style('fill','rgb(0,174,240)')
    	.style('fill-opacity',.5);
	d3.select('#svg')                      
		.append('text')
 		.text(songTitle)
        .attr('id','npsong')
        .attr('class','nowplaying')
        .attr('x',125) 
        .attr('y',700) 
        .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
        .style('font-family','sans-serif')
        .style('font-size','12pt')
        .style('text-anchor','left')
        .style('fill','rgb(0,174,240)')
    	.style('fill-opacity',.5)
    	.style('fill-opacity',0).transition().duration(300).style('fill-opacity',.4);  	
}





// Play;Pause Toggle Switch
// Creates a visually singular toggle switch for play and pause functions
// Clicking one removes itself and draws the other

function drawDivider(){
	d3.select('#svg')
		.append('line')
		.attr('id','divider')
		.attr('class','toggle')
		.attr('x1',512)
		.attr('x2',512)
		.attr('y1',450)
		.attr('y2',473)
		.style('stroke-width',1)
		.style('stroke','rgb(250,250,250)')
		.style('stroke-opacity',.5);
	d3.select('#svg')
		.append('rect')
		.attr('id','divider')
		.attr('class','toggle')
		.attr('x',441)
		.attr('y',445)
		.attr('width',142)
		.attr('height',33)
		.attr('rx',6)
		.attr('ry',6)
		.style('fill','none')
		.style('stroke-width',1)
		.style('stroke','rgb(250,250,250)')
		.style('stroke-opacity',.5);
}

function drawTogglePlay(){
	// invisible button overlay
	// spans width of both play and pause buttons
	d3.select('#svg')
		.append('rect')
		.attr('id','toggleplay')
		.attr('class','toggle')
		.attr('x',450)
		.attr('y',450)
		.attr('width',122)
		.attr('height',25)
		.style('fill-opacity',0)
		.style('cursor','pointer')
		.on('mouseover', function (d,i){
			d3.selectAll('#divider').transition().duration(300).style('stroke-opacity',1)
		})
		.on('mouseout', function (d,i){
			d3.selectAll('#divider').transition().duration(300).style('stroke-opacity',.5);
		})
		.on('click', function (d,i){
			d3.select('#playbutton').transition().duration(300).style('fill','rgb(0,174,240)')
			audioElement.pause()
			drawToggleStop()
			d3.selectAll('#toggleplay').remove()
			d3.select('#progresscircle').transition().duration(0); 
			elapsedWidth = d3.select('#progresscircle').style('stroke-dashoffset');
			elapsedPercent = elapsedWidth / 440;
			remainingTime = selectedDuration - elapsedPercent;
		})
		d3.select('#playbutton').transition().duration(300).style('fill','rgb(250,250,250)');
}

function drawToggleStop(){
	// invisible button overlay
	// spans width of both play and pause buttons
	d3.select('#svg')
		.append('rect')
		.attr('id','togglestop')
		.attr('class','toggle')
		.attr('x',450)
		.attr('y',450)
		.attr('width',122)
		.attr('height',25)
		.style('fill-opacity',0)
		.style('cursor','pointer')
		.on('mouseover', function (d,i){
			d3.selectAll('#divider').transition().duration(300).style('stroke-opacity',1);
		})
		.on('mouseout', function (d,i){
			d3.selectAll('#divider').transition().duration(300).style('stroke-opacity',.5);
		})
		.on('click', function (d,i){
			d3.select('#stopbutton').transition().duration(300).style('fill','rgb(0,174,240)')
			audioElement.play()
			drawTogglePlay()
			d3.select('#progresscircle').transition().ease('linear').duration(remainingTime).style('stroke-dashoffset',0);
			d3.select('#togglestop').remove()
			renderChart();
		})
		d3.select('#stopbutton').transition().duration(300).style('fill','rgb(250,250,250)');
}
 
function drawPlayButton(){
d3.select('#svg')                      
	.append('text')
 	.text('p l a y')
    .attr('id','playbutton')
    .attr('class','toggle')
	.attr('x',475)
    .attr('y',465)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','sans-serif')
    .style('text-anchor','middle')
	.style('font-size','10pt')
    .style('stroke-width',0)
    .style('fill','rgb(250,250,250)')
    .style('fill-opacity',.75)
    .style('pointer-events','none');
}
 	
function drawStopButton(){
d3.select('#svg')                      
	.append('text')
 	.text('s t o p')
    .attr('id','stopbutton')
    .attr('class','toggle')
	.attr('x',547)
    .attr('y',465)
    .style('font-family','myriad-pro-semi-condensed-1','myriad-pro-semi-condensed-2')
    .style('font-family','sans-serif')
    .style('text-anchor','middle')
	.style('font-size','10pt')
    .style('fill','rgb(0,174,240)')
    .style('pointer-events','none')
    .style('fill-opacity',0).transition().duration(500).style('fill-opacity',.75);
}





// Progress Bar Version 2
// Circular, uses dash offset to reveal stroke as song progresses

function drawProgressBar(){
	d3.select('#svg')
        .append('circle')
		.attr('id','progresscircle')
		.attr('class','progressbar')
		.style('stroke','rgb(250,250,250)')
        .style('stroke-width',2)
        .style('fill','none')
        .style('stroke-opacity',.8)
        .attr('r',70)
        .attr('cx',512)  	
        .attr('cy',362) 
        .attr('transform',function(d,i) { 
				return 'rotate(-90,512,362)'; 
				})
		.style('stroke-dasharray',arcCircumference)
		.style('stroke-dashoffset',arcCircumference)
 	   	.transition()
		.ease('linear')
		.duration(selectedDuration)
		.style('stroke-dashoffset',0);
 }





var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var audioElement = document.getElementById('audioElement');
var audioSrc = audioCtx.createMediaElementSource(audioElement);
var analyser = audioCtx.createAnalyser();
audioElement.crossOrigin = 'anonymous';
audioSrc.connect(analyser);
audioSrc.connect(audioCtx.destination);
var frequencyData = new Uint8Array(6);

function renderChart() {
    requestAnimationFrame(renderChart);
    analyser.getByteFrequencyData(frequencyData);
	//console.log(frequencyData); // see data stream in javascript console
    d3.selectAll('.genrebuttons')
    	//.attr('id','visualizer')
        .data(frequencyData)
        .attr('r',function(d,i) {
            return 25 + d/20;
            });
}   





// OnLoad Functions

window.onload = function() {
	drawBgGif();
	drawTitle();
	drawI();
	drawCentertext();
	drawCenter();
 }

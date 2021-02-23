const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "53d61a4f67msh4c4cb115bd62fc3p13efb4jsnc1794ad3a4fc",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
    img_str = `<div class = "outer-img-div">
	           <img class="movies-cover-img" src = "~~url~~" alt="">
	           <div class = "movies-title">
			   <p><b>~~title~~</b></p> <p><i style ="color:#EEBF50;" class="fas fa-star"></i>~~rating~~</p></div></div>`;
	$.each(response.d, function (indexInArray, valueOfElement) { 
        imgurl =  valueOfElement.i.imageUrl;
		title = valueOfElement.l;
		rank = valueOfElement.rank;
        
        upd = img_str.replace("~~url~~",imgurl)
		upd = upd.replace("~~title~~",title)
		upd = upd.replace("~~rating~~", rank)
		
        $('.json-img').append(upd);

    }); 
    
});
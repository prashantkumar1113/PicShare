$(document).ready(function(){
	$('.myTitle p').hide();
	
	$('.myTitle h1').click(function(){
		$('.myTitle p').toggle();
	});
	
var URL = "http://api.flickr.com/services/feeds/photos_public.gne";
// change this ID to another flickr ID (like your own if you have one)
var ID = "131639671@N06"; // ID for the Smithsonian Institution
var jsonFormat = "&tags=2012,Fundraiser&format=json&jsoncallback=?";
var ajaxURL = URL + "?id=" + ID + jsonFormat;

$.getJSON(ajaxURL,function(data) {
	$('h2').text(data.title);
	$.each(data.items,function(i,photo) {
		var photoHTML = '<span class="image">';
		photoHTML += '<a href="' + photo.link + '">';
		photoHTML += '<div class="col-sm-6 col-md-3">' +
				'<div class="thumbnail">'+
				  '<img src="' + photo.media.m.replace('_m','_m') + '"></a><div class="caption">' +
					'<h3>Thumbnail label</h3>' +
					'<p>...</p>' +
					'<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>' +
				  '</div></div></div>';
		$('#photos').append(photoHTML);	
	}); // end each
}); // end get JSON
});//end ready
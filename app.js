var main = function() {
  $('#top-text').keyup(function(){
  	var toptext = $('#top-text').val();
    $('.top-caption').text(toptext);
  });

  $('#bottom-text').keyup(function(){
  	var bottomtxt = $('#bottom-text').val();
    $('.bottom-caption').text(bottomtxt);
  });

  $('#image-url').keyup(function(){
  	var imgurl = $('#image-url').val();
    $('div.thumbnail > img').attr('src', "imgurl.jpg");
  });

}

$(document).ready(main);

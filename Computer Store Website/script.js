$('.side-btn').click(function(){
  $(this).toggleClass("click"); //What this does is when the sidebutton is clicked, it toggles the class "click" , which then toggles the display of the sidebar
  $('.sidebar').toggleClass("show"); //Again, this is so that once the sidebutton is clicked, the sidebar shows
});
$('.prod-btn').click(function(){
  $('nav ul .prod-sub').toggleClass("show"); //This is for the submenu, so that when the products button is clicked, the submenu shows
  $('nav ul .product').toggleClass("rotate"); //This is for the caret, which rotates when the button is clicked
});
$('nav ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active"); //This is so that when a user has clicked on the link, it makes the color purple, but once the user clicks something else, the purple disappears.
});

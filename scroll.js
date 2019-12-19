$(document).on("scroll", function () {
  
  var pixels = $(document).scrollTop()
  
  var font = pixels / 10 + 12
  
  $("div").css("font-size", font)
  
  $("span").html(font)
  
})
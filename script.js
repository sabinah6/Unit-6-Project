$(".firstImage").click(function() {
    $(".img3").show();
    $(".firstImage").hide();
    $(".img2").hide();
    $(".title").text("Yay. Now Peppa wants to meet Biden to discuss matters about muddy puddles. Double click her to make Biden appear.");
});

$(".img3").dblclick(function() {
    $(".img6").toggle();
    $(".title").text("Nice! Now Biden wants to meet Trump to discuss how great of a person (or pig) Peppa is. Move your mouse out of Biden to bring Trump in.");    
});
$(".img6").mouseleave(function() {
    $(".img5").show();
    $(".title").text("Trump is happy to meet Peppa. Click Trump to make Peppa, Biden, and Trump friends. ");
});
$(".img2").click(function() {
    $(".firstImage").hide();
    $(".title").text("Oh, dear. Peppa is not happy. Game over.");
    $(".button").show();
    
    
});
$(".button").click(function() {
    $(".firstImage").show();
    $(".button").hide();
    $(".title").text("Give Peppa muddy puddles?");
    
});
$(".img5").click(function() {
    $(".treasure").show();
    $(".title").text("Yippee!");
    
});


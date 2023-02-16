$(".st1").click(function() {
    $(".Origins").prop("checked", true);
})

$(".st2").click(function() {
    $(".Royalty").prop("checked", true);
})

$(".st3").click(function() {
    $(".Abbey").prop("checked", true);
})

$(".st4").click(function() {
    $(".Civil").prop("checked", true);
})

$(".st5").click(function() {
    $(".Shipbuilding").prop("checked", true);
})

$("ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})
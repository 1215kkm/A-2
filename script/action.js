//슬라이드
setInterval(function(){
    $('.slide ul').animate({marginLeft:'-1200'}, 1000, function(){
        $('.slide li:first').appendTo($('.slide ul'));
        $('.slide ul').css({marginLeft:0})
    })
}, 2000)



//팝업
$('.board li:first').click(function(){
    $('.popup_box').show()
})

$('.popup button').click(function(){
    $('.popup_box').hide()
})
$('.latest-works__filter li').click(function(){
    $('.latest-works__filter li').removeClass('filterClick');
    $(this).toggleClass('filterClick');
});

$('#all-latest-works').click(function(){
    $('.latest-works__item').show();
});

$('#web-design').click(function(){
    $('.latest-works__item').show();
    $('.latest-works__item:not(.web-design)').hide();
});

$('#mockups').click(function(){
    $('.latest-works__item').show();
    $('.latest-works__item:not(.mockups)').hide();
});

$('#ux-design').click(function(){
    $('.latest-works__item').show();
    $('.latest-works__item:not(.ux-design)').hide();
});

$('.latest-works__btn-view').click(function(){
    $('.latestWorks .hidden').css('display', 'flex');
    $('.latest-works__btn-view').css('display', 'none');
    $('.latest-works__btn-hide').css('display', 'block');
});

$('.latest-works__btn-hide').click(function(){
    $('.latestWorks .hidden').css('display', 'none');
    $('.latest-works__btn-view').css('display', 'block');
    $('.latest-works__btn-hide').css('display', 'none');
});

$('.blog__btn-view').click(function(){
    $('.blog .hidden').css('display', 'block');
    $('.blog__btn-view').css('display', 'none');
    $('.blog__btn-hide').css('display', 'block');
});

$('.blog__btn-hide').click(function(){
    $('.blog .hidden').css('display', 'none');
    $('.blog__btn-view').css('display', 'block');
    $('.blog__btn-hide').css('display', 'none');
});

$(window).load(function(){
    var maxHeight = 0;
    for( let i=0; i < $('.category-unit').length; i++) {
        if ($('.category-unit').eq(i).height() > maxHeight) {
            maxHeight = $('.category-unit').eq(i).height()
        }
    }
    for( let i=0; i < $('.category-unit').length; i++) {
        $('.category-unit').eq(i).css('height', maxHeight);
    }

    $('.flexslider').flexslider({
        animation: "fade"
      });

    $(document).on('submit','.form',function(){
    	if( $('.form #name').val().length < 6) {
    		alert('Name must contain at least 6 characters');
    		return false;
    	}
    });
});
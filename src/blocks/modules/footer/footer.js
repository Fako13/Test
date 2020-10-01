// import "../../../../node_modules/jquery/dist/jquery.min.js";
// import "../../../../node_modules/uikit/dist/js/uikit.min.js";
// import "../../../../node_modules/uikit/dist/js/uikit-icons.min.js";
import "../../../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js";

import $ from "jquery";
import UIkit from "UIkit";
import mask from "jquery.maskedinput";


 
$(document).ready(function() {

  
  $("a.transition").click(function(event) {
		event.preventDefault();
		var linkLocation = this.href;
		$("body").fadeOut(800, redirectPage);

		function redirectPage() {
		window.location = linkLocation;
		}
  });
  
  
  var listItems = $('.list_people2 li');
  console.log(listItems.length);
  for (var i = 0; i < listItems.length; i++) {
    var txt = $(listItems[i]).text();
    var nubm = i + 1 ;
    $(listItems[i]).html('<span class="list_people2_numb">' + nubm + '.</span>' + txt);
  };

  $('.info_panel').each(function() {
    var $this = $(this);
    $(this).children('.icon').click(function() {
      $this.removeClass('active');
    })
  });
  $('.plan_main_shops_links a').hover(function() {
    $('.info_panel').addClass('active');
  });

  $('.input select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    var $listItems = $list.children('li');
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
                  $("input[type='submit'].filterApply").trigger('click');
    });
      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });
  });


  $('.input_search').each(function(){
    var $this = $(this);
    var $thisInput = $this.find('.uk-search-input');
    var $list = $this.find('.select-options');
    var $listchild = $list.children('li');
    $(document).mouseup(function (e){ // событие клика по веб-документу
      if (!$list.is(e.target) && $list.has(e.target).length === 0 && !$thisInput.is(e.target) ) { // и не по его дочерним элементам
        $list.css('display', 'none'); // скрываем его
        $thisInput.removeClass('input_active');
      } else {
        $list.css('display', 'block');
        $thisInput.addClass('input_active');
      }
    });
    $listchild.click(function() {      
      $thisInput.val($(this).attr('rel'));
      $list.css('display', 'none');
      $thisInput.removeClass('input_active');
    });
  });

  

  if( $('input[name= "f_phone"').length> 0) {
    $('input[name= "f_phone"').mask("+7(999) 999-9999");
  } else {
    console.log('not found')
  }

});























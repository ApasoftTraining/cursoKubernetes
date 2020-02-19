 $(function () {
     SyntaxHighlighter.all();
 });
 $(window).load(function () {
     $('.flexslider').flexslider({
         animation: "slide",
         controlNav: "thumbnails",
         start: function (slider) {
             $('body').removeClass('loading');
         }
     });
 });




 $(".verticalCarousel").verticalCarousel({
     currentItem: 1,
     showItems: 5,

 });


 var icons = {
     header: "ui-icon-circle-plus",
     activeHeader: "ui-icon-circle-minus"
 };
 $("#accordion").accordion({
     icons: icons
 });
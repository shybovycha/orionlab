(function($) {
    $.fn.sticky = function() {
        this.each(function(_, elt) {
            var origOffsetY = elt.offsetTop;

            function onScroll(e) {
                window.scrollY >= origOffsetY ? elt.classList.add('fixed') : elt.classList.remove('fixed');
            }

            document.addEventListener('scroll', onScroll);
        });
    };
})(jQuery);
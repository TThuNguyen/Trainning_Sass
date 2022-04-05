var $document = $(document),
    plugins = {
        slick: $('.slick-slider'),
    };

$document.ready(function () {
    var isNoviBuilder = window.xMode;

    /**
     * Slick carousel
     * @description  Enable Slick carousel plugin
     */
    if (plugins.slick.length) {
        var i;
        for (i = 0; i < plugins.slick.length; i++) {
            var $slickItem = $(plugins.slick[i]);

            $slickItem.slick({
                slidesToScroll: parseInt($slickItem.attr('data-slide-to-scroll')) || 1,
                asNavFor: $slickItem.attr('data-for') || false,
                dots: $slickItem.attr("data-dots") == "true",
                infinite: isNoviBuilder ? false : $slickItem.attr("data-loop") == "true",
                focusOnSelect: true,
                arrows: $slickItem.attr("data-arrows") == "true",
                swipe: $slickItem.attr("data-swipe") == "true",
                autoplay: $slickItem.attr("data-autoplay") == "true",
                centerMode: $slickItem.attr("data-center-mode") == "true",
                centerPadding: $slickItem.attr("data-center-padding") ? $slickItem.attr("data-center-padding") : '0.50',
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 0,
                        settings: {
                            slidesToShow: parseInt($slickItem.attr('data-items')) || 1,
                            vertical: $slickItem.attr('data-vertical') == 'true' || false
                        }
                    },
                    {
                        breakpoint: 479,
                        settings: {
                            slidesToShow: parseInt($slickItem.attr('data-xs-items')) || 1,
                            vertical: $slickItem.attr('data-xs-vertical') == 'true' || false
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: parseInt($slickItem.attr('data-sm-items')) || 1,
                            vertical: $slickItem.attr('data-sm-vertical') == 'true' || false
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: parseInt($slickItem.attr('data-md-items')) || 1,
                            vertical: $slickItem.attr('data-md-vertical') == 'true' || false
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: parseInt($slickItem.attr('data-lg-items')) || 1,
                            vertical: $slickItem.attr('data-lg-vertical') == 'true' || false
                        }
                    }
                ]
            })
                .on('afterChange', function (event, slick, currentSlide, nextSlide) {
                    var $this = $(this),
                        childCarousel = $this.attr('data-child');

                    if (childCarousel) {
                        $(childCarousel + ' .slick-slide').removeClass('slick-current');
                        $(childCarousel + ' .slick-slide').eq(currentSlide).addClass('slick-current');
                    }
                });
        }
    }
});


$(function () {
  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  var siteMenuClone = function () {
    $(".js-clone-nav").each(function () {
      var $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    setTimeout(function () {
      var counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        var $this = $(this);

        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": "#collapseItem" + counter,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: "collapseItem" + counter,
        });

        counter++;
      });
    }, 1000);

    $("body").on("click", ".arrow-collapse", function (e) {
      var $this = $(this);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    });

    $(window).resize(function () {
      var $this = $(this),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });

    $("body").on("click", ".js-menu-toggle", function (e) {
      var $this = $(this);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    });

    // click outisde offcanvas
    $(document).mouseup(function (e) {
      var container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    });
	
  };
  siteMenuClone();
});

$(document).ready(function () {
  var sub_width = 0;
  var sub_height = 0;
  $(".large").css(
    "background",
    "url('" + $(".small").attr("src") + "') no-repeat"
  );

  $(".zoom-area").mousemove(function (e) {
    if (!sub_width && !sub_height) {
      var image_object = new Image();
      image_object.src = $(".small").attr("src");
      sub_width = image_object.width;
      sub_height = image_object.height;
    } else {
      var magnify_position = $(this).offset();

      var mx = e.pageX - magnify_position.left;
      var my = e.pageY - magnify_position.top;

      if (mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
        $(".large").fadeIn(100);
      } else {
        $(".large").fadeOut(100);
      }
      if ($(".large").is(":visible")) {
        var rx =
          Math.round(
            (mx / $(".small").width()) * sub_width - $(".large").width() / 2
          ) * -1;
        var ry =
          Math.round(
            (my / $(".small").height()) * sub_height - $(".large").height() / 2
          ) * -1;

        var bgp = rx + "px " + ry + "px";

        var px = mx - $(".large").width() / 2;
        var py = my - $(".large").height() / 2;

        $(".large").css({ left: px, top: py, backgroundPosition: bgp });
      }
    }
  });
});

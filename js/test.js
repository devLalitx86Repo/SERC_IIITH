var rightJS = {
  init: function () {
    rightJS.Tags = document.querySelectorAll(".rightJS");
    for (var i = 0; i < rightJS.Tags.length; i++) {
      rightJS.Tags[i].style.overflow = "hidden";
    }
    rightJS.Tags = document.querySelectorAll(".rightJS div");
    for (var i = 0; i < rightJS.Tags.length; i++) {
      rightJS.Tags[i].style.position = "relative";
      rightJS.Tags[i].style.right =
        "-" + rightJS.Tags[i].parentElement.offsetWidth + "px";
    }
    rightJS.loop();
  },
  loop: function () {
    for (var i = 0; i < rightJS.Tags.length; i++) {
      var x = parseFloat(rightJS.Tags[i].style.right);
      x++;
      var W = rightJS.Tags[i].parentElement.offsetWidth;
      var w = rightJS.Tags[i].offsetWidth;
      if ((x / 500) * W > w) x = -W;
      if (
        rightJS.Tags[i].parentElement.parentElement.querySelector(":hover") !==
        rightJS.Tags[i].parentElement
      )
        rightJS.Tags[i].style.right = x + "px";
    }
    requestAnimationFrame(this.loop.bind(this));
  },
};
window.addEventListener("load", rightJS.init);








var magnifier = {
  init: function () {
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
              (my / $(".small").height()) * sub_height -
                $(".large").height() / 2
            ) * -1;

          var bgp = rx + "px " + ry + "px";

          var px = mx - $(".large").width() / 2;
          var py = my - $(".large").height() / 2;

          $(".large").css({ left: px, top: py, backgroundPosition: bgp });
        }
      }
    });
  },
};

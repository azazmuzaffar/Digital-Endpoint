/*----------------------------------------------------------

  Section # 1: Detect Data Loss

  Task # 1: Making Video/Dots fixed/default, 
  Task # 2: Changing Dots (active) and img src accordingly
  
------------------------------------------------------------*/

$(document).ready(function () {
  $(window).scroll(function () {
    /*----------------------------------------------------------
      Task # 1: Making Video/Dots fixed/default, 
    ------------------------------------------------------------*/

    // get current sroll position
    var scrollPosition = $(window).scrollTop();

    // get the offeset top of the section "Detect Data Loss"
    var offsetTop = $("#detect-data-loss").offset().top;
    // get the offeset bottom  of the section "Detect Data Loss"
    var offsetBottom = offsetTop + $("#detect-data-loss").outerHeight(true) - $(".detect-data-loss-view").height();

    // Set the Video & Dots Position to fixed
    if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
      $("#detect-data-loss").addClass("fixed");
    } else {
      $("#detect-data-loss").removeClass("fixed");
    }
    // Set the Video & Dots Position back to default
    if (scrollPosition > offsetBottom) {
      $("#detect-data-loss").addClass("absolute");
    } else {
      $("#detect-data-loss").removeClass("absolute");
    }

    /*----------------------------------------------------------
      Task # 2: Changing Dots (active) and img src accordingly
    ------------------------------------------------------------*/

    //get current sroll position
    var scrollPosition = $(window).scrollTop();

    //get the position of the containers
    var point_1 = $("#point-1").offset().top - $("#point-1").height() / 2,
      point_2 = $("#point-2").offset().top - $("#point-2").height() / 2,
      point_3 = $("#point-3").offset().top - $("#point-3").height() / 2,
      point_4 = $("#point-4").offset().top - $("#point-4").height() / 2;

    //get dots to make active accordingly
    var dot_1 = $("#dot-1"),
      dot_2 = $("#dot-2"),
      dot_3 = $("#dot-3"),
      dot_4 = $("#dot-4");

    // if the scroll position is the same as the position of the container specified
    // add the "active" class to the corresponding nav element
    if (scrollPosition >= point_1) {
      dot_1.siblings().removeClass("active");
      dot_1.addClass("active");
      imageSrc = $("#point-1").attr("data-src");
      $(".detect-data-loss-view img").replaceWith('<img src="./assets/img/' + imageSrc + '" />');
    }
    if (scrollPosition >= point_2) {
      dot_2.siblings().removeClass("active");
      dot_2.addClass("active");
      imageSrc = $("#point-2").attr("data-src");
      $(".detect-data-loss-view img").replaceWith('<img src="./assets/img/' + imageSrc + '" />');
    }
    if (scrollPosition >= point_3) {
      dot_3.siblings().removeClass("active");
      dot_3.addClass("active");
      imageSrc = $("#point-3").attr("data-src");
      $(".detect-data-loss-view img").replaceWith('<img src="./assets/img/' + imageSrc + '" />');
    }
    if (scrollPosition >= point_4) {
      dot_4.siblings().removeClass("active");
      dot_4.addClass("active");
      imageSrc = $("#point-4").attr("data-src");
      $(".detect-data-loss-view img").replaceWith('<img src="./assets/img/' + imageSrc + '" />');
    }
  });
});

/*----------------------------------------------------------

  Section # 2: Preventing Data Loss

  Task # 1: Swicth Classes by clicking h3 of each point / Desktop only, 
  Task # 2: Swicth Classes by Switch Controls / Mobile only, 
  
------------------------------------------------------------*/

/*----------------------------------------------------------
  Task # 1: Swicth Classes by clicking h3 of each point / Desktop only,
------------------------------------------------------------*/

$(document).ready(function () {
  $(".preventing-data-loss-point").on("click", "h3", function () {
    /* Switching Classes to make the clicked point active */
    $(".preventing-data-loss-point.active").removeClass("active");
    $(this).parent(".preventing-data-loss-point").addClass("active");
    /* Getting src, alt based on the active point and assigning to img */
    src = $(this).parent(".preventing-data-loss-point").attr("data-src");
    alt = $(this).text();
    $(".preventing-data-loss-image").replaceWith('<img class="preventing-data-loss-image" src="./assets/img/' + src + '"  alt="' + alt + '" />');
  });

  /*----------------------------------------------------------
  Task # 2: Swicth Classes by Switch Controls / Mobile only, 
------------------------------------------------------------*/

  /* Data Loss Points Switch Controls  */
  $(".switch-points").on("click", "button", function () {
    /* Switching Classes for Switch Controls */
    $(".switch-points .switch-to.active").removeClass("active");
    $(this).parent(".switch-to").addClass("active");
    /* Switching Classes for Data Loss Points */
    $(".preventing-data-loss-point.active").removeClass("active");
    target = $(this).attr("target");
    $(".preventing-data-loss-point." + target).addClass("active");
    /* Getting src/alt of target Data Loss point and changing image based on that */
    src = $(".preventing-data-loss-point." + target).attr("data-src");
    alt = $(".preventing-data-loss-point." + target).text();
    $(".preventing-data-loss-image").replaceWith('<img class="preventing-data-loss-image" src="./assets/img/' + src + '"  alt="' + alt + '" />');
  });
});

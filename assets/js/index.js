$(() => {
  $(".btn-scroll-top").click(() => window.scrollTo(0, 0));

  $(".menu-button").click(() => {
    $(".menu-responsive-container").show()
    setTimeout(() => {
      $(".menu-responsive-bg").css('opacity', '0.25');
      $(".menu-responsive").css('right', '0');
    }, 30)
  })

  $(".menu-responsive-container a").click(() => {
    $(".menu-responsive-bg").css('opacity', '0');
    $(".menu-responsive").css('right', '-300px');

    setTimeout(() => {
      $(".menu-responsive-container").hide()
    }, 300)
  })

  $(".menu-responsive-bg").click(() => {
    $(".menu-responsive-bg").css('opacity', '0');
    $(".menu-responsive").css('right', '-300px');

    setTimeout(() => {
      $(".menu-responsive-container").hide()
    }, 300)
  })
});

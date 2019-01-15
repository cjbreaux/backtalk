$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Woof!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
        });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
        });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
        });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      });
  });

    $("img#cat").click(function() {
      $("ul#user").prepend("<li>I'm the greatest. Bow down to me, you mangy fleabag.</li>");
      $("ul#webpage").prepend("<li>As if. I'm a stylin' doggo.</li>");
      $("ul#user").children("li").first().click(function() {
        $(this).remove();
          });
      $("ul#webpage").children("li").first().click(function() {
        $(this).remove();
        });
    });

      $("img#dog").click(function() {
        $("ul#user").prepend("<li>You aren't fooling anyone, Dog.</li>");
        $("ul#webpage").prepend("<li>Check me out, Cat. I'm rockin' these shades.</li>");
        $("ul#user").children("li").first().click(function() {
          $(this).remove();
            });
        $("ul#webpage").children("li").first().click(function() {
          $(this).remove();
          });
      });
});

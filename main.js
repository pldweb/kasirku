// Logo On Scroll
   
   $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".navbar-brand img").attr("src", "assets/kasirku-primary.png");
      }
      if ($(this).scrollTop() < 1) {
        $(".navbar-brand img").attr("src", "assets/kasirku-white.png");
      }
    });
  });

  // Parallax

  $(document).ready(function () {
    $(window).on("load scroll", function () {
      var parallaxElement = $(".parallax-image"),
        parallaxQuantity = parallaxElement.length;
      window.requestAnimationFrame(function () {
        for (var i = 0; i < parallaxQuantity; i++) {
          var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top,
            elementHeight = currentElement.height(),
            viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
            scrolled = windowTop - elementTop + viewPortHeight;
          currentElement.css({
            transform: "translate3d(0," + scrolled * -0.15 + "px, 0)",
          });
        }
      });
    });
  });

  // Client Logo Slider

  $(document).ready(function () {
    $(".slider-1").slick({
      autoplay: true,
      autoplaySpeed: 600,
      dots: false,
      arrows: true,
      speed: 2000,
      infinite: true,
      slidesToShow: 6,
      slidestoScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });

  // Kurir Logo Slider

  $(document).ready(function () {
    $(".slider-2").slick({
      autoplay: true,
      autoplaySpeed: 300,
      dots: false,
      arrows: true,
      speed: 2000,
      infinite: true,
      slidesToShow: 6,
      slidestoScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });


  // Fixed Navbar Scroll

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });


  // FAQ Section

  const items = document.querySelectorAll(".card a.card-link");

      function toggleAccordion() {
        const itemToggle = this.getAttribute("aria-expanded");

        for (i = 0; i < items.length; i++) {
          items[i].setAttribute("aria-expanded", "false");
        }

        if (itemToggle == "false") {
          this.setAttribute("aria-expanded", "true");
        }
      }

      items.forEach((item) => item.addEventListener("click", toggleAccordion));



      // Typewritter

      var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
          delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function () {
          that.tick();
        }, delta);
      };

      window.onload = function () {
        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-type");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };
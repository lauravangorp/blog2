window.addEventListener("scroll", function() {
      let scrollPositiePx = window.pageYOffset;
      console.log(scrollPositiePx);
      if (scrollPositiePx > 160) {
            document.querySelector("header").classList.add("fixed");
      } else {
            document.querySelector("header").classList.remove("fixed");
      };
})

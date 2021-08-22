
      const about = document.querySelector(".about");
      window.addEventListener("scroll", () => {
        const windowHeight = window.innerHeight;
        const defaultArea = 350;
        const aboutTop = about.getBoundingClientRect().top;
        if (windowHeight > aboutTop + defaultArea) {
          about.classList.add("active");
        } else {
          about.classList.remove("active");
        }
      });
   
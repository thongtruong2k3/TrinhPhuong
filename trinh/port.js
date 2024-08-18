window.addEventListener('scroll', function() {
    var projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
      var projectTop = project.getBoundingClientRect().top;
      var projectBottom = project.getBoundingClientRect().bottom;
      var windowHeight = window.innerHeight;
      var rect=project.getBoundingClientRect();
      var projectPosition = project.getBoundingClientRect().y
      if (projectPosition>-200) {
        project.classList.add(`in`);
        project.classList.remove(`out`);

      } else {
        project.classList.add(`out`);
        project.classList.remove(`in`);
      }
    });
  });

  const wrappers = document.querySelectorAll(".scroller_wrapper");

  if (!window.matchMedia("(prefers-reduce-motion:reduce)").matches) {
    addAnimation();
  }
  function addAnimation() {
    console.log("here")
  wrappers.forEach((wrapper) => {
    const scrollers = wrapper.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated",true)
      console.log("here")
    });
  });
  }














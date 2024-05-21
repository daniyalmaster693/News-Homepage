document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const expandHeader = document.querySelector(".expand-header");
  const closeHeader = document.querySelector(".close-header");
  const expandedHeader = document.querySelector(".expanded-header");

  function showHeader() {
    expandedHeader.style.display = "flex";
    expandHeader.style.display = "none";
    closeHeader.style.display = "block";
    body.style.backgroundColor = "#807e89";
  }
  function hideHeader() {
    expandedHeader.style.display = "none";
    expandHeader.style.display = "block";
    closeHeader.style.display = "none ";
    body.style.backgroundColor = "#fefdf9";
  }

  function hideExpandHeader() {
    if (window.innerWidth > 845) {
      expandHeader.style.display = "none";
      closeHeader.style.display = "none";
      expandedHeader.style.display = "none";
    } else {
      expandHeader.style.display = "block";
    }
  }

  expandHeader.addEventListener("click", showHeader);
  closeHeader.addEventListener("click", hideHeader);
  window.addEventListener("resize", hideExpandHeader);
});

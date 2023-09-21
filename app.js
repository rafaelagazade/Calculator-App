const basicBtn = document.querySelector(".basic ");
const complexBtn = document.querySelector(".complex ");
const themeToggleBtn = document.querySelector(".theme-toggle ");
const view = document.querySelector(".view");
const viewParent = document.querySelector(".calculator-view");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("body");
const box = document.querySelector("calculator-box");

const basicBack = document.querySelector(".basic p");
const complexBack = document.querySelector(".complex p");
const themeToggleBack = document.querySelector(".theme-toggle p");
const backSign = document.querySelector(".fa-chevron-left");

document.addEventListener("DOMContentLoaded", init);

function init() {
  let querry = window.matchMedia("(max-width: 425px)");

  if (querry.matches) {
    basicBtn.addEventListener("click", () => {
      window.scrollBy(0, 2000);
    });
    complexBtn.addEventListener("click", () => {
      window.scrollBy(0, 2000);
    });
    themeToggleBtn.addEventListener("click", () => {
      window.scrollBy(0, 2000);
    });
    closeBtn.addEventListener("click", () => {
      window.scrollBy(0, -700);
    });
  } else {
  }
}

window.addEventListener("load", () => {
  view.style.display = "none";
  viewParent.style.background = "transparent";
});

basicBtn.onclick = () => {
  view.style.display = "block";
  view.setAttribute("src", "./calculator_basic/calculate.html");
  body.style.background = "#22262d";
  view.style.border = "10px solid #22262d";
  basicBtn.style.background = "#22262d";
  basicBtn.style.border = "5px solid #22262d";
  basicBtn.style.borderRight = "5px solid white";
  themeToggleBtn.style.background = "#22262d";
  themeToggleBtn.style.border = "5px solid white";
  themeToggleBtn.style.borderRight = "5px solid white";
  complexBtn.style.background = "#22262d";
  complexBtn.style.border = "5px solid white";
  complexBtn.style.borderRight = "5px solid white";
  closeBtn.style.background = "#22262d";
  basicBtn.onmouseout = (event) => {
    basicBtn.style.border = "5px solid white";
  };
  basicBtn.onmouseover = (event) => {
    basicBtn.style.border = "5px solid #22262d";
    basicBtn.style.borderRight = "5px solid white";
    basicBtn.onmouseout = (event) => {
      basicBtn.style.border = "5px solid white";
    };
  };
  complexBtn.onmouseover = (event) => {
    complexBtn.style.border = "5px solid #22262d";
    complexBtn.style.borderRight = "5px solid white";
    complexBtn.onmouseout = (event) => {
      complexBtn.style.border = "5px solid white";
    };
  };
  themeToggleBtn.onmouseover = (event) => {
    themeToggleBtn.style.border = "5px solid #22262d";
    themeToggleBtn.style.borderRight = "5px solid white";
    themeToggleBtn.onmouseout = (event) => {
      themeToggleBtn.style.border = "5px solid white";
    };
  };
  closeBtn.onmouseover = () => {
    closeBtn.style.background = "red";
    closeBtn.onmouseout = () => {
      closeBtn.style.background = "#22262d";
    };
  };
};

complexBtn.onclick = () => {
  view.style.display = "block";
  view.setAttribute("src", "calculator_complex/calculator-2.html");
  body.style.background = "#1f2229";
  view.style.border = "10px solid #1f2229";
  basicBtn.style.background = "#1f2229";
  basicBtn.style.border = "5px solid white";
  basicBtn.style.borderRight = "5px solid white";
  complexBtn.style.background = "#1f2229";
  complexBtn.style.border = "5px solid #1f2229";
  complexBtn.style.borderRight = "5px solid white";
  themeToggleBtn.style.background = "#1f2229";
  themeToggleBtn.style.border = "5px solid white";
  themeToggleBtn.style.borderRight = "5px solid white";
  closeBtn.style.background = "#1f2229";
  basicBtn.onmouseover = (event) => {
    basicBtn.style.border = "5px solid #1f2229";
    basicBtn.style.borderRight = "5px solid white";
    basicBtn.onmouseout = (event) => {
      basicBtn.style.border = "5px solid white";
    };
  };
  complexBtn.onmouseover = (event) => {
    complexBtn.style.border = "5px solid #1f2229";
    complexBtn.style.borderRight = "5px solid white";
    complexBtn.onmouseout = (event) => {
      complexBtn.style.border = "5px solid white";
    };
  };
  themeToggleBtn.onmouseover = (event) => {
    themeToggleBtn.style.border = "5px solid #1f2229";
    themeToggleBtn.style.borderRight = "5px solid white";
    themeToggleBtn.onmouseout = (event) => {
      themeToggleBtn.style.border = "5px solid white";
    };
  };
  closeBtn.onmouseover = () => {
    closeBtn.style.background = "red";
    closeBtn.onmouseout = () => {
      closeBtn.style.background = "#1f2229";
    };
  };
};

themeToggleBtn.onclick = () => {
  view.style.display = "block";
  view.setAttribute("src", "calculator_theme_toggle/calculatorV3.html");
  body.style.background = "#071115";
  view.style.border = "10px solid #071115";
  themeToggleBtn.style.background = "#071115";
  themeToggleBtn.style.border = "5px solid #071115";
  themeToggleBtn.style.borderRight = "5px solid white";
  basicBtn.style.background = "#071115";
  basicBtn.style.border = "5px solid white";
  basicBtn.style.borderRight = "5px solid white";
  complexBtn.style.background = "#071115";
  complexBtn.style.border = "5px solid white";
  complexBtn.style.borderRight = "5px solid white";
  closeBtn.style.background = "#071115";
  basicBtn.onmouseover = (event) => {
    basicBtn.style.border = "5px solid #071115";
    basicBtn.style.borderRight = "5px solid white";
    basicBtn.onmouseout = (event) => {
      basicBtn.style.border = "5px solid white";
      basicBtn.style.borderRight = "5px solid white";
    };
  };
  complexBtn.onmouseover = (event) => {
    complexBtn.style.border = "5px solid #071115";
    complexBtn.style.borderRight = "5px solid white";
    complexBtn.onmouseout = (event) => {
      complexBtn.style.border = "5px solid white";
      complexBtn.style.borderRight = "5px solid white";
    };
  };
  themeToggleBtn.onmouseover = (event) => {
    themeToggleBtn.style.border = "5px solid #071115";
    themeToggleBtn.style.borderRight = "5px solid white";
    themeToggleBtn.onmouseout = (event) => {
      themeToggleBtn.style.border = "5px solid white";
      themeToggleBtn.style.borderRight = "5px solid white";
    };
  };
  closeBtn.onmouseover = () => {
    closeBtn.style.background = "red";
    closeBtn.onmouseout = () => {
      closeBtn.style.background = "#071115";
    };
  };
};

closeBtn.onclick = () => {
  view.style.display = "none";
  viewParent.style.background = "rgb(9, 9, 17)";
  basicBtn.style.background = "rgb(9, 9, 17)";
  basicBtn.style.border = "5px solid rgb(9, 9, 17)";
  basicBtn.style.borderRight = "5px solid white";
  themeToggleBtn.style.background = "rgb(9, 9, 17)";
  themeToggleBtn.style.border = "5px solid rgb(9, 9, 17)";
  themeToggleBtn.style.borderRight = "5px solid white";
  complexBtn.style.background = "rgb(9, 9, 17)";
  complexBtn.style.border = "5px solid rgb(9, 9, 17)";
  complexBtn.style.borderRight = "5px solid white";
  body.style.background = "rgb(9, 9, 17)";
  closeBtn.style.background = "rgb(9, 9, 17)";
  basicBtn.style.border = "5px solid white";
  complexBtn.style.border = "5px solid white";
  themeToggleBtn.style.border = "5px solid white";
  basicBtn.onmouseover = (event) => {
    basicBtn.style.border = "5px solid rgb(9, 9, 17)";
    basicBtn.style.borderRight = "5px solid white";
    basicBtn.onmouseout = (event) => {
      basicBtn.style.border = "5px solid white";
      basicBtn.style.borderRight = "5px solid white";
    };
  };
  complexBtn.onmouseover = (event) => {
    complexBtn.style.border = "5px solid rgb(9, 9, 17)";
    complexBtn.style.borderRight = "5px solid white";
    complexBtn.onmouseout = (event) => {
      complexBtn.style.border = "5px solid white";
      complexBtn.style.borderRight = "5px solid white";
    };
  };
  themeToggleBtn.onmouseover = (event) => {
    themeToggleBtn.style.border = "5px solid rgb(9, 9, 17)";
    themeToggleBtn.style.borderRight = "5px solid white";
    themeToggleBtn.onmouseout = (event) => {
      themeToggleBtn.style.border = "5px solid white";
      themeToggleBtn.style.borderRight = "5px solid white";
    };
  };
  closeBtn.onmouseover = () => {
    closeBtn.style.background = "red";
    closeBtn.onmouseout = () => {
      closeBtn.style.background = "rgb(9, 9, 17)";
    };
  };
};

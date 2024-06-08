let url = new URLSearchParams(window.location.search).get("lang");
console.log(url);
let stateColor = JSON.parse(localStorage.getItem("stateColor")) || ["default","linear-gradient(120deg, rgb(2, 2, 77), black 50%)","#fff", "#FFE200",false];
let police = JSON.parse(localStorage.getItem("police"));
let size = JSON.parse(localStorage.getItem("size"));

/* Change color page */

changeColorPage("noirBlanc", "#fff", "#000", "#0100A9", true);
changeColorPage("noirJaune", "#FAF1BC", "#000000", "#0100A9", true);
changeColorPage("brunSaumon", "#FFBF86", "#0100A9", "#64001D", true);
changeColorPage("mauveBlanc", "#FFFFFF", "#4D00FF", "#64001D", true);
changeColorPage("blancBleu", "#002639", "#FFFFFF", "#FFE200");
changeColorPage("jauneBleu", "#002639", "#FFE200", "#FFFFFF");
changeColorPage("cielBleu", "#002639", "#82FFFF", "#FFFFFF");
changeColorPage("limeBleu", "#002639", "#00FF00", "#FFFFFF");
changeColorPage("blancNoir", "#000000", "#FFFFFF", "#FFE200");
changeColorPage("jauneNoir", "#000000", "#FFE200", "#FFFFFF");
changeColorPage("cielNoir", "#000000", "#82FFFF", "#FFFFFF");
changeColorPage("limeNoir", "#000000", "#00FF00", "#FFFFFF");

fontSize(size);
fontType(police);
colorChange(stateColor)

switchLanguages(url);

reset();

handleGrey(); // trigger the grey mode change

getLang("btn-fr", "Français");
getLang("btn-ger", "Deutsch");
getLang("btn-it", "Italiano");
getLang("btn-eng", "English");
getLang("btn-grec", "Ellinika");


function switchLanguages(url) {
  switch (url) {
    case "Français":
      languages("Français");
      break;
    case "Deutsch":
      languages("Deutsch");
      break;
    case "Italiano":
      languages("Italiano");
      break;
    case "English":
      languages("English");
      break;
    case "Ellinika":
      languages("Ellinika");
      break;
    default:
      languages("Français");
      break;
  }
}

function fontSize(size) {
  const html = document.querySelector(":not(.container)");
  html.style.fontSize = size;
}
function fontType(police) {
  const body = document.getElementById("grey");
  body.classList.add(police);
}

/* buttons menu sizes change */

const btnsSizes = document.querySelectorAll(
  "ul.dropdown-menu-taille > li > button"
);

const valuesSizes = ["8px", "12px", "16px", "18px", "20px", "22px"];

/* buttons funtions change */

changeSize(valuesSizes[0], btnsSizes[0], "50px");
changeSize(valuesSizes[1], btnsSizes[1], "75px");
changeSize(valuesSizes[2], btnsSizes[2]);
changeSize(valuesSizes[3], btnsSizes[3]);
changeSize(valuesSizes[4], btnsSizes[4]);
changeSize(valuesSizes[5], btnsSizes[5]);


async function colorChange(array = ["default", "linear-gradient(120deg, rgb(2, 2, 77), black 50%)", "#fff", "#FFE200", false]) {
  const body = document.getElementById("grey");
  const links = document.querySelectorAll("a:not(.lien-cards):not(.damier-link):not(div.Histoire > a):not(div.Qui > a):not(div.Yukaa > a):not(div.Kiraa > a)");
  const textes = document.getElementsByTagName("p");
  const span = document.getElementsByTagName("span");
  const blockquote = document.querySelectorAll(".blockquote");
  const figcaptions = document.getElementsByTagName("figcaption");
  const h1 = document.getElementsByTagName("h1");
  const h2 = document.getElementsByTagName("h2:not(section.containerAbout > div > a");
  const h3 = document.querySelectorAll("h3:not(.daminer-original-color)");
  const h4 = document.querySelectorAll("h4:not(.daminer-original-color)");
  const h5 = document.getElementsByTagName("h5");
  const h6 = document.getElementsByTagName("h6");
  body.style.background = array[1];
  Array.from(links).forEach((link) => {
    link.style.color = array[3];
    link.addEventListener("focus", function () {
      link.style.color = "#ffffff";
    });
    link.addEventListener("blur", function () {
      link.style.color = array[3];
    });
    link.addEventListener("mouseenter", () => {
      link.style.color = "#ffffff";
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = array[3];
    });
  });
  Array.from(textes).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(figcaptions).forEach((figcaption) => {
    figcaption.style.color = array[2];
  });
  Array.from(h1).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h2).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h3).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h4).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h5).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(h6).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(span).forEach((text) => {
    text.style.color = array[2];
  });
  Array.from(blockquote).forEach((text) => {
    text.style.color = array[2];
  });
  await Promise.all([
    logoColor(array[4]),
    logoColorGr(array[4]),
    logoColorIt(array[4]),
    logoColorEng(array[4]),
    logoColorGrg(array[4])
  ]);
  return;
}

async function logoColor(boolean) {
    const s1 = document.querySelectorAll(".s1");
    const s3 = document.querySelectorAll(".s3");
    const s4 = document.querySelectorAll(".s4");
    const s6 = document.querySelectorAll(".s6");
    const s8 = document.querySelectorAll(".s8");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1.forEach((s) => {
        s.style.fill = dark;
      });
      s3.forEach((s) => {
        s.style.fill = dark;
      });
      s4.forEach((s) => {
        s.style.fill = dark;
      });
      s6.forEach((s) => {
        s.style.fill = dark;
      });
      s8.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1.forEach((s) => {
        s.style.fill = light;
      });
      s3.forEach((s) => {
        s.style.fill = light;
      });
      s4.forEach((s) => {
        s.style.fill = light;
      });
      s6.forEach((s) => {
        s.style.fill = light;
      });
      s8.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorGr(boolean) {
    const s1g = document.querySelectorAll(".s1g");
    const s2g = document.querySelectorAll(".s2g");
    const s4g = document.querySelectorAll(".s4g");
    const s6g = document.querySelectorAll(".s6g");
    const s7g = document.querySelectorAll(".s7g");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1g.forEach((s) => {
        s.style.fill = dark;
      });
      s2g.forEach((s) => {
        s.style.fill = dark;
      });
      s4g.forEach((s) => {
        s.style.fill = dark;
      });
      s6g.forEach((s) => {
        s.style.fill = dark;
      });
      s7g.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1g.forEach((s) => {
        s.style.fill = light;
      });
      s2g.forEach((s) => {
        s.style.fill = light;
      });
      s4g.forEach((s) => {
        s.style.fill = light;
      });
      s6g.forEach((s) => {
        s.style.fill = light;
      });
      s7g.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorIt(boolean) {
    const s1i = document.querySelectorAll(".s1i");
    const s3i = document.querySelectorAll(".s3i");
    const s4i = document.querySelectorAll(".s4i");
    const s6i = document.querySelectorAll(".s6i");
    const s7i = document.querySelectorAll(".s7i");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1i.forEach((s) => {
        s.style.fill = dark;
      });
      s3i.forEach((s) => {
        s.style.fill = dark;
      });
      s4i.forEach((s) => {
        s.style.fill = dark;
      });
      s6i.forEach((s) => {
        s.style.fill = dark;
      });
      s7i.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1i.forEach((s) => {
        s.style.fill = light;
      });
      s3i.forEach((s) => {
        s.style.fill = light;
      });
      s4i.forEach((s) => {
        s.style.fill = light;
      });
      s6i.forEach((s) => {
        s.style.fill = light;
      });
      s7i.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorEng(boolean) {
    const s1en = document.querySelectorAll(".s1en");
    const s3en = document.querySelectorAll(".s3en");
    const s5en = document.querySelectorAll(".s5en");
    const s6en = document.querySelectorAll(".s6en");
    const s7en = document.querySelectorAll(".s7en");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1en.forEach((s) => {
        s.style.fill = dark;
      });
      s3en.forEach((s) => {
        s.style.fill = dark;
      });
      s5en.forEach((s) => {
        s.style.fill = dark;
      });
      s6en.forEach((s) => {
        s.style.fill = dark;
      });
      s7en.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1en.forEach((s) => {
        s.style.fill = light;
      });
      s3en.forEach((s) => {
        s.style.fill = light;
      });
      s5en.forEach((s) => {
        s.style.fill = light;
      });
      s6en.forEach((s) => {
        s.style.fill = light;
      });
      s7en.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

async function logoColorGrg(boolean) {
    const s1grg = document.querySelectorAll(".s1grg");
    const s3grg = document.querySelectorAll(".s3grg");
    const s5grg = document.querySelectorAll(".s5grg");
    const s6grg = document.querySelectorAll(".s6grg");
    const s7grg = document.querySelectorAll(".s7grg");
    const dark = "#000";
    const light = "#fff";
    if (boolean) {
      s1grg.forEach((s) => {
        s.style.fill = dark;
      });
      s3grg.forEach((s) => {
        s.style.fill = dark;
      });
      s5grg.forEach((s) => {
        s.style.fill = dark;
      });
      s6grg.forEach((s) => {
        s.style.fill = dark;
      });
      s7grg.forEach((s) => {
        s.style.fill = dark;
      });
    } else {
      s1grg.forEach((s) => {
        s.style.fill = light;
      });
      s3grg.forEach((s) => {
        s.style.fill = light;
      });
      s5grg.forEach((s) => {
        s.style.fill = light;
      });
      s6grg.forEach((s) => {
        s.style.fill = light;
      });
      s7grg.forEach((s) => {
        s.style.fill = light;
      });
    }
    return;
}

    /* logo */

function changeColorPage(
  nameColor,
  backColor,
  frontColor,
  secondaryColor,
  flag = false
) {
  const btns = document.querySelectorAll(".dropdown-menu-color > li > button");
  const body = document.getElementById("grey");
  const links = document.querySelectorAll("a:not(.lien-cards):not(.damier-link):not(div.Histoire > a):not(div.Qui > a):not(div.Yukaa > a):not(div.Kiraa > a)");
  const textes = document.getElementsByTagName("p");
  const span = document.getElementsByTagName("span");
  const blockquote = document.querySelectorAll(".blockquote");
  const figcaptions = document.getElementsByTagName("figcaption");
  const h1 = document.getElementsByTagName("h1");
  const h2 = document.getElementsByTagName("h2:not(section.containerAbout > div > a");
  const h3 = document.querySelectorAll("h3:not(.daminer-original-color)");
  const h4 = document.querySelectorAll("h4:not(.daminer-original-color)");
  const h5 = document.getElementsByTagName("h5");
  const h6 = document.getElementsByTagName("h6");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains(nameColor)) {
        localStorage.setItem(
          "stateColor",
          JSON.stringify([
            nameColor,
            backColor,
            frontColor,
            secondaryColor,
            flag,
          ])
        );
        logoColor(flag);
        logoColorGr(flag);
        logoColorIt(flag);
        logoColorEng(flag);
        logoColorGrg(flag);
        body.style.background = backColor;
        Array.from(links).forEach((link) => {
          link.style.color = secondaryColor;
          link.addEventListener("focus", function () {
            link.style.color = "#ffffff";
          });
          link.addEventListener("blur", function () {
            link.style.color = secondaryColor;
          });
          link.addEventListener("mouseenter", () => {
            link.style.color = "#ffffff";
          });
          link.addEventListener("mouseleave", () => {
            link.style.color = secondaryColor;
          });
        });
        Array.from(textes).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(figcaptions).forEach((figcaption) => {
          figcaption.style.color = frontColor;
        });
        Array.from(h1).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h2).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h3).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h4).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h5).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(h6).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(span).forEach((text) => {
          text.style.color = frontColor;
        });
        Array.from(blockquote).forEach((text) => {
          text.style.color = frontColor;
        });
      }
    });
  });
}


/* Size change */

function changeSize(size, button, lineHieght = "150px") {
  const html = document.querySelector(":not(.container)");
  const paragraphe = document.querySelector(".paragraphe_accueil");
  button.addEventListener("click", () => {
    html.style.fontSize = size;
    paragraphe.style.lineHeight = lineHieght;
    localStorage.setItem("size", JSON.stringify(size));
  });
}

/* Niveau de gris */

function handleGrey() {
  const btn = document.getElementById("grey-screen");
  const body = document.querySelector("body");
  btn.addEventListener("click", () => {
    if (body.classList.contains("grey") && grey) {
      body.style.filter = "unset";
      body.classList.remove("grey");
    } else {
      body.style.filter = "grayscale(100%)";
      body.classList.add("grey");
    }
  });
}

/* Change the font */

function changeFont(police = "Verdana") {
  const body = document.getElementById("grey");
  if (police === "LexieReadable") {
    body.classList.add("LexieReadable");
    body.classList.remove("Luciole");
    body.classList.remove("Verdana");
    localStorage.setItem("police", JSON.stringify(police));
  } else if (police === "Luciole") {
    body.classList.remove("LexieReadable");
    body.classList.remove("Verdana");
    body.classList.add("Luciole");
    localStorage.setItem("police", JSON.stringify(police));
  } else {
    body.classList.add("Verdana");
    body.classList.remove("LexieReadable");
    body.classList.remove("Luciole");
    localStorage.setItem("police", JSON.stringify(police));
  }
}

document.getElementById("Luciole").addEventListener("click", function () {
  changeFont("Luciole");
});

document.getElementById("LexieReadable").addEventListener("click", function () {
  changeFont("LexieReadable");
});

document.getElementById("Verdana").addEventListener("click", function () {
  changeFont();
});

/* Handle language traduction */

function displayLang(data) {
    head(data);
    header(data);
    menu(data);
    mainAbout(data);
    footer(data);
  }
  
  async function retrieveData() {
    try {
      const response = await fetch("../data.json");
      if (!response.ok) {
        console.error("Error loading data");
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
  
  function languages(lang) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("lang", lang);
    const newUrl = window.location.pathname + "?" + urlParams.toString();
    window.history.pushState({}, "", newUrl);
    retrieveData()
      .then((data) => {
        switch (lang) {
          case "Français":
            displayLang(data.french);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(stateColor) : colorChange();
            break;
          case "Deutsch":
            displayLang(data.germany);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(stateColor) : colorChange();
            break;
          case "Italiano":
            displayLang(data.italy);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(stateColor) : colorChange();
            break;
          case "English":
            displayLang(data.english);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(stateColor) : colorChange();
            break;
          case "Ellinika":
            displayLang(data.greek);
            stateColor = JSON.parse(localStorage.getItem("stateColor"));
            stateColor ? colorChange(stateColor) : colorChange();
            break;
          default:
            throw new Error("Unknown language");
        }
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  }
  
  function getLang(id, lang) {
    const btn = document.getElementById(id);
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("lang", lang);
      const newUrl = window.location.pathname + "?" + urlParams.toString();
      window.history.pushState({}, "", newUrl);
      retrieveData()
        .then((data) => {
          switch (lang) {
            case "Français":
              displayLang(data.french);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              stateColor ? colorChange(stateColor) : colorChange();
              break;
            case "Deutsch":
              displayLang(data.germany);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              stateColor ? colorChange(stateColor) : colorChange();
              break;
            case "Italiano":
              displayLang(data.italy);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              stateColor ? colorChange(stateColor) : colorChange();
              break;
            case "English":
              displayLang(data.english);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              stateColor ? colorChange(stateColor) : colorChange();
              break;
            case "Ellinika":
              displayLang(data.greek);
              stateColor = JSON.parse(localStorage.getItem("stateColor"));
              stateColor ? colorChange(stateColor) : colorChange();
              break;
            default:
              throw new Error("Unknown language");
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  }
  
  function head(data) {
    const lang = document.getElementsByTagName("html")[0];
    lang.lang = data.head.lang;
    const title = document.getElementsByTagName("title")[0];
    title.innerHTML = data.head.title;
    const metaTags = document.getElementsByTagName("meta");
    for (let i = 0; i < metaTags.length; i++) {
      if (metaTags[i].getAttribute("name") === "description") {
        metaTags[i].content = data.head.description;
      }
    }
  }
  
  function header(data) {
    const svg = document.getElementsByTagName("svg")[0];
    svg.innerHTML = data.header.svg;
    const linkHref = document.querySelector("div.en-tete > a.logo");
    linkHref.href = data.header.linkLogo;
    linkHref.ariaLabel = data.header.ariaTitle;
  }
  
  function menu(data) {
    const menuArrays = document.querySelectorAll("nav > ul.menu > li > a");
    for (let i = 0; i < data.header.menu.length; i++) {
      menuArrays[i].innerHTML = data.header.menu[i];
      menuArrays[i].href = data.header.linksMenu[i].split('/').splice(1, 1).join('/');
    }
    const imgs = document.querySelectorAll("div.langues > ul > li > a > img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].alt = data.header.langues[i];
    }
  }

  function mainAbout(data) {
    const img = document.querySelector('.banner-img');
    img.alt = data.mainAbout.banniere.alt;
    const citations = document.querySelector("#grey > main > section.citation > blockquote > p:nth-child(2)");
    citations.innerHTML = data.mainAbout.blockquote.citations;
    const blockquote = document.querySelector("#grey > main > section.citation > blockquote > footer");
    blockquote.innerHTML = data.mainAbout.blockquote.blockquote;
    const footerQuotes = document.querySelector("#grey > main > section.citation > blockquote > p:nth-child(6)");
    footerQuotes.innerHTML = data.mainAbout.blockquote.paraph;
    const titles = document.querySelectorAll("#grey > main > section.containerAbout > div > a > div > h2");
    titles.forEach((title, index) => {
      title.innerHTML = data.mainAbout.constainerAbout[index];
    })
    const histoire = document.querySelector("#histoire > div:nth-child(1) > span");
    histoire.innerHTML = data.mainAbout.about.histoire.title;
    const paragraphesHistoire = document.querySelectorAll("#histoire > p");
    paragraphesHistoire.forEach((paragraph, index) => {
      paragraph.innerHTML = data.mainAbout.about.histoire.paragraphes[index];
    });
    const figcaption = document.querySelector("#histoire > figure > figcaption");
    figcaption.innerHTML = data.mainAbout.about.histoire.figcaption;
    const titleQui = document.querySelector("#quiSuisJe > div:nth-child(1) > span");
    titleQui.innerHTML = data.mainAbout.about.qui.title;
    const quis = document.querySelectorAll("#quiSuisJe > p");
    quis.forEach((qui,index)=>{
      qui.innerHTML = data.mainAbout.about.qui.paragraphes[index];
    });
    const yukaa = document.querySelector("#yukaa > div:nth-child(1) > span");
    yukaa.innerHTML = data.mainAbout.about.yukaa.title;
    const yukaaP = document.querySelectorAll("#yukaa > p");
    yukaaP.forEach((p,index)=>{
      p.innerHTML = data.mainAbout.about.yukaa.paragraphes[index];
    });
    const kiraa = document.querySelector("#kiraa > div > span");
    kiraa.innerHTML = data.mainAbout.about.kiraa.title;
    const kiraaP = document.querySelectorAll("#kiraa > p");
    kiraaP.forEach((p,index)=>{
      p.innerHTML = data.mainAbout.about.kiraa.paragraphes[index];

    })
    const ancres = document.querySelectorAll("#menuLateral > li > a");
    ancres.forEach((ancre,index)=>{
      ancre.innerHTML = data.mainAbout.constainerAbout[index];
    })

  }
  
  function footer(data) {
    const lineImg = document.querySelector("div.line_break > img");
    lineImg.alt = data.footer.lineBreak.alt;
    const groupImg1 = document.querySelectorAll(
      "div.container > a > div > div > img"
    );
    const groupImg2 = document.querySelectorAll("div.container > a > div > img");
    groupImg1[0].alt = data.footer.damier.case1.titleAlt;
    groupImg1[1].alt = data.footer.damier.case2.titleAlt;
    groupImg1[2].alt = data.footer.damier.case3.titleAlt;
    groupImg1[3].alt = data.footer.damier.case7.titleAlt;
    groupImg1[4].alt = data.footer.damier.case8.titleAlt;
    groupImg1[5].alt = data.footer.damier.case9.titleAlt;
    groupImg2[0].alt = data.footer.damier.case4.titleAlt;
    groupImg2[1].alt = data.footer.damier.case5.titleAlt;
    groupImg2[2].alt = data.footer.damier.case6.titleAlt;
    const titleH3 = document.querySelectorAll(
      "div.container > a > div > div > h3"
    );
    const titleH4Group1 = document.querySelectorAll(
      "div.container > a > div > h4"
    );
    const titleH4Group2 = document.querySelectorAll(
      "div.container > a > div > div > h4"
    );
    titleH3[0].innerHTML = data.footer.damier.case1.title3;
    titleH3[1].innerHTML = data.footer.damier.case2.title3;
    titleH3[2].innerHTML = data.footer.damier.case3.title3;
    titleH4Group1[0].innerHTML = data.footer.damier.case4.title4;
    titleH4Group1[1].innerHTML = data.footer.damier.case5.title4;
    titleH4Group1[2].innerHTML = data.footer.damier.case6.title4;
    titleH4Group2[0].innerHTML = data.footer.damier.case7.title4;
    titleH4Group2[1].innerHTML = data.footer.damier.case8.title4;
    titleH4Group2[2].innerHTML = data.footer.damier.case9.title4;
    const linksSubFooter = document.querySelectorAll(
      "div.sub-container > div > ul > li a"
    );
    for (let i = 0; i < linksSubFooter.length; i++) {
      linksSubFooter[i].innerHTML = data.footer.subMenuFooter[i];
    }
    const textSubFooter = document.querySelectorAll(
      "section.sub-footer > div.elements-footer > h3"
    );
    for (let i = 0; i < textSubFooter.length; i++) {
      textSubFooter[i].innerHTML = data.footer.subFooter[i];
    }
  }
  
  async function colorChangeDefault(array) {
    const body = document.getElementById("grey");
    const links = document.querySelectorAll("a:not(.lien-cards):not(.damier-link):not(div.Histoire > a):not(div.Qui > a):not(div.Yukaa > a):not(div.Kiraa > a)");
    const textes = document.getElementsByTagName("p");
    const span = document.getElementsByTagName("span");
    const blockquote = document.querySelectorAll(".blockquote");
    const figcaptions = document.getElementsByTagName("figcaption");
    const h1 = document.getElementsByTagName("h1");
    const h2 = document.getElementsByTagName("h2:not(section.containerAbout > div > a");
    const h3 = document.querySelectorAll("h3:not(.daminer-original-color)");
    const h4 = document.querySelectorAll("h4:not(.daminer-original-color)");
    const h5 = document.getElementsByTagName("h5");
    const h6 = document.getElementsByTagName("h6");
    body.style.background = array[1];
    Array.from(links).forEach((link) => {
      link.style.color = array[3];
      link.addEventListener("focus", function () {
        link.style.color = "#ffffff";
      });
      link.addEventListener("blur", function () {
        link.style.color = array[2];
      });
      link.addEventListener("mouseenter", () => {
        link.style.color = "#ffffff";
      });
      link.addEventListener("mouseleave", () => {
        link.style.color = array[3];
      });
    });
    Array.from(textes).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(figcaptions).forEach((figcaption) => {
      figcaption.style.color = array[2];
    });
    Array.from(h1).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h2).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h3).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h4).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h5).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(h6).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(span).forEach((text) => {
      text.style.color = array[2];
    });
    Array.from(blockquote).forEach((text) => {
      text.style.color = array[2];
    });
    await Promise.all([
      logoColor(array[4]),
      logoColorGr(array[4]),
      logoColorIt(array[4]),
      logoColorEng(array[4]),
      logoColorGrg(array[4])
    ]);
    return;
  }
  
function reset() {
    const btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", () => {
      const url = new URLSearchParams(window.location.search).get("lang");
      localStorage.removeItem("stateColor");
      stateColor = null;
      switchLanguages(url);
      colorChangeDefault(["default","linear-gradient(120deg, rgb(2, 2, 77), black 50%)","#fff", "#FFE200",false]);
    });
  }
  
  /* got To Top */
  
  window.addEventListener("scroll", scrollFunction);
  
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const menuLateral = document.getElementById("menuLateral");
  
  scrollToTopBtn.addEventListener("click", () => {
    scrollToTop();
  });
  
  function scrollFunction() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const footerPosition = document.querySelectorAll('footer')[1].offsetTop;

    // Vérification de l'existence de l'élément scrollToTopBtn
    if (scrollToTopBtn) {
        if (window.scrollY > 4000) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // Vérification de l'existence de l'élément menuLateral
    if (menuLateral) {
        if (window.scrollY < 4000) {
          menuLateral.style.display = "none";
        } else if(scrollPosition <= footerPosition && window.scrollY > 4000) {
          menuLateral.style.display = "flex";
        } else {
          menuLateral.style.display = "none";
        }
    }
}

  
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }

/* Slider */

// Déclaration des slides avec les images et les taglines correspondantes
const slides = [
  {
    image: "0-000-023-nous3-clairière.png",
  },
  {
    image: "0-000-023-nous3.png",
  },
  {
    image: "0-000-023-david-yukira.png",
  },
  {
    image: "0-000-023-yukira.png",
  },
  {
    image: "0-000-023-yukira2.png",
  },
  {
    image: "0-000-023-muses.png",
  },
  {
    image: "0-000-023-muses2.png",
  },
];

let currentSlideIndex = 0; // Initialisation de l'index du slide actuel

// Fonction pour gérer le clic sur les flèches gauche et droite
function clickOnArrow(element, callback) {
  const arrow = document.getElementById(element);
  arrow.addEventListener("click", () => {
    // Si la flèche gauche est cliquée, décrémenter l'index du slide, en bouclant à la fin si nécessaire
    if (element === "arrow-left" && currentSlideIndex !== 0) {
      currentSlideIndex = currentSlideIndex - 1;
    } else if (element === "arrow-left" && currentSlideIndex === 0) {
      currentSlideIndex = slides.length - 1;
    } else if (element === "arrow-right" && currentSlideIndex !== slides.length - 1) {
      // Si la flèche droite est cliquée, incrémenter l'index du slide, en bouclant au début si nécessaire
      currentSlideIndex = currentSlideIndex + 1;
    } else if (element === "arrow-right" && currentSlideIndex === slides.length - 1) {
      currentSlideIndex = 0;
    }
    // Afficher le slide correspondant à l'index mis à jour
    callback(currentSlideIndex);
    // Mettre à jour le dot correspondant au slide affiché
    dotSlides(currentSlideIndex);
  });
}

// Ajouter les dots pour chaque slide et gérer le clic sur chaque dot
function addDots(callback) {
  const dotsContainer = document.querySelector(".dots");
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", index);
    dot.tabIndex = -1;
    dotsContainer.appendChild(dot);
    // Ajouter un écouteur d'événement pour le clic sur chaque dot
    dot.addEventListener("click", () => {
      // Mettre à jour l'index du slide actuel et afficher le slide correspondant
      currentSlideIndex = index;
      callback(currentSlideIndex);
      // Mettre à jour le dot correspondant au slide affiché
      dotSlides(currentSlideIndex);
    });
  });
  // Sélectionner le premier dot au chargement de la page
  dotSlides(0);
}

// Mettre à jour l'affichage des dots pour indiquer quel slide est actuellement affiché
function dotSlides(index) {
  const dots = document.querySelectorAll(".dot");
  // Réinitialiser la classe dot_selected pour tous les dots
  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  // Ajouter la classe dot_selected au dot correspondant au slide actuellement affiché
  const currentDot = document.querySelector(`.dot[data-index="${index}"]`);
  currentDot.classList.add("dot_selected");
}

// Afficher le slide correspondant à l'index donné
function displayImgOnSlide(index) {
  const img = document.querySelector("#banner > img.banner-img");
  // Mettre à jour la source de l'image et le texte du tagline du slide
  img.src = `../images/${slides[index].image}`;
}

// Ajouter des écouteurs d'événements pour les flèches gauche et droite
clickOnArrow("arrow-left", displayImgOnSlide);
clickOnArrow("arrow-right", displayImgOnSlide);
// Ajouter les dots et gérer le clic sur chaque dot
addDots(displayImgOnSlide);

function keyDownArrowRight() {
  const arrowRight = document.getElementById("arrow-right");
  let index = 0;
  arrowRight.addEventListener("keydown", () => {
    index += 1;
    if (index === slides.length) {
      index = 0;
    }
    displayImgOnSlide(index);
    dotSlides(index);
  });
  dotSlides(0);
}

keyDownArrowRight();

function cardsHover() {
  const cards = document.querySelectorAll("section.containerAbout > div > a");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.color = "#ffffff";
    });
    card.addEventListener("mouseleave", () => {
      card.style.color = "#FFE200";
    });
  })
}

cardsHover();
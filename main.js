(function () {
  var data = window.PORTFOLIO;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) setText(node, text);
    return node;
  }

  function setText(node, text) {
    node.textContent = text;
    node.classList.toggle("todo", text.charAt(0) === "[");
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function link(label, href, className) {
    var a = el("a", className, label);
    a.href = href;
    return a;
  }

  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "en" || param === "ja") return param;
    return (navigator.language || "").indexOf("ja") === 0 ? "ja" : "en";
  }

  function renderCase(item, index, labels) {
    var article = el("article", "case");
    article.appendChild(el("p", "index", "0" + (index + 1)));
    var src = data.images[index];
    if (src) {
      var img = el("img");
      img.src = src;
      img.alt = item.title;
      img.loading = "lazy";
      article.classList.add("has-image");
      article.appendChild(img);
    }

    var body = el("div", "case-body");
    body.appendChild(el("p", "meta", item.meta));
    body.appendChild(el("h3", "", item.title));
    body.appendChild(el("p", "summary", item.summary));

    var list = el("dl");
    ["role", "decisions", "result"].forEach(function (key) {
      if (!item[key]) return;
      list.appendChild(el("dt", "", labels[key]));
      list.appendChild(el("dd", "", item[key]));
    });
    body.appendChild(list);
    if (item.url) {
      var visit = link(item.urlLabel || labels.visit, item.url, "button visit");
      visit.target = "_blank";
      visit.rel = "noopener";
      body.appendChild(visit);
    }
    article.appendChild(body);
    return article;
  }

  function render(lang) {
    var t = data[lang];
    var links = data.links;

    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    setText(byId("brand"), t.name);
    var nav = byId("nav");
    nav.replaceChildren();
    Object.keys(t.nav).forEach(function (key) {
      nav.appendChild(link(t.nav[key], "#" + key));
    });

    byId("hero-stack").replaceChildren.apply(byId("hero-stack"), t.hero.stages.map(function (stage) {
      return el("span", "", stage);
    }));
    setText(byId("hero-eyebrow"), t.hero.eyebrow);
    setText(byId("hero-title"), t.hero.title);
    setText(byId("hero-lede"), t.hero.lede);
    var heroActions = byId("hero-actions");
    heroActions.replaceChildren(link(t.hero.primary, "#work", "button"));
    if (links.resume) heroActions.appendChild(link(t.hero.secondary, links.resume, "button quiet"));

    setText(byId("work-title"), t.work.title);
    byId("work-list").replaceChildren.apply(byId("work-list"), t.work.items.map(function (item, i) {
      return renderCase(item, i, t.work.labels);
    }));

    setText(byId("approach-title"), t.approach.title);
    byId("approach-list").replaceChildren.apply(byId("approach-list"), t.approach.steps.map(function (step) {
      var li = el("li");
      li.appendChild(el("h3", "", step.title));
      li.appendChild(el("p", "", step.text));
      return li;
    }));

    setText(byId("experience-title"), t.experience.title);
    byId("experience-list").replaceChildren.apply(byId("experience-list"), t.experience.items.map(function (job) {
      var row = el("div", "job");
      row.appendChild(el("p", "dates", job.dates));
      var detail = el("div");
      var heading = el("h3");
      heading.appendChild(el("span", "", job.role));
      heading.appendChild(el("span", "org", job.org));
      detail.appendChild(heading);
      detail.appendChild(el("p", "", job.text));
      row.appendChild(detail);
      return row;
    }));

    setText(byId("footer"), t.footer);

    document.querySelectorAll(".lang button").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
  }

  document.querySelectorAll(".lang button").forEach(function (button) {
    button.addEventListener("click", function () {
      render(button.dataset.lang);
    });
  });

  render(initialLang());

  var calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onScroll() {
    var range = document.documentElement.scrollHeight - innerHeight;
    byId("progress").style.transform = "scaleX(" + (range > 0 ? scrollY / range : 0) + ")";
    if (calm) return;
    Array.prototype.forEach.call(byId("hero-stack").children, function (line, i) {
      var shift = scrollY * (i % 2 ? 0.45 : -0.3);
      line.style.transform = "translate3d(" + shift + "px, 0, 0)";
    });
  }

  addEventListener("scroll", function () {
    requestAnimationFrame(onScroll);
  }, { passive: true });
  onScroll();

  if (!calm && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var hero = byId("hero");
    var blob = byId("blob");
    hero.addEventListener("pointermove", function (event) {
      blob.style.opacity = "1";
      blob.style.transform = "translate3d(" + event.clientX + "px, " + event.clientY + "px, 0)";
    });
    hero.addEventListener("pointerleave", function () {
      blob.style.opacity = "0";
    });
  }
})();

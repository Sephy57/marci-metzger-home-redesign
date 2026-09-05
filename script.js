/* ============================================================
   MARCI METZGER — THE RIDGE REALTY GROUP
   Vanilla JS: nav, gallery, lightbox, forms, reveals, counters
   ============================================================ */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Sticky header ---------- */
  var header = document.getElementById("site-header");

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var primaryNav = document.getElementById("primary-nav");

  function setMenu(open) {
    primaryNav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  navToggle.addEventListener("click", function () {
    setMenu(navToggle.getAttribute("aria-expanded") !== "true");
  });

  primaryNav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && primaryNav.classList.contains("is-open")) {
      setMenu(false);
      navToggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) setMenu(false);
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          setTimeout(function () { el.classList.add("is-visible"); }, i * 70);
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Stats count-up ---------- */
  var statNumbers = document.querySelectorAll(".stat-number[data-target]");
  statNumbers.forEach(function (el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";

    function render(val) {
      el.textContent = prefix + val.toFixed(decimals) + suffix;
    }

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      render(target);
      return;
    }

    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        statObserver.unobserve(el);
        var duration = 1400;
        var start = null;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          render(target * eased);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    statObserver.observe(el);
  });

  /* ---------- Gallery ---------- */
  var galleryData = [
    { src: "assets/images/gallery-01.webp", caption: "4460 Roseworthy" },
    { src: "assets/images/gallery-02.webp", caption: "5570 Ailanto" },
    { src: "assets/images/gallery-03.webp", caption: "5570 Ailanto" },
    { src: "assets/images/gallery-04.webp", caption: "5570 Ailanto" },
    { src: "assets/images/gallery-05.webp", caption: "4787 E Beacon Ridge" },
    { src: "assets/images/gallery-06.webp", caption: "4787 E Beacon Ridge" },
    { src: "assets/images/gallery-07.webp", caption: "4787 E Beacon Ridge" }
  ];

  var featuredImg = document.getElementById("gallery-featured-img");
  var captionText = document.getElementById("gallery-caption-text");
  var indexEl = document.getElementById("gallery-index");
  var thumbs = Array.prototype.slice.call(document.querySelectorAll(".gallery-thumb"));
  var current = 0;

  function showSlide(i, focusThumb) {
    current = (i + galleryData.length) % galleryData.length;
    var data = galleryData[current];
    featuredImg.src = data.src;
    featuredImg.alt = data.caption + " — interior photography from a Marci Metzger listing.";
    captionText.textContent = data.caption;
    indexEl.textContent = current + 1;
    thumbs.forEach(function (t, ti) {
      t.classList.toggle("is-active", ti === current);
      t.setAttribute("aria-selected", String(ti === current));
      t.setAttribute("tabindex", ti === current ? "0" : "-1");
    });
    if (focusThumb) thumbs[current].focus();
  }

  document.getElementById("gallery-prev").addEventListener("click", function () { showSlide(current - 1); });
  document.getElementById("gallery-next").addEventListener("click", function () { showSlide(current + 1); });

  thumbs.forEach(function (t) {
    t.addEventListener("click", function () { showSlide(parseInt(t.getAttribute("data-index"), 10)); });
  });

  /* Arrow keys on the thumbnail strip */
  document.getElementById("gallery-thumbs").addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); showSlide(current + 1, true); }
    if (e.key === "ArrowLeft") { e.preventDefault(); showSlide(current - 1, true); }
  });

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var lastFocused = null;

  function renderLightbox() {
    var data = galleryData[current];
    lightboxImg.src = data.src;
    lightboxImg.alt = data.caption + " — interior photography from a Marci Metzger listing.";
    lightboxCaption.textContent = data.caption + " · " + (current + 1) + " / " + galleryData.length;
  }

  function openLightbox(i) {
    current = (i + galleryData.length) % galleryData.length;
    lastFocused = document.activeElement;
    renderLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lightbox-close").focus();
  }

  function stepLightbox(delta) {
    current = (current + delta + galleryData.length) % galleryData.length;
    renderLightbox();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.getElementById("gallery-featured-btn").addEventListener("click", function () { openLightbox(current); });
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", function () { stepLightbox(-1); });
  document.getElementById("lightbox-next").addEventListener("click", function () { stepLightbox(1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "Tab") {
      var focusables = lightbox.querySelectorAll("button");
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Search form ---------- */
  var searchForm = document.getElementById("search-form");
  var searchError = document.getElementById("sf-error");
  var searchResult = document.getElementById("search-result");
  var searchResultText = document.getElementById("search-result-text");
  var searchMailto = document.getElementById("search-mailto");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchError.hidden = true;

    var min = parseInt(searchForm.min.value, 10);
    var max = parseInt(searchForm.max.value, 10);
    if (!isNaN(min) && !isNaN(max) && min > max) {
      searchError.textContent = "Minimum price can\u2019t be higher than maximum price.";
      searchError.hidden = false;
      document.getElementById("sf-min").focus();
      return;
    }

    var criteria = [
      "Location: " + searchForm.location.value,
      "Type: " + searchForm.type.value,
      "Bedrooms: " + searchForm.beds.value,
      "Baths: " + searchForm.baths.value,
      "Price: " + (searchForm.min.value ? "$" + searchForm.min.value : "no min") +
        " \u2013 " + (searchForm.max.value ? "$" + searchForm.max.value : "no max") +
        " (" + searchForm.sort.value.toLowerCase() + ")"
    ];

    searchResultText.textContent =
      "You searched for " + criteria[0].replace("Location: ", "") + " \u00b7 " +
      criteria[1].replace("Type: ", "") + " \u00b7 " + criteria[2].replace("Bedrooms: ", "beds ") +
      " \u00b7 " + criteria[3].replace("Baths: ", "baths ") + ". Share these preferences with Marci and she\u2019ll help you find matching properties.";

    var body = "Hi Marci,%0D%0A%0D%0APlease help me find a home:%0D%0A" +
      criteria.map(function (c) { return "%E2%80%A2 " + encodeURIComponent(c); }).join("%0D%0A") +
      "%0D%0A%0D%0AThank you!";
    searchMailto.href = "mailto:marcimetzger.realtor@gmail.com?subject=" +
      encodeURIComponent("Home search request") + "&body=" + body;

    searchResult.hidden = false;
    searchResult.focus();
  });

  /* ---------- Contact form ---------- */
  var contactForm = document.getElementById("contact-form");
  var formNote = document.getElementById("form-note");

  function setError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    if (message) {
      error.textContent = message;
      error.hidden = false;
      input.closest(".field").classList.add("has-error");
      input.setAttribute("aria-invalid", "true");
      return false;
    }
    error.hidden = true;
    input.closest(".field").classList.remove("has-error");
    input.removeAttribute("aria-invalid");
    return true;
  }

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = contactForm.name.value.trim();
    var email = contactForm.email.value.trim();
    var phone = contactForm.phone.value.trim();
    var message = contactForm.message.value.trim();

    var okName = setError("cf-name", "cf-name-error", name ? "" : "Please tell Marci your name.");
    var okEmail = setError("cf-email", "cf-email-error",
      !email ? "An email address is required so Marci can reply."
        : (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? "" : "That email address doesn\u2019t look right."));
    var okPhone = setError("cf-phone", "cf-phone-error",
      phone && !/^[+()\-.\s\d]{7,20}$/.test(phone) ? "That phone number doesn\u2019t look right." : "");
    var okMessage = setError("cf-message", "cf-message-error", message ? "" : "Please write a short message.");

    if (!(okName && okEmail && okPhone && okMessage)) {
      formNote.textContent = "";
      return;
    }

    var subject = "Website inquiry from " + name;
    var body = "Name: " + name + "%0D%0AEmail: " + encodeURIComponent(email) +
      (phone ? "%0D%0APhone: " + encodeURIComponent(phone) : "") +
      "%0D%0A%0D%0A" + encodeURIComponent(message);

    formNote.textContent = "Opening your email app\u2026 if nothing happens, email marcimetzger.realtor@gmail.com or call (206) 919-6886.";
    window.location.href = "mailto:marcimetzger.realtor@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;
  });

  /* ---------- Active nav highlighting ---------- */
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = ["buy", "sell", "about", "services", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.toggleAttribute("aria-current", link.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }
})();

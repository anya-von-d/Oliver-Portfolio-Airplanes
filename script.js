(function () {
  "use strict";

  var nav = document.getElementById("nav");

  // Shrink shadow subtly on scroll (glass reacts to scroll)
  window.addEventListener(
    "scroll",
    function () {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    },
    { passive: true }
  );

  /* ---------- Mobile menu ---------- */
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobileMenu");

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileMenu.setAttribute("aria-hidden", String(!open));
  }

  hamburger.addEventListener("click", function () {
    setMenu(!document.body.classList.contains("menu-open"));
  });

  // Close mobile menu when a link is tapped
  mobileMenu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  /* ---------- Résumé timeline collapse ---------- */
  var tlToggle = document.getElementById("tlToggle");
  var timeline = document.getElementById("timeline");
  if (tlToggle && timeline) {
    tlToggle.addEventListener("click", function () {
      var expanded = timeline.classList.toggle("expanded");
      tlToggle.setAttribute("aria-expanded", String(expanded));
      tlToggle.setAttribute(
        "aria-label",
        expanded ? "Hide earlier roles" : "Show earlier roles"
      );
    });
  }

  /* ---------- Community Outreach role tabs ---------- */
  var ocTabs = document.querySelectorAll(".oc-tab");
  var ocPanels = document.querySelectorAll(".oc-panel");
  ocTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var role = tab.getAttribute("data-role");
      ocTabs.forEach(function (t) {
        var isActive = t === tab;
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", String(isActive));
      });
      ocPanels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-role") === role);
      });
    });
  });

  /* ---------- Contact form (mailto, no backend) ---------- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var company = document.getElementById("cf-company").value.trim();
      var details = document.getElementById("cf-details").value.trim();

      var subject = "Portfolio inquiry from " + (name || "website visitor");
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        "Company: " + (company || "—"),
        "",
        "Project details:",
        details || "—",
      ];
      var mailto =
        "mailto:anya.computer.science@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });
  }

  /* ---------- Entrepreneurship carousel ---------- */
  var entTrack = document.getElementById("entTrack");
  var entPrev = document.getElementById("entPrev");
  var entNext = document.getElementById("entNext");
  var entDots = entTrack
    ? document.querySelectorAll("#entDots .ent-dot")
    : null;
  if (entTrack && entPrev && entNext && entDots) {
    var entSlides = entTrack.querySelectorAll(".ent-slide");
    var entIndex = 0;

    function entGoTo(i) {
      entIndex = (i + entSlides.length) % entSlides.length;
      entTrack.style.transform = "translateX(-" + entIndex * 100 + "%)";
      entDots.forEach(function (dot, di) {
        dot.classList.toggle("active", di === entIndex);
      });
    }

    entPrev.addEventListener("click", function () {
      entGoTo(entIndex - 1);
    });
    entNext.addEventListener("click", function () {
      entGoTo(entIndex + 1);
    });
    entDots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        entGoTo(parseInt(dot.getAttribute("data-index"), 10));
      });
    });
  }
})();

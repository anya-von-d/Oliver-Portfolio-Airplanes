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

  /* ---------- Technical Skills tabs ---------- */
  var skillTabs = document.querySelectorAll(".skill-tab");
  var skillPanels = document.querySelectorAll(".skill-panel");
  skillTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var cat = tab.getAttribute("data-cat");
      skillTabs.forEach(function (t) {
        var isActive = t === tab;
        t.classList.toggle("active", isActive);
        t.setAttribute("aria-selected", String(isActive));
      });
      skillPanels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-cat") === cat);
      });
    });
  });

  /* ---------- Skills floating node network (hover-reactive) ---------- */
  var netCanvas = document.getElementById("skillsNet");
  if (netCanvas) {
    var netPanel = document.getElementById("skillsPanel");
    var netCtx = netCanvas.getContext("2d");
    var netReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    var netNodes = [];
    var netLinks = [];
    var netProgress = netReduced ? 1 : 0;
    var netVisible = false;
    var netMouse = { x: -9999, y: -9999 };
    var netDpr = window.devicePixelRatio || 1;

    function netRandom(seed) {
      var t = seed + 0x6d2b79f5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    function netInit() {
      var w = netCanvas.offsetWidth;
      var h = netCanvas.offsetHeight;
      if (!w || !h) return;
      netDpr = window.devicePixelRatio || 1;
      netCanvas.width = w * netDpr;
      netCanvas.height = h * netDpr;
      netCtx.setTransform(1, 0, 0, 1, 0, 0);
      netCtx.scale(netDpr, netDpr);

      netNodes = [];
      netLinks = [];
      var count = Math.max(28, Math.round((w * h) / 8500));
      var seed = Math.floor(w * h) + 7;
      var i, j;
      for (i = 0; i < count; i++) {
        seed += 1;
        var x = netRandom(seed) * w;
        seed += 1;
        var y = netRandom(seed) * h;
        seed += 1;
        netNodes.push({
          x: x,
          y: y,
          r: 2 + netRandom(seed) * 2,
          hot: 0,
        });
      }
      for (i = 0; i < netNodes.length; i++) {
        for (j = i + 1; j < netNodes.length; j++) {
          var dx = netNodes[i].x - netNodes[j].x;
          var dy = netNodes[i].y - netNodes[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            netLinks.push({ a: i, b: j });
          }
        }
      }
    }

    function netDraw() {
      var w = netCanvas.offsetWidth;
      var h = netCanvas.offsetHeight;
      netCtx.clearRect(0, 0, w, h);

      if (netVisible && netProgress < 1) {
        netProgress = Math.min(1, netProgress + 0.02);
      }

      var hoverR = 120;
      var n;
      for (var k = 0; k < netNodes.length; k++) {
        n = netNodes[k];
        var dx = n.x - netMouse.x;
        var dy = n.y - netMouse.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        var target = dist < hoverR ? 1 - dist / hoverR : 0;
        n.hot += (target - n.hot) * 0.15;
      }

      netLinks.forEach(function (link) {
        var a = netNodes[link.a];
        var b = netNodes[link.b];
        var hot = Math.max(a.hot, b.hot);
        var baseOp = 0.09 * netProgress;
        var op = baseOp + hot * 0.4;
        netCtx.beginPath();
        netCtx.moveTo(a.x, a.y);
        netCtx.lineTo(b.x, b.y);
        netCtx.strokeStyle =
          hot > 0.04
            ? "rgba(251, 114, 50, " + op + ")"
            : "rgba(31, 31, 31, " + op + ")";
        netCtx.lineWidth = hot > 0.04 ? 1.4 : 1;
        netCtx.stroke();
      });

      netNodes.forEach(function (node) {
        var op = (0.3 + node.hot * 0.7) * netProgress;
        netCtx.beginPath();
        netCtx.arc(
          node.x,
          node.y,
          node.r + node.hot * 1.8,
          0,
          Math.PI * 2
        );
        netCtx.fillStyle =
          node.hot > 0.04
            ? "rgba(251, 114, 50, " + op + ")"
            : "rgba(31, 31, 31, " + op * 0.6 + ")";
        netCtx.fill();
      });

      requestAnimationFrame(netDraw);
    }

    var netObserver = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          netVisible = true;
          netObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    netObserver.observe(netPanel);

    netPanel.addEventListener("mousemove", function (e) {
      var rect = netCanvas.getBoundingClientRect();
      netMouse.x = e.clientX - rect.left;
      netMouse.y = e.clientY - rect.top;
    });
    netPanel.addEventListener("mouseleave", function () {
      netMouse.x = -9999;
      netMouse.y = -9999;
    });

    window.addEventListener("resize", netInit);
    netInit();
    requestAnimationFrame(netDraw);
  }

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

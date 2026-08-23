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

  /* ---------- Technical Skills: interactive node graph ---------- */
  var graphCanvas = document.getElementById("skillsGraph");
  if (graphCanvas) {
    var graphPanel = document.getElementById("skillsPanel");
    var gctx = graphCanvas.getContext("2d");
    var gReduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    var gDpr = window.devicePixelRatio || 1;

    var CATEGORY_COLOR = {
      language: [124, 140, 255],
      framework: [61, 220, 151],
      domain: [251, 114, 50],
      tool: [214, 140, 240],
    };
    var CATEGORY_LABEL = {
      language: "Language",
      framework: "Framework",
      domain: "Domain",
      tool: "Tool",
    };

    var SKILL_DEFS = [
      ["Python", "language"], ["C++", "language"], ["R", "language"],
      ["MATLAB", "language"], ["SQL", "language"], ["Java", "language"],
      ["JavaScript", "language"], ["TypeScript", "language"],
      ["CUDA", "language"], ["HTML", "language"], ["CSS", "language"],
      ["Julia", "language"],
      ["PyTorch", "framework"], ["TensorFlow", "framework"],
      ["NumPy", "framework"], ["pandas", "framework"],
      ["scikit-learn", "framework"], ["React", "framework"],
      ["SciPy", "framework"], ["Matplotlib", "framework"],
      ["JAX", "framework"], ["OpenCV", "framework"],
      ["Deep Learning", "domain"], ["Computer Vision", "domain"],
      ["Bayesian Inference", "domain"], ["Monte Carlo", "domain"],
      ["Numerical Methods", "domain"], ["Causal Inference", "domain"],
      ["Medical Imaging", "domain"], ["NLP", "domain"],
      ["Reinforcement Learning", "domain"], ["Generative AI", "domain"],
      ["Optimization", "domain"], ["Statistics", "domain"],
      ["Stochastic Modeling", "domain"], ["Statistical Inference", "domain"],
      ["Continuous Math Methods", "domain"],
      ["Git", "tool"], ["Linux", "tool"], ["HPC", "tool"],
      ["Parallel Prog.", "tool"], ["Bash", "tool"], ["Docker", "tool"],
      ["AWS", "tool"], ["LaTeX", "tool"], ["Jupyter", "tool"],
      ["W&B", "tool"],
    ];

    var EDGE_DEFS = [
      ["Python", "NumPy"], ["Python", "pandas"], ["Python", "PyTorch"],
      ["Python", "TensorFlow"], ["Python", "scikit-learn"],
      ["Python", "SciPy"], ["Python", "Matplotlib"], ["Python", "JAX"],
      ["Python", "OpenCV"], ["Python", "Jupyter"], ["Python", "Statistics"],
      ["C++", "CUDA"], ["C++", "HPC"], ["C++", "Parallel Prog."],
      ["C++", "Deep Learning"],
      ["CUDA", "HPC"], ["CUDA", "Parallel Prog."], ["CUDA", "PyTorch"],
      ["CUDA", "JAX"], ["CUDA", "Deep Learning"],
      ["R", "Statistics"], ["R", "Statistical Inference"],
      ["R", "Bayesian Inference"],
      ["MATLAB", "Numerical Methods"], ["MATLAB", "Optimization"],
      ["MATLAB", "Continuous Math Methods"],
      ["SQL", "pandas"], ["SQL", "AWS"],
      ["JavaScript", "React"], ["JavaScript", "TypeScript"],
      ["JavaScript", "HTML"], ["JavaScript", "CSS"],
      ["TypeScript", "React"], ["HTML", "CSS"],
      ["Julia", "Numerical Methods"], ["Julia", "Statistics"],
      ["PyTorch", "Deep Learning"], ["PyTorch", "Computer Vision"],
      ["PyTorch", "NLP"], ["PyTorch", "Generative AI"],
      ["PyTorch", "Reinforcement Learning"], ["PyTorch", "W&B"],
      ["TensorFlow", "Deep Learning"], ["TensorFlow", "W&B"],
      ["NumPy", "pandas"], ["NumPy", "SciPy"], ["NumPy", "Statistics"],
      ["NumPy", "Matplotlib"],
      ["scikit-learn", "Statistics"], ["scikit-learn", "Optimization"],
      ["SciPy", "Numerical Methods"], ["SciPy", "Optimization"],
      ["JAX", "Deep Learning"], ["OpenCV", "Computer Vision"],
      ["Deep Learning", "Computer Vision"], ["Deep Learning", "NLP"],
      ["Deep Learning", "Generative AI"],
      ["Deep Learning", "Reinforcement Learning"],
      ["Computer Vision", "Medical Imaging"],
      ["Bayesian Inference", "Statistical Inference"],
      ["Bayesian Inference", "Monte Carlo"],
      ["Monte Carlo", "Stochastic Modeling"],
      ["Monte Carlo", "Numerical Methods"],
      ["Numerical Methods", "Continuous Math Methods"],
      ["Numerical Methods", "Optimization"],
      ["Causal Inference", "Statistics"],
      ["Causal Inference", "Statistical Inference"],
      ["NLP", "Generative AI"], ["Reinforcement Learning", "Optimization"],
      ["Statistics", "Statistical Inference"],
      ["Stochastic Modeling", "Continuous Math Methods"],
      ["Git", "Linux"], ["Git", "Bash"], ["Linux", "Bash"],
      ["Linux", "Docker"], ["Linux", "HPC"], ["HPC", "Parallel Prog."],
      ["Bash", "Docker"], ["Docker", "AWS"], ["Jupyter", "NumPy"],
      ["Jupyter", "Matplotlib"], ["W&B", "Deep Learning"],
    ];

    function gRandom(seed) {
      var t = seed + 0x6d2b79f5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    var gNodes = [];
    var gNodeIndex = {};
    var gEdges = [];
    var gAdjacency = [];
    var gWidth = 0;
    var gHeight = 0;
    var gMouse = { x: -9999, y: -9999 };
    var gHovered = -1;
    var gDrag = -1;
    var gDragMoved = false;
    var gSettleFrames = gReduced ? 260 : 0;

    function gBuildData() {
      gNodes = SKILL_DEFS.map(function (def, i) {
        gNodeIndex[def[0]] = i;
        return {
          label: def[0],
          category: def[1],
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          r: 4.5,
        };
      });
      gEdges = EDGE_DEFS.map(function (pair) {
        return { a: gNodeIndex[pair[0]], b: gNodeIndex[pair[1]] };
      }).filter(function (e) {
        return e.a !== undefined && e.b !== undefined;
      });
      gAdjacency = gNodes.map(function () {
        return [];
      });
      gEdges.forEach(function (e) {
        gAdjacency[e.a].push(e.b);
        gAdjacency[e.b].push(e.a);
      });
    }

    function gLayout() {
      var seed = Math.floor(gWidth * gHeight) + 11;
      gNodes.forEach(function (n, i) {
        seed += 1;
        n.x = gWidth * 0.12 + gRandom(seed) * gWidth * 0.76;
        seed += 1;
        n.y = gHeight * 0.12 + gRandom(seed) * gHeight * 0.76;
        n.vx = 0;
        n.vy = 0;
      });
    }

    function gResize() {
      var w = graphCanvas.offsetWidth;
      var h = graphCanvas.offsetHeight;
      if (!w || !h) return;
      gDpr = window.devicePixelRatio || 1;
      graphCanvas.width = w * gDpr;
      graphCanvas.height = h * gDpr;
      gctx.setTransform(1, 0, 0, 1, 0, 0);
      gctx.scale(gDpr, gDpr);
      gWidth = w;
      gHeight = h;
      gLayout();
    }

    function gStep() {
      var i, j, n1, n2, dx, dy, dist, force;
      var cx = gWidth / 2;
      var cy = gHeight / 2;

      for (i = 0; i < gNodes.length; i++) {
        for (j = i + 1; j < gNodes.length; j++) {
          n1 = gNodes[i];
          n2 = gNodes[j];
          dx = n1.x - n2.x;
          dy = n1.y - n2.y;
          dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
          if (dist < 170) {
            force = (1600 / (dist * dist)) * 6;
            var fx = (dx / dist) * force;
            var fy = (dy / dist) * force;
            if (i !== gDrag) {
              n1.vx += fx;
              n1.vy += fy;
            }
            if (j !== gDrag) {
              n2.vx -= fx;
              n2.vy -= fy;
            }
          }
        }
      }

      gEdges.forEach(function (e) {
        n1 = gNodes[e.a];
        n2 = gNodes[e.b];
        dx = n2.x - n1.x;
        dy = n2.y - n1.y;
        dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
        var pull = (dist - 92) * 0.02;
        var fx = (dx / dist) * pull;
        var fy = (dy / dist) * pull;
        if (e.a !== gDrag) {
          n1.vx += fx;
          n1.vy += fy;
        }
        if (e.b !== gDrag) {
          n2.vx -= fx;
          n2.vy -= fy;
        }
      });

      gNodes.forEach(function (n, i) {
        if (i === gDrag) return;
        n.vx += (cx - n.x) * 0.0012;
        n.vy += (cy - n.y) * 0.0012;
        n.vx *= 0.82;
        n.vy *= 0.82;
        n.x += n.vx;
        n.y += n.vy;
        var pad = 26;
        if (n.x < pad) {
          n.x = pad;
          n.vx = Math.abs(n.vx) * 0.4;
        }
        if (n.x > gWidth - pad) {
          n.x = gWidth - pad;
          n.vx = -Math.abs(n.vx) * 0.4;
        }
        if (n.y < pad) {
          n.y = pad;
          n.vy = Math.abs(n.vy) * 0.4;
        }
        if (n.y > gHeight - pad) {
          n.y = gHeight - pad;
          n.vy = -Math.abs(n.vy) * 0.4;
        }
      });
    }

    function gConnected(idx) {
      var set = {};
      if (idx < 0) return set;
      gAdjacency[idx].forEach(function (n) {
        set[n] = true;
      });
      return set;
    }

    function gDraw() {
      gctx.clearRect(0, 0, gWidth, gHeight);
      var connected = gConnected(gHovered);

      gEdges.forEach(function (e) {
        var n1 = gNodes[e.a];
        var n2 = gNodes[e.b];
        var active =
          gHovered >= 0 && (e.a === gHovered || e.b === gHovered);
        gctx.beginPath();
        gctx.moveTo(n1.x, n1.y);
        gctx.lineTo(n2.x, n2.y);
        if (active) {
          var c = CATEGORY_COLOR[gNodes[gHovered].category];
          gctx.strokeStyle =
            "rgba(" + c[0] + "," + c[1] + "," + c[2] + ",0.65)";
          gctx.lineWidth = 1.5;
        } else {
          gctx.strokeStyle = "rgba(255,255,255,0.07)";
          gctx.lineWidth = 1;
        }
        gctx.stroke();
      });

      gNodes.forEach(function (n, i) {
        var c = CATEGORY_COLOR[n.category];
        var isHovered = i === gHovered;
        var isConnected = connected[i];
        var isActive = isHovered || isConnected;

        if (isActive) {
          gctx.font =
            (isHovered ? "700 " : "600 ") +
            "13px -apple-system, 'system-ui', sans-serif";
          var textW = gctx.measureText(n.label).width;
          var r = Math.max(30, textW / 2 + 18);
          if (isHovered) r += 4;

          gctx.beginPath();
          gctx.arc(n.x, n.y, r, 0, Math.PI * 2);
          gctx.fillStyle =
            "rgba(" + c[0] + "," + c[1] + "," + c[2] + ",0.14)";
          gctx.fill();
          gctx.lineWidth = isHovered ? 2 : 1.4;
          gctx.strokeStyle =
            "rgba(" +
            c[0] +
            "," +
            c[1] +
            "," +
            c[2] +
            "," +
            (isHovered ? 0.95 : 0.55) +
            ")";
          gctx.stroke();

          gctx.fillStyle = isHovered
            ? "rgba(255,255,255,0.96)"
            : "rgba(255,255,255,0.75)";
          gctx.textAlign = "center";
          gctx.textBaseline = "middle";
          gctx.fillText(n.label, n.x, n.y);

          if (isHovered) {
            gctx.font =
              "700 10px -apple-system, 'system-ui', sans-serif";
            gctx.fillStyle =
              "rgba(" + c[0] + "," + c[1] + "," + c[2] + ",0.9)";
            gctx.textBaseline = "top";
            gctx.fillText(
              CATEGORY_LABEL[n.category].toUpperCase(),
              n.x,
              n.y + r + 8
            );
          }
        } else {
          gctx.beginPath();
          gctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          gctx.fillStyle =
            "rgba(" + c[0] + "," + c[1] + "," + c[2] + ",0.55)";
          gctx.fill();

          gctx.font = "500 10.5px -apple-system, 'system-ui', sans-serif";
          gctx.fillStyle = "rgba(255,255,255,0.32)";
          gctx.textAlign = "center";
          gctx.textBaseline = "middle";
          gctx.fillText(n.label, n.x, n.y + 15);
        }
      });
    }

    function gFindNearest(x, y) {
      var best = -1;
      var bestDist = 26;
      gNodes.forEach(function (n, i) {
        var dx = n.x - x;
        var dy = n.y - y;
        var d = Math.sqrt(dx * dx + dy * dy);
        var hitR = i === gHovered ? 60 : 22;
        if (d < hitR && d < bestDist + 40) {
          if (best === -1 || d < bestDist) {
            best = i;
            bestDist = d;
          }
        }
      });
      return best;
    }

    function gLoop() {
      if (!gReduced || gSettleFrames > 0) {
        gStep();
        if (gSettleFrames > 0) gSettleFrames -= 1;
      }
      gDraw();
      requestAnimationFrame(gLoop);
    }

    function gPointerPos(e) {
      var rect = graphCanvas.getBoundingClientRect();
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    graphCanvas.addEventListener("mousemove", function (e) {
      var p = gPointerPos(e);
      gMouse = p;
      if (gDrag >= 0) {
        gDragMoved = true;
        gNodes[gDrag].x = p.x;
        gNodes[gDrag].y = p.y;
        gNodes[gDrag].vx = 0;
        gNodes[gDrag].vy = 0;
      } else {
        gHovered = gFindNearest(p.x, p.y);
      }
    });
    graphCanvas.addEventListener("mouseleave", function () {
      gMouse = { x: -9999, y: -9999 };
      if (gDrag < 0) gHovered = -1;
    });
    graphCanvas.addEventListener("mousedown", function (e) {
      var p = gPointerPos(e);
      var idx = gFindNearest(p.x, p.y);
      if (idx >= 0) {
        gDrag = idx;
        gDragMoved = false;
        e.preventDefault();
      }
    });
    window.addEventListener("mouseup", function () {
      gDrag = -1;
    });

    graphCanvas.addEventListener(
      "touchstart",
      function (e) {
        var p = gPointerPos(e);
        var idx = gFindNearest(p.x, p.y);
        gHovered = idx;
        if (idx >= 0) {
          gDrag = idx;
          gDragMoved = false;
        }
      },
      { passive: true }
    );
    graphCanvas.addEventListener(
      "touchmove",
      function (e) {
        if (gDrag < 0) return;
        var p = gPointerPos(e);
        gDragMoved = true;
        gNodes[gDrag].x = p.x;
        gNodes[gDrag].y = p.y;
        gNodes[gDrag].vx = 0;
        gNodes[gDrag].vy = 0;
      },
      { passive: true }
    );
    graphCanvas.addEventListener("touchend", function () {
      gDrag = -1;
    });

    gBuildData();
    window.addEventListener("resize", gResize);
    gResize();
    requestAnimationFrame(gLoop);
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

  /* ---------- Ventures & initiatives switcher ---------- */
  var ventItems = document.querySelectorAll(".vent-item");
  var ventPanels = document.querySelectorAll(".vent-panel");
  ventItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var idx = item.getAttribute("data-index");
      ventItems.forEach(function (it) {
        var isActive = it === item;
        it.classList.toggle("active", isActive);
        it.setAttribute("aria-selected", String(isActive));
      });
      ventPanels.forEach(function (p) {
        p.classList.toggle("active", p.getAttribute("data-index") === idx);
      });
    });
  });
})();

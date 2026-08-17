/* GENERATED FILE — do not edit directly. Edit the files in partials/ styles/ scripts/ then run: python3 build.py */
/* ============================================================
   OASIS GUEST LAB — script.js
   Vanilla JS only. No dependencies, no build step.
   ============================================================ */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Sticky header ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mainNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          ro.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ============================================================
     CHAT SIMULATOR — "See Oasis Guest Lab handle a real night"
     All 9 scenarios from the content brief. Each plays message-by-
     message with typing-indicator pacing; the Chatwoot panel updates
     live alongside (status, activity log, resolution).
     ============================================================ */

  var SCENARIOS = [
    {
      id: "access", chip: "Access", time: "11:47 PM",
      guest: "Lena T.", initials: "LT", unit: "Murjan 3", ava: "a1",
      messages: [
        { from: "guest", text: "Hi! We just arrived but we can’t get into the building — there’s a keypad and we don’t have any code", time: "11:47 PM" },
        { from: "ai", text: "Welcome! You’re seconds away. Enter <strong>4821#</strong> at the lobby keypad, then take the lift to floor 12 — apartment 1204. Door code <strong>7736</strong>.", time: "11:47 PM" },
        { from: "ai", text: "Parking: <span class=\"msg-link\">maps.app/murjan3-parking</span> — Bay B2-47. Sleep well!", time: "11:47 PM" },
        { from: "guest", text: "We’re in — thank you so much!", time: "11:49 PM" }
      ],
      resolution: "ai",
      log: [
        { t: "11:47 PM", html: "New WhatsApp message — <strong>Murjan 3</strong>", cls: "" },
        { t: "11:47 PM", html: "LIA matched unit data: <strong>building access + door codes</strong>", cls: "" },
        { t: "11:47 PM", html: "<strong>AI replied · 0.4s</strong> — no escalation needed", cls: "lg-ok" },
        { t: "11:49 PM", html: "Guest confirmed — conversation resolved", cls: "lg-ok" }
      ]
    },
    {
      id: "voice", chip: "Voice note", time: "9:12 AM",
      guest: "Amira H.", initials: "AH", unit: "JBR Tower 2", ava: "a2",
      messages: [
        { from: "guest", voice: true, dur: "0:14", time: "9:12 AM" },
        { from: "ai", text: "Good morning! Heard your note about the washing machine — here’s the quick guide: <span class=\"msg-link\">oasisguestlab.ai/g/jbr2-washer</span>", time: "9:12 AM" },
        { from: "ai", text: "Press <strong>Power</strong>, select the cycle with the left dial, then <strong>Start/Pause</strong>. “Daily 40°” works for most loads.", time: "9:12 AM" }
      ],
      resolution: "ai",
      log: [
        { t: "9:12 AM", html: "Voice message received — <strong>JBR Tower 2</strong>", cls: "" },
        { t: "9:12 AM", html: "LIA transcribed the voice note · <strong>appliance guides</strong> matched", cls: "" },
        { t: "9:12 AM", html: "<strong>AI replied · 0.6s</strong> — guide link sent", cls: "lg-ok" }
      ]
    },
    {
      id: "maintenance", chip: "AC issue", time: "2:13 PM",
      guest: "Marco R.", initials: "MR", unit: "JBR Tower 2", ava: "a3",
      messages: [
        { from: "guest", text: "The AC is making a really loud noise and the apartment is heating up. This needs to be fixed.", time: "2:13 PM" },
        { from: "ai", text: "I am so sorry to hear that — I am flagging this to the team right now for urgent investigation. Someone will follow up with you very shortly.", time: "2:13 PM" },
        { from: "system", text: "Layla (Operations) joined the conversation", time: "2:15 PM" }
      ],
      resolution: "esc",
      log: [
        { t: "2:13 PM", html: "New WhatsApp message — <strong>JBR Tower 2</strong>", cls: "" },
        { t: "2:13 PM", html: "Maintenance issue detected — <strong>escalation triggered</strong>", cls: "lg-esc" },
        { t: "2:13 PM", html: "Alert sent to on-duty team · full context attached", cls: "" },
        { t: "2:15 PM", html: "<strong>Layla took over</strong> — one-click human takeover", cls: "lg-esc" }
      ]
    },
    {
      id: "directions", chip: "Directions", time: "6:45 PM",
      guest: "Tomasz W.", initials: "TW", unit: "Murjan 5", ava: "a4",
      messages: [
        { from: "guest", text: "Where’s the nearest supermarket? And is there parking there?", time: "6:45 PM" },
        { from: "ai", text: "Closest is <strong>Carrefour Market</strong> — a 5-minute walk: <span class=\"msg-link\">maps.app/carrefour-murjan</span>. Parking is directly underneath.", time: "6:45 PM" },
        { from: "ai", text: "Spinneys is also nearby if you prefer. Enjoy!", time: "6:45 PM" }
      ],
      resolution: "ai",
      log: [
        { t: "6:45 PM", html: "New WhatsApp message — <strong>Murjan 5</strong>", cls: "" },
        { t: "6:45 PM", html: "LIA matched unit data: <strong>local directions</strong>", cls: "" },
        { t: "6:45 PM", html: "<strong>AI replied · 0.3s</strong> — map link sent", cls: "lg-ok" }
      ]
    },
    {
      id: "local", chip: "Local situation", time: "8:30 AM",
      guest: "Yulia S.", initials: "YS", unit: "Murjan 3", ava: "a1",
      messages: [
        { from: "guest", text: "Good morning — is everything normal around JBR Beach today? We were planning to spend the day there.", time: "8:30 AM" },
        { from: "ai", text: "Good morning! Yes — JBR Beach is open and operating normally, and The Walk is open too. Weather is around <strong>32°C</strong>. Enjoy your day!", time: "8:30 AM" }
      ],
      resolution: "ai",
      log: [
        { t: "8:30 AM", html: "New WhatsApp message — <strong>Murjan 3</strong>", cls: "" },
        { t: "8:30 AM", html: "Local area conditions checked", cls: "" },
        { t: "8:30 AM", html: "<strong>AI replied · 0.5s</strong> — no escalation needed", cls: "lg-ok" }
      ]
    },
    {
      id: "checkin", chip: "Early check-in", time: "12:45 PM",
      guest: "Chen W.", initials: "CW", unit: "Jumeirah Villa", ava: "a2",
      messages: [
        { from: "guest", text: "Our flight lands early — any chance we could check in at 1 PM instead of 3?", time: "12:45 PM" },
        { from: "ai", text: "I will check with the team on availability for a 1 PM early check-in and get back to you shortly with confirmation.", time: "12:45 PM" },
        { from: "system", text: "Request assigned to the operations team", time: "12:46 PM" }
      ],
      resolution: "esc",
      log: [
        { t: "12:45 PM", html: "New WhatsApp message — <strong>Jumeirah Villa</strong>", cls: "" },
        { t: "12:45 PM", html: "Early check-in request — <strong>needs human confirmation</strong>", cls: "lg-esc" },
        { t: "12:46 PM", html: "Assigned to operations · guest expectation set by AI", cls: "" }
      ]
    },
    {
      id: "howto", chip: "TV how-to", time: "7:20 PM",
      guest: "Priya M.", initials: "PM", unit: "Jumeirah Villa", ava: "a2",
      messages: [
        { from: "guest", text: "The TV just shows a black screen — we’ve tried the remote but nothing happens", time: "7:20 PM" },
        { from: "ai", text: "Easy fix! Here’s a short video guide for the TV setup in your villa: <span class=\"msg-link\">oasisguestlab.ai/g/villa-tv</span>", time: "7:20 PM" },
        { from: "ai", text: "Press the <strong>Input</strong> button, then select <strong>HDMI 1</strong>. That should fix it immediately!", time: "7:20 PM" },
        { from: "guest", text: "That did it — movie night saved", time: "7:23 PM" }
      ],
      resolution: "ai",
      log: [
        { t: "7:20 PM", html: "New WhatsApp message — <strong>Jumeirah Villa</strong>", cls: "" },
        { t: "7:20 PM", html: "LIA matched unit data: <strong>appliance guides · TV</strong>", cls: "" },
        { t: "7:20 PM", html: "<strong>AI replied · 0.4s</strong> — video guide sent", cls: "lg-ok" },
        { t: "7:23 PM", html: "Guest confirmed — conversation resolved", cls: "lg-ok" }
      ]
    },
    {
      id: "wifi", chip: "Late-night WiFi", time: "1:22 AM",
      guest: "David L.", initials: "DL", unit: "Murjan 3", ava: "a4",
      messages: [
        { from: "guest", text: "Sorry for the late message… we forgot the WiFi password", time: "1:22 AM" },
        { from: "ai", text: "No problem at all! WiFi: <strong>LuxOasis_M3</strong> · Password: <strong>Guest2024#</strong>. Enjoy your evening!", time: "1:22 AM" },
        { from: "guest", text: "Connected — you’re a lifesaver", time: "1:23 AM" }
      ],
      resolution: "ai",
      log: [
        { t: "1:22 AM", html: "New WhatsApp message — <strong>Murjan 3</strong> · out of hours", cls: "" },
        { t: "1:22 AM", html: "LIA matched unit data: <strong>WiFi credentials</strong>", cls: "" },
        { t: "1:22 AM", html: "<strong>AI replied · 0.3s</strong> — nobody was woken up", cls: "lg-ok" }
      ]
    },
    {
      id: "complaint", chip: "Complaint", time: "3:45 PM",
      guest: "Elena V.", initials: "EV", unit: "Murjan 5", ava: "a3",
      messages: [
        { from: "guest", text: "Honestly, we’re disappointed. The apartment is dusty and the bathroom looks like it wasn’t touched at all.", time: "3:45 PM" },
        { from: "ai", text: "I am so sorry — this is absolutely not our standard, and I completely understand your frustration. I am getting our cleaning team on this right now; someone will be with you in the next few minutes.", time: "3:45 PM" },
        { from: "system", text: "Omar (Guest Relations) joined the conversation", time: "3:47 PM" }
      ],
      resolution: "esc",
      log: [
        { t: "3:45 PM", html: "New WhatsApp message — <strong>Murjan 5</strong>", cls: "" },
        { t: "3:45 PM", html: "Complaint detected — <strong>priority escalation triggered</strong>", cls: "lg-esc" },
        { t: "3:45 PM", html: "Cleaning team alerted · guest relations notified", cls: "" },
        { t: "3:47 PM", html: "<strong>Omar took over</strong> — human care from here", cls: "lg-esc" }
      ]
    }
  ];

  var simChips = document.getElementById("simChips");
  var simChat = document.getElementById("simChat");
  var simStage = document.getElementById("simStage");
  var simReplay = document.getElementById("simReplay");
  var simAvatar = document.getElementById("simAvatar");
  var simUnitName = document.getElementById("simUnitName");
  var simPresence = document.getElementById("simPresence");
  var cwAva = document.getElementById("cwAva");
  var cwName = document.getElementById("cwName");
  var cwUnit = document.getElementById("cwUnit");
  var cwStatus = document.getElementById("cwStatus");
  var cwLog = document.getElementById("cwLog");
  var cwResolution = document.getElementById("cwResolution");
  var cwResolutionText = document.getElementById("cwResolutionText");

  if (simChips && simChat) {
    var playToken = 0;        // cancels any in-flight playback
    var activeScenario = SCENARIOS[0];

    // Build chips
    SCENARIOS.forEach(function (sc, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "sim-chip";
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.dataset.id = sc.id;
      b.innerHTML = sc.chip + ' <span class="sc-time">' + sc.time + "</span>";
      b.addEventListener("click", function () { selectScenario(sc, b); });
      simChips.appendChild(b);
    });

    function selectScenario(sc, chipEl) {
      activeScenario = sc;
      Array.prototype.forEach.call(simChips.children, function (c) {
        c.setAttribute("aria-pressed", c === chipEl ? "true" : "false");
      });
      playScenario(sc);
    }

    function wait(ms, token) {
      return new Promise(function (resolve) {
        if (prefersReducedMotion) ms = Math.min(ms, 40);
        setTimeout(function () { resolve(token === playToken); }, ms);
      });
    }

    function scrollChat() { simChat.scrollTop = simChat.scrollHeight; }

    function ticksSVG() {
      return '<svg class="ticks" viewBox="0 0 18 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m1 6.5 3 3L10 3"/><path d="m8 6.5 3 3L17 3"/></svg>';
    }

    function bubbleHTML(m) {
      if (m.from === "system") {
        return '<div class="wa-day">' + m.text + " · " + m.time + "</div>";
      }
      var side = m.from === "guest" ? "msg-in" : "msg-out";
      var meta = '<span class="msg-meta">' + m.time + (m.from === "ai" ? ticksSVG() : "") + "</span>";
      var body;
      if (m.voice) {
        var bars = "";
        var heights = [3, 6, 9, 5, 8, 4, 7, 9, 6, 3, 5, 8, 6, 4, 7, 5, 3, 6, 8, 4];
        heights.forEach(function (h) { bars += '<i style="--h:' + h + '"></i>'; });
        body =
          '<div class="voice-note">' +
          '<span class="voice-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5-13-7.5Z"/></svg></span>' +
          '<span class="voice-wave">' + bars + "</span>" +
          '<span class="voice-dur">' + m.dur + "</span></div>";
      } else {
        body = m.text;
      }
      return '<div class="msg ' + side + '">' + body + meta + "</div>";
    }

    function addLog(entry) {
      var li = document.createElement("li");
      if (entry.cls) li.className = entry.cls;
      var dotCls = entry.cls === "lg-esc" ? "dot-amber" : "dot-green";
      li.innerHTML = '<span class="lg-time">' + entry.t + '</span><span class="dot lg-dot ' + dotCls + '"></span><span>' + entry.html + "</span>";
      cwLog.appendChild(li);
    }

    function setStatus(cls, label) {
      cwStatus.className = "cw-status " + cls;
      cwStatus.textContent = label;
    }

    async function playScenario(sc) {
      var token = ++playToken;

      // Reset phone
      simChat.innerHTML = '<div class="wa-day">Today</div>';
      simAvatar.textContent = sc.unit.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
      simUnitName.textContent = sc.unit;
      simPresence.textContent = "LIA · online";

      // Reset Chatwoot panel
      cwAva.className = "cw-ava " + sc.ava;
      cwAva.textContent = sc.initials;
      cwName.textContent = sc.guest;
      cwUnit.textContent = sc.unit + " · WhatsApp · " + sc.time;
      cwLog.innerHTML = "";
      cwResolution.classList.remove("show", "res-ai", "res-esc");
      setStatus("st-open", "Open");

      if (!(await wait(450, token))) return;

      var logIndex = 0;
      for (var i = 0; i < sc.messages.length; i++) {
        var m = sc.messages[i];

        if (m.from === "guest") {
          simChat.insertAdjacentHTML("beforeend", bubbleHTML(m));
          scrollChat();
          if (logIndex < sc.log.length) { addLog(sc.log[logIndex++]); }
          if (!(await wait(900, token))) return;
        } else if (m.from === "ai") {
          // typing indicator pacing
          simPresence.textContent = "LIA · typing…";
          var typing = document.createElement("div");
          typing.className = "typing";
          typing.innerHTML = "<i></i><i></i><i></i>";
          simChat.appendChild(typing);
          scrollChat();
          var typeMs = Math.min(2200, 700 + (m.text ? m.text.length * 9 : 900));
          var ok = await wait(typeMs, token);
          typing.remove();
          if (!ok) return;
          simPresence.textContent = "LIA · online";
          simChat.insertAdjacentHTML("beforeend", bubbleHTML(m));
          scrollChat();
          if (logIndex < sc.log.length) { addLog(sc.log[logIndex++]); }
          setStatus("st-ai", "AI handling");
          if (!(await wait(1000, token))) return;
        } else { // system
          if (!(await wait(700, token))) return;
          simChat.insertAdjacentHTML("beforeend", bubbleHTML(m));
          scrollChat();
          if (logIndex < sc.log.length) { addLog(sc.log[logIndex++]); }
          if (!(await wait(600, token))) return;
        }
      }

      // Flush remaining log entries
      while (logIndex < sc.log.length) {
        addLog(sc.log[logIndex++]);
        if (!(await wait(500, token))) return;
      }

      // Resolution
      if (!(await wait(400, token))) return;
      if (sc.resolution === "ai") {
        setStatus("st-ai", "AI · resolved");
        cwResolution.classList.add("res-ai", "show");
        cwResolutionText.textContent = "Resolved by AI";
      } else {
        setStatus("st-esc", "Escalated");
        cwResolution.classList.add("res-esc", "show");
        cwResolutionText.textContent = "Escalated to team";
      }
    }

    if (simReplay) {
      simReplay.addEventListener("click", function () { playScenario(activeScenario); });
    }

    // Autoplay the first scenario when the simulator scrolls into view
    var autoplayed = false;
    if ("IntersectionObserver" in window) {
      var simObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !autoplayed) {
            autoplayed = true;
            playScenario(SCENARIOS[0]);
            simObserver.disconnect();
          }
        });
      }, { threshold: 0.35 });
      simObserver.observe(simStage);
    } else {
      autoplayed = true;
      playScenario(SCENARIOS[0]);
    }
  }

  /* ============================================================
     THE DASHBOARD — 5-step product walkthrough
     Upload -> Properties -> Buildings -> Integrations -> Reservations.
     Self-advancing once the section scrolls into view, and clickable /
     keyboard-driven at any time. The first interaction stops the
     auto-advance for good so the visitor is never fought with.

     Progressive enhancement: the markup ships with every panel visible
     and the tab strip hidden, so without JS the section reads as five
     complete stacked states. This block adds .dash-live, which switches
     it to one-panel-at-a-time. Under prefers-reduced-motion the tabs
     still work but nothing auto-advances or animates in.
     ============================================================ */

  var dashRoot = document.getElementById("dashDemo");
  if (dashRoot) {
    var dashTabs = [].slice.call(document.querySelectorAll("#dashSteps .dash-step"));
    var dashPanels = dashTabs.map(function (t) {
      return document.getElementById(t.getAttribute("aria-controls"));
    });
    var dashNavItems = [].slice.call(dashRoot.querySelectorAll(".dn-item"));
    var dashSide = dashRoot.querySelector(".dash-side");
    var DASH_DWELL = 5200;

    if (dashTabs.length && dashPanels.every(Boolean)) {
      dashRoot.classList.add("dash-live");
      if (!prefersReducedMotion) dashRoot.classList.add("is-anim");
      dashRoot.style.setProperty("--dash-dwell", DASH_DWELL + "ms");

      var dashIndex = -1;
      var dashTimer = null;
      var dashAuto = !prefersReducedMotion; // auto-advance allowed?
      var dashVisible = false;

      function dashClearTimer() {
        if (dashTimer) { clearTimeout(dashTimer); dashTimer = null; }
      }

      /* Horizontal-only "scroll into view" for the two strips that overflow on
         narrow screens. Deliberately not scrollIntoView(), which would also
         move the page. */
      function dashTrack(box, el) {
        if (!box || !el || box.scrollWidth <= box.clientWidth + 1) return;
        var target = el.offsetLeft - (box.clientWidth - el.offsetWidth) / 2;
        box.scrollLeft = Math.max(0, target);
      }

      function dashQueueNext() {
        dashClearTimer();
        if (!dashAuto || !dashVisible) return;
        if (dashIndex >= dashTabs.length - 1) return; // play once, then rest on the last step
        dashTimer = setTimeout(function () {
          dashShow(dashIndex + 1, false);
        }, DASH_DWELL);
      }

      function dashShow(i, fromUser) {
        if (i < 0 || i >= dashTabs.length) return;
        dashIndex = i;

        dashTabs.forEach(function (tab, n) {
          var on = n === i;
          tab.setAttribute("aria-selected", on ? "true" : "false");
          tab.setAttribute("tabindex", on ? "0" : "-1");
          tab.classList.remove("is-playing");
          dashPanels[n].classList.toggle("is-active", on);
        });

        // sidebar highlight follows the view the step is showing
        var view = dashPanels[i].getAttribute("data-nav");
        dashNavItems.forEach(function (item) {
          var on = item.getAttribute("data-nav") === view;
          item.classList.toggle("is-active", on);
          // below 900px the mock sidebar is a horizontal strip — keep the
          // highlighted item in view without ever scrolling the page itself
          if (on) dashTrack(dashSide, item);
        });
        dashTrack(document.getElementById("dashSteps"), dashTabs[i]);

        if (fromUser) {
          dashAuto = false;
          dashClearTimer();
          dashTabs[i].focus();
        } else if (dashAuto && dashVisible && i < dashTabs.length - 1) {
          // restart the progress hairline on the newly active tab
          var active = dashTabs[i];
          void active.offsetWidth;
          active.classList.add("is-playing");
          dashQueueNext();
        }
      }

      dashTabs.forEach(function (tab, n) {
        tab.addEventListener("click", function () { dashShow(n, true); });
      });

      document.getElementById("dashSteps").addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = dashIndex + 1;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = dashIndex - 1;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = dashTabs.length - 1;
        if (next === null) return;
        e.preventDefault();
        dashShow(Math.max(0, Math.min(dashTabs.length - 1, next)), true);
      });

      // start on step 1; begin the walkthrough when the section is in view
      dashShow(0, false);

      if ("IntersectionObserver" in window) {
        var dashObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            dashVisible = entry.isIntersecting;
            if (dashVisible) {
              if (dashAuto && dashIndex === 0 && !dashTimer) dashShow(0, false);
            } else {
              dashClearTimer();
            }
          });
        }, { threshold: 0.3 });
        dashObserver.observe(dashRoot);
      } else {
        dashVisible = true;
        dashShow(0, false);
      }
    }
  }

  /* ============================================================
     PRICING — unit-count slider
     Two price levels per tier. `rate` is the introductory rate, held for the
     first twelve months; `std` is the standard rate the client moves to from
     month thirteen. The standard rate has never been charged, so it is only
     ever labelled "Standard rate" — never as a former price.
     Tiers: 1–10 @130/185 · 11–30 @110/155 · 31–60 @90/125 · 61–100 @75/105
            · >100 custom

     MONOTONIC TOTAL — do not remove.
     A plain units × rate calculation is not monotonic across tier boundaries:
     at 10 units it billed AED 1,300 but at 11 units only AED 1,210, so adding
     a unit LOWERED the bill. The same happened at 30→31 and 60→61. A prospect
     who noticed could ask to be billed for units they do not have, and it
     makes the volume-pricing promise look broken.
     The fix floors the total at the highest full-tier total already passed, so
     the bill never falls as unit count rises. The advertised per-unit rate is
     unchanged: only the total is floored. While the floor is active the
     multiplication would not reconcile, so the readout drops the
     "units × rate =" form and explains why instead.
     ============================================================ */
  var range = document.getElementById("unitsRange");
  if (range) {
    var pscTotal = document.getElementById("pscTotal");
    var pscNote = document.getElementById("pscNote");
    var readout = document.querySelector(".psc-readout");
    var pscStandard = document.getElementById("pscStandard");
    var pscIntroLabel = document.getElementById("pscIntroLabel");
    var tiers = {
      starter: document.querySelector('[data-tier="starter"]'),
      growth: document.querySelector('[data-tier="growth"]'),
      scale: document.querySelector('[data-tier="scale"]'),
      portfolio: document.querySelector('[data-tier="portfolio"]')
    };

    var TIERS = [
      { max: 10,  key: "starter",   name: "Starter",   intro: 130, standard: 185 },
      { max: 30,  key: "growth",    name: "Growth",    intro: 110, standard: 155 },
      { max: 60,  key: "scale",     name: "Scale",     intro: 90,  standard: 125 },
      { max: 100, key: "portfolio", name: "Portfolio", intro: 75,  standard: 105 }
    ];

    function tierFor(u) {
      for (var i = 0; i < TIERS.length; i++) {
        if (u <= TIERS[i].max) return TIERS[i];
      }
      return { key: null, name: "Enterprise", intro: null, standard: null };
    }

    /* Returns the billed total and whether the tier floor is doing the work.
       floored === true means units × rate is BELOW the previous tier's full
       total, so the previous total is charged instead. */
    function monthlyTotal(units, key) {
      var floor = 0;
      for (var i = 0; i < TIERS.length; i++) {
        var tier = TIERS[i];
        var rate = tier[key];
        if (units <= tier.max) {
          var raw = units * rate;
          return { total: Math.max(raw, floor), floored: floor > raw, rate: rate };
        }
        floor = Math.max(floor, tier.max * rate);
      }
      return { total: 0, floored: false, rate: null };
    }

    function fmt(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

    function updatePricing() {
      var u = parseInt(range.value, 10);
      var t = tierFor(u);
      var fill = ((u - 1) / (110 - 1)) * 100;
      range.style.setProperty("--fill", fill + "%");

      Object.keys(tiers).forEach(function (k) {
        if (tiers[k]) tiers[k].classList.toggle("active", k === t.key);
      });

      if (t.intro === null) {
        readout.innerHTML = "<span>" + u + "+ units — </span><span class=\"psc-total\">custom enterprise pricing</span>";
        pscNote.textContent = "Enterprise · Managing more than 100 units? Get in touch for custom pricing.";
        if (pscStandard) { pscStandard.hidden = true; }
        if (pscIntroLabel) { pscIntroLabel.hidden = true; }
        return;
      }

      var intro = monthlyTotal(u, "intro");
      var std = monthlyTotal(u, "standard");

      if (intro.floored) {
        /* Do not print units × rate = total: it would not reconcile. */
        readout.innerHTML = '<span class="psc-total">AED <span id="pscTotal">' + fmt(intro.total) + "</span>/mo</span>";
      } else {
        readout.innerHTML = '<span id="pscUnits">' + u + '</span> units × AED <span id="pscRate">' + t.intro
          + '</span> = <span class="psc-total">AED <span id="pscTotal">' + fmt(intro.total) + "</span>/mo</span>";
      }

      if (pscStandard) {
        pscStandard.hidden = false;
        pscStandard.innerHTML = '<span class="psc-standard-label">Standard rate</span> <span class="psc-standard-fig">AED <span id="pscStdRate">'
          + t.standard + '</span>/unit · AED <span id="pscStdTotal">' + fmt(std.total) + "</span>/mo</span>";
      }
      if (pscIntroLabel) { pscIntroLabel.hidden = false; }

      pscNote.textContent = intro.floored
        ? "Your rate is held at the previous tier total until the " + t.name + " rate overtakes it."
        : t.name + " tier · Totals are indicative — final pricing is confirmed at onboarding.";
    }
    range.addEventListener("input", updatePricing);
    updatePricing();
  }

  /* ============================================================
     DEMO FORM — no backend: opens a prefilled mailto:
     (per shared brief; WhatsApp fallback link sits below the form)
     ============================================================ */
  var form = document.getElementById("demoForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("fName").value || "").trim();
      var email = (document.getElementById("fEmail").value || "").trim();
      var units = document.getElementById("fUnits").value;
      var msg = (document.getElementById("fMsg").value || "").trim();

      // minimal validation
      if (!name || !email || email.indexOf("@") < 1) {
        (!name ? document.getElementById("fName") : document.getElementById("fEmail")).focus();
        return;
      }

      var subject = "Oasis Guest Lab demo request — " + name;
      var body =
        "Name: " + name +
        "\nEmail: " + email +
        "\nUnits managed: " + units +
        (msg ? "\n\nNotes:\n" + msg : "") +
        "\n\nSent from oasisguestlab.ai";
      window.location.href =
        "mailto:info@luxoasisadvisory.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  /* ============================================================
     MOTION UPGRADE — scroll choreography engine
     One rAF loop, passive scroll listener, transform/opacity only.
     html.js-motion  = motion allowed (no prefers-reduced-motion)
     html.js-scrub   = motion allowed AND viewport >= 768px
     html.js-steps   = motion allowed AND viewport <  768px
     html.js-scene   = either of the two above — the shared visual
                       states the two engines both drive
     Without these classes all scenes render their final state
     statically (see styles.css), so nothing depends on JS.

     Why two engines: pinned sticky scrub scenes are good on a desktop
     pointer and bad under a thumb — they fight the mobile browser
     chrome collapse and hijack the scroll. So below 768px the same
     visual states are driven by IntersectionObserver + short timed
     sequences instead (scripts/80-mobile-scenes.js): reading position
     picks WHICH scene plays, time drives the states inside it.

     NOTE: the mode is decided once at load; resizing across the
     768px boundary keeps the current mode until reload.
     ============================================================ */

  var docEl = document.documentElement;
  var motionOK = !prefersReducedMotion;
  var scrubOK = motionOK && window.matchMedia("(min-width: 768px)").matches;
  /* the phone engine needs IntersectionObserver; without it the page simply
     keeps its static final states, which are complete and readable */
  var stepsOK = motionOK && !scrubOK && ("IntersectionObserver" in window);
  if (motionOK) docEl.classList.add("js-motion");
  if (scrubOK) docEl.classList.add("js-scrub");
  if (stepsOK) docEl.classList.add("js-steps");
  if (scrubOK || stepsOK) docEl.classList.add("js-scene");

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function smoothstep(t) { return t * t * (3 - 2 * t); }
  function flag(el, cls, on) { el.classList.toggle(cls, !!on); }

  /* ---------- scene registry: element -> progress 0..1 ---------- */
  var scenes = [];
  function addScene(el, fn) { if (el) scenes.push({ el: el, fn: fn }); }

  /* ---------- HERO: scroll-scrubbed conversation ---------- */
  var heroScene = document.getElementById("heroScene");
  var heroClock = document.getElementById("heroClock");
  var heroPhone = document.getElementById("heroPhone");
  var heroChat = heroScene ? heroScene.querySelector(".wa-chat") : null;
  var heroLastMin = -1;

  function heroFrame(p) {
    flag(heroScene, "hm1", true);                    // guest message waits from the start
    flag(heroScene, "ht1", p >= 0.06 && p < 0.28);   // LIA typing…
    flag(heroScene, "hm2", p >= 0.28);               // fix instructions
    flag(heroScene, "ht2", p >= 0.36 && p < 0.5);
    flag(heroScene, "hm3", p >= 0.5);                // guide link
    flag(heroScene, "hm4", p >= 0.8);                // "That worked" (11:45)
    flag(heroScene, "hfloat", p >= 0.91);            // Chatwoot stamp
    var c = p < 0.28 ? 0 : p < 0.78 ? 1 : p < 0.91 ? 2 : 3;
    for (var i = 0; i < 4; i++) flag(heroScene, "hc" + i, i === c);
    var mins = p < 0.56 ? 43 : p < 0.72 ? 44 : 45;   // clock advances with the story
    if (mins !== heroLastMin) {
      heroLastMin = mins;
      if (heroClock) heroClock.textContent = "11:" + mins + " PM";
    }
    if (heroPhone) heroPhone.style.transform = "rotate(" + (1.6 * (1 - p)).toFixed(2) + "deg)";
    // keep the latest bubble in view once the thread outgrows the screen
    if (heroChat && p >= 0.78) heroChat.scrollTop = heroChat.scrollHeight;
    else if (heroChat && p < 0.78 && heroChat.scrollTop > 0) heroChat.scrollTop = 0;
  }

  /* ---------- PAIN: notification pile -> tidy cards ---------- */
  var painSec = document.getElementById("pain");
  var painGrid = document.getElementById("painGrid");
  var painCount = document.getElementById("painCount");
  var painCountNum = document.getElementById("painCountNum");
  var painCards = painGrid ? [].slice.call(painGrid.children) : [];
  var PILE_JX = [-34, 28, -16, 36, -42, 10];
  var PILE_JY = [-96, -54, -12, 30, 64, 100];
  var PILE_ROT = [-7, 5, -4, 6, -5, 3];
  var painBase = null;
  var painLastCount = -1;

  function measurePain() {
    painCards.forEach(function (c) { c.style.transform = ""; });
    var g = painGrid.getBoundingClientRect();
    var cx = g.left + g.width / 2;
    var cy = g.top + g.height / 2;
    painBase = painCards.map(function (c) {
      var r = c.getBoundingClientRect();
      return { dx: cx - (r.left + r.width / 2), dy: cy - (r.top + r.height / 2) };
    });
  }

  function painFrame(p, vh) {
    if (!painBase) measurePain();
    var arrived = 0;
    for (var i = 0; i < painCards.length; i++) {
      var card = painCards[i];
      var b = painBase[i];
      var a0 = 0.03 + i * 0.075;          // arrival start
      var s0 = 0.58 + i * 0.04;           // settle start
      var px = b.dx + PILE_JX[i];
      var py = b.dy + PILE_JY[i];
      var rot = PILE_ROT[i];
      if (p >= a0 + 0.01) arrived++;
      if (p < a0) {                        // not arrived yet
        card.style.opacity = "0";
        card.style.transform = "translate(" + px + "px," + (py - vh * 0.55) + "px) rotate(" + rot * 1.8 + "deg)";
        card.style.zIndex = "";
        continue;
      }
      if (p >= s0 + 0.2) {                 // fully settled: hand back to CSS
        card.style.opacity = "";
        card.style.transform = "";
        card.style.zIndex = "";
        continue;
      }
      var x, y, r, sc;
      if (p < s0) {                        // falling onto the pile
        var t = easeOutCubic(clamp01((p - a0) / 0.09));
        x = px; y = (py - vh * 0.55) + vh * 0.55 * t;
        r = rot * 1.8 + (rot - rot * 1.8) * t;
        sc = 0.96;
        card.style.opacity = String(Math.min(1, t * 2.4));
      } else {                             // sweeping into the tidy grid
        var t2 = easeInOutCubic(clamp01((p - s0) / 0.2));
        x = px * (1 - t2); y = py * (1 - t2);
        r = rot * (1 - t2);
        sc = 0.96 + 0.04 * t2;
        card.style.opacity = "1";
      }
      card.style.transform = "translate(" + x.toFixed(1) + "px," + y.toFixed(1) + "px) rotate(" + r.toFixed(2) + "deg) scale(" + sc.toFixed(3) + ")";
      card.style.zIndex = String(2 + i);
    }
    if (painCount) {
      painCount.style.opacity = (p >= 0.58 || arrived === 0) ? "0" : "1";
      if (arrived !== painLastCount && arrived > 0) {
        painLastCount = arrived;
        painCountNum.textContent = String(arrived);
      }
    }
  }

  /* ---------- HOW IT WORKS: pinned 6-step evolving scene ---------- */
  var howSec = document.getElementById("how-it-works");
  var howStage = document.getElementById("howStage");
  var howStepsWrap = document.getElementById("howSteps");
  var howStepEls = howStepsWrap ? [].slice.call(howStepsWrap.children) : [];
  var howRailFill = document.getElementById("howRailFill");
  var howDots = [].slice.call(document.querySelectorAll(".how-rail .hr-dot"));
  var howLastIdx = -1;

  function howFrame(p) {
    var usable = clamp01((p - 0.03) / 0.93);
    // idle (-1) until the pin actually starts, so the chip fly-in of step 1
    // plays in front of the user instead of firing offscreen at page load
    var idx = p <= 0.0001 ? -1 : Math.min(5, Math.floor(usable * 6));
    if (howRailFill) howRailFill.style.setProperty("--p", usable.toFixed(4));
    if (idx === howLastIdx) return;
    howLastIdx = idx;
    howStepEls.forEach(function (st, i) {
      flag(st, "active", i === idx);
      flag(st, "past", i < idx);
    });
    for (var s = 1; s <= 6; s++) flag(howStage, "ss" + s, s <= idx + 1);
    howDots.forEach(function (d, i) { flag(d, "on", i <= idx); });
  }

  /* ---------- Background morph: ivory <-> espresso, scroll-interpolated ---------- */
  var bgMorph = document.getElementById("bgMorph");
  var morphSecs = [];
  function sectionColor(el) {
    var cl = el.classList;
    if (cl.contains("band-dark")) return [42, 33, 27];       // espresso
    if (cl.contains("band-tint")) return [242, 234, 224];    // ivory-deep
    if (cl.contains("focus-band")) return [231, 235, 225];   // sage-soft
    if (cl.contains("site-footer")) return [33, 25, 19];
    return [250, 246, 240];                                  // ivory
  }
  var lastMorph = "";
  function morphFrame(vh) {
    var col = morphSecs[0].rgb.slice();
    for (var i = 1; i < morphSecs.length; i++) {
      var top = morphSecs[i].el.getBoundingClientRect().top;
      // tight window: colour only fully flips once the incoming band
      // dominates the viewport (keeps text contrast during the morph)
      var t = clamp01((vh * 0.55 - top) / (vh * 0.4));
      if (t <= 0) break;
      t = smoothstep(t);
      var c = morphSecs[i].rgb;
      col[0] += (c[0] - col[0]) * t;
      col[1] += (c[1] - col[1]) * t;
      col[2] += (c[2] - col[2]) * t;
    }
    var out = "rgb(" + Math.round(col[0]) + "," + Math.round(col[1]) + "," + Math.round(col[2]) + ")";
    if (out !== lastMorph) {
      lastMorph = out;
      bgMorph.style.backgroundColor = out;
    }
  }

  /* ---------- one rAF loop (read phase, then write phase) ---------- */
  var framePending = false;
  function motionTick() {
    framePending = false;
    var vh = window.innerHeight || 1;
    var rects = scenes.map(function (s) { return s.el.getBoundingClientRect(); });
    scenes.forEach(function (s, i) {
      var r = rects[i];
      var span = r.height - vh;
      var p = span > 40 ? clamp01(-r.top / span) : (r.top < vh * 0.5 ? 1 : 0);
      s.fn(p, vh);
    });
    if (bgMorph && morphSecs.length) morphFrame(vh);
  }
  function requestTick() {
    if (!framePending) { framePending = true; requestAnimationFrame(motionTick); }
  }

  if (scrubOK) {
    if (heroScene) addScene(heroScene, heroFrame);
    if (painSec && painCards.length) addScene(painSec, painFrame);
    if (howSec && howStage) addScene(howSec, howFrame);
    var mSecs = [].slice.call(document.querySelectorAll("main > section"));
    var foot = document.querySelector(".site-footer");
    if (foot) mSecs.push(foot);
    morphSecs = mSecs.map(function (el) { return { el: el, rgb: sectionColor(el) }; });

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", function () { painBase = null; requestTick(); }, { passive: true });
    requestTick();
  }

  /* ---------- Masked serif line reveals ---------- */
  if (motionOK) {
    var maskTargets = [].slice.call(document.querySelectorAll("#hero-h, .display-2"));
    maskTargets.forEach(function (h) { h.__orig = h.innerHTML; });

    function buildMasks() {
      maskTargets.forEach(function (h) {
        var revealed = h.classList.contains("in");
        h.innerHTML = h.__orig;
        // chunk into word groups; nodes not separated by whitespace stay glued
        // together (e.g. "<span>constantly</span>." must not gain a space)
        var chunks = [];
        var open = false;
        function pushPart(node) {
          if (!open || !chunks.length) chunks.push([]);
          chunks[chunks.length - 1].push(node);
          open = true;
        }
        [].slice.call(h.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            n.textContent.split(/(\s+)/).forEach(function (pt) {
              if (!pt) return;
              if (/^\s+$/.test(pt)) { open = false; }
              else pushPart(document.createTextNode(pt));
            });
          } else if (n.nodeType === 1) {
            pushPart(n);
          }
        });
        h.innerHTML = "";
        var spans = chunks.map(function (chunk) {
          var sp = document.createElement("span");
          chunk.forEach(function (node) { sp.appendChild(node); });
          h.appendChild(sp);
          h.appendChild(document.createTextNode(" "));
          return sp;
        });
        // group tokens into visual lines by offsetTop
        var lines = [];
        var lastTop = null;
        spans.forEach(function (sp) {
          var t = sp.offsetTop;
          if (lastTop === null || Math.abs(t - lastTop) > 4) { lines.push([]); lastTop = t; }
          lines[lines.length - 1].push(sp);
        });
        h.innerHTML = "";
        lines.forEach(function (line, li) {
          var wrap = document.createElement("span");
          wrap.className = "mline";
          var inner = document.createElement("span");
          inner.className = "mline-in";
          inner.style.setProperty("--ml", li);
          line.forEach(function (sp, wi) {
            while (sp.firstChild) inner.appendChild(sp.firstChild);
            if (wi < line.length - 1) inner.appendChild(document.createTextNode(" "));
          });
          wrap.appendChild(inner);
          h.appendChild(wrap);
        });
        h.classList.add("masked");
        if (revealed) {
          h.classList.add("no-anim", "in");
          requestAnimationFrame(function () { h.classList.remove("no-anim"); });
        }
      });
    }

    buildMasks();

    var maskIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); maskIO.unobserve(en.target); }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
    maskTargets.forEach(function (h) { if (h.id !== "hero-h") maskIO.observe(h); });

    // hero H1 reveals as part of the load intro
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var hh = document.getElementById("hero-h");
        if (hh) hh.classList.add("in");
      });
    });

    // rebuild after webfonts load / on resize (line breaks shift)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { buildMasks(); painBase = null; requestTick(); });
    }
    var maskRz;
    window.addEventListener("resize", function () {
      clearTimeout(maskRz);
      maskRz = setTimeout(buildMasks, 220);
    }, { passive: true });
  }


  /* ============================================================
     PHONE CHOREOGRAPHY (html.js-steps, below 768px)

     The desktop scenes are pinned and scroll-scrubbed. That is the
     wrong instrument on a phone: a pinned sticky frame fights the
     browser chrome collapse and a scrubbed scene hijacks the scroll,
     so below 768px the scrub engine never runs and this one does
     instead. It drives the SAME state classes the scrub scenes drive
     (hm1..hm4 / ht1,ht2 / hc0..hc3 / hfloat, the pain grid, ss1..ss6
     on the how-it-works stage, the background colour layer) — but
     reading position only decides WHICH scene plays; time then walks
     the states inside it, once, and the scene rests on its last state.

     Rules kept: transform and opacity only, passive listeners, every
     play-once observer disconnects as soon as its scene has fired, and
     nothing here runs under prefers-reduced-motion or without JS —
     in both of those cases the CSS final states are already correct.
     ============================================================ */

  if (stepsOK) {
    /* one beat of a scene's timeline. Nothing here is ever scheduled under
       prefers-reduced-motion (stepsOK is false), so there is no timer to
       cancel and no cancellation path to get wrong. */
    function stepAt(ms, fn) { window.setTimeout(fn, ms); }

    /* fire `run` the first time `el` is on screen, then stop watching it */
    function playOnce(el, ratio, run) {
      if (!el) return;
      var io = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
          if (!entries[i].isIntersecting) continue;
          io.disconnect();
          run();
          return;
        }
      }, { threshold: ratio, rootMargin: "0px 0px -8% 0px" });
      io.observe(el);
    }

    /* ---------- HERO: the 11:43 PM exchange plays itself ----------
       Same beats as the scrubbed version: the guest's message is already
       waiting, the agent types, answers, sends the unit guide, the guest
       confirms two minutes later and the Chatwoot stamp lands. The clock
       starts at 11:43 so the two minutes are something you watch pass. */
    if (heroScene) {
      if (heroClock) heroClock.textContent = "11:43 PM";
      flag(heroScene, "hm1", true);
      flag(heroScene, "hc0", true);

      playOnce(heroScene, 0.05, function () {
        stepAt(700, function () { flag(heroScene, "ht1", true); });
        stepAt(1900, function () {
          flag(heroScene, "ht1", false);
          flag(heroScene, "hm2", true);
          flag(heroScene, "hc0", false);
          flag(heroScene, "hc1", true);
        });
        stepAt(2900, function () { flag(heroScene, "ht2", true); });
        stepAt(3800, function () {
          flag(heroScene, "ht2", false);
          flag(heroScene, "hm3", true);
        });
        stepAt(4900, function () {
          flag(heroScene, "hm4", true);
          flag(heroScene, "hc1", false);
          flag(heroScene, "hc2", true);
          if (heroClock) heroClock.textContent = "11:45 PM";
          if (heroChat) heroChat.scrollTop = heroChat.scrollHeight;
        });
        stepAt(5800, function () {
          flag(heroScene, "hfloat", true);
          flag(heroScene, "hc2", false);
          flag(heroScene, "hc3", true);
          if (heroChat) heroChat.scrollTop = heroChat.scrollHeight;
        });
      });
    }

    /* ---------- PAIN: the six notifications keep arriving ----------
       Desktop piles them up and sweeps them into order. On a phone the
       grid is already a single column, so the meaning that carries is the
       arrival itself: one card at a time, unread counter climbing behind
       them. It stops at six and stays there. */
    if (painGrid && painCards.length) {
      playOnce(painGrid, 0.15, function () {
        painCards.forEach(function (card, i) {
          stepAt(140 + i * 260, function () {
            card.classList.add("is-on");
            if (painCount) {
              painCount.classList.add("is-on");
              if (painCountNum) painCountNum.textContent = String(i + 1);
            }
          });
        });
      });
    }

    /* ---------- HOW IT WORKS: six steps you can actually drive ----------
       A horizontal snap track plus a dot index. It auto-advances from the
       moment the section arrives so the stage tells its story unprompted,
       and the first touch anywhere on the track or the dots hands control
       over permanently. The track is a native overflow-x scroller, so the
       browser — not this code — decides whether a gesture is a horizontal
       swipe or a page scroll, and a vertical swipe is never captured. */
    var howDotEls = [].slice.call(document.querySelectorAll("#howDots .how-dot"));
    if (howSec && howStage && howStepsWrap && howStepEls.length) {
      var howIdx = -1;
      var howAuto = true;
      /* the stage stays empty until the section is actually on screen, so
         step 1's chips fly into the unit brain in front of the visitor
         instead of having already landed while it was below the fold */
      var howArmed = false;
      var howTimer = null;
      var howSyncing = false;
      var HOW_DWELL = 2600;

      function howStopAuto() {
        howAuto = false;
        if (howTimer) { window.clearTimeout(howTimer); howTimer = null; }
      }

      /* snap position of card i, expressed the way the scroll container sees
         it: card 0 sits at scrollLeft 0 because scroll-padding matches the
         track's own left gutter */
      function howPos(i) {
        return howStepEls[i].offsetLeft - howStepEls[0].offsetLeft;
      }

      function howScrollTo(i) {
        if (!howStepEls[i]) return;
        var left = howPos(i);
        howSyncing = true;
        if (howStepsWrap.scrollTo) howStepsWrap.scrollTo({ left: left, behavior: "smooth" });
        else howStepsWrap.scrollLeft = left;
        window.setTimeout(function () { howSyncing = false; }, 600);
      }

      /* marks a step everywhere — card, dots and the cumulative stage —
         without moving the track; the track calls this from its own scroll */
      function howMark(i) {
        if (i === howIdx) return;
        howIdx = i;
        howStepEls.forEach(function (st, k) {
          flag(st, "active", k === i);
          flag(st, "past", k < i);
        });
        howPaintStage();
        howDotEls.forEach(function (d, k) { flag(d, "on", k === i); });
      }

      function howPaintStage() {
        for (var s = 1; s <= 6; s++) flag(howStage, "ss" + s, howArmed && s <= howIdx + 1);
      }

      function howGo(i, scroll) {
        howMark(i);
        if (scroll) howScrollTo(i);
      }

      function howQueue() {
        if (!howAuto) return;
        howTimer = window.setTimeout(function () {
          howTimer = null;
          if (!howAuto || howIdx >= howStepEls.length - 1) return;
          howGo(howIdx + 1, true);
          howQueue();
        }, HOW_DWELL);
      }

      /* the card whose snap position is nearest the current scroll is current */
      function howSyncFromTrack() {
        if (howSyncing) return;
        var x = howStepsWrap.scrollLeft;
        var best = 0;
        var bestD = Infinity;
        for (var i = 0; i < howStepEls.length; i++) {
          var d = Math.abs(howPos(i) - x);
          if (d < bestD) { bestD = d; best = i; }
        }
        howMark(best);
      }

      var howTick = false;
      howStepsWrap.addEventListener("scroll", function () {
        if (howTick) return;
        howTick = true;
        requestAnimationFrame(function () { howTick = false; howSyncFromTrack(); });
      }, { passive: true });

      /* any touch on the track is the visitor taking over */
      howStepsWrap.addEventListener("pointerdown", howStopAuto, { passive: true });
      howStepsWrap.addEventListener("touchstart", howStopAuto, { passive: true });

      howDotEls.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
          howStopAuto();
          howGo(i, true);
        });
      });

      howMark(0);
      playOnce(howSec, 0.2, function () {
        howArmed = true;
        howPaintStage();
        howQueue();
      });
    }

    /* ---------- BACKGROUND MORPH ----------
       Desktop interpolates the fixed colour layer per frame. Here the same
       band colours are committed as discrete states by an observer watching
       a 1%-tall line 15% down the viewport — the point at which the incoming
       band already fills the screen, which is where the desktop scrub reaches
       the end of its own crossfade window. A 300ms CSS transition does the
       rest. This is the one observer that stays connected: the background has
       to keep matching the band you are reading, in both directions. */
    if (bgMorph) {
      var bandSecs = [].slice.call(document.querySelectorAll("main > section"));
      var bandFoot = document.querySelector(".site-footer");
      if (bandFoot) bandSecs.push(bandFoot);
      if (bandSecs.length) {
        var bandLast = "";
        function bandPaint(el) {
          var c = sectionColor(el);
          var out = "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")";
          if (out === bandLast) return;
          bandLast = out;
          bgMorph.style.backgroundColor = out;
        }
        bandPaint(bandSecs[0]);
        var bandIO = new IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) bandPaint(entries[i].target);
          }
        }, { rootMargin: "-15% 0px -84% 0px", threshold: 0 });
        bandSecs.forEach(function (el) { bandIO.observe(el); });
      }
    }
  }
  /* ---------- Simulator: invite pulse until first interaction ---------- */
  var simChipsEl = document.getElementById("simChips");
  if (motionOK && simChipsEl) {
    simChipsEl.classList.add("invite");
    simChipsEl.addEventListener("pointerdown", function () {
      simChipsEl.classList.remove("invite");
    }, { once: true });
  }
})();

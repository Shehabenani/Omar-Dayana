(function () {
  var resizeTimer = null;
  var retryTimer = null;
  var retryCount = 0;
  var reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function measureShift(set) {
    return set.getBoundingClientRect().width;
  }

  function syncTrack(track, force) {
    var set = track.querySelector(".moments__set");
    if (!set) return false;

    var shift = measureShift(set);
    if (shift <= 0) return false;

    var prev = track._marqueeShift || 0;
    var changed = Math.abs(prev - shift) >= 1;

    // After the track is running, only update on real resize (force)
    // so image decode / subpixel noise cannot restart the animation.
    if (!track._marqueeShift || (force && changed)) {
      track._marqueeShift = shift;
      track.style.setProperty("--marquee-shift", shift.toFixed(2) + "px");
    }

    if (!track.classList.contains("moments__track--ready")) {
      // Force a style flush with the correct shift before animation starts
      void track.offsetWidth;
      track.classList.add("moments__track--ready");
    }

    return true;
  }

  function syncAll(force) {
    var ok = true;
    var found = false;

    document.querySelectorAll(".moments__track").forEach(function (track) {
      found = true;
      if (!syncTrack(track, force)) ok = false;
    });

    return found && ok;
  }

  function start() {
    if (reducedMotion) return;

    if (!syncAll(false)) {
      if (retryCount < 12) {
        retryCount += 1;
        clearTimeout(retryTimer);
        retryTimer = setTimeout(start, 200);
      }
      return;
    }

    retryCount = 0;
  }

  function scheduleStart() {
    requestAnimationFrame(function () {
      requestAnimationFrame(start);
    });
  }

  function setPaused(paused) {
    document.querySelectorAll(".moments__track").forEach(function (track) {
      track.style.animationPlayState = paused ? "paused" : "running";
    });
  }

  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (reducedMotion) return;
      syncAll(true);
    }, 150);
  }

  document.addEventListener("visibilitychange", function () {
    setPaused(document.hidden);
  });

  scheduleStart();

  var moments = document.getElementById("moments");
  if (moments && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            start();
            setPaused(false);
          } else {
            setPaused(true);
          }
        });
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(moments);
  }

  window.addEventListener("resize", onResize, { passive: true });
  window.initMomentsMarquee = scheduleStart;
})();

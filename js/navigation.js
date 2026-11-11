(() => {
  const sections = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'))
    .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter(({ section }) => section);

  if (sections.length === 0) return;

  let currentLink;
  let frame;

  const updateCurrentSection = () => {
    frame = undefined;
    const marker = Math.max(108, window.innerHeight * 0.25);
    const atBottom = window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 1;
    let nextLink;

    if (atBottom) {
      nextLink = sections[sections.length - 1].link;
    } else {
      for (const { link, section } of sections) {
        if (section.getBoundingClientRect().top > marker) break;
        nextLink = link;
      }
    }

    if (currentLink === nextLink) return;
    currentLink?.removeAttribute("aria-current");
    nextLink?.setAttribute("aria-current", "location");
    currentLink = nextLink;
  };

  const scheduleUpdate = () => {
    if (frame === undefined) frame = requestAnimationFrame(updateCurrentSection);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("pageshow", scheduleUpdate);
  scheduleUpdate();
})();

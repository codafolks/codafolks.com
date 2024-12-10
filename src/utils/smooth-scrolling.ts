function enableSectionSnapScroll(): void {
  let isAnimating = false;
  let animationFrameId: number | null = null;

  // Collect all sections (assuming <main><section>...</section></main>)
  const sections: HTMLElement[] = Array.from(document.querySelectorAll('main > section'));
  const sectionCount = sections.length;

  window.addEventListener('wheel', onWheel, { passive: false });

  function onWheel(e: WheelEvent): void {
    // Prevent the default scroll behavior
    e.preventDefault();

    if (isAnimating) {
      // Ignore wheel events while animating
      return;
    }

    // Determine current section by rounding to nearest section index
    const currentScroll = window.scrollY;
    const currentSectionIndex = Math.round(currentScroll / (window.innerHeight));

    // Determine the next target section index based on scroll direction
    let targetIndex = currentSectionIndex;

    if (e.deltaY > 0) {
      // Scrolling down
      targetIndex = Math.min(currentSectionIndex + 1, sectionCount - 1);
    } else if (e.deltaY < 0) {
      // Scrolling up
      targetIndex = Math.max(currentSectionIndex - 1, 0);
    }

    // If no change in section, do nothing
    if (targetIndex === currentSectionIndex) return;

    // Calculate the scroll target position
    const targetPosition = targetIndex * window.innerHeight;

    isAnimating = true;
    animateScrollTo(targetPosition);
  }

  function animateScrollTo(targetY: number): void {
    const start: number = window.scrollY;
    const distance: number = targetY - start;
    const duration = 600; // Adjust duration (ms) for slower/faster animation
    const startTime = performance.now();

    function animationStep(now: number): void {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // An ease-in-out function for smoother motion (can be tweaked)
      const easedProgress = easeInOutQuad(progress);

      const currentY = start + distance * easedProgress;
      window.scrollTo(0, currentY);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animationStep);
      } else {
        // Animation complete
        isAnimating = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      }
    }

    animationFrameId = requestAnimationFrame(animationStep);
  }

  // A simple easing function for a smooth effect
  function easeInOutQuad(t: number): number {
    return (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
  }
}

// Activate the improved smooth snapping scroll
enableSectionSnapScroll();

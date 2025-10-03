// Performance utilities for optimizing bundle loading

export function detectDeviceCapabilities() {
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSlowConnection = navigator.connection && 
    (navigator.connection.effectiveType === 'slow-2g' || 
     navigator.connection.effectiveType === '2g' ||
     navigator.connection.saveData);
  
  // More aggressive Three.js filtering - only on high-end desktop with good connection
  const isHighEndDesktop = !isMobile && 
    navigator.hardwareConcurrency >= 8 && 
    !prefersReducedMotion && 
    !isSlowConnection &&
    window.innerWidth >= 1200; // Only on large screens

  return {
    isMobile,
    isLowEnd,
    prefersReducedMotion,
    isSlowConnection,
    shouldUseThreeJS: isHighEndDesktop
  };
}

export function preloadCriticalResources() {
  // Only preload resources that are actually used immediately
  // Note: CSS is already bundled and included in the HTML, no need to preload
  const criticalResources: Array<{ href: string; as: string }> = [];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    document.head.appendChild(link);
  });
}

export function optimizeImages() {
  // Add loading="lazy" to non-critical images
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

export function enableResourceHints() {
  // Add resource hints for better performance
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
}

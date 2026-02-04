import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Monitor Core Web Vitals (LCP, FID, CLS)
 */
export function useCoreWebVitals() {
  const [metrics, setMetrics] = useState({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // LCP Observer
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // FID Observer
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const firstEntry = entries[0];
          setMetrics(prev => ({ 
            ...prev, 
            fid: firstEntry.processingStart - firstEntry.startTime 
          }));
        }
      });
      
      fidObserver.observe({ type: 'first-input', buffered: true });

      // CLS Observer
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      // FCP Observer
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      
      fcpObserver.observe({ type: 'paint', buffered: true });

      // TTFB
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0];
        setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        fcpObserver.disconnect();
      };
    } catch (error) {
      console.warn('PerformanceObserver not fully supported:', error);
    }
  }, []);

  return metrics;
}

/**
 * Measure component render performance
 */
export function useRenderTiming(componentName) {
  const startTimeRef = useRef(null);
  const renderCountRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = performance.now();
    renderCountRef.current += 1;
    
    return () => {
      if (startTimeRef.current) {
        const endTime = performance.now();
        const duration = endTime - startTimeRef.current;
        
        // Log if render takes longer than 16ms (one frame)
        if (duration > 16) {
          console.warn(
            `[Performance] ${componentName} render took ${duration.toFixed(2)}ms ` +
            `(render #${renderCountRef.current})`
          );
        }
      }
    };
  });
}

/**
 * Throttled callback for scroll/resize events
 */
export function useThrottledCallback(callback, delay = 100) {
  const lastCallRef = useRef(0);
  const timeoutRef = useRef(null);

  return useCallback((...args) => {
    const now = Date.now();
    const remaining = delay - (now - lastCallRef.current);

    if (remaining <= 0) {
      callback(...args);
      lastCallRef.current = now;
    } else if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        callback(...args);
        lastCallRef.current = Date.now();
        timeoutRef.current = null;
      }, remaining);
    }
  }, [callback, delay]);
}

/**
 * Intersection observer for lazy loading
 */
export function useIntersectionObserver(
  options = { threshold: 0.1, rootMargin: '50px' }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting];
}

/**
 * Memory usage monitoring (Chrome only)
 */
export function useMemoryMonitor() {
  const [memoryInfo, setMemoryInfo] = useState(null);

  useEffect(() => {
    if (!('memory' in performance)) {
      return;
    }

    const updateMemory = () => {
      const memory = performance.memory;
      setMemoryInfo({
        usedJSHeapSize: (memory.usedJSHeapSize / 1048576).toFixed(2),
        totalJSHeapSize: (memory.totalJSHeapSize / 1048576).toFixed(2),
        jsHeapSizeLimit: (memory.jsHeapSizeLimit / 1048576).toFixed(2),
        utilization: ((memory.usedJSHeapSize / memory.totalJSHeapSize) * 100).toFixed(1)
      });
    };

    updateMemory();
    const interval = setInterval(updateMemory, 5000);

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
}

/**
 * Track page visibility
 */
export function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isVisible;
}

/**
 * Network status monitoring
 */
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get connection info if available
    if ('connection' in navigator) {
      const connection = navigator.connection;
      setConnectionType(connection.effectiveType || 'unknown');
      
      const handleConnectionChange = () => {
        setConnectionType(connection.effectiveType || 'unknown');
      };
      
      connection.addEventListener('change', handleConnectionChange);
      
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        connection.removeEventListener('change', handleConnectionChange);
      };
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, connectionType };
}

/**
 * Performance score calculator
 */
export function usePerformanceScore() {
  const metrics = useCoreWebVitals();
  const memory = useMemoryMonitor();

  const calculateScore = useCallback(() => {
    let score = 100;
    const issues = [];

    // LCP scoring (target: <2500ms)
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) {
        score -= 25;
        issues.push('LCP too slow');
      } else if (metrics.lcp > 2500) {
        score -= 10;
        issues.push('LCP could be faster');
      }
    }

    // FID scoring (target: <100ms)
    if (metrics.fid !== null) {
      if (metrics.fid > 300) {
        score -= 25;
        issues.push('FID too high');
      } else if (metrics.fid > 100) {
        score -= 10;
        issues.push('FID could be better');
      }
    }

    // CLS scoring (target: <0.1)
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) {
        score -= 25;
        issues.push('CLS too high');
      } else if (metrics.cls > 0.1) {
        score -= 10;
        issues.push('CLS could be improved');
      }
    }

    // Memory warning
    if (memory && parseFloat(memory.utilization) > 80) {
      score -= 10;
      issues.push('High memory usage');
    }

    return {
      score: Math.max(0, score),
      grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
      issues,
      isGood: score >= 90
    };
  }, [metrics, memory]);

  return calculateScore();
}

export default {
  useCoreWebVitals,
  useRenderTiming,
  useThrottledCallback,
  useIntersectionObserver,
  useMemoryMonitor,
  usePageVisibility,
  useNetworkStatus,
  usePerformanceScore
};


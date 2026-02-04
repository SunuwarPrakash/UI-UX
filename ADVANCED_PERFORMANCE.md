# Advanced Performance & System Optimization Plan

## 🎯 Performance Goals

| Metric              | Current | Target |
| ------------------- | ------- | ------ |
| Lighthouse Score    | ~85     | 95+    |
| Core Web Vitals LCP | ~2.5s   | <1.5s  |
| Core Web Vitals FID | ~100ms  | <50ms  |
| Core Web Vitals CLS | ~0.1    | <0.05  |
| Bundle Size         | ~427kB  | <300kB |
| Time to Interactive | ~3s     | <2s    |

---

## 🚀 Advanced Vite Optimizations

### 1. **Enhanced Build Configuration**

```javascript
// vite.config.js - Advanced optimizations
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  base: "/",

  build: {
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          utils: ["clsx", "tailwind-merge"],
        },

        // Optimize chunk naming
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },

        // Manual deduplication
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },

      // Compression
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
    },

    // Minification
    minify: "esbuild",
    esbuildOptions: {
      target: "es2015",
      treeShaking: true,
      legalComments: "none",
      drop: ["console", "debugger", "assert"],
      mangleProps: /^_/,
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    },

    // CSS optimization
    cssCodeSplit: true,
    cssMinify: true,

    // Module resolution
    target: "es2015",
    emptyOutDir: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
  },

  // Dev server
  server: {
    host: true,
    port: 5173,
    hmr: true,
    cors: true,

    // Optimization
    optimizeDeps: {
      include: ["react", "react-dom", "framer-motion", "react-router-dom"],
      exclude: [],
    },
  },

  // Preview server
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },

  // Performance
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json"],
    mainFields: ["module", "main"],
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
    },
  },

  // CSS
  css: {
    postcss: {
      plugins: [],
    },
    preprocessorOptions: {},
  },
});
```

---

## 📦 Advanced Lazy Loading

### 2. **Component Lazy Loading**

```javascript
// src/utils/lazyLoad.jsx
import { lazy, Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export const lazyLoad = (component) => {
  return lazy(() => {
    return new Promise((resolve) => {
      // Simulate network delay for testing
      // Remove in production
      setTimeout(() => {
        resolve(component);
      }, 100);
    });
  });
};

// Preload components on hover
export const preloadComponent = (componentPromise) => {
  componentPromise.then((component) => {
    // Component loaded, ready to use
  });
};

// Lazy loaded components with fallbacks
export const LazyComponents = {
  Hero: lazy(() => import("@/components/Hero")),
  Projects: lazy(() => import("@/components/Projects")),
  Services: lazy(() => import("@/components/Services")),
  About: lazy(() => import("@/components/About")),
  Contact: lazy(() => import("@/components/Contact")),
  Footer: lazy(() => import("@/components/Footer")),
  Testimonials: lazy(() => import("@/components/Testimonials")),
};

// Loading fallback component
export const ComponentLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <LoadingSpinner size="large" />
  </div>
);
```

---

## 🔧 Performance Utilities

### 3. **Performance Monitoring Hook**

```javascript
// src/hooks/usePerformance.jsx
import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Monitor Core Web Vitals
 */
export function useCoreWebVitals() {
  const [metrics, setMetrics] = useState({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  useEffect(() => {
    // LCP Observer
    if ("PerformanceObserver" in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics((prev) => ({ ...prev, lcp: lastEntry.startTime }));
        });

        lcpObserver.observe({
          type: "largest-contentful-paint",
          buffered: true,
        });

        // FID Observer
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const firstEntry = entries[0];
          setMetrics((prev) => ({
            ...prev,
            fid: firstEntry.processingStart - firstEntry.startTime,
          }));
        });

        fidObserver.observe({ type: "first-input", buffered: true });

        // CLS Observer
        const clsObserver = new PerformanceObserver((entryList) => {
          let clsValue = 0;
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          setMetrics((prev) => ({ ...prev, cls: clsValue }));
        });

        clsObserver.observe({ type: "layout-shift", buffered: true });

        // FCP Observer
        const fcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fcpEntry = entries.find(
            (entry) => entry.name === "first-contentful-paint",
          );
          if (fcpEntry) {
            setMetrics((prev) => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });

        fcpObserver.observe({ type: "paint", buffered: true });

        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
          fcpObserver.disconnect();
        };
      } catch (error) {
        console.warn("PerformanceObserver not supported:", error);
      }
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
      const endTime = performance.now();
      const duration = endTime - startTimeRef.current;

      if (duration > 16) {
        // Log if over 16ms (one frame)
        console.warn(
          `[Performance] ${componentName} took ${duration.toFixed(2)}ms (render #${renderCountRef.current})`,
        );
      }
    };
  });
}

/**
 * Throttled scroll handler
 */
export function useThrottledScroll(callback, delay = 100) {
  const lastRunRef = useRef(Date.now());

  return useCallback(() => {
    if (Date.now() - lastRunRef.current >= delay) {
      callback();
      lastRunRef.current = Date.now();
    }
  }, [callback, delay]);
}

/**
 * Intersection observer for lazy loading
 */
export function useIntersectionObserver(
  options = { threshold: 0.1, rootMargin: "50px" },
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isIntersecting];
}

/**
 * Memory usage monitoring
 */
export function useMemoryMonitor() {
  const [memoryInfo, setMemoryInfo] = useState(null);

  useEffect(() => {
    if ("memory" in performance) {
      const updateMemory = () => {
        const memory = performance.memory;
        setMemoryInfo({
          usedJSHeapSize: (memory.usedJSHeapSize / 1048576).toFixed(2),
          totalJSHeapSize: (memory.totalJSHeapSize / 1048576).toFixed(2),
          jsHeapSizeLimit: (memory.jsHeapSizeLimit / 1048576).toFixed(2),
        });
      };

      updateMemory();
      const interval = setInterval(updateMemory, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return memoryInfo;
}
```

---

## 🎨 Image Optimization

### 4. **Image Component with Optimization**

```javascript
// src/components/OptimizedImage.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function OptimizedImage({
  src,
  alt,
  className = "",
  placeholder = true,
  lazy = true,
  sizes = "100vw",
  priority = false,
  aspectRatio = "auto",
  objectFit = "cover",
  onLoad,
  onError,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Placeholder / Skeleton */}
      {placeholder && !isLoaded && !hasError && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse"
        />
      )}

      {/* Main Image */}
      {!hasError && (
        <motion.img
          src={src}
          alt={alt}
          loading={lazy && !priority ? "lazy" : "eager"}
          decoding={priority ? "sync" : "async"}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit }}
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(baseUrl, widths = [320, 640, 960, 1280, 1920]) {
  return widths.map((w) => `${baseUrl}?w=${w} ${w}w`).join(", ");
}
```

---

## 💾 Asset Optimization

### 5. **Asset Preloading & Caching**

```javascript
// src/utils/assetLoader.js

/**
 * Preload critical assets
 */
export function preloadCriticalAssets() {
  // Preload fonts
  if (document.fonts) {
    document.fonts.ready.then(() => {
      console.log("[Performance] Fonts loaded");
    });
  }

  // Preload critical images
  const criticalImages = ["/src/assets/avatar.png", "/src/assets/hero-bg.jpg"];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical CSS
  const criticalCSS = document.querySelectorAll('link[rel="stylesheet"]');
  criticalCSS.forEach((link) => {
    if (link.media !== "all") {
      link.media = "all";
    }
  });
}

/**
 * Cache assets in service worker
 */
export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("[ServiceWorker] Registered:", registration.scope);
      })
      .catch((error) => {
        console.warn("[ServiceWorker] Failed:", error);
      });
  }
}

/**
 * Load scripts asynchronously
 */
export function asyncLoadScript(src, id) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

/**
 * Optimize third-party scripts
 */
export function deferThirdPartyScripts() {
  const scripts = document.querySelectorAll('script[type="text/partytown"]');
  // PartyTown will handle these with web workers
}
```

---

## 📊 Performance Metrics Dashboard

### 6. **Performance Dashboard Component**

```javascript
// src/components/PerformanceDashboard.jsx
import { useCoreWebVitals, useMemoryMonitor } from "@/hooks/usePerformance";

export default function PerformanceDashboard() {
  const metrics = useCoreWebVitals();
  const memory = useMemoryMonitor();

  const getScore = (value, thresholds) => {
    if (value === null) return { text: "Measuring...", color: "gray" };
    if (value <= thresholds.good) return { text: "Good", color: "green" };
    if (value <= thresholds.needsImprovement)
      return { text: "OK", color: "yellow" };
    return { text: "Poor", color: "red" };
  };

  const lcpScore = getScore(metrics.lcp, {
    good: 2500,
    needsImprovement: 4000,
  });
  const fidScore = getScore(metrics.fid, { good: 100, needsImprovement: 300 });
  const clsScore = getScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 });

  const overallScore =
    ((lcpScore === "green" ? 1 : lcpScore === "yellow" ? 0.5 : 0) +
      (fidScore === "green" ? 1 : fidScore === "yellow" ? 0.5 : 0) +
      (clsScore === "green" ? 1 : clsScore === "yellow" ? 0.5 : 0)) /
    3;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <h3 className="font-bold mb-3">📊 Performance</h3>

      <div className="space-y-2 text-sm">
        <MetricRow
          label="LCP"
          value={metrics.lcp?.toFixed(0)}
          unit="ms"
          score={lcpScore}
        />
        <MetricRow
          label="FID"
          value={metrics.fid?.toFixed(0)}
          unit="ms"
          score={fidScore}
        />
        <MetricRow
          label="CLS"
          value={metrics.cls?.toFixed(3)}
          unit=""
          score={clsScore}
        />

        {memory && (
          <div className="pt-2 border-t mt-2">
            <div className="text-xs text-gray-500">
              Memory: {memory.usedJSHeapSize}MB / {memory.totalJSHeapSize}MB
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MetricRow({ label, value, unit, score }) {
  return (
    <div className="flex justify-between items-center">
      <span>{label}:</span>
      <div className="flex items-center gap-2">
        <span>
          {value}
          {unit}
        </span>
        <span className={`w-2 h-2 rounded-full bg-${score.color}-500`} />
      </div>
    </div>
  );
}
```

---

## 🎯 Implementation Checklist

### Phase 1: Build Optimizations

- [ ] Update vite.config.js with advanced settings
- [ ] Enable tree shaking and code splitting
- [ ] Configure compression
- [ ] Optimize chunk naming

### Phase 2: Runtime Optimizations

- [ ] Add lazy loading for components
- [ ] Implement Core Web Vitals monitoring
- [ ] Add performance dashboard
- [ ] Optimize images

### Phase 3: Advanced Features

- [ ] Add service worker
- [ ] Implement asset preloading
- [ ] Add performance metrics
- [ ] Configure caching

### Phase 4: Testing & Monitoring

- [ ] Lighthouse audit
- [ ] Core Web Vitals check
- [ ] Bundle analysis
- [ ] Performance regression tests

---

## 📚 Dependencies to Add

```json
{
  "devDependencies": {
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-purgecss": "^2.5.0"
  }
}
```

---

**Created**: $(date +"%Y-%m-%d")
**Version**: 1.0

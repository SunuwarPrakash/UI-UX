import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCoreWebVitals, useMemoryMonitor, usePerformanceScore } from '../hooks/usePerformance';

export default function PerformanceDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const metrics = useCoreWebVitals();
  const memory = useMemoryMonitor();
  const { score, grade, issues, isGood } = usePerformanceScore();

  // Only show in development
  useEffect(() => {
    if (import.meta.env.DEV) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible || import.meta.env.PROD) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          scale: isMinimized ? 0.8 : 1
        }}
        exit={{ opacity: 0, x: 100 }}
        className={`fixed bottom-4 right-4 z-[9999] ${
          isMinimized ? 'w-auto' : 'w-72'
        }`}
      >
        {/* Header */}
        <motion.div
          className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden ${
            isMinimized ? 'p-2' : 'p-4'
          }`}
        >
          {/* Toggle & Title */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  isGood ? 'bg-green-500' : 'bg-yellow-500'
                }`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {!isMinimized && (
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Performance
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg 
                  className="w-4 h-4 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ transform: isMinimized ? 'rotate(180deg)' : 'none' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Score Display */}
          {!isMinimized && (
            <>
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className={`text-4xl font-bold ${
                    score >= 90 ? 'text-green-500' :
                    score >= 80 ? 'text-blue-500' :
                    score >= 70 ? 'text-yellow-500' :
                    'text-red-500'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {grade}
                </motion.div>
                <div className="ml-3 text-right">
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {score}
                  </div>
                  <div className="text-xs text-gray-500">Lighthouse Score</div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <MetricCard
                  label="LCP"
                  value={metrics.lcp}
                  unit="ms"
                  threshold={2500}
                  warningThreshold={4000}
                />
                <MetricCard
                  label="FID"
                  value={metrics.fid}
                  unit="ms"
                  threshold={100}
                  warningThreshold={300}
                />
                <MetricCard
                  label="CLS"
                  value={metrics.cls}
                  threshold={0.1}
                  warningThreshold={0.25}
                  precision={3}
                />
                <MetricCard
                  label="FCP"
                  value={metrics.fcp}
                  unit="ms"
                  threshold={1800}
                  warningThreshold={3000}
                />
              </div>

              {/* Memory */}
              {memory && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-500">Memory</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {memory.utilization}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        parseFloat(memory.utilization) > 80 ? 'bg-red-500' :
                        parseFloat(memory.utilization) > 60 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${memory.utilization}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>{memory.usedJSHeapSize}MB used</span>
                    <span>{memory.totalJSHeapSize}MB total</span>
                  </div>
                </div>
              )}

              {/* Issues */}
              {issues.length > 0 && (
                <div className="space-y-1">
                  {issues.map((issue, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {issue}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Timestamp */}
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="text-xs text-gray-400 text-center">
                  Updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function MetricCard({ label, value, unit = '', threshold, warningThreshold, precision = 0 }) {
  const isLoading = value === null;
  const isGood = value !== null && value <= threshold;
  const isWarning = value !== null && value > threshold && value <= warningThreshold;
  const isPoor = value !== null && value > warningThreshold;

  const color = isGood ? 'text-green-600 dark:text-green-400' :
                isWarning ? 'text-yellow-600 dark:text-yellow-400' :
                isPoor ? 'text-red-600 dark:text-red-400' :
                'text-gray-600 dark:text-gray-400';

  const bgColor = isGood ? 'bg-green-50 dark:bg-green-900/20' :
                 isWarning ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                 isPoor ? 'bg-red-50 dark:bg-red-900/20' :
                 'bg-gray-50 dark:bg-gray-800/50';

  return (
    <motion.div
      className={`${bgColor} rounded-lg p-3 text-center`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`font-bold ${color}`}>
        {isLoading ? (
          <span className="inline-block w-12 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        ) : (
          `${value?.toFixed(precision)}${unit}`
        )}
      </div>
      <div className="text-[10px] text-gray-400 mt-1">
        {isGood ? 'Good' : isWarning ? 'OK' : isPoor ? 'Poor' : 'Measuring...'}
      </div>
    </motion.div>
  );
}

export { MetricCard };


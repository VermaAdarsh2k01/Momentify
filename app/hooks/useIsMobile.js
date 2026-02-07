'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the current device is mobile
 * @param {number} breakpoint - The breakpoint in pixels to consider as mobile (default: 768)
 * @returns {boolean} - True if the device is mobile, false otherwise
 */
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Set initial value
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
};

/**
 * Enhanced mobile detection hook with additional device information
 * @param {Object} options - Configuration options
 * @param {number} options.mobileBreakpoint - Mobile breakpoint in pixels (default: 768)
 * @param {number} options.tabletBreakpoint - Tablet breakpoint in pixels (default: 1024)
 * @returns {Object} - Object containing device information
 */
export const useDeviceDetection = ({
  mobileBreakpoint = 768,
  tabletBreakpoint = 1024
} = {}) => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isMobile = width < mobileBreakpoint;
      const isTablet = width >= mobileBreakpoint && width < tabletBreakpoint;
      const isDesktop = width >= tabletBreakpoint;

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        width,
        height
      });
    };

    // Set initial value
    updateDeviceInfo();

    // Add event listener for resize
    window.addEventListener('resize', updateDeviceInfo);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
    };
  }, [mobileBreakpoint, tabletBreakpoint]);

  return deviceInfo;
};

/**
 * Hook for detecting touch devices
 * @returns {boolean} - True if the device supports touch, false otherwise
 */
export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkTouchSupport = () => {
      const hasTouch = 'ontouchstart' in window || 
                      navigator.maxTouchPoints > 0 || 
                      navigator.msMaxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };

    checkTouchSupport();
  }, []);

  return isTouchDevice;
};
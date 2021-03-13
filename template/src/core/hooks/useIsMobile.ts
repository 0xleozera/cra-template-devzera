import { useEffect, useCallback, useState } from 'react';

import { defaultBreakpoints } from 'styled-media-query';

export const useIsMobile = (breakpoint = defaultBreakpoints.small) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = useCallback(() => {
    const parserBreakpoint = Number(breakpoint.replace(/\D/g, ''));
    const breakpointGreaterThanWindowWidth =
      window.innerWidth < parserBreakpoint;
    setIsMobile(breakpointGreaterThanWindowWidth);
  }, [breakpoint]);

  useEffect(() => {
    handleWindowResize();
  }, [handleWindowResize]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return isMobile;
};
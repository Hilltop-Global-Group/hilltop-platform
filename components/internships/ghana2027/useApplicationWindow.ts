'use client';

import { useEffect, useState } from 'react';
import {
  getApplicationWindowState,
  daysUntilApplicationsClose,
  type ApplicationWindowState,
} from '@/lib/ghana-2027-data';

/**
 * Resolve the application window on the client, every minute.
 *
 * The page is statically rendered, so any state computed on the server is frozen at build
 * time. That previously left the Apply button disabled after applications had opened,
 * because the HTML still carried the "before-open" value from the last build.
 *
 * The server value is used for the first paint so the markup matches and hydration is
 * clean, then this corrects it immediately and keeps it correct without a redeploy.
 */
export function useApplicationWindow(serverState: ApplicationWindowState) {
  const [state, setState] = useState<ApplicationWindowState>(serverState);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      setState(getApplicationWindowState());
      setDaysRemaining(daysUntilApplicationsClose());
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return { state, daysRemaining };
}

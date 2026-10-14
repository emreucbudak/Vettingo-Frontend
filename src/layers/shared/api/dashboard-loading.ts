type Listener = () => void;

const pendingRequests = new Map<string, number>();
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function subscribeDashboardLoading(listener: Listener) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export function getDashboardPendingRequests(pathname: string) {
  return pendingRequests.get(pathname) ?? 0;
}

export function beginDashboardRequest() {
  if (typeof window === "undefined") return () => {};

  const pathname = window.location.pathname;
  if (!/^\/(hr|employer|candidate)(\/|$)/.test(pathname)) return () => {};

  pendingRequests.set(pathname, getDashboardPendingRequests(pathname) + 1);
  notify();
  let finished = false;

  return () => {
    if (finished) return;
    finished = true;

    // Let callers commit their data and start dependent requests before revealing the page.
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      const remaining = getDashboardPendingRequests(pathname) - 1;
      if (remaining > 0) pendingRequests.set(pathname, remaining);
      else pendingRequests.delete(pathname);
      notify();
    }));
  };
}

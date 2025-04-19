
import React from 'react';
import { useLocation } from 'react-router-dom';

interface RouterGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * A component that will only render its children if it's being rendered
 * within a Router context. Otherwise, it renders the fallback.
 */
export default function RouterGuard({ children, fallback = null }: RouterGuardProps) {
  // If this throws, we're not in a Router context
  try {
    // This will throw if not in a router context
    useLocation();
    return <>{children}</>;
  } catch (error) {
    console.warn('RouterGuard: Component rendered outside Router context');
    return <>{fallback}</>;
  }
}

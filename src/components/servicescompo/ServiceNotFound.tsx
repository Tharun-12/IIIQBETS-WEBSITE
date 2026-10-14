// src/components/services/ServiceNotFound.tsx
import { Navigate } from 'react-router-dom';

export default function ServiceNotFound() {
  return <Navigate to="/services" replace />;
}
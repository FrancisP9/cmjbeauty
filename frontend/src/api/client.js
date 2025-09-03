import axios from "axios";

// Safe env access for both CRA (process.env) and Vite (import.meta.env)
function readEnv(name) {
  const fromProcess = typeof process !== "undefined" ? process.env?.[name] : undefined;
  // Optional chaining avoids runtime errors when import.meta/env is undefined in CRA
  const fromImportMeta = typeof import !== "undefined" ? import.meta?.env?.[name] : undefined;
  return fromProcess ?? fromImportMeta;
}

const BASE = readEnv("REACT_APP_BACKEND_URL");
const API = BASE ? `${BASE}/api` : "/api"; // Fallback to relative path to avoid crashes

export const api = axios.create({ baseURL: API, timeout: 12000 });

export async function createLead(payload) {
  const res = await api.post(`/leads`, payload);
  return res.data;
}

export async function trackBookingClick({ source, href }) {
  try {
    await api.post(`/events/booking-click`, { source, href });
  } catch (e) {
    // non bloquant
    console.warn("trackBookingClick failed", e?.response?.data || e.message);
  }
}

import axios from "axios";

const BASE = (process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL);
const API = `${BASE}/api`;

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
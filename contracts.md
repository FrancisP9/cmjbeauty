# API Contracts — CMJ Health Care & Beauty

Scope: Leads (contact form) + booking click tracking. Frontend uses process.env.REACT_APP_BACKEND_URL with '/api' prefix. Backend binds 0.0.0.0:8001 and uses Mongo via MONGO_URL.

Entities
- Lead
  - id: string (uuid)
  - name: string (1–120)
  - email: string (RFC email)
  - phone: string (optional)
  - message: string (1–1000)
  - created_at: ISO datetime (server)

- BookingClick
  - id: string (uuid)
  - source: enum('header','hero','services','about','booking','footer')
  - href: string (the Fresha URL clicked)
  - created_at: ISO datetime (server)

REST Endpoints (Backend → FastAPI)
1) POST /api/leads
   - Body: { name, email, phone?, message }
   - 201: { id, name, email, phone?, message, created_at }
   - 422: validation error

2) GET /api/leads
   - Query: ?limit=100 (optional)
   - 200: Lead[] (most recent first)

3) POST /api/events/booking-click
   - Body: { source, href }
   - 201: { id, source, href, created_at }

Frontend Integration
- ContactForm (src/components/ContactForm.jsx)
  - submit → POST /api/leads
  - success: toast + reset

- Booking CTAs
  - onClick Fresha → window.open(FRESHA) + POST /api/events/booking-click with source

Mock Data Removed/Kept
- Removed Treatwell everywhere. Kept Fresha URL in src/mock.js.

Notes
- CORS: already allows *.
- Errors: return 400-esque via FastAPI validation; log exceptions.
- No auth.
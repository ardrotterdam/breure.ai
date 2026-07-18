/**
 * Vessel domain types.
 *
 * Field names and shapes match the planned Supabase `vessels` table
 * (snake_case columns). Swap the data source later without reshaping rows.
 */

/** Dynamic positioning class used on offshore support vessels. */
export type DpClass = "DP1" | "DP2" | "DP3"

/**
 * One point on a simplified crane load chart.
 * Capacity falls as outreach (radius) increases; boom angle is optional UI input.
 */
export type CraneLoadPoint = {
  /** Horizontal outreach from crane pedestal, metres */
  radius_m: number
  /** Boom angle above horizontal, degrees (for interactive UI) */
  boom_angle_deg: number
  /** Safe working load at this outreach, tonnes */
  capacity_t: number
}

/**
 * Row shape for `public.vessels` once Supabase is wired.
 * Keep JSON seed and future DB rows structurally identical.
 */
export type Vessel = {
  /** UUID — stable identity for selection / comparison */
  id: string
  /** Display name (fictional for demo) */
  name: string
  /** Main crane SWL at minimum outreach, tonnes */
  crane_capacity_t: number
  /** Clear deck area, square metres */
  deck_area_m2: number
  /** DP class */
  dp_class: DpClass
  /** Berths / POB capacity */
  accommodation: number
  /** Design draft, metres */
  draft_m: number
  /** Service speed, knots */
  speed_kn: number
  /**
   * Table-based load chart for the interactive diagram.
   * Sorted by increasing radius_m. Interpolate between points in the UI.
   */
  crane_load_chart: CraneLoadPoint[]
  /** ISO timestamps — present for Supabase parity; set in seed for demo */
  created_at: string
  updated_at: string
}

/** Filters applied in the comparison tool (client-side for MVP). */
export type VesselFilters = {
  min_crane_capacity_t: number | null
  dp_class: DpClass | null
  min_deck_area_m2: number | null
}

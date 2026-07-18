import type { CraneLoadPoint, Vessel } from "@/lib/vessels/types"

/**
 * Linear interpolation on the vessel's table-based load chart.
 * No physics — just walk the radius column and blend capacity / boom angle.
 */
export function capacityAtRadius(
  vessel: Vessel,
  radiusM: number
): CraneLoadPoint {
  const chart = vessel.crane_load_chart
  if (chart.length === 0) {
    return { radius_m: radiusM, boom_angle_deg: 0, capacity_t: 0 }
  }

  const first = chart[0]
  const last = chart[chart.length - 1]

  if (radiusM <= first.radius_m) {
    return { ...first, radius_m: radiusM }
  }
  if (radiusM >= last.radius_m) {
    return { ...last, radius_m: radiusM }
  }

  for (let i = 0; i < chart.length - 1; i++) {
    const a = chart[i]
    const b = chart[i + 1]
    if (radiusM >= a.radius_m && radiusM <= b.radius_m) {
      const t = (radiusM - a.radius_m) / (b.radius_m - a.radius_m)
      return {
        radius_m: radiusM,
        boom_angle_deg: lerp(a.boom_angle_deg, b.boom_angle_deg, t),
        capacity_t: lerp(a.capacity_t, b.capacity_t, t),
      }
    }
  }

  return { ...last, radius_m: radiusM }
}

/** Nearest chart point for a given boom angle (UI slider helper). */
export function pointAtBoomAngle(
  vessel: Vessel,
  boomAngleDeg: number
): CraneLoadPoint {
  const chart = vessel.crane_load_chart
  if (chart.length === 0) {
    return { radius_m: 0, boom_angle_deg: boomAngleDeg, capacity_t: 0 }
  }

  // Chart angles decrease as radius increases — find bracketing pair.
  const first = chart[0]
  const last = chart[chart.length - 1]
  const maxAngle = Math.max(first.boom_angle_deg, last.boom_angle_deg)
  const minAngle = Math.min(first.boom_angle_deg, last.boom_angle_deg)
  const clamped = Math.min(maxAngle, Math.max(minAngle, boomAngleDeg))

  for (let i = 0; i < chart.length - 1; i++) {
    const a = chart[i]
    const b = chart[i + 1]
    const hi = Math.max(a.boom_angle_deg, b.boom_angle_deg)
    const lo = Math.min(a.boom_angle_deg, b.boom_angle_deg)
    if (clamped <= hi && clamped >= lo) {
      const t =
        a.boom_angle_deg === b.boom_angle_deg
          ? 0
          : (clamped - a.boom_angle_deg) /
            (b.boom_angle_deg - a.boom_angle_deg)
      return {
        radius_m: lerp(a.radius_m, b.radius_m, t),
        boom_angle_deg: clamped,
        capacity_t: lerp(a.capacity_t, b.capacity_t, t),
      }
    }
  }

  return first.boom_angle_deg >= last.boom_angle_deg
    ? { ...first, boom_angle_deg: clamped }
    : { ...last, boom_angle_deg: clamped }
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

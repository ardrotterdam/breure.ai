import demoVessels from "@/data/vessels/demo-vessels.json"
import type { Vessel, VesselFilters } from "@/lib/vessels/types"

/**
 * Data access for vessels.
 *
 * MVP: reads local seed JSON.
 * Later: replace the body of `getVessels` with a Supabase query;
 * return type stays `Vessel[]` so UI code does not change.
 */
export async function getVessels(): Promise<Vessel[]> {
  return demoVessels as Vessel[]
}

export async function getVesselById(id: string): Promise<Vessel | undefined> {
  const vessels = await getVessels()
  return vessels.find((vessel) => vessel.id === id)
}

export function filterVessels(
  vessels: Vessel[],
  filters: VesselFilters
): Vessel[] {
  return vessels.filter((vessel) => {
    if (
      filters.min_crane_capacity_t != null &&
      vessel.crane_capacity_t < filters.min_crane_capacity_t
    ) {
      return false
    }
    if (filters.dp_class != null && vessel.dp_class !== filters.dp_class) {
      return false
    }
    if (
      filters.min_deck_area_m2 != null &&
      vessel.deck_area_m2 < filters.min_deck_area_m2
    ) {
      return false
    }
    return true
  })
}

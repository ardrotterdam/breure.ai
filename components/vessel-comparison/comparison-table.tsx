"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { COMPARISON_SPEC_ROWS } from "@/lib/vessels/comparison-specs"
import type { Vessel } from "@/lib/vessels/types"

type ComparisonTableProps = {
  vessels: Vessel[]
}

export function ComparisonTable({ vessels }: ComparisonTableProps) {
  if (vessels.length === 0) {
    return null
  }

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[160px] text-text-dim sm:w-[200px]">
              Spec
            </TableHead>
            {vessels.map((vessel) => (
              <TableHead
                key={vessel.id}
                className="min-w-[140px] font-[family-name:var(--font-space-grotesk)] text-foreground"
              >
                {vessel.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {COMPARISON_SPEC_ROWS.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="text-muted-foreground">
                {row.label}
                {row.unit ? (
                  <span className="ml-1 font-mono text-xs text-text-dim">
                    ({row.unit})
                  </span>
                ) : null}
              </TableCell>
              {vessels.map((vessel) => (
                <TableCell
                  key={vessel.id}
                  className="font-mono text-sm text-foreground"
                >
                  {row.getValue(vessel)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

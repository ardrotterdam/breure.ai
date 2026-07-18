import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"

import {
  COMPARISON_SPEC_ROWS,
  formatSpecLabel,
} from "@/lib/vessels/comparison-specs"
import type { Vessel } from "@/lib/vessels/types"

export type ExportComparisonPdfInput = {
  vessels: Vessel[]
  /** DOM node that wraps the visible crane load chart (captured via html2canvas). */
  chartElement: HTMLElement
  /** Vessel currently shown in the interactive chart. */
  chartVesselName: string
  /** Live readout at export time (optional context under the chart image). */
  chartReadout?: {
    radius_m: number
    boom_angle_deg: number
    capacity_t: number
  }
}

/**
 * Build and download a PDF of the current comparison.
 *
 * Chart approach: html2canvas rasterises the on-screen Recharts SVG into a PNG,
 * then jsPDF embeds that image. Chosen because Recharts is SVG/DOM-based — capturing
 * the live chart keeps radius/angle/reference-dot state without a second chart renderer.
 */
export async function exportComparisonPdf({
  vessels,
  chartElement,
  chartVesselName,
  chartReadout,
}: ExportComparisonPdfInput): Promise<void> {
  if (vessels.length === 0) {
    throw new Error("No vessels selected for PDF export.")
  }

  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" })
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 14

  doc.setFont("helvetica", "bold")
  doc.setFontSize(16)
  doc.text("Vessel Comparison — Breure.ai", margin, 16)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)
  doc.setTextColor(90)
  doc.text(
    `Demo export · ${new Date().toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}`,
    margin,
    22
  )
  doc.setTextColor(0)

  const head = [
    ["Spec", ...vessels.map((vessel) => vessel.name)],
  ]
  const body = COMPARISON_SPEC_ROWS.map((row) => [
    formatSpecLabel(row),
    ...vessels.map((vessel) => String(row.getValue(vessel))),
  ])

  autoTable(doc, {
    startY: 28,
    head,
    body,
    styles: {
      fontSize: 9,
      cellPadding: 2.5,
    },
    headStyles: {
      fillColor: [10, 22, 40],
      textColor: 255,
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [245, 248, 252],
    },
    margin: { left: margin, right: margin },
  })

  const tableEndY =
    (doc as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable
      ?.finalY ?? 28

  let chartY = tableEndY + 10
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text(`Crane load chart — ${chartVesselName}`, margin, chartY)
  chartY += 4

  if (chartReadout) {
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.setTextColor(80)
    doc.text(
      `At export: ${chartReadout.capacity_t.toFixed(1)} t @ ${chartReadout.radius_m.toFixed(1)} m / ${chartReadout.boom_angle_deg.toFixed(1)}° boom`,
      margin,
      chartY + 4
    )
    doc.setTextColor(0)
    chartY += 8
  } else {
    chartY += 2
  }

  const canvas = await html2canvas(chartElement, {
    backgroundColor: "#0F1E30",
    scale: 2,
    logging: false,
    useCORS: true,
  })
  const imageData = canvas.toDataURL("image/png")
  const maxWidth = pageWidth - margin * 2
  const maxHeight = doc.internal.pageSize.getHeight() - chartY - margin
  const aspect = canvas.height / canvas.width
  let imgWidth = maxWidth
  let imgHeight = imgWidth * aspect
  if (imgHeight > maxHeight) {
    imgHeight = maxHeight
    imgWidth = imgHeight / aspect
  }

  doc.addImage(imageData, "PNG", margin, chartY, imgWidth, imgHeight)

  doc.save(buildPdfFilename(vessels))
}

function buildPdfFilename(vessels: Vessel[]): string {
  const slug = vessels
    .map((vessel) =>
      vessel.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    )
    .filter(Boolean)
    .join("_")
    .slice(0, 80)

  const stamp = new Date().toISOString().slice(0, 10)
  return `vessel-comparison-${slug || "demo"}-${stamp}.pdf`
}

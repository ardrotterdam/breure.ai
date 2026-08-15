import { redirect } from "next/navigation"

import { ROUTES } from "@/lib/i18n"

export default function DienstenRedirect() {
  redirect(ROUTES.maritimeSoftware.nl)
}

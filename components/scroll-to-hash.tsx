'use client'

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function scrollToCurrentHash() {
  if (typeof window === "undefined") return

  const hash = window.location.hash || ""
  if (!hash) return

  const id = hash.replace("#", "")
  if (!id) return

  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({ behavior: "smooth", block: "start" })

  el.classList.add("scroll-target-highlight")
  window.setTimeout(() => {
    el.classList.remove("scroll-target-highlight")
  }, 900)
}

export function ScrollToHash() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    scrollToCurrentHash()
  }, [pathname, searchParams])

  useEffect(() => {
    const onHashChange = () => scrollToCurrentHash()
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return null
}

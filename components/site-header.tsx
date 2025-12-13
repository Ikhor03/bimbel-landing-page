'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { label: "Program", href: "/#programs" },
  { label: "Tentang Kami", href: "/#about" },
  { label: "Kemitraan", href: "/#partnerships" },
  { label: "Kontak", href: "/#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Image
              src="/images/konstanta.PNG"
              alt="Konstanta Education Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-gray-900">Konstanta Education</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-emerald-600 hover:bg-emerald-700">Daftar Sekarang</Button>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-white border-b shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-emerald-600 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 w-full"
                  onClick={() => setOpen(false)}
                >
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

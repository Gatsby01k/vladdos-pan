"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { navItems } from "@/data/site";

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const desktopNavItems = useMemo(
    () => navItems.filter((item) => item.href !== "/join"),
    []
  );

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
        <div className="flex items-center justify-between rounded-[1.7rem] border border-white/10 bg-[rgba(8,8,10,0.72)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:px-5 sm:py-4">
          <Link href="/" className="flex min-w-0 items-center gap-3 pr-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.045] sm:h-12 sm:w-12">
              <Image
                src="/vladdos-crown.png"
                alt="VlaDDoS logo"
                width={42}
                height={42}
                className="h-auto w-7 object-contain brightness-[2.2] contrast-[1.18] invert sm:w-7"
                priority
              />
            </div>

            <div className="hidden min-[420px]:block leading-tight">
              <div className="text-[0.95rem] font-semibold uppercase tracking-[0.2em] text-white">
                VlaDDoS
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/52">
                Private Affiliate Network
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {desktopNavItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-full px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition",
                    active
                      ? "bg-white/[0.1] text-white"
                      : "text-white/62 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:block">
            <Link href="/join" className="button-primary px-5 py-3">
              Request Access
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/74 transition hover:bg-white/[0.07] xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-[1.4rem] border border-white/10 bg-[rgba(8,8,10,0.88)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl xl:hidden">
            <div className="grid gap-2">
              {desktopNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "rounded-[1rem] px-4 py-3 text-sm transition",
                    pathname === item.href
                      ? "bg-white/[0.08] text-white"
                      : "bg-white/[0.03] text-white/72 hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/join" className="button-primary mt-2 justify-center">
                Request Access
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

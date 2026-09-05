"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Home, Library, LogOut, Plus, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { Tooltip } from "@/components/ui/Tooltip";
import { ui } from "@/lib/styles";
import { useLibraryStore } from "@/store/libraryStore";

interface SidebarProps {
  forceCollapsedOn?: "md";
  alwaysExpanded?: boolean;
  onNavigate?: () => void;
}

export function Sidebar({
  forceCollapsedOn,
  alwaysExpanded,
  onNavigate,
}: SidebarProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside
      className={cn(
        "flex h-full min-h-0 flex-col gap-2 transition-[width] duration-300",
      )}
    >
      <nav className="rounded-lg bg-bg-elevated-base p-2">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              href={"/"}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-4 rounded-md px-3 py-2 text-sm font-bold transition ",
                isActive("/")
                  ? "text-text-base"
                  : "text-text-subdued hover:text-text-base",
              )}
            >
              <Home
                className={isActive("/") ? "fill-current" : ""}
                size={24}
              ></Home>
            </Link>
          </li>
          <li>
            <Link
              href={"/search"}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-4 rounded-md px-3 py-2 text-sm font-bold transition",
                isActive("/search")
                  ? "text-text-base"
                  : "text-text-subdued hover:text-text-base",
              )}
            >
              <Search
                size={24}
                strokeWidth={isActive("/search") ? 3 : 2.4}
              ></Search>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

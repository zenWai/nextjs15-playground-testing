"use client";

import Button from "@/components/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavigationButtons() {
  const pathname = usePathname();
  const router = useRouter();

  const handleRouterPush = () => {
    router.push(pathname, { scroll: false });
  };

  const handleRouterRefresh = () => {
    router.refresh();
  };

  const handleRouterBack = () => {
    router.back();
  };

  const handleRouterForward = () => {
    router.forward();
  };

  const handlePageRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="inline-flex flex-wrap items-center gap-6">
      <div>
        <Button onClick={handleRouterBack}>router.back()</Button>
      </div>
      <div>
        <Link href={pathname} className="c-button">
          With Link
        </Link>
      </div>
      <div>
        <Button onClick={handleRouterPush}>router.push()</Button>
      </div>
      <div>
        <Button onClick={handleRouterRefresh}>router.refresh()</Button>
      </div>
      <div>
        <Button onClick={handlePageRefresh}>window.location.reload()</Button>
      </div>
      <div>
        <Button onClick={handleRouterForward}>router.forward()</Button>
      </div>
    </div>
  );
}

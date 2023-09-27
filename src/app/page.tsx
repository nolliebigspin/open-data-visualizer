"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Root() {
  const { push } = useRouter();

  useEffect(() => {
    push("/datasets");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

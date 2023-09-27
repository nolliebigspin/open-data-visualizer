import { useEffect, useState } from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    const onResize = () => {
      const isMobileSize = mobile || window.innerWidth < 967;

      setMobile(isMobileSize);
    };

    const onLoad = () => {
      onResize();
      window.addEventListener("resize", onResize, false);

      return () => document.removeEventListener("resize", onResize, false);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);

      return () => document.removeEventListener("load", onLoad);
    }
  });

  return { isMobile };
}

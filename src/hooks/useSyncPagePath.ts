import { useEffect, useRef } from "react"

export const useSyncPagePath = (path: string) => {
    const ref = useRef<null | HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                window.history.replaceState(null, "", '/' + path)
            }
        }, { rootMargin: "-100px" });

        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return ref;
}
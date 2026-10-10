import Image from "next/image";
import { asset } from "@/lib/site";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  unoptimized?: boolean;
};

/**
 * Fills its parent (parent must be `relative` with a height).
 * SVGs skip the optimizer.
 */
export default function SiteImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  unoptimized,
}: Props) {
  const isSvg = typeof src === "string" && src.toLowerCase().includes(".svg");
  const resolved = asset(src || "/images/placeholder.svg");
  return (
    <Image
      src={resolved}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={unoptimized ?? isSvg}
      className={`object-cover ${className}`}
    />
  );
}

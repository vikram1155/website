import { useState } from "react";

export default function PlaceholderImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="image-placeholder" role="img" aria-label={alt}>
      <span>{label}</span>
      <small>{src}</small>
    </div>
  ) : (
    <img
      className="replaceable-image"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

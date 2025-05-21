import { Media } from "@/payload-types";
import Image from "next/image";

interface PayloadImageProps {
  image: Media | undefined | null | string;
  useThumbnail?: boolean;
}

export function PayloadImage({
  image,
  useThumbnail = false,
}: PayloadImageProps) {
  if (!image || typeof image === "string") {
    return (
      <Image
        src="/placeholder.svg"
        fill
        className="object-cover"
        alt="Placeholder Image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  const { url, sizes, focalX, focalY, thumbnailURL } = image;

  if (!url || !sizes) {
    return (
      <Image
        src="/placeholder.svg"
        fill
        className="object-cover"
        alt="Placeholder Image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  //Determine what image to use based on whether the large size exists
  //If it does, it means that the image is a large image and has been optimised accordingly and should be used instead of URL
  const imageURL = sizes?.large?.url ? sizes.large.url : url;

  return (
    <Image
      src={
        useThumbnail
          ? (thumbnailURL ?? "/placeholder.svg")
          : (imageURL ?? "/placeholder.svg")
      }
      fill
      className="object-cover rounded-md"
      alt="Image"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        objectPosition: `${focalX}% ${focalY}%`,
      }}
      placeholder={thumbnailURL ? "blur" : "empty"}
      blurDataURL={thumbnailURL ?? undefined}
    />
  );
}

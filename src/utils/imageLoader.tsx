// eslint-disable-next-line @typescript-eslint/no-require-imports
// const isImageURL = require("image-url-validator").default;
import { minidenticon } from "minidenticons";
import Image from "next/image";

type ImageTypes = "BusinessBanner" | "Icon" | "Cover";

// This function only returns the image source URL
export const getImageSource = (
  src: string,
  imgType?: ImageTypes,
  name?: string
): string => {
  // const exist: boolean = await isImageURL(src);
  const exist = false;
  const randomNum = Math.floor(Math.random() * 4) + 1;

  if (exist) return src;

  if (imgType === "BusinessBanner") {
    return `/mocks/banners/business-${randomNum}.jpg`;
  }

  return "";
};

export const BusinessBannerImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const imageSrc = getImageSource(src, "BusinessBanner");

  return (
    <Image
      alt="Business banner"
      src={imageSrc}
      className={"w-full h-[200px] object-cover"}
      width={800}
      height={200}
      priority
    />
  );
};

export const BusinessIcon = ({ src, name }: { src: string; name?: string }) => {
  const exist: boolean = false;

  if (exist) {
    return (
      <Image
        alt="Business icon"
        src={src}
        className="w-52 h-52 rounded-full object-cover"
        width={208}
        height={208}
      />
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: minidenticon(name ?? ""),
      }}
      className="w-52 h-52 rounded-full"
    />
  );
};

import notImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return notImage;
  const target = "media/";
  const index = url.indexOf(target);
  const newUrl =
    url.slice(0, index) +
    target +
    "crop/600/400/" +
    url.slice(index + target.length, url.length);

  return newUrl;
};

export default getCroppedImageUrl;

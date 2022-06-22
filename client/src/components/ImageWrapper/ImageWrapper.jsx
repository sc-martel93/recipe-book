import Image from "./Image/Image";
import { images } from "./images";

const ImageWrapper = () => {
  return (
    <section className="max-w-6xl space-y-5 mx-auto">
      {images.map((image, index) => (
        <Image 
          key={index}
          title={image.title}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </section>
  )
}

export default ImageWrapper    
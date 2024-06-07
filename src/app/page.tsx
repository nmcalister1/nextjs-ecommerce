import CollectionCard from "@/components/CollectionCard";
import longSleeveImage from "../../public/mensLongSleeve.jpg"
import shortSleeveImage from "../../public/mensShortSleeve.jpeg"
import pantsImage from "../../public/mensDressPants.jpg"
import shortsImage from "../../public/mensDressShorts.jpg"
import socksImage from "../../public/mensDressSocks.jpg"
import allClothesImage from "../../public/mensDressClothes.jpg"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import BestSellingItemCard from "@/components/BestSellingItemCard";

const collectionCardProps = [
  {
    title: "All Clothes",
    route: "/collections/all",
    image: allClothesImage.src,
  },
  {
    title: "Long Sleeve Shirts",
    route: "/collections/long-sleeve",
    image: longSleeveImage.src,
  },
  {
    title: "Pants",
    route: "/collections/pants",
    image: pantsImage.src,
  },
  {
    title: "Short Sleeve Shirts",
    route: "/collections/short-sleeve",
    image: shortSleeveImage.src,
  },
  {
    title: "Shorts",
    route: "/collections/shorts",
    image: shortsImage.src,
  },
  {
    title: "Socks",
    route: "/collections/socks",
    image: socksImage.src,
  },
]

export default function Home() {
  return (
    <main className="mx-auto w-4/5 py-14">
      <div className="pb-32 border-b border-black/30">
      <Carousel>
        <CarouselContent >

          {collectionCardProps.map((props) => (
            <CarouselItem key={props.route} className="sm:basis-1/1 lg:basis-1/2 2xl:basis-1/3">
              <CollectionCard {...props} />
            </CarouselItem>
          ))}
          
         
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
      </div>
      
    <BestSellingItemCard />
    </main>
  );
}

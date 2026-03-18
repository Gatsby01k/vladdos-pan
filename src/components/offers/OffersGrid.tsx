import { offers } from "@/data/offers";
import OfferCard from "./OfferCard";

export default function OffersGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {offers.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </div>
  );
}

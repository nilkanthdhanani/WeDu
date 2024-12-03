import Built from "./built";
import Clients from "./client";
import GetReady from "./getReady";
import HeroBanner from "./heroBanner";
import Leaders from "./leaders";
import Pricing from "./pricing";
import WeOffer from "./weOffer";
import WithRight from "./withRight";

export default function HomePage() {
    return (
        <main>
            <HeroBanner />
            <WithRight />
            <WeOffer />
            <Built />
            <Leaders />
            <Clients />
            <Pricing />
            <GetReady />
        </main>
    )
}

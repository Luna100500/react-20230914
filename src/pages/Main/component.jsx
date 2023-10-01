import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { restaurants } from "../../constants/mock";

export const Main = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <>
            <header>
                <h1>Смотри не лопни DELIVERY</h1>
            </header>
            <div>
                <RestaurantTabs
                    restaurants={restaurants}
                    onTabSelect={setActiveRestaurantIndex}
                />

                <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
            </div>
            <footer>
                <h3>У бабушки всё равно вкуснее</h3>
            </footer>
        </>
    );
}
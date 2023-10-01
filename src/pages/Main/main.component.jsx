import { useState } from "react";
import { RestaurantComponent } from "../../components/Restaurant/restaurant.component";
import { RestaurantTabs } from "../../components/RestaurantTabs/restaurantTabs.component";
import { restaurants } from "../../constants/mock";

export const Main = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <>
            <header className="header">
                <h1>Смотри не лопни DELIVERY</h1>
            </header>
            <div className="body">
                <RestaurantTabs
                    restaurantsProp={restaurants}
                    activeRestaurantIndexProp={activeRestaurantIndex}
                    onTabSelectProp={setActiveRestaurantIndex}
                />

                <RestaurantComponent restaurantProp={restaurants[activeRestaurantIndex]} />
            </div>
            <footer className="footer">
                <h3>У бабушки всё равно вкуснее</h3>
            </footer>
        </>
    );
}
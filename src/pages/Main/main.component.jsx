import { useState } from "react";
import { RestaurantComponent } from "../../components/Restaurant/restaurant.component";
import { RestaurantTabs } from "../../components/RestaurantTabs/restaurantTabs.component";
import { Header } from "../../components/Header/header.component";
import { Footer } from "../../components/Footer/footer.component";
import { restaurants } from "../../constants/mock";
import { ReviewForm } from "../../components/ReviewForm/reviewForm.component";
import styles from "./styles.module.css";

export const Main = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (

        <div className="body">
            <Header />
            <div className="wrapper">
                <RestaurantTabs
                    restaurantsProp={restaurants}
                    activeRestaurantIndexProp={activeRestaurantIndex}
                    onTabSelectProp={setActiveRestaurantIndex}
                />
                <RestaurantComponent
                    className={styles.restaurant}
                    restaurantProp={restaurants[activeRestaurantIndex]} />
                <ReviewForm />
            </div>
            <Footer />
        </div>

    );
}
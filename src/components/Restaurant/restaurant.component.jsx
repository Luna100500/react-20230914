import { Menu } from "../Menu/menu.component";
import { Reviews } from "../Reviews/reviews.component"
import styles from "./styles.module.css";
import classNames from 'classnames';

export const RestaurantComponent = ({ restaurantProp, className }) => {
    console.log(restaurantProp)
    return (
        <div className={classNames(
            styles.restaurant, className)}>
            <h2>{restaurantProp?.name}</h2>
            <h3>MENU</h3>
            <Menu dishes={restaurantProp?.menu} />
            <h3>REVIEW</h3>
            <Reviews reviews={restaurantProp?.reviews} />
        </div>
    );
};

import { Tab } from "../Tab/tab.component"
import styles from "./styles.module.css";
import classNames from 'classnames';

export const RestaurantTabs = ({ restaurantsProp, activeRestaurantIndexProp, onTabSelectProp }) => {
    return (
        <nav>
            {restaurantsProp.map((restaurant, index) => (
                <Tab
                    key={restaurant.id}
                    title={restaurant.name}
                    active={index === activeRestaurantIndexProp}
                    onClick={() => onTabSelectProp(index)}
                    className={styles.navigationButton}
                />
            ))}
        </nav>
    );
}
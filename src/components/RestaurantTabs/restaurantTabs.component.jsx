import { Tab } from "../Tab/tab.component"

export const RestaurantTabs = ({ restaurantsProp, activeRestaurantIndexProp, onTabSelectProp }) => {
    return (
        <nav>
            {restaurantsProp.map((restaurant, index) => (
                <Tab
                    key={restaurant.id}
                    title={restaurant.name}
                    active={index === activeRestaurantIndexProp}
                    onClick={() => onTabSelectProp(index)}
                />
            ))}
        </nav>
    );
}
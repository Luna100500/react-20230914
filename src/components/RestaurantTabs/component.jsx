import { Tab } from "../Tab/component"

export const RestaurantTabs = ({ restaurants, onTabSelect }) => {
    return (
        <nav>
            {restaurants.map((restaurant, index) => (
                <Tab
                    key={restaurant.id}
                    title={restaurant.name}
                    onClick={() => onTabSelect(index)}
                />
            ))}
        </nav>
    );
}
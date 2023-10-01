import { Dish } from "../Dish/dish.component";

export const Menu = ({ dishes }) => {
    return (
        <ul>
            {dishes?.map((dish) => (
                <li key={dish.id}>
                    <Dish dish={dish} />
                </li>
            ))}
        </ul>
    );
};
import styles from "./styles.module.css";
import classNames from 'classnames';

import { Dish } from "../Dish/dish.component";

export const Menu = ({ dishes }) => {
    console.log(styles.button)
    return (
        <ul className={classNames(
            styles.dishesList)}>
            {dishes?.map((dish) => (
                <li key={dish.id}>
                    <Dish
                        className={styles.button}
                        dish={dish} />
                </li>
            ))}
        </ul>
    );
};
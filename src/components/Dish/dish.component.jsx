//создает блюдо и кнопки к нему

import { useState } from "react";
import styles from "./styles.module.css";
import classNames from 'classnames';

export const Dish = ({ dish }) => {
    const [amount, setAmount] = useState(0);

    return (
        < div >
            {dish.name}
            <button className={classNames(
                styles.button, { [styles.disabled]: amount <= 0 }
            )} disabled={amount <= 0} onClick={() => setAmount(amount - 1)}>
                -
            </button>
            <span>{amount}</span>
            <button className={classNames(
                styles.button, { [styles.disabled]: amount >= 5 }
            )} disabled={amount >= 5} onClick={() => setAmount(amount + 1)}>
                +
            </button>
        </div >
    )
};
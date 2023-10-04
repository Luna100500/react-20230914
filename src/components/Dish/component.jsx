//создает блюдо и кнопки к нему

import { useState } from "react";

export const Dish = ({ dish }) => {
    const [amount, setAmount] = useState(0);

    return (
        < div >
            {dish.name}-
            <button disabled={amount === 0} onClick={() => setAmount(amount - 1)}>
                -
            </button>
            <span>{amount}</span>
            <button disabled={amount === 5} onClick={() => setAmount(amount + 1)}>
                +
            </button>
        </div >
    )
};
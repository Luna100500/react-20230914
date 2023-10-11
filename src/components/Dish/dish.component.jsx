import { useState } from "react";
import { Button } from "../../components/Button/button.component";

export const Dish = ({ dish }) => {
    const [amount, setAmount] = useState(0);

    return (

        <div>
            <span>{dish.name}</span>
            <Button size="s" onClick={() => setAmount(amount - 1)} disabled={amount <= 0}>
                -
            </Button>
            <span>{amount}</span>
            <Button size="s" onClick={() => setAmount(amount + 1)} disabled={amount >= 5}>
                +
            </Button>
        </div>

    )
};
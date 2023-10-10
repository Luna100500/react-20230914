import { useReducer } from "react";
import styles from "./styles.module.css";
import classNames from 'classnames';

// import { UserContext } from "../../contexts/User";

const DEFAULT_VALUE = {
    name: "",
    review: "",
}

const reducer = (state, action) => {
    switch (action?.type) {
        case "changeField": {
            return { ...state, [action.payload.field]: action.payload.value };
        }
        case "setName":
            return { ...DEFAULT_VALUE, name: action.payload };
        case "setReview":
            return { ...state, review: action.payload };
        case "reset":
            return { ...DEFAULT_VALUE };
        default:
            return state;
    }
};

export const ReviewForm = () => {

    const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
    // const { user, setUser } = useContext(UserContext);

    return <div className={styles.formContainer}>
        <form>

            <fieldset className={styles.formField}>
                <legend className={styles.formLegend}>Добавить отзыв</legend>
                <label className={styles.formLabel}>
                    Имя:
                    <input className={styles.formInput}
                        value={formValue.name} onChange={(event) => {
                            dispatch({ type: "setName", payload: event.target.value });
                        }} />
                </label>
                <label className={styles.formLabel}>
                    Ваш отзыв:
                    <input className={styles.formInput}
                        value={formValue.review}
                        onChange={(event) => {
                            dispatch({ type: "setReview", payload: event.target.value });
                        }} />
                </label>
            </fieldset>
        </form>
        <button className={styles.formButton}
            onClick={() => dispatch({ type: "reset" })}>
            ОТПРАВИТЬ ОТЗЫВ
        </button>
    </div>
}
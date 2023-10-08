import { Review } from "../Review/review.component"
import styles from "./styles.module.css";
import classNames from 'classnames';

export const Reviews = ({ reviews }) => {

    return (
        <ul className={classNames(
            styles.reviewsList)}>
            {reviews?.map((review) => (
                <li key={review.id}>
                    <Review review={review} />
                </li>
            ))}
        </ul>
    );
};
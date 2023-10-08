import styles from "./styles.module.css";
import classNames from 'classnames';

export const Header = () => {
    return (
        <header className={classNames(
            styles.header)}>
            <h1>Смотри не лопни DELIVERY</h1>
        </header>
    )
}
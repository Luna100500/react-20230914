import styles from "./styles.module.css";
import classNames from 'classnames';

export const Footer = () => {
    return (
        <footer className={classNames(
            styles.footer)}>
            <h3>У бабушки всё равно вкуснее</h3>
        </footer>
    )
}
import styles from "./styles.module.css";
import classNames from 'classnames';

export const Tab = ({ title, active, onClick }) => {
    return <button className={classNames(
        styles.navigationButton, { [styles.active]: active }
    )}
        onClick={onClick}>{title}</button>
}
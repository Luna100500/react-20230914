import styles from "./styles.module.css";
import classNames from 'classnames';

export const Tab = ({ title, active, onClick, className }) => {
    return <button className={classNames(
        styles.navigationButton, className, { [styles.active]: active }
    )}
        onClick={onClick}>{title}</button>
}
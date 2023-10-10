import { useContext } from "react"
import { ThemeContext } from "../../contexts/Theme"
import styles from "./styles.module.css";
import classNames from 'classnames';

export const ThemeButton = ({ children, onClick }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button className={classNames(
            styles.default)} onClick={() => (classNames(
                styles.dark))}>children</button>
    )
}
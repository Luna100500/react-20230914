import styles from "./styles.module.css";
import classNames from 'classnames';
import { ThemeButton } from "../../components/ThemeButton/themeButton.component";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <header className={classNames(
            styles.header)}>
            <h1>Смотри не лопни DELIVERY</h1>
            <ThemeButton onClick={toggleTheme}>Сменить тему</ThemeButton>
        </header>
    )
}
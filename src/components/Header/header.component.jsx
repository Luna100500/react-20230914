import styles from "./styles.module.css";
import classNames from 'classnames';
import { Button } from "../../components/Button/button.component";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <header className={classNames(
            styles.header)}>
            <h1>Смотри не лопни DELIVERY</h1>
            <Button size="s" className={classNames(
                styles.buttonTheme)} onClick={toggleTheme}>Change theme</Button>
        </header>
    )
}
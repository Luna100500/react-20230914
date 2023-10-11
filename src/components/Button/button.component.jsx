import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../../contexts/Theme";

export const Button = ({
    children,
    onClick,
    disabled,
    className,
    size = "m",
    viewVariant = "base",
}) => {
    const { theme } = useTheme();

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                styles.button,
                className,
                styles[size],
                styles[viewVariant],
                styles[theme]
            )}
        >
            {children}
        </button>
    );
};
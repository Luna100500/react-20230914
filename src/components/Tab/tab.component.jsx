import { Button } from "../Button/button.component";

export const Tab = ({ onClick, title, isActive, className }) => {
    return (
        <Button
            onClick={onClick}
            size="l"
            viewVariant={isActive ? "accent" : "base"}
            className={className}
        >
            {title}
        </Button>
    );
};
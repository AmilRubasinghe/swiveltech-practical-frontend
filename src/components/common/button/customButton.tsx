"use client"
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    name?: string
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode
};

const baseClass = ' select-none text-center align-middle text-xs font-medium  transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none focus:outline-none focus:border-none  hover:bg-opacity-50';

const CustomButton: React.FC<CustomButtonProps> = ({
    name,
    className,
    onClick = (event: React.MouseEvent<HTMLButtonElement>) => { },
    children

}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(baseClass, className)}
        >
            {name && name}
            {children && children}
        </button>
    )
}

export default CustomButton
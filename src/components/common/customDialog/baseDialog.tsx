import { MdOutlineClose } from "react-icons/md";
import CustomButton from "../button/customButton";


interface Props {
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
}
export default function Dialog(props: Props) {
    const { open, onClose } = props;
    if (!open) {
        return <></>;
    }
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-slate-50 bg-opacity-45 flex ">
            <div className="relative p-8 bg-white border  w-full max-w-md m-auto flex-col flex rounded-lg">
                <div>{props.children}</div>
                <span className="absolute top-0 right-0 p-4">
                    <CustomButton onClick={() => onClose()}>
                        <MdOutlineClose />
                    </CustomButton>
                </span>
            </div>
        </div>
    );
}
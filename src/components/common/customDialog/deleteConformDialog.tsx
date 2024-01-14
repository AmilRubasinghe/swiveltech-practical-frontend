import CustomButton from "../button/customButton";
import Dialog from "./baseDialog";

interface Props {
    title: string;
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
    onConfirm: Function;
}
export default function ConfirmDialog(props: Props) {
    const { open, onClose, title, children, onConfirm } = props;
    if (!open) {
        return <></>;
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <h2 className="text-xl">{title}</h2>
            <div className="py-5">{children}</div>
            <div className="flex justify-end">
                <div className="p-1">
                    <CustomButton
                        onClick={() => onClose()}
                        className="bg-black px-6 rounded-md mx-2 text-white py-2 hover:bg-secondary-light"
                    >
                        No
                    </CustomButton>
                </div>
                <div className="p-1">
                    <CustomButton
                        className="bg-green-700 px-6 rounded-md  text-white py-2 hover:bg-secondary-light"
                        onClick={() => {
                            onConfirm();
                        }}
                    >
                        Yes
                    </CustomButton>
                </div>
            </div>
        </Dialog>
    );
}
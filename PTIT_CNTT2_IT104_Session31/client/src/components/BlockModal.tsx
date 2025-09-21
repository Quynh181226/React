import { Modal, Button } from "antd";

interface BlockModalProps {
    open: boolean;
    onClose: () => void;
    changeStatus: (id: string) => void;
    postId: string | null;
}

const BlockModal = ({ open, onClose, changeStatus, postId }: BlockModalProps) => {
    const handleConfirm = () => {
        if (postId) {
            changeStatus(postId);
        }
        onClose();
    };

    return (
        <Modal  title="Cảnh báo" open={open} onCancel={onClose}
                footer={[
                    <div style={{ borderTop: "1px solid #E9E9E9", paddingTop: 10 }}>
                        <Button key="cancel" onClick={onClose}>
                            Hủy
                        </Button>
                        <Button key="block" type="primary" onClick={handleConfirm}>
                            Xác nhận
                        </Button>
                    </div>,
                ]}
        >
            <div style={{display: "flex", flexDirection: "row", gap: 10, textAlign: "center", padding: "20px",}}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B89230"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z" /></svg>
                </div>
                <div>Bạn có chắc chắn muốn ngừng xuất bản bài viết?</div>
            </div>
        </Modal>
    );
};

export default BlockModal;
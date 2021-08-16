import React from 'react';
import AskModal from '../common/AskModal';

const AskRemoveModal = ({ visible, onConfirm, onCancel }) => {
    return (
        <AskModal
            visible={visible}
            title="Delete"
            description="Are you sure?"
            confirmText="Delete"
            onConfirm={onConfirm}
            onCancel={onCancel}
        ></AskModal>
    );
};

export default AskRemoveModal;

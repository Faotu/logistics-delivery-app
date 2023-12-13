"use client";

import React from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const onChange = (opne: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Add a Customer"
      description="upload customers and their details "
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Modal
    </Modal>
  );
};

export default UploadModal;

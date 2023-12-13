"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState();
  const uploadModal = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      Name: "",
      id: "",
      pick_location: "",
      drop_location: "",
    },
  });
  const onChange = (opne: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload customer details to supabase
  };

  return (
    <Modal
      title="Add a Customer"
      description="upload customers and their details "
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Customer details"
        />
      </form>
    </Modal>
  );
};

export default UploadModal;

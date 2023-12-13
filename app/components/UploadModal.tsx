"use client";

import React, { useState } from "react";
import uniqid from "uniqid";
import Modal from "./Modal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      Name: "",
      id: "",
      pick_location: "",
      drop_location: "",
    },
  });
  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload customer details to supabase

    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];

      if (!imageFile || !user) {
        toast.error("missing fields");
        return;
      }

      const uniqueID = uniqid();
    } catch (error) {
      toast.error("There was an error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a Customer"
      description="upload customers and their details "
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="Customer name"
          disabled={isLoading}
          {...register("Customer name", { required: true })}
          placeholder="Customer Name"
        />
        <Input
          id="customer ID"
          disabled={isLoading}
          {...register("customer ID", { required: true })}
          placeholder="Customer ID"
        />
        <Input
          id="pick"
          disabled={isLoading}
          {...register("pick", { required: true })}
          placeholder="Pickup Location"
        />

        <Input
          id="drop"
          disabled={isLoading}
          {...register("drop", { required: true })}
          placeholder="Drop Loaction"
        />
        <div>
          <div className="pb-1">Select customer Image</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;

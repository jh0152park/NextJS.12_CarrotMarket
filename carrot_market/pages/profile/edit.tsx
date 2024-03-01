import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface IEditProfileForm {
    email?: string;
    phone?: string;
    name?: string;
    formError?: string;
    profilePhoto?: FileList;
}

interface IEditProfileResponse {
    isSuccess: boolean;
    error?: string;
}

export default function Edit() {
    const { user } = useUser();
    const [profilePhotoPreview, setProfilePhotoPreview] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        setError,
        formState: { errors },
    } = useForm<IEditProfileForm>();
    const [editProfile, { data, loading }] =
        useMutation<IEditProfileResponse>("/api/users/me");

    const profilePhoto = watch("profilePhoto");

    function onSubmit({
        email,
        phone,
        name,
        profilePhoto,
    }: IEditProfileForm | FieldValues) {
        if (loading) return;

        if (email === "" && phone === "" && name === "") {
            return setError("formError", {
                message:
                    "Email or Phone Number is required. You need to choose one.",
            });
        }
        editProfile({ email, phone, name });
    }

    useEffect(() => {
        if (user?.email) {
            setValue("email", user.email);
        }
        if (user?.phoneNumber) {
            setValue("phone", user.phoneNumber);
        }
        if (user?.name) {
            setValue("name", user.name);
        }
    }, [user, setValue]);

    useEffect(() => {
        if (data && !data.isSuccess) {
            setError("formError", { message: data.error });
        }
    }, [data, setError]);

    useEffect(() => {
        if (profilePhoto && profilePhoto.length > 0) {
            const file = profilePhoto[0];
            setProfilePhotoPreview(URL.createObjectURL(file));
        }
    }, [profilePhoto]);

    return (
        <Layout canGoBack>
            <form
                className="px-4 py-10 space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex items-center mb-5 space-x-3">
                    {profilePhotoPreview ? (
                        <img
                            src={profilePhotoPreview}
                            className="rounded-full w-14 h-14 bg-slate-500"
                        />
                    ) : (
                        <div className="rounded-full w-14 h-14 bg-slate-500" />
                    )}
                    <label
                        htmlFor="picture"
                        className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Change
                        <input
                            {...register("profilePhoto")}
                            id="picture"
                            type="file"
                            className="hidden"
                            accept="image/*"
                        />
                    </label>
                </div>

                <Input
                    label="Name"
                    name="name"
                    kind="text"
                    register={register("name")}
                />
                <Input
                    label="Email address"
                    name="input"
                    kind="email"
                    register={register("email")}
                />
                <Input
                    label="Phone number"
                    name="input"
                    kind="phone"
                    register={register("phone")}
                />
                {errors.formError ? (
                    <span className="block my-2 font-medium text-center text-red-500">
                        {errors.formError.message}
                    </span>
                ) : null}
                <Button name={loading ? "Loading..." : "Upload profile"} />
            </form>
        </Layout>
    );
}

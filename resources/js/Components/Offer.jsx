import React from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Offer({ offer }) {
    const { data, setData, post, reset, processing, errors } = useForm({
        offer_id: offer.id,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("codes.store"), { onSuccess: () => reset() });
    };
    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <p className="mt-4 text-lg text-gray-900">{offer.message}</p>
                <form onSubmit={submit}>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>
                        Generar código promocional
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}

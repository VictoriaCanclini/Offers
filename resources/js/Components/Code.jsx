import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Code({ code }) {
    const { patch, processing, errors } = useForm({
        code_id: code.id,
    });

    const [isValidated, setIsValidated] = useState(code.validated);

    const submit = (e) => {
        e.preventDefault();
        patch(route("codes.update", code.id), {
            onSuccess: () => setIsValidated(true),
        });
    };

    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <p className="mt-4 text-lg text-gray-900">
                    Nombre de la oferta: {code.offer.message}
                </p>
                <p className="mt-4 text-lg text-gray-900">
                    Código: {code.code}
                </p>
                <form onSubmit={submit}>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton
                        className={`mt-4 ${isValidated ? "bg-green-500" : ""}`}
                        disabled={processing || isValidated}
                    >
                        {isValidated ? "Código validado" : "Canjear código"}
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}

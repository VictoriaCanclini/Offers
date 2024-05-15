import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Code from "@/Components/Code";
import { Head } from "@inertiajs/react";

export default function Index({ auth, codes }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Códigos Promocionales" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {codes.map((code) => (
                        <Code key={code.id} code={code} />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

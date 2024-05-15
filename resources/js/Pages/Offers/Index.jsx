import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Offer from "@/Components/Offer";
import { Head } from "@inertiajs/react";

export default function Index({ auth, offers }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Offers" />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {offers.map((offer) => (
                        <Offer key={offer.id} offer={offer} />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

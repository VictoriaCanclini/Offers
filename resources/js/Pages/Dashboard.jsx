import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div
                className="h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('/img/super-sale.png')` }}
            >
                <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-60"></div>
            </div>
        </AuthenticatedLayout>
    );
}

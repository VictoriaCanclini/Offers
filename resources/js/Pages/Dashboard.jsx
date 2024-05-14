import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 1</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 2</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 3</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 4</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 5</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 6</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 7</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 8</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 9</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Oferta 10</div>
                        <button className="p-4">
                            Generar codigo promocional
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

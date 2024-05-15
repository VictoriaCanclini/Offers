import React from "react";

export default function Code({ code }) {
    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <p className="mt-4 text-lg text-gray-900">{code.code}</p>
                <p className="mt-4 text-lg text-gray-900">
                    {code.offer.message}
                </p>
            </div>
        </div>
    );
}

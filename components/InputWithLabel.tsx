
import React from 'react';
import { IconType } from 'react-icons'; // Import IconType untuk tipe icon

interface InputWithLabelProps {
    id: string;
    label: string;
    type: string;
    icon: IconType; // Prop untuk menerima komponen ikon
    placeholder?: string; // Opsional placeholder
    style?: string
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, label, type, icon: Icon, placeholder, style }) => {
    return (
        <label htmlFor={id} className={`block ${style || ''}`}>
            <div className="flex items-center gap-2 text-gray-700">
                <Icon className="text-xl text-blue-500" /> {/* Styling icon */}
                <span className="text-sm font-medium text-white">{label}</span>
            </div>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="mt-1 w-full rounded-lg bg-white border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
            />
        </label>
    );
};

export default InputWithLabel;
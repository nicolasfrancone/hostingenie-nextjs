import React from 'react';

interface FeatureItemProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#255C77' }}>
                {icon}
            </div>
            <h4 className="h4 mb-2 text-center">{title}</h4>
            <p className="text-lg text-gray-400 text-center">{description}</p>
        </div>
    );
};

export default FeatureItem;



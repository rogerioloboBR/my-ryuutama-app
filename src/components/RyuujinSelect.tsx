import React from 'react';
import { RyuujinType } from '../types/Ryuujin';

interface RyuujinSelectProps {
    value: RyuujinType;
    onChange: (value: RyuujinType) => void;
}

const RyuujinSelect: React.FC<RyuujinSelectProps> = ({ value, onChange }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value as RyuujinType)}>
            {Object.values(RyuujinType).map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
};

export default RyuujinSelect;
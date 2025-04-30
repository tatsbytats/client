import React from 'react';
import { Button } from 'react-bootstrap';

const FilterButtons = ({ 
    options, 
    activeFilter, 
    setFilter, 
    variant = "outline-primary", 
    label = "Filter"
}) => {
    return (
        <div className="d-flex flex-wrap gap-2 mb-3">
            {options.map((option) => (
                <Button
                    key={option.value}
                    variant={variant}
                    onClick={() => setFilter(option.value)}
                    active={activeFilter === option.value}
                >
                    {option.label}
                </Button>
            ))}
        </div>
    );
};

export default FilterButtons;
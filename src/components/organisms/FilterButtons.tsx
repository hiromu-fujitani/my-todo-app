import React from 'react';
import Button from '../atoms/Button';

interface FilterButtonsProps {
  filter: 'all' | 'active' | 'completed' | 'inProgress';
  onFilterChange: (filter: 'all' | 'active' | 'completed' | 'inProgress') => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="btn-group mb-3">
      <div className="filter-button-group">
        <Button label="すべて" onClick={() => onFilterChange('all')} />
        <Button label="未着手" onClick={() => onFilterChange('active')} />
        <Button label="着手中" onClick={() => onFilterChange('inProgress')} />
        <Button label="完了" onClick={() => onFilterChange('completed')} />
      </div>
    </div>
  );
};

export default FilterButtons;

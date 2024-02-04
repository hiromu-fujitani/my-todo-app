import React from 'react';
import Button from '../atoms/Button';

interface FilterButtonsProps {
  filter: 'all' | 'active' | 'completed' | 'inProgress';
  onFilterChange: (filter: 'all' | 'active' | 'completed' | 'inProgress') => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, onFilterChange }) => {
  // 現在選択されているフィルターに基づいてボタンのスタイルを決定する関数
  const getButtonClassName = (buttonFilter: 'all' | 'active' | 'completed' | 'inProgress') => {
    return filter === buttonFilter ? 'btn-active' : '';
  };

  return (
    <div className="btn-group mb-3">
      <div className="filter-button-group">
        <Button label="すべて" onClick={() => onFilterChange('all')} className={getButtonClassName('all')} />
        <Button label="未着手" onClick={() => onFilterChange('active')} className={getButtonClassName('active')} />
        <Button label="着手中" onClick={() => onFilterChange('inProgress')} className={getButtonClassName('inProgress')} />
        <Button label="完了" onClick={() => onFilterChange('completed')} className={getButtonClassName('completed')} />
      </div>
    </div>
  );
};

export default FilterButtons;

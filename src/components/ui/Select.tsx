import React, { SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  errorId?: string;
  testId?: string;
}

const Select: React.FC<SelectProps> = ({ 
  label, 
  options,
  error, 
  errorId,
  testId,
  ...props 
}) => {
  return (
    <div>
      <label style={{ 
        display: 'block', 
        marginBottom: '0.25rem', 
        fontSize: '14px', 
        color: '#666' 
      }}>
        {label}
      </label>
      <select
        {...props}
        className="food-select"
        data-test-id={testId}
        aria-describedby={error ? errorId : undefined}
        style={{
          width: '100%',
          padding: '0.75rem',
          border: `1px solid ${error ? '#dc3545' : '#e0e0e0'}`,
          borderRadius: '6px',
          fontSize: '14px',
          background: '#f5f5f5',
          outline: 'none',
          cursor: 'pointer',
          transition: 'border-color 150ms'
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div 
          id={errorId} 
          className="food-error" 
          style={{ 
            color: '#dc3545', 
            fontSize: '12px', 
            marginTop: '0.25rem' 
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default Select;
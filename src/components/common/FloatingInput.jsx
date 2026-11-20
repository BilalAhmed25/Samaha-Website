import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FloatingInput.css';

export default function FloatingInput({
    id,
    name,
    type = 'text',
    label,
    value = '',
    onChange,
    required = false,
    icon: Icon,
    variant = 'light', // 'light' or 'dark'
    rows = 4,
    options = [],
    className = '',
    ...rest
}) {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || name || `field-${label?.toLowerCase().replace(/\s+/g, '-')}`;

    const hasValue = value !== undefined && value !== null && String(value).trim().length > 0;
    const isFloating = isFocused || hasValue;

    const isTextarea = type === 'textarea';
    const isSelect = type === 'select';

    const rootClasses = [
        'floating-input-wrapper',
        `floating-input-${variant}`,
        isFloating ? 'is-floating' : '',
        isFocused ? 'is-focused' : '',
        isTextarea ? 'is-textarea' : '',
        isSelect ? 'is-select' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={rootClasses}>
            {/* Left Icon */}
            {Icon && (
                <div className="floating-input-icon">
                    <Icon className="w-4 h-4" />
                </div>
            )}

            {/* Input / Textarea / Select element */}
            {isTextarea ? (
                <textarea
                    id={inputId}
                    name={name}
                    rows={rows}
                    value={value}
                    required={required}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="floating-input-control"
                    placeholder=" "
                    {...rest}
                />
            ) : isSelect ? (
                <select
                    id={inputId}
                    name={name}
                    value={value}
                    required={required}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="floating-input-control floating-select-control"
                    {...rest}
                >
                    {options && options.map((opt, idx) => {
                        const optVal = typeof opt === 'string' ? opt : opt.value;
                        const optLabel = typeof opt === 'string' ? opt : opt.label;
                        return (
                            <option
                                key={idx}
                                value={optVal}
                                className={variant === 'dark' ? 'bg-[#0d172a] text-white' : 'bg-white text-slate-900'}
                            >
                                {optLabel}
                            </option>
                        );
                    })}
                </select>
            ) : (
                <input
                    id={inputId}
                    name={name}
                    type={type}
                    value={value}
                    required={required}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="floating-input-control"
                    placeholder=" "
                    {...rest}
                />
            )}

            {/* Floating Label */}
            <label htmlFor={inputId} className="floating-input-label">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {/* Select Dropdown Arrow */}
            {isSelect && (
                <div className="floating-select-arrow">
                    <ChevronDown className="w-4 h-4" />
                </div>
            )}
        </div>
    );
}

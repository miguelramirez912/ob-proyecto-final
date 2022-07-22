import { useState } from 'react';

const useCounter = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue);
    const [max, setMax] = useState(10);
    const [min, setMin] = useState(0);
    const [step, setStep] = useState(1);
    const [prefix, setPrefix] = useState(0);

    const increment = () => {
        setValue(() => {
            if (Number(value) + Number(step) <= max) {
                return Number(value) + Number(step);
            }
            return Number(value);
        });
    };
    const decrement = () => {
        setValue(() => {
            if (value - Number(step) >= min) {
                return value - Number(step);
            }
            return value;
        });
    };
    const reset = () => {
        setValue(0);
        setMax(10);
        setMin(0);
        setStep(1);
        setPrefix(0);
    };
    const maxValue = (newValue) => {
        setMax(newValue);
    };
    const minValue = (newValue) => {
        setMin(newValue);
    };
    const stepValue = (newValue) => {
        setStep(newValue);
    };
    const prefixValue = (newValue) => {
        setPrefix(newValue);
        setValue(newValue);
    };

    return {
        value, setValue, increment, decrement, reset, max, min, step, prefix, setMax, setMin, setStep, maxValue, minValue, stepValue, prefixValue,
    };
};

export default useCounter;

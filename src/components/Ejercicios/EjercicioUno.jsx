import React, { useRef } from 'react';
import useCounter from '../../hooks/useCounter';

const EjercicioUno = () => {
    const counter = useCounter(0);
    const maxRef = useRef(null);
    const minRef = useRef(null);
    const stepRef = useRef(null);
    const prefixRef = useRef(null);

    const handleIncrement = () => {
        counter.increment();
    };

    const handleDecrement = () => {
        counter.decrement();
    };

    const handleReset = () => {
        counter.reset();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        counter.prefixValue(prefixRef.current.value);
        counter.setMax(maxRef.current.value);
        counter.setMin(minRef.current.value);
        counter.setStep(stepRef.current.value);
    };

    const containerStyles = {
      border: '1px solid black',
      borderRadius: '5px',
      padding: '10px',
      width: '75vw',
      margin: '10px auto',
    };
    return (
      <div style={containerStyles}>
        <h1>Ejercicio 1</h1>
        <h2 style={{ color: 'blue' }}>
          Contador:
          {counter.value}
        </h2>
        <span style={{ marginRight: '10px' }}>
          Maximo:
          {counter.max}
        </span>
        <span style={{ marginRight: '10px' }}>
          Minimo:
          {counter.min}
        </span>
        <span style={{ marginRight: '10px' }}>
          Predeterminado:
          {counter.prefix}
        </span>
        <span>
          Step:
          {counter.step}
        </span>
        <div>
          <h3>Controles</h3>
          <button type="button" onClick={handleIncrement}>Increment</button>
          <button type="button" onClick={handleDecrement}>Decrement</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
        <div>
          <h3>Configuraciones</h3>
          <form onSubmit={() => handleSubmit(event)}>
            <label htmlFor="max">
              Valor maximo:
              <input ref={maxRef} id="max" type="number" defaultValue={counter.max} />
            </label>
            <br />
            <label htmlFor="min">
              Valor minimo:
              <input ref={minRef} id="min" type="number" defaultValue={counter.min} />
            </label>
            <br />
            <label htmlFor="step">
              Step:
              <input ref={stepRef} id="step" type="number" defaultValue={counter.step} />
            </label>
            <br />
            <label htmlFor="prefix">
              Valor Predeterminado:
              <input ref={prefixRef} id="prefix" type="number" defaultValue={counter.prefix} />
            </label>
            <br />
            <button type="submit">Save Settings</button>
          </form>
        </div>
      </div>
    );
};

export default EjercicioUno;

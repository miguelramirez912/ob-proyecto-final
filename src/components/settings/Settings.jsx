import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es',
};

const Settings = () => {
    const [config, setConfig] = useLocalStorage('config', defaultConfig);

    const handleChange = (event) => {
        event.preventDefault();
        setConfig((oldConfig) => (
            {
                ...oldConfig,
                theme: 'light',
            }
        ));
    };
    return (
      <div>
        <h1>App Settings</h1>
        <p>
          Theme:
          {config.theme}
        </p>
        <p>
          Language:
          {config.lang}
        </p>
        <button type="button" onClick={handleChange}>Save Settings</button>
      </div>
    );
};

export default Settings;

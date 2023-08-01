type ApiConfiguration = {
  home: string;
  main: string;
};

type GlobalConfiguration = {
  api: ApiConfiguration;
};

export const AppConfig = (): GlobalConfiguration => {
  try {
    // Get the global config from the window, this was injected by the
    // environment.js file on public/services
    const { globalConfig } = window as any;
    // Decode it from base64
    const decodedConfig = globalConfig;
    // Parse it to a object from the json string
    // return decodedConfig as GlobalConfiguration;
    return JSON.parse(decodedConfig) as GlobalConfiguration;
  } catch (error) {
    throw new Error("No AppConfig were found, please check the deployment.");
  }
};

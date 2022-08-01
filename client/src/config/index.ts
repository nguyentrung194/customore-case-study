const local = {
  api: "http://localhost:5000",
};

const staging = {
  api: "http://localhost:5000",
};

let envConfig = local;

if (process.env.REACT_APP_STAGE === "staging") {
  envConfig = staging;
} else {
  envConfig = local;
}

const environment = envConfig;

export default environment;

type Payload = {
  response?: {
    status?: number;
  };
};

function isTimeoutError(payload: Payload) {
  return payload && payload.response && payload.response.status === 504;
}

function isTimeoutErrorOptionalChain(payload: Payload) {
  return payload?.response?.status === 504;
}

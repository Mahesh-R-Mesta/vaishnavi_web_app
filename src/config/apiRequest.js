const ApiRequest = {
  call: async (method, api, body = "") => {
    let config = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      // // cache: "default",
      // // credentials: "same-origin",
      keepalive: "true",
      credentials: "include",
    };
    if (body !== "") {
      config = { ...config, body };
    }
    console.log(config);
    return fetch(api, config).then((response) => {
      return response.json();
    });
  },
};

export default ApiRequest;

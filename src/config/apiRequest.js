import React, { useEffect, useState } from "react";

const ApiRequest = {
  call: async (method, api, body = "") => {
    let config = {
      method: method,
      headers:{
        'Content-Type': 'application/json'
      }
    };
    if (body !== "") {
      config = { ...config, body: JSON.stringify(body)};
      console.log(config);
    }
    try {
    const resp = await fetch(api, config);
    const data = await resp.json();
    return data;
    } catch(error){
      return {error:"Error"}
    }
   
  },

  post: async (api, body = "") => {
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'//'application/json',
      },
      mode: "no-cors",
      body:JSON.stringify(body)
      // cache: "default",
      // credentials: "same-origin",
      // keepalive: "true",
      // credentials: "include",
    };
    console.log(config);
    const resp = await fetch(api,config);
    return resp.json().then(data=>{
      return data;
    })

   
  },
};

// headers: {
//   'Content-Type': 'application/json',
//   'Accept': '*/*'//'application/json',
// },
// mode: "no-cors",
// cache: "default",
// credentials: "same-origin",
// keepalive: "true",
// credentials: "include",

export default ApiRequest;

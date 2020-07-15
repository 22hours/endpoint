import React from "react";
import axios from "axios";
export const POST = (url, data, token) => {
    const method = "post";
    return axios({
        method,
        url: url,
        data,
        headers: { Authorization: `token ${token}` },
    })
        .then((result) => result.data)
        .catch((result) => {
            return null;
        });
};

export const GET = (url, data, token) => {
    const method = "get";
    return axios({
        method,
        url: url,
        data,
        headers: { Authorization: `token ${token}` },
    })
        .then((result) => result.data)
        .catch((result) => {
            return null;
        });
};

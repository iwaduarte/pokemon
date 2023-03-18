import React from "react";
import axios from "axios";
import useSWR from "swr";

const URL = "https://pokeapi.co/api/v2/";

const methods = {
  get: (url) => axios.get(url).then((res) => res.data),
  post: (url, data) => axios.post(url, data).then((res) => res.data),
  put: (url, data) => axios.put(url, data).then((res) => res.data),
  destroy: (url) => axios.delete(url).then((res) => res.data),
};

const getData = (url, shouldFetch = true) => {
  const { data, error } = useSWR(
    shouldFetch ? `${URL}${url}` : null,
    methods.get
  );
  return { data, hasError: error };
};
const updateData = (url, data) => {
  const update = methods.put;
  return update(`${URL}${url}`, data);
};

const createData = (url, data) => {
  const post = methods.post;
  return post(`${URL}${url}`, data);
};

const deleteData = (url) => {
  const destroy = methods.destroy;
  return destroy(`${URL}${url}`);
};
export { getData, createData, deleteData, updateData };

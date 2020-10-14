/* eslint-disable import/prefer-default-export */

import axios from "axios";
import "./fetchHelper";

import * as urls from "./urls";

export const register = (data) => axios.post(urls.register, data);

import axios from "axios";
import md5 from "md5";

const ts = new Date().getTime();
const publickey = "9b3805d4e5d43aafcfd12b66e40b8b8b";
const privatekey = "79548943cdd777e0e208e246fd743a0bff2ea039";

const hash = md5(`${ts}${privatekey}${publickey}`);

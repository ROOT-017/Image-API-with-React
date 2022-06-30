import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID _Cce3PvrbuHOF9MYtSlAd_CzX-4Bp-R0WL1zRyxlY74",
      }
})
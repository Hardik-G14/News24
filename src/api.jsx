import axios from 'axios'
const apiKey = "&apiKey=23ccb5bc23d74b9ea930011a7a574747";
const Base_Url = "https://newsapi.org/v2";


export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(Base_Url + url + apiKey, {
            // headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
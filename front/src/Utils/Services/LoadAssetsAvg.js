import axios from '../Axios/Axios';
 const LoadData = async (page, perPage) => {
    let result;
    try {
        result = await axios.get('getAvgOfAssests', {
            params: {
                perPage: perPage,
                pageNumber: page
            }
        });
    }
    catch (e) {
        throw Error(e);
    }
    console.log(result.data)
        return result.data;
};

export default LoadData;
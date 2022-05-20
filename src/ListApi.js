const apiURL = process.env.REACT_APP_API_URL;

class ListApi {
  static fetchListData () {
    return fetch(`${apiURL}/list`)
      .then(response => response.json())
      // .then(jsonData => {
      //   console.log(jsonData);
      //   return jsonData;
      // })
      .catch(err => {
        console.log(err);
      });
  }
}

export default ListApi;
class ListApi {
  static fetchTitle() {
    return fetch("/title")
      .then((response) => response.text())
      .catch((err) => {
        console.log(err);
      });
  }

  static saveTitle(title) {
    return fetch("/title", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    }).then((response) => {
      return response.json();
    });
  }

  static fetchListData() {
    return fetch("/list")
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }

  static saveItem(item) {
    console.log("API " + JSON.stringify(item));
    return fetch("/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    }).then((response) => {
      return response.json();
    });
  }

  static updateItem(indexToUpdate, name) {
    return fetch("/item", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index: indexToUpdate,
        name,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  static deleteItem(indexToDelete) {
    return fetch("/item", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index: indexToDelete }),
    }).then((response) => {
      return response.json();
    });
  }
}

export default ListApi;

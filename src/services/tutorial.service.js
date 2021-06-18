import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("");
  }

  get(id) {
    return http.get(`${id}`);
  }

  create(data) {
    return http.post("", data);
  }

  update(id, data) {
    return http.put(`${id}`, data);
  }

  delete(id) {
    return http.delete(`${id}`);
  }

  deleteAll() {
    return http.delete(``);
  }

  findByName(name) {
    return http.get(`?name=${name}`);
  }
}

export default new TutorialDataService();
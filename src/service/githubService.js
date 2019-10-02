import axios from 'axios';

class GithubService {
  constructor() {
    this.api = axios.create({
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  }

  getUsers = async params => {
    try {
      const {data} = await this.api.get(
        `https://api.github.com/users?${params}`,
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  getUser = async url => {
    try {
      const {data} = await this.api.get(`${url}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
}

const githubService = new GithubService();
export default githubService;

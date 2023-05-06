import { Component } from "react";
import data from "./dummy.json";

class ClassComponentDemo extends Component {
  constructor() {
    super();
    console.log(data);
    this.state = {
      list: [],
      dummyData: [],
    };
  }
  componentDidMount() {
    this.setState({
      list: [...this.state.dummyData],
    });
  }
  render() {
    return (
      <div className="container my-5">
        <h1 className="mb-3 text-center">User Listing</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Ip Address</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? (
              data.map((value, index) => {
                const { email, first_name, gender, id, ip_address, last_name } =
                  value;
                return (
                  <tr key={index}>
                    <th scope="row">{id}</th>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{gender}</td>
                    <td>{email}</td>
                    <td>{ip_address}</td>
                  </tr>
                );
              })
            ) : (
              <div>No data found</div>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClassComponentDemo;

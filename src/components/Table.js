import React from "react";
import { GetPassword } from "../assets/data/contracts";

// the data loaded on this page should replace with the real method

export default function Table() {

  const [message] = GetPassword();
  console.log(message)
  return (
    <div className="tableLimit">
    <table class="table table-borderless table-striped mb-0 text-center">
      <thead>
        <tr className = "py-4">
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Website</th>
        </tr>
      </thead>
      <tbody>
        {message.length > 0 ? message.map(d => <tr><td>{d.data.login.data}</td><td>{d.data.password.data}</td><td>{d.data.url.data}</td></tr>) : <></>}
      </tbody>
    </table>
    </div>
  );
}



import React from "react";
import { FcApproval } from "react-icons/fc";

const GithubUsers = ({ users }) => {
  return (
    <div>
      <h2>LIST Of GITHUB USERS</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            const { avatar_url, id, login, followers_url, following_url } =
              curElem;
            return (
              <div className="col-10 col-md-4 mt-5" key={id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={avatar_url}
                        className="rounded"
                        width="155"
                        alt="img"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft text-dark">
                        {login} <FcApproval />
                      </h4>
                      <div
                        style={{ marginLeft: "8px" }}
                        className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats "
                      >
                        <div className="d-flex flex-column">
                          <span className="articles">Following</span>
                          <span className="number1">
                            {following_url.length}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">
                            {followers_url.length}
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number3">
                            {Math.floor(Math.random() * (5.0 - 1.0 + 1.0)) +
                              1.0 / 10.0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GithubUsers;

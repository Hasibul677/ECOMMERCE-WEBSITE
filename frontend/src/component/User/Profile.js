import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import MetaDeta from "../layout/MetaDeta";
import moment from "moment";
import { Link } from "react-router-dom";

const Profile = () => {
  const { loading, user } = useSelector((state) => state.user);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="marginTop">
          <MetaDeta title={`${user.name}'s Profile`} />
          <Row className="g-0">
            <Col md={6} className="text-center">
              <div className="mb-3">
                <img
                  className="rounded-circle profile-img border shadow"
                  src={user?.avatar?.url}
                  alt="profile"
                />
              </div>
              <Link to="/me/update">
              <button className="glow-on-hover text-style" type="button">
                EDIT PROFILE
              </button>
              </Link>
            </Col>
            <Col md={6} className="">
              <div className="p-4">
                <div>
                  <div>
                    <div>
                      <strong className="text-style fs-5">Name</strong>
                      <p className="text-style">{user?.name}</p>
                    </div>
                    <div>
                      <strong className="text-style fs-5">Email</strong>
                      <p className="text-style">{user?.email}</p>
                    </div>
                    <div>
                      <strong className="text-style fs-5">Joined</strong>
                      <p className="text-style">
                        {moment(user?.createdAt).format("DD-MM-YYYY")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link to="/changePassword">
                    <button
                      className="glow-on-hover text-style mb-2"
                      type="button"
                      onc
                    >
                      CHANGE PASSWORD
                    </button></Link>
                    <Link to="/myOrder">
                    <button
                      className="glow-on-hover text-style ms-3"
                      type="button"
                    >
                      MY ORDER
                    </button></Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Profile;

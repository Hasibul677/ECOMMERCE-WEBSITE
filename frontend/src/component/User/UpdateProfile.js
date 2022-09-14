import React, { useEffect, useState } from "react";
import "./LoginSignUp.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginImg from "../../images/avatar/login.png";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, clearError, loadUser } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../../component/layout/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstant";
import swal from "sweetalert";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);
  const [avatar, setAvatar] = useState(user?.avatar?.url);
  const [updateInfo, setUpdateInfo] = useState({
    name: user?.name,
    email: user?.email,
    avatar: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      if (e.target.files[0].size <= 70000) {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatar(reader.result);
            let info = { ...updateInfo };
            info[e.target.name] = reader.result;
            setUpdateInfo(info);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        swal("File size should be less or equal 70KB!");
      }
    } else {
      let info = { ...updateInfo };
      info[e.target.name] = e.target.value;
      setUpdateInfo(info);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(updateProfile(updateInfo));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isUpdated) {
      alert.success("Profile Updated");
      dispatch(loadUser());
      navigate("/profile");
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, alert, isUpdated, navigate]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Container className="marginTop">
          <Row className="d-md-flex align-items-center">
            <Col md={4}>
              <img className="img-login" src={loginImg} alt="img" />
            </Col>
            <Col md={6}>
              <h5
                className="text-center formWidth fw-bold"
                style={{ fontFamily: "cursive" }}
              >
                UPDATE YOUR PROFILE
              </h5>
              <Form className="formWidth" onSubmit={handleRegister}>
                <div className="text-center mt-3">
                  <img className="profile" src={avatar} alt="profile" />
                </div>
                <Form.Group className="mb-2">
                  <Form.Label style={{ fontFamily: "cursive" }}>
                    Name
                  </Form.Label>
                  <div className="inputparent">
                    <Form.Control
                      className="ps-5"
                      type="text"
                      name="name"
                      defaultValue={user?.name}
                      onChange={handleChange}
                    />
                    <FaRegUser className="inputchild" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label style={{ fontFamily: "cursive" }}>
                    Email
                  </Form.Label>
                  <div className="inputparent">
                    <Form.Control
                      className="ps-5"
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      onChange={handleChange}
                    />
                    <HiOutlineMail className="inputchild" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ fontFamily: "cursive" }}>
                    Profile Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <Button
                    className="rounded-pill px-4 ms-auto bg-light text-dark fw-bold py-1 border btnText"
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default UpdateProfile;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { BsFacebook} from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const { facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-4">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className= "form"
              type="email"
              placeholder="Username/Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className= "form"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <button className="btn" type="Submit">
              Log In
            </button>
          </div>
        </Form>
        <div className="alt_log">
        <p>or sign in with</p>
        <div className="social-login">
                      <div className="log">

                        <BsFacebook 
                        className="facebook-btn social-btn"
                        type="dark"
                        onClick={handleFacebookSignIn}/>

                        <AiFillGoogleCircle 
                        className="google-btn social-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}/>
                    
                    </div>
                </div>
        </div>
      <span className="alt_log">
        <p>Don't have an account? <Link to="/signup" className="link">Sign up</Link></p>
      </span>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { BsFacebook} from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { facebookSignIn } = useUserAuth();
  const { googleSignIn } = useUserAuth();
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
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
        <h2 className="mb-4">Create<br /> an account</h2>
        <p className="info">Fill the details & create your account</p>
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className= "form"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <button className="btn" type="Submit">
              Continue
            </button>
          </div>
        </Form>
        <div className="alt_log">
        <p>Already have an account?   <Link to="/" className="link">Log In</Link></p>
        <p>or sign in with</p>
        <div className="social-login">
                      <p className="log">

                        <BsFacebook 
                        className="facebook-btn social-btn"
                        type="dark"
                        onClick={handleFacebookSignIn}/>

                        <AiFillGoogleCircle 
                        className="google-btn social-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}/>
                    
                    </p>
                </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

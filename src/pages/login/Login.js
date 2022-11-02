import { useContext, useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';
import { data } from '../../data/db';
import "./login.css";

function LoginForm() {
    const { user } = data
    const { authUser, setAuthUser } = useContext(UserContext)
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = (e) => {
        e.preventDefault()
        if (!email.match(pattern)) {
            setError("Email should be in xyz@abc.com")
        }
        else if (email !== user.email) {
            setError("Incorrect email")
        }
        else if (password !== user.password) {
            setError("Incorrect password")
        }
        else {
            setAuthUser(user)
            navigate("/")
        }
    }
    const animate_to_right = () => {

        const movingbackgroud = document.getElementsByClassName("movingbackgroud")[0];
        const butn2 = document.getElementById("butn2");
        movingbackgroud.style.cssText = "left:70vw;transition:1.2s ease-in-out;animation:banding 1.2s";
        document.getElementById("butn1").style.transition = '0.4s';
        document.getElementById("butn1").style.opacity = '0';
        butn2.style.cssText = "opacity:1;transition-duration:0.6s;transition-delay:0.7s;"
        document.getElementById("button").onClick = { animate_to_left };
        console.log(document.getElementById("button"));
        // e.onClick = {animate_to_left}

        const contents_span1 = document.getElementById("contents_span1")
        contents_span1.style.cssText = "transition:0.4s;opacity:0"
        const contents_span2 = document.getElementById("contents_span2")
        contents_span2.style.cssText = "opacity:1;transition-duration:0.6s;transition-delay:0.7s;"

        const pages = document.getElementById("pages")
        pages.style.cssText = "right:30vw;transition:1s ease-in-out"
        document.getElementById("page1").style.cssText = "transition-duration:.3s;transition-delay:0.5s;opacity:0"
        document.getElementById("page1").style.visibility = "hidden"
        document.getElementById("page2").style.cssText = "transition-duration:0.1s;transition-delay:0.6s;visibility: visible;"
    }

    const animate_to_left = (e) => {
        console.log("hello");

        const movingbackgroud = document.getElementsByClassName("movingbackgroud")[0]
        movingbackgroud.style.cssText = "left:0vw;transition:1.2s ease-in-out;animation:banding2 1.2s"
        document.getElementById("butn2").style.transition = '0.4s';
        document.getElementById("butn2").style.opacity = '0';
        const butn1 = document.getElementById("butn1")
        butn1.style.cssText = "opacity:1;transition-duration:0.6s;transition-delay:0.7s;"
        // document.getElementById("button").setAttribute("onclick", "animate_to_right");
        document.getElementById("button").onClick = { animate_to_right };

        const contents_span2 = document.getElementById("contents_span2")
        contents_span2.style.cssText = "transition:0.4s;opacity:0"
        const contents_span1 = document.getElementById("contents_span1")
        contents_span1.style.cssText = "opacity:1;transition-duration:0.6s;transition-delay:0.7s;"

        const pages = document.getElementById("pages")
        pages.style.cssText = "right:0vw;transition:1s ease-in-out"
        document.getElementById("page2").style.cssText = "transition-duration:.3s;transition-delay:0.5s;opacity:0"
        document.getElementById("page2").style.visibility = "hidden"
        document.getElementById("page1").style.cssText = "transition-duration:0.1s;transition-delay:0.6s;visibility: visible;"

        document.getElementById("page3").style.cssText = "transition-duration:.3s;transition-delay:0.5s;opacity:0"
        document.getElementById("page3").style.visibility = "hidden"
    }
    return (
        <>
            <div className="movingbackgroud">
                <div className="container">
                    <center>
                        <div className="contents_to_hide">
                            <div id="contents_span1" className="span">
                                <h1>Hello, Friend</h1>
                                <p>Enter you personal details and start a safe journey with us </p>
                            </div>
                            <div id="contents_span2" className="span" style={{ opacity: "0" }}>
                                <h1>Welcome, Back</h1>
                                <p>To keep connected with us, please login in with your personal credentials.</p>
                            </div>
                        </div>
                        <button id="button" >
                            <span onClick={animate_to_right} id="butn1">SIGN UP</span>
                            <span onClick={animate_to_left} id="butn2" style={{ opacity: "0" }}>SIGN IN</span>
                        </button>
                    </center>
                </div>
            </div>

            <div className="content_login" id="pages">
                {/* page1  */}
                <div className="container" id="page1" >
                    <center>
                        <form id="login_form">
                            <h1 style={{ color: "rgb(65,178,151)" }}>Sign In
                            </h1>
                            <input onChange={handleEmail} type={"text"} id="login_email" placeholder="Email_ID" /><br />
                            <input onChange={handlePassword} type={"password"} id="login_pass" placeholder="Password" /><br />
                            {error ?
                                <p className='text-danger p-1'>{error}</p> : null
                            }
                            <input onClick={handleLogin} type={"submit"} value="CONTINUE" /><br />
                            <a className="forget" href={""}>Forget password ?</a>
                        </form>
                    </center>
                </div>

                {/* page2  */}
                <div className="container" id="page2" style={{ visibility: "hidden" }}>
                    <center>
                        <form id="cust_reg" >
                            <h1 style={{ color: "rgb(65,178,151)" }}>Create an Account</h1>
                            <div>
                                <div>
                                    <input type="text" id="name" name="name" placeholder="Name" required />
                                    <a href="javascript:err()" data-toggle="popover" data-trigger="focus" id="err1" style={{ visibility: "hidden" }} data-content="Invalid name!">
                                        <img src="images\error.png" height="20px" width="20px" />
                                    </a>
                                </div><br />
                                <div>
                                    <input type="text" id="email" name="email" placeholder="Email" required />
                                    <a href="javascript:err()" data-toggle="popover" data-trigger="focus" id="err3" style={{ visibility: "hidden" }} data-content="Invaild Email! eg:something@something.com">
                                        <img src="images\error.png" height="20px" width="20px" />
                                    </a>
                                </div><br />
                                <div>
                                    <input type="password" id="password" name="password" placeholder="Password" required />
                                    <a href="javascript:err()" data-toggle="popover" data-trigger="focus" id="err4" style={{ visibility: "hidden" }} data-content="Invalid! eg:#Ay&iou31 min:8chars ">
                                        <img src="images\error.png" height="20px" width="20px" />
                                    </a>
                                </div><br />
                                <div>
                                    <input type="password" id="ConfirmPass" name="confirm_password" placeholder="Confirm Password" required />
                                    <a href="javascript:err()" data-toggle="popover" data-trigger="focus" id="err5" style={{ visibility: "hidden" }} data-content="Password don't match!">
                                        <img src="images\error.png" height="20px" width="20px" />
                                    </a>
                                </div><br />
                            </div><br />

                            <input type={"button"} value="SIGN UP" /><br />
                        </form>
                    </center>
                </div>
            </div>

        </>

    );
}

export default LoginForm;
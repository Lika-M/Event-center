import { Link } from "react-router-dom";
import './Register.css';

export const Register = () => {
    return (
        <section className="register">

            <div className="register-box">
                <h1>Register</h1>

                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <label htmlFor="rePass">Confirm Password</label>
                    <input type="password" name="rePass" id="rePass" placeholder="Confirm Password" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>

        </section>
    );
}
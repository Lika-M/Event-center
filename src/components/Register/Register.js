import { Link } from "react-router-dom";
import './Register.css';

export const Register = () => {
    return (
        <section className="register">

            <div className="register-box">
                <h1>Register</h1>

                <form>
                    <label>Username</label>
                    <input type="text" name="" placeholder="Username" />
                    <label>Email</label>
                    <input type="text" name="" placeholder="Email" />
                    <label>Password</label>
                    <input type="password" name="" placeholder="Password" />
                    <label>Confirm Password</label>
                    <input type="password" name="" placeholder="Confirm Password" />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>

        </section>
    );
}
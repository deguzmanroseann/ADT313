import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const InputField = ({ label, name, type = "text", value, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}:</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

const Register = () => {
  const initialFormState = {
    firstName: '',
    middleName: '',
    lastName: '',
    contactNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
  const [formData, setFormData] = useState(initialFormState);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => setIsShowPassword((prev) => !prev);

  const handleRegister = async () => {
    setStatus('loading');
    try {
      const { data } = await axios.post('/admin/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      alert('Registration successful! Please login.');
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setStatus('idle');
    }
  };

  const isFormValid = () => {
    const { password, confirmPassword, ...rest } = formData;
    return Object.values(rest).every(Boolean) && password === confirmPassword;
  };

  return (
    <div className="Register">
      <div className="main-container">
        <h3>Register</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-container">
            {Object.entries({
              firstName: 'First Name',
              middleName: 'Middle Name',
              lastName: 'Last Name',
              contactNo: 'Contact Number',
              email: 'Email',
            }).map(([name, label]) => (
              <InputField
                key={name}
                label={label}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={name !== 'middleName'}
              />
            ))}
            <InputField
              label="Password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type={isShowPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {formData.password !== formData.confirmPassword && (
              <span className="errors">Passwords do not match</span>
            )}
            <div className="show-password" onClick={togglePasswordVisibility}>
              {isShowPassword ? 'Hide' : 'Show'} Password
            </div>
            <div className="submit-container">
              <button
                type="button"
                disabled={status === 'loading' || !isFormValid()}
                onClick={handleRegister}
              >
                {status === 'idle' ? 'Register' : 'Loading...'}
              </button>
            </div>
            <div className="login-container">
              <a href="/">
                <small>Already have an account? Login</small>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

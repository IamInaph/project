import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError } = useAuthStore();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    clearError();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData.email, formData.password);
    if (result.success) {
      navigate('/');
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: 'url(/images/bg-01.jpg)' }}>
        <h2 className="ltext-105 cl0 txt-center">Login</h2>
      </section>

      {/* Login Form */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="p-lr-15">
                <h4 className="mtext-105 cl2 txt-center p-b-30">Sign In</h4>

                {error && (
                  <div className="p-all-15 m-b-20 bg6 txt-center">
                    <span className="stext-107" style={{ color: '#e74c3c' }}>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="bor8 m-b-20 how-pos4-parent">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-l-25 p-r-30"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="bor8 m-b-30 how-pos4-parent">
                    <input
                      className="stext-111 cl2 plh3 size-116 p-l-25 p-r-30"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex-c-m stext-101 cl0 size-121 bg1 bor1 hov-btn1 p-lr-15 trans-04 pointer w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </button>
                </form>

                <div className="txt-center p-t-30">
                  <span className="stext-107 cl6">Don't have an account? </span>
                  <Link to="/signup" className="stext-107 cl1 hov-cl1">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';

function LandingPage() {
  return (
    <main>
      <section className="content-page">
        <div className="container">
          <div className="row gap-4">
            <div className="index-page-content col-lg-6 col-md-12 text-center">
              <h2 className="main-title">VK for mobile devices</h2>
              <p className="main-info">Install our official mobile app and stay in touch with your friends anytime and anywhere.</p>
              <img src="https://sun7-9.userapi.com/GKUrK0PzHqPH_9lv1fx01p_LO6PjXjMMRxBGJw/VD3VpchXcC8.png" alt="" />
            </div>
            <div className="index-form col-lg-3 col-md-12">
              <form className="row row-cols-lg-5 g-3 align-items-center">
                <h3 className="col-12">Sign in</h3>
                <div className="col-12">
                  <div className="input-group">
                    <span className="visually-hidden">Username</span>
                    <div className="input-group-text">@</div>
                    <input type="email" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                    <span className="form-check-label">
                      Remember me
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary col-12 mb-5">Sign in</button>
                  <button type="submit" className="btn btn-success col-12">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
import React from "react";

function About() {
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="row ">
          <div className="col-sm-9 mx-auto text-black shadow-lg p-3 bg-light">
            <h1 className="text-center">About Me</h1>
            <div className="row my-5">
              <div className="col-9 mx-auto">
                <ul>
                  <li>👋 Hi, I’m @ayushSharma </li>
                  <li>
                    👀 I’m interested in Web development and new technology.
                  </li>
                  <li>
                    🌱 I’m currently doing computer science from YMCA faridabad.
                  </li>
                  <li>
                    💞️ I’m looking to collaborate on Frontend development.
                  </li>
                  <li>
                    📫 How to reach me...{" "}
                    <ul>
                      <li>
                        <a href="https://github.com/ayush3160" target="_blank">
                          Github
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

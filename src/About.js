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
                  <h5><li>👋 Hi, I’m @ayushSharma </li></h5>
                  <li>
                    <h5>👀 I’m interested in Web development and new technology.</h5>
                  </li>
                  <li>
                    <h5>🌱 I’m currently doing computer science from YMCA faridabad.</h5>
                  </li>
                  <li>
                   <h5> 💞️ I’m looking to collaborate on Frontend development.</h5>
                  </li>
                  <li>
                    <h5>📫 How to reach me...</h5>
                    <ul>
                      <li><label>
                        GitHub :
                        <a href="https://github.com/ayush3160" target="_blank">
                          <img src="./GitHub-Mark.png" width = "5%"></img>
                        </a>
                        </label>
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

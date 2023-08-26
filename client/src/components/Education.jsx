import React from "react";

function Education() {
  return (
    <div className="education">
      <h3>Education</h3>
      <div className="container1">
        <div className="container2">
          <div className="item item1">
            <div className="item_child1">
              <img src="/assets/education/university_1.svg" alt="" />
            </div>
            <div className="item_child2">
              <h3>2023</h3>
              <p>SES college sreekandapuram</p>
              <p>BCA</p>
            </div>
          </div>
          <div className="item item2">
            <div className="item_child1">
              <img src="/assets/education/school.svg" alt="" />
            </div>
            <div className="item_child2">
              <h3>2020</h3>
              <p>St.Joseph's HSS, Vayattuparamba</p>
              <p>Computer Science</p>
            </div>
          </div>
          <div className="item item3">
            <div className="item_child1">
              <img src="/assets/education/school.svg" alt="" />
            </div>
            <div className="item_child2">
              <h3>2018</h3>
              <p>Govt.Technical HS, Naduvil</p>
              <p>THSLC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

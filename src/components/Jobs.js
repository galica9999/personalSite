import React from 'react';

const Jobs = () => {
  return (
    <>
      <div className="jobs">
        <h1>Jobs</h1>
        <div className="job">
          <h3>
            Technical Marketing Engineer{' '}
            <h5 className="dates">
              Cisco <span>Jan 2021 - Present</span>
            </h5>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            numquam accusantium praesentium sequi laboriosam, sunt ad. Veniam
            iusto saepe ad numquam, maxime perferendis consequuntur libero.
            Error deserunt totam consequatur iure. <br />
            <strong>
              make it so the right side scrolls so the page doesnt get too big.
            </strong>
          </p>
          <h6>Achievments</h6>
        </div>
        <div className="job">
          <h3>
            Technical Consulting Engineer{' '}
            <h5 className="dates">
              Cisco <span>Jul 2018 - Jan 2021</span>
            </h5>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, numquam
            labore! Nisi quas quam animi ea incidunt voluptas quod quidem labore
            ipsa impedit! Fuga, maiores ea. Eius eaque consectetur molestias.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque odit
            nihil, distinctio sed ipsa laudantium temporibus iusto tempora,
            fugit, ut consectetur explicabo quo magnam! Unde, ducimus!
            Reprehenderit soluta voluptate sapiente. <br />
            <strong>
              Add in see more option when text is too long. this could be a
              modal popup?
            </strong>
          </p>
          <h6>Achievments</h6>
        </div>
        <div className="job">
          <h3>
            Technical Support Representative
            <h5 className="dates">
              RIT <span>October 2013 - Jul 2018</span>
            </h5>
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus in ratione voluptates omnis placeat aut corrupti, veniam
            ab, doloribus, quis molestias! Repellendus accusantium nulla
            quaerat, eum eos minima accusamus reprehenderit.
          </p>
          <h6>Achievments</h6>
          <ul>
            <li>meep</li>
            <li>meepers</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Jobs;

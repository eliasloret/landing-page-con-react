import React from "react";
import hh from "/workspace/react-hello/src/img/hh.jpg";
import aa from "/workspace/react-hello/src/img/aa.jpg";

export const Jumbo = () => {
    return(
        <>
    <div className="jumbotron ">
  <h1 className="display-4 text-center">Hello, world!</h1>
  <p className="lead text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4 text-center"/>
  <p className="text-center">It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead text-center">
    <a className="btn btn-primary btn-lg text-center" href="#" role="button">Learn more</a>
  </p>
</div>
        </>
    );

}
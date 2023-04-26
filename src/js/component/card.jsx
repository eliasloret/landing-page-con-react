import React from "react";

export const Tarjeta = ({title,text,im}) => {

    return(
        <>
            <div className="card" style={{width: "18rem"}}>
  <img src={im} className="card-img-top altu" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
        </>
    );
}
import React from 'react'

function CardList(props) {
  return (
    <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top h5" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">{props.content.name}</text></svg>
      <div className="card-body">
        <p className="card-text">{props.content.text}</p>
      </div>
      <div className="card-footer">
        <div className="row">
        <div className="col-sm-6">
          Updated
          </div>
          <div className="col-sm-6 text-end">
            Updated
            </div>
          </div>
      </div>
    </div>
  )
}

export default CardList;

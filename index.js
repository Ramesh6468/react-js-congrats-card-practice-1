const element = (
  <div className="container">
    <h1 className="tittle">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image1"
      />
      <h1 className="name">Kiran V</h1>
      <p className="student">
        Vishnu Institute Of Computer Education And Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

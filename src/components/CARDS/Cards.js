export const Cards = () => {
  return (
    <div className="card m-5 " style={{width: "18rem"}}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
        className="card-img-top"
        alt="Chicago Skyscrapers"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-light list-group-small">
        <li className="list-group-item px-4">Cras justo odio</li>
        <li className="list-group-item px-4">Dapibus ac facilisis in</li>
        <li className="list-group-item px-4">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
       
      </div>
    </div>
  );
};

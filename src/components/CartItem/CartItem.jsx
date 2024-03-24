export default function CartItem({ data = {} }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <img style={{ width: "100%" }} alt={data.name} src={data.image} />
          </div>
          <div className="col-9">
            Title Price Increment and Decrement Button
          </div>
        </div>
      </div>
    </div>
  );
}

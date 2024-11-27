export default function PassingFunctions({
  theFunction,
}: {
  // expect a function that doesn't return a value
  theFunction: () => void;
}) {
  // trigger theFunction prop when button clicked
  return (
    <div>
      <h2>Passing Functions</h2>
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
      <hr />
    </div>
  );
}

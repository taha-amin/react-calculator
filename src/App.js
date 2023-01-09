import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn light-gray" onClick={reset}>
          AC
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn light-gray" onClick={minusPlus}>
          +/-
        </div>
        <div className="btn orange" onClick={operator}>
          /
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          7
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          8
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operator}>
          x
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          4
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          5
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operator}>
          +
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          1
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          2
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operator}>
          -
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          0
        </div>
        <div className="btn light-gray" onClick={inputNum}>
          .
        </div>
        <div className="btn orange" onClick={equal}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;

import "./addDel.css";



const AddDel = (state = <div></div>, action) => {
    
  switch (action.type) {
    case "ADDBOX":
      return (
        <div className="boxadded" id="box">
          <button
            onClick={() => {
              const div = document.getElementById("box");
              div.parentNode.removeChild(div);
              localStorage.clear();
            }}
          >
            delete box
          </button>
          <button
           
          >
            add box
          </button>
        </div>
      );
    default:
      return state;
  }
};

export default AddDel;

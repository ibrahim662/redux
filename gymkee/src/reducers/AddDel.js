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
    case "DELETEBOX":
      return <div>no added</div>;
    default:
      return state;
  }
};

export default AddDel;

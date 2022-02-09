import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export let CreateAppointment = () => {
  const [zip, setZip] = useState("");
  const [validinput, setValidinput] = useState(true);
  const navigate = useNavigate();
  let buttonHandler = (event) => {
    navigate("/phonerepair");
  };
  let validateZipHandler = (event) => {
    const zips = Number(event.target.value);
    setZip(zips);
    if (zips >= 20000 && zips <= 21009) {
      setValidinput(false);
    } else {
      setValidinput(true);
    }
  };

  return (
    <div>
      <h1> Find a Puls technician in your area</h1>
      <form>
        <div>
          <input
            type='text'
            onChange={validateZipHandler}
            maxLength='5'
            placeholder='zip code'
          />
        </div>
        <div>
          <button
            onClick={buttonHandler}
            disabled={validinput}
            style={{ background: "cyan" }}>
            Conutinue
          </button>
        </div>
      </form>
      {/* <div>{zip}</div> */}
    </div>
  );
};

//  state = {
//   isLoggedIn: true,
// submit buton : active or true,
// };
// }
// if(zip<21113 && zip>21403) return <div>DC aria </div>;
// } else {
//   return <div> We are not service this aria </div>;
// }
//

// import { Button } from "@material-ui/core";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export let CreateAppointment = () => {
//   const navigate = useNavigate();
//   let buttonHandler = (event) => {
//     // navigate("/phonemodels");
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <h1> Find a Puls technician in your area</h1>
//       <form onSubmit={buttonHandler}>
//         <div>
//           <input type='text' maxLength='5' placeholder='zip code' />
//         </div>
//         <div>
//           <input type='submit' style={{ background: "cyan" }} />
//         </div>
//       </form>
//     </div>
//   );
// };

// let access = true;

//   if (zip <= 21401 && zip >= 21113) {
//     access = false;

//   } else {
//     document.getElementById("username_error").style.display = "none";
//   }

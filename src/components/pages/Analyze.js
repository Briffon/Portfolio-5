import React, { useState, useEffect } from "react";

function Analyze() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("teams")) {
      let team = localStorage.getItem("team");
      let parsed = JSON.parse(team);
      console.log(parsed);
      setTeam([...parsed]);
    }
  }, []);
  return <div>{console.log(team)}</div>;
}

export default Analyze;

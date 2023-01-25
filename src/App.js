import React, { useState } from 'react';
import './App.css';
import Header from './Header'
import Employees from './Employees';
import Footer from './Footer'


function App() {

  const [selectedTeam, setTeam] = useState('TeamB')
  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Bob Kayode",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Okorie",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Obi",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Datti",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Okon",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Uzor",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Isah",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Feyi",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Moremi",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Ubong",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Idoko",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Banjo",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);
  
  /* handle Team Change on the select button */
  function handleTeamSelectChange(e) {
    setTeam(e.target.value);
  }

  /* This function handles a click event on an employee card 
  and updates the team name of the selected employee. The function first 
  maps through the "employees" array and checks if the ID of the current 
  employee matches the ID of the card that was clicked. If the IDs match, 
  it then checks if the employee's current team name is the same as the 
  "selectedTeam" variable. If it is, the team name is set to an empty string, 
  otherwise it is set to the value of "selectedTeam".*/

  function handleEmployeeCardClick(e) {
    const transformedEmployees = employees.map((employee) => employee.id === parseFloat(e.currentTarget.id)
      ? (employee.teamName === selectedTeam)
      ? {...employee, teamName :''} : {...employee, teamName : selectedTeam}
      : employee);
    setEmployees(transformedEmployees)
  }

  return (
    <div className="App">
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectChange={handleTeamSelectChange}
      />
      <Footer />
    </div>
  );
}

export default App;

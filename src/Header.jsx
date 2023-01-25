import React from 'react'


const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <div>
      <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} has {teamMemberCount} Members </h3>
    </div>
  )
}

export default Header

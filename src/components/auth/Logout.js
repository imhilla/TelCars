import React from 'react';

export default function Logout() {
  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div>
      <button className="logoutButton" type="button" onClick={() => { handleLogoutClick(); }}>Logout</button>
    </div>
  );
}

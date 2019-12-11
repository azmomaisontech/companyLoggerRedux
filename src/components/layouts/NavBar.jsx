import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../action/logAction";
import PropTypes from "prop-types";

const NavBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = () => {
    searchLogs(text.current.value);
  };

  return (
    <nav className="blue" style={{ marginBottom: "30px" }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              ref={text}
              placeholder="Search Logs...."
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchLogs }
)(NavBar);

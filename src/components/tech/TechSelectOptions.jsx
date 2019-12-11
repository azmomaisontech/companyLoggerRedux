import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../action/techAction";
import PropTypes from "prop-types";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(tech => (
      <option value={`${tech.firstName} ${tech.lastName}`} key={tech.id}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

const mapStateToProps = state => ({
  tech: state.tech
});

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOptions);

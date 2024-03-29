import React, { useEffect } from "react";
import TechList from "../tech/TechList";
import { connect } from "react-redux";
import { getTechs } from "../../action/techAction";
import PropTypes from "prop-types";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4> Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechList tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tech: state.tech
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);

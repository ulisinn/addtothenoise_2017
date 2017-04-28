/**
 * Created by ulrichsinn on 04/25/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';


const ProjectDescription = ({ title,client, photography, role }) =>
  (<div className="projectDescription">
    <span><em>{title}</em>{(client) ? ' • ' + client : ''}{(photography) ? ' • ' + photography : ''}{(role) ? ' • ' + role : ''} </span>
  </div>);


ProjectDescription.propTypes = {
  title: PropTypes.string,
  photography: PropTypes.string,
  role: PropTypes.string,
  client: PropTypes.string,
};

export default ProjectDescription;
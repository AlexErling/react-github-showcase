import React from 'react';
import PropTypes from 'prop-types';
import CommitComponent from "./CommitComponent";

class RepositoryComponent extends React.Component {

    render() {

        return(
            <div>
                {this.props.name}
                {this.props.commits.map(function (commit) {
                    return <CommitComponent
                        abbreviatedOid={commit.abbreviatedOid}
                        message={commit.message}
                        committedDate={commit.committedDate}/>;
                })}
            </div>
        )
    }
}

RepositoryComponent.propTypes = {
    name: PropTypes.string.isRequired,
    commits: PropTypes.array.isRequired
};

export default RepositoryComponent;
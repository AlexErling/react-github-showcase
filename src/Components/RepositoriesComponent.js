import React from 'react';
import PropTypes from 'prop-types';
import CommitComponent from "./CommitComponent";
import RepositoryComponent from "./RepositoryComponent";

class RepositoriesComponent extends React.Component {
    render() {
        return (
            <div className="repos" style={{
                width: "75%"
            }}>
                <div className="repo">
                    {this.props.repos.map(function (repo) {
                        return <RepositoryComponent
                            name={repo.node.name}
                            commits={repo.node.ref.target.history.nodes}/>;
                    })}
                </div>
            </div>
        )
    }
}

RepositoriesComponent.propTypes = {
    repos: PropTypes.array.isRequired
};

export default RepositoriesComponent;
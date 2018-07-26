import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';

import { toggleLogin } from '../actions/nav';

class LoginModal extends React.Component {
	constructor(props) {
		super(props);
	}

	onClose = () => {
		this.props.toggleLogin();
	}

	render() {
		return (
			<Modal 
				open={this.props.loginModalOpen}
				onClose={this.onClose}
				closeIcon
			>
				<Modal.Header as='h2' content='yoooooo'/>
			</Modal>
		)
	}
}

const mapStateToProps = ({ NavState }) => ({
	loginModalOpen: NavState.loginModalOpen
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({ toggleLogin }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
import React from "react";
import PropTypes from 'prop-types';

class GrowDropDownItem extends React.Component {
    
	constructor(props) {
		super(props);
		
		this.state = {
			checked: false,
		};
		
		this.handleClick = this.handleClick.bind(this);
    }
	
	handleClick(){
		this.setState({
			checked: !this.state.checked,
		})
	}
   
	render() {
       
		return (
		
			<div className={"custom-control custom-" + this.props.type}>
				<label>
					<input 
						className="custom-control-input" 
						id={this.props.id}
						name={this.props.name} 
						type={this.props.type}
					/>
					<span className="custom-control-label">
						<span className="custom-control-label-text">
							{this.props.label}
						</span>
					</span>
				</label>
			</div>
		);
    }
}

GrowDropDownItem.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	checked: PropTypes.bool,
};

GrowDropDownItem.defaultProps = {
   checked: false,
};

export default GrowDropDownItem
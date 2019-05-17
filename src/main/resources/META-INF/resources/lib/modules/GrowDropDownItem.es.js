import React from "react";


class GrowDropDownItem extends React.Component {
    
	constructor(props) {
		super(props);
    }
    
	render() {
       
		return (
			<div className={"custom-control custom-" + this.props.item.type}>
				<label>
					<input 
						className="custom-control-input" 
						id={this.props.item.id}
						name={this.props.item.name} 
						type={this.props.item.type}

					/>
					<span className="custom-control-label">
						<span className="custom-control-label-text">
							{this.props.item.label}
						</span>
					</span>
				</label>
			</div>
		);
    }
}

export default GrowDropDownItem
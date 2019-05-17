import React from "react";


class GrowTitle extends React.Component {
    
	constructor(props) {
		super(props);
    }
	
    render() {
       
        return (
			<div className="autofit-row autofit-padded text-center">
				<div className="autofit-col autofit-col-expand">
					<div className="autofit-section">
							<h1 className="sheet-title">{this.props.title}</h1> 
					</div>
				</div>
			</div>
        );
    }
}

export default GrowTitle
import React from "react";
import GrowDropDownItem from "./GrowDropDownItem.es";

class GrowDropDown extends React.Component {
    
	constructor(props) {
		super(props);
    }
    
	render() {
       
		return (
			<div className="dropdown-menu" role="menu">
			
				{this.props.searchFilter.map((filter, i) => (
					<div 
						key={"filter-group-" + i}
					>
						<div 
							className="custom-control"
							key={"filter-control-" + i}
						>
							<span 
								className="custom-control-group-label-text"
								key={"filter-label-text-" + i}
							>
								{filter.label}
							</span>
						</div>	
						{filter.items.map((item, i) => (
							<GrowDropDownItem
								spritemap={this.props.spritemap}
								item={item}
								key={"dropdownitem-" + i}
							/>
						))}
					</div>
				))}

			</div>
		);
    }
}

export default GrowDropDown
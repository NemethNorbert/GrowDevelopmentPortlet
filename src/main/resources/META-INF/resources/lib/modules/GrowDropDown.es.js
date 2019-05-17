import React from "react";
import GrowDropDownItem from "./GrowDropDownItem.es";

class GrowDropDown extends React.Component {
    
	constructor(props) {
		super(props);
    }
    
	render() {
       
		return (
			<div className="dropdown-menu" role="menu">
			
				{this.props.searchFilter.map((filter, f) => (
					<div 
						key={"filter-group-" + f}
					>
						<div 
							className="custom-control"
							key={"filter-control-" + f}
						>
							<span 
								className="custom-control-group-label-text"
								key={"filter-label-text-" + f}
							>
								{filter.label}
							</span>
						</div>	
						{filter.items.map((item, i) => (
							<GrowDropDownItem
								id={item.id}
								name={item.name}
								label={item.label}
								type={item.type}
								checked={item.checked}
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
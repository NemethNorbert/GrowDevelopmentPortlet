import React from 'react';
import GrowIcon from "./GrowIcon.es";

class GrowToolbar extends React.Component {
	
	constructor(props) {
		super(props);

	}
	
	render() {
		return (
			<div className="col-lg-8">
				<nav className="management-bar management-bar-light navbar navbar-expand-md">
					<div className="container">
						<ul className="navbar-nav">
							<li className="dropdown nav-item">
								<a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle nav-link navbar-breakpoint-down-d-none" data-toggle="dropdown" href="#1" role="button">
									<span className="navbar-text-truncate">Filter and Order</span>
									<GrowIcon
										spritemap={this.props.spritemap}
										classes="lexicon-icon lexicon-icon-caret-bottom"                        
										iconName="caret-bottom"
									/>
								</a>
								<a aria-expanded="false" aria-haspopup="true" className="nav-link nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none" data-toggle="dropdown" href="#1" role="button">
									 <GrowIcon
										spritemap={this.props.spritemap}
										classes="lexicon-icon lexicon-icon-filter"                        
										iconName="filter"
									/>
								</a>
								<div className="dropdown-menu" role="menu">
									<ul className="list-unstyled">
										<li><a className="dropdown-item" href="#1" role="button">Filter Action 1</a></li>
										<li><a className="dropdown-item" href="#1" role="button">Filter Action 2</a></li>
										<li><a className="dropdown-item" href="#1" role="button">Filter Action 3</a></li>
									</ul>
								</div>
							</li>
						</ul>
						<div className="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
							<div className="container">
								<form role="search">
									<div className="input-group">
										<div className="input-group-item">
											<input className="form-control input-group-inset input-group-inset-after" placeholder="Search..." type="text"/>
											<span className="input-group-inset-item input-group-inset-item-after">
												<button className="btn btn-unstyled navbar-breakpoint-d-none" type="button">
													<GrowIcon
														spritemap={this.props.spritemap}
														classes="lexicon-icon lexicon-icon-times"                        
														iconName="times"
													/>
												</button>
												<button className="btn btn-unstyled navbar-breakpoint-d-block" type="button">
													<GrowIcon
														spritemap={this.props.spritemap}
														classes="lexicon-icon lexicon-icon-search"                        
														iconName="search"
													/>
												</button>
											</span>
										</div>
									</div>
								</form>
							</div>
						</div>
						<ul className="navbar-nav">
							<li className="nav-item navbar-breakpoint-d-none">
								<a className="nav-link nav-link-monospaced" href="#1" role="button">
									<GrowIcon
										spritemap={this.props.spritemap}
										classes="lexicon-icon lexicon-icon-search"                        
										iconName="search"
									/>
								</a>
							</li>
						</ul>
					</div>
				</nav>
				
				<div className="autofit-row autofit-padded text-center">
					<div className="autofit-col autofit-col-expand">
						<div className="autofit-section">
								<a href="" target="_self" className=" lfr-icon-item taglib-icon" id="" role="menuitem">  
									<GrowIcon
										spritemap={this.props.spritemap}
										classes="lexicon-icon lexicon-plus inline-item inline-item-before"                        
										iconName="plus"
									/>
								<span className="taglib-text">Create Account</span> 
							</a>
						</div>
					</div>
				</div>
				
				
			</div>
		);
	}
}

export default GrowToolbar;
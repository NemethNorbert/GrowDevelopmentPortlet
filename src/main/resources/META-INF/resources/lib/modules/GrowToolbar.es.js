import React from 'react';
import GrowIcon from "./GrowIcon.es";
import GrowDropDown from "./GrowDropDown.es";
import GrowTitle from "./GrowTitle.es";

class GrowToolbar extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.doSearch = this.doSearch.bind(this);
	}
	
	doSearch() {
		console.log("doSearch");
	}
	
	render() {
		return (
			<div className="col-lg-8">
				
				<GrowTitle
					spritemap={this.props.spritemap}
					title={this.props.GrowTitle}
				/>
			
				<nav className="management-bar management-bar-light navbar navbar-expand-md">
					<div className="container">
						<div className="navbar-form navbar-form-autofit navbar-overlay navbar-overlay-sm-down">
							<div className="container">
								<form 
									role="search" 
									name={this.props.searchFormName} 
									method={this.props.searchFormMethod} 
									action={this.props.searchActionURL}
								>
									<div className="input-group">
										<div className="input-group-item">
										
											<ul className="navbar-nav filter-control">
												<li className="dropdown nav-item">
													<a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle navbar-breakpoint-down-d-none blue-color" data-toggle="dropdown" href="#1" role="button">
														<span className="navbar-text-truncate navbar-filter padding-right">Filters</span>
														<GrowIcon
															spritemap={this.props.spritemap}
															classes="lexicon-icon lexicon-icon-angle-down inline-item-after"                        
															iconName="angle-down"
														/>
													</a>
													<a aria-expanded="false" aria-haspopup="true" className="nav-link-monospaced dropdown-toggle navbar-breakpoint-d-none blue-color" data-toggle="dropdown" href="#1" role="button">
														 <GrowIcon
															spritemap={this.props.spritemap}
															classes="lexicon-icon lexicon-icon-filter"                        
															iconName="filter"
														/>
													</a>
													
													<GrowDropDown
														searchFilter={this.props.searchFilter}
													/>

												</li>
											</ul>
											
											<input className="form-control input-group-inset input-group-inset-after white-background-color search-control" placeholder="Search..." type="text"/>
											
											<span className="input-group-inset-item input-group-inset-item-after white-background-color">
												<button className="btn btn-unstyled navbar-breakpoint-d-none" type="button">
													<GrowIcon
														spritemap={this.props.spritemap}
														classes="lexicon-icon lexicon-icon-times"                        
														iconName="times"
													/>
												</button>
												<button 
													className="btn btn-unstyled navbar-breakpoint-d-block btn-link blue-color" 
													type="button"
													onClick={this.doSearch}
												>
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
								
								<div className="autofit-row text-right">
									<div className="autofit-col autofit-col-expand">
										<div className="autofit-section">
											<button className="btn btn-link jumbotron-fluid" id="#_gsearchportlet_HelpModalButton" data-target="#_gsearchportlet_HelpModal" data-toggle="modal" type="button">
												Syntax Help
											</button>
										</div>
									</div>
								</div>
						
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
							<a href="" target="_self" className="lfr-icon-item link-icon blue-color" id="" role="menuitem">  
								<GrowIcon
									spritemap={this.props.spritemap}
									classes="lexicon-icon lexicon-plus inline-item inline-item-before"                        
									iconName="plus"
								/>
								<span className="taglib-text">Create New Article</span> 
							</a>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default GrowToolbar;
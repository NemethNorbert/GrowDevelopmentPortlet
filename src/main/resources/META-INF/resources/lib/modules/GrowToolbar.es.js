import React from 'react';
import GrowIcon from "./GrowIcon.es";

class GrowToolbar extends React.Component {
	
	constructor(props) {
		super(props);

	}
	
	doSearch() {
		console.log("doSearch");
	}
	
	render() {
		return (
			<div className="col-lg-8">
				<div className="autofit-row autofit-padded text-center">
					<div className="autofit-col autofit-col-expand">
						<div className="autofit-section">
								<h1 className="sheet-title">Explore Articles</h1> 
						</div>
					</div>
				</div>
			
			
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
													<div className="dropdown-menu" role="menu">
														<div className="custom-control ">
															<span className="custom-control-group-label-text">Content Type</span>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input checked className="custom-control-input" id="contenttype-all" name="contenttype" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">All</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="contenttype-wikis" name="contenttype" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Wikis</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="contenttype-files" name="contenttype" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Files</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="contenttype-discussions" name="contenttype" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Discussions</span>
																</span>
															</label>
														</div>
														
														<div className="custom-control ">
															<span className="custom-control-group-label-text">Date</span>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input checked className="custom-control-input" id="date-discussions" name="date" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Anytime</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="date-lasthour" name="date" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Last Hour</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="date-last24hours" name="date" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Last 24 Hours</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="date-lastweek" name="date" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Last Week</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="date-lastmonth" name="date" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Last Month</span>
																</span>
															</label>
														</div>
														<div className="custom-control custom-radio">
															<label>
																<input className="custom-control-input" id="date-lastyear" name="date" type="radio"/>
																<span className="custom-control-label">
																	<span className="custom-control-label-text">Last Year</span>
																</span>
															</label>
														</div>

													</div>
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
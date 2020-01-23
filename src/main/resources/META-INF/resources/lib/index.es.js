import React from "react";
import ReactDOM from "react-dom";
import ClayList from '@clayui/list';
import {GrowCard, GrowCardHorizontal, GrowListItem} from "grow-clay";
// import GrowToolbar from './modules/GrowToolbar.es'; 
// import GrowList from './modules/GrowList.es';
// import GrowFavouritesCard from './modules/GrowFavouritesCard.es';


const spritemap = Liferay.ThemeDisplay.getPathThemeImages() + "/icons.svg";

const GrowCardData = {
	articleAuthor: "Gábor Ambrózy",
	authorAvatar: "https://place-hold.it/300x500",
	createDate: "01.01.2019",
	articleTitle: "Respect badge",
	articleContent:
		'A respect badge can be given by anyone to anyone. You can give 1 badge per month. You can use the Respect badge page to add badges. To give a respect badge, @ mention the name in the table, write your name to the From column and write the reason, why do you give it. The reason has to be for a "superpower", something why you respect the other person and something which you would like to learn from them. For Support Hungary 2016Q3 goals, you have to give min. 1 respect badge until Sept 30. If there will be need, we will add gamification to Grow later on.',
	tags: ["badge", "gamification", "respect", "test1", "test2"],
	readCount: "626",
	articleCategory: "Share"
};

const GrowListData = {
	articleAuthor: "Gábor Ambrózy",
	authorAvatar: "https://place-hold.it/300x500",
	createDate: "01.01.2019",
	articleTitle: "Respect badge",
	articleContent:
		'A respect badge can be given by anyone to anyone. You can give 1 badge per month. You can use the Respect badge page to add badges. To give a respect badge, @ mention the name in the table, write your name to the From column and write the reason, why do you give it. The reason has to be for a "superpower", something why you respect the other person and something which you would like to learn from them. For Support Hungary 2016Q3 goals, you have to give min. 1 respect badge until Sept 30. If there will be need, we will add gamification to Grow later on.',
	tags: ["badge", "gamification", "respect", "test1", "test2"],
	articleCategory: "Share",
	star: true,
	like: false
};

const GrowToolbarData = {
	searchActionURL: "http://localhost:8080",
	searchFormMethod: "POST",
	searchFormName: "grow-search",
	searchFilter: [{label: "Content Type", 
						items: [
							{id: "contenttype-all", name: "filter-contenttype", label: "All", type: "radio", checked: true},
							{id: "contenttype-wikis", name: "filter-contenttype", label: "Wikis", type: "radio"},
							{id: "contenttype-files", name: "filter-contenttype", label: "Files", type: "radio"},
							{id: "contenttype-discussions", name: "filter-contenttype", label: "Discussions", type: "radio"}
					]},
					{label: "Date",
						items: [
							{id: "date-all", name: "filter-date", label: "Anytime", type: "radio", checked: true},
							{id: "date-lasthour", name: "filter-date", label: "Last Hour", type: "radio"},
							{id: "date-last24hours", name: "filter-date", label: "Last 24 Hours", type: "radio"},
							{id: "date-lastweek", name: "filter-date", label: "Last Week", type: "radio"},
							{id: "date-lastmonth", name: "filter-date", label: "Last Month", type: "radio"},
							{id: "date-lastyear", name: "filter-date", label: "Last Year", type: "radio"}
					]}]
};

const GrowTitle = "Explore Articles";

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
				<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={"Liferay's Vision and Support's Purpose"}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory={GrowCardData.articleCategory}
						assetEntryId={"356322621"}
						like={true}
						star={false}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory={GrowCardData.articleCategory}
						assetEntryId={"35632262"}
						like={true}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="Excellence"
						assetEntryId={"35632221"}
						like={false}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="Learn"
						assetEntryId={"356321"}
						like={false}
						star={false}
						interactive={true}
					/>
					</div>
				</div>
				<div className="row">
				<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={"Liferay's Vision and Support's Purpose"}
						articleContent={GrowCardData.articleContent}
						articleTags={null || undefined}
						articleReadCount={null || undefined}
						articleCategory={null || undefined}
						assetEntryId={"35632"}
						like={true}
						star={false}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={null || undefined}
						articleReadCount={GrowCardData.readCount}
						articleCategory={GrowCardData.articleCategory}
						assetEntryId={"3322621"}
						like={false}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={null || undefined}
						articleCategory="Excellence"
						assetEntryId={"56322621"}
						like={true}
						star={true}
						interactive={true}
					/>
					</div>
					<div className="col-md-3">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="Learn"
						assetEntryId={"3563621"}
						like={false}
						star={false}
						interactive={true}
					/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-5">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="Excellence"
						assetEntryId={"3563621"}
						categorytoUpperCase={true}
						like={false}
						star={true}
						interactive={false}
						tagCount={3}
						tagLength={15}
					/>
					</div>
					<div className="col-md-5">
					<GrowCard
						spritemap={spritemap}
						articleAuthor={GrowCardData.articleAuthor}
						articleAuthorAvatar={GrowCardData.authorAvatar}
						articleCreateDate={GrowCardData.createDate}
						articleTitle={GrowCardData.articleTitle}
						articleContent={GrowCardData.articleContent}
						articleTags={GrowCardData.tags}
						articleReadCount={GrowCardData.readCount}
						articleCategory="Learn"
						assetEntryId={"356315621"}
						categorytoUpperCase={true}
						like={true}
						star={true}
						interactive={false}
						tagCount={4}
						tagLength={15}
					/>
					</div>
				</div>
				<div className="row">
				 <GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
					articleCategory={"Excellence"}
					assetEntryId={"35632321"}
					star={true}
					interactive={false}
				/>
				<GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
					articleCategory={"Excellence"}
					assetEntryId={"35602621"}
					star={true}
					interactive={false}
				/>
				<GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={"A really long title with a really deep meaning to make sure everyone's eyes are bleeding from the beatiful UI that deals with this"}
					assetEntryId={"30322621"}
					star={true}
					interactive={true}
				/>
				<GrowCardHorizontal
					spritemap={spritemap}
					articleAuthor={GrowCardData.articleAuthor}
					articleAuthorAvatar={GrowCardData.authorAvatar}
					articleCreateDate={GrowCardData.createDate}
					articleTitle={GrowCardData.articleTitle}
					articleCategory="People"
					assetEntryId={"3564262"}
					star={true}
					interactive={true}
				/>
				{/*
				<GrowToolbar 
					spritemap={spritemap}
					searchActionURL={GrowToolbarData.searchActionURL}
					searchFormMethod={GrowToolbarData.searchFormMethod}
					searchFormName={GrowToolbarData.searchFormName}
					searchFilter={GrowToolbarData.searchFilter}
				/>

				<div className="col-lg-12">
					<GrowList 
						spritemap={spritemap}
						articleCategory={GrowListData.articleCategory}
						articleAuthorAvatar={GrowListData.authorAvatar}
						articleAuthor={GrowListData.articleAuthor}
						articleCreateDate={GrowListData.createDate}
						articleTitle={GrowListData.articleTitle}
						articleContent={GrowListData.articleContent}
						articleTags={GrowListData.tags}
					/>
				</div> */}
				</div>
				<div className="row">
					<ClayList>
						<GrowListItem
							spritemap={spritemap}
							articleCategory={GrowListData.articleCategory}
							articleAuthorAvatar={GrowListData.authorAvatar}
							articleAuthor={GrowListData.articleAuthor}
							articleCreateDate={GrowListData.createDate}
							articleTitle={GrowListData.articleTitle}
							articleContent={GrowListData.articleContent}
							articleTags={GrowListData.tags}
							assetEntryId={"378863"}
							star={GrowListData.star}
							like={GrowListData.like}
							tagCount={4}
							tagLength={20} />
						<GrowListItem
							spritemap={spritemap}
							articleCategory={GrowListData.articleCategory}
							articleAuthorAvatar={GrowListData.authorAvatar}
							articleAuthor={GrowListData.articleAuthor}
							articleCreateDate={GrowListData.createDate}
							articleTitle={GrowListData.articleTitle}
							articleContent={GrowListData.articleContent}
							articleTags={GrowListData.tags}
							assetEntryId={"392521"}
							star={GrowListData.star}
							like={true}
							tagCount={4}
							tagLength={20} />
						<GrowListItem
							spritemap={spritemap}
							articleCategory={GrowListData.articleCategory}
							articleAuthorAvatar={GrowListData.authorAvatar}
							articleAuthor={GrowListData.articleAuthor}
							articleCreateDate={GrowListData.createDate}
							articleTitle={GrowListData.articleTitle}
							articleContent={GrowListData.articleContent}
							articleTags={GrowListData.tags}
							assetEntryId={"395221"}
							star={GrowListData.star}
							like={GrowListData.like}
							tagCount={4}
							tagLength={20} />
							
					</ClayList>
				</div>
			</div>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}

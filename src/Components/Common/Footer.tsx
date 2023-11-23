import { SlArrowDown } from "react-icons/sl";
import { FaGlobe } from "react-icons/fa";
import footerStyles from "./Footer.module.css";

const arr1_links = [
	{
		link: "https://help.netflix.com/support/412",
		link_title: "FAQ",
	},
	{
		link: "http://ir.netflix.com/",
		link_title: "Investor Relations",
	},
	{
		link: "https://help.netflix.com/legal/privacy",
		link_title: "Privacy",
	},
	{
		link: "Speed Test",
		link_title: "Speed",
	},
];

const arr2_links = [
	{
		link: "https://help.netflix.com/support/412",
		link_title: "Help Center",
	},
	{
		link: "http://ir.netflix.com/",
		link_title: "Jobs",
	},
	{
		link: "https://help.netflix.com/legal/privacy",
		link_title: "Cookie Preferences",
	},
	{
		link: "Speed Test",
		link_title: "Legal Notices",
	},
];

const arr3_links = [
	{
		link: "https://help.netflix.com/support/412",
		link_title: "Accounts",
	},
	{
		link: "http://ir.netflix.com/",
		link_title: "Ways to Watch",
	},
	{
		link: "https://help.netflix.com/legal/privacy",
		link_title: "Corporate Information",
	},
	{
		link: "Speed Test",
		link_title: "Only On Netflix",
	},
];

const arr4_links = [
	{
		link: "https://help.netflix.com/support/412",
		link_title: "Media Center",
	},
	{
		link: "http://ir.netflix.com/",
		link_title: "Jobs",
	},
	{
		link: "https://help.netflix.com/legal/privacy",
		link_title: "Cookie Preferences",
	},
	{
		link: "Speed Test",
		link_title: "Terms of Use",
	},
];

const list1_links = arr1_links.map((arr1_link) => (
	<a href={arr1_link.link}>{arr1_link.link_title}</a>
));
const list2_links = arr2_links.map((arr2_link) => (
	<a href={arr2_link.link}>{arr2_link.link_title}</a>
));
const list3_links = arr3_links.map((arr3_link) => (
	<a href={arr3_link.link}>{arr3_link.link_title}</a>
));
const list4_links = arr4_links.map((arr4_link) => (
	<a href={arr4_link.link}>{arr4_link.link_title}</a>
));

function FooterPages() {
	return (
		<div className={footerStyles.footerContainer}>
			<h3 className={footerStyles.footerTitle}>Questions? Contact us.</h3>

			<div className={footerStyles.linksContainer}>
				<div className={footerStyles.links}>
					{list1_links}
					<div className={footerStyles.languageSelection}>
						<FaGlobe />
						<span>English</span>
						<SlArrowDown />
					</div>
					<a href="#">Netflix Lebanon</a>
				</div>

				<div className={footerStyles.links}>{list2_links}</div>

				<div className={footerStyles.links}>{list3_links}</div>

				<div className={footerStyles.links}>{list4_links}</div>
			</div>
		</div>
	);
}

export default FooterPages;

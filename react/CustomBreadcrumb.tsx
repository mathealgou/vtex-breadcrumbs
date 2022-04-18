import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { Link } from "vtex.render-runtime";
//@ts-ignore
import { IconCaret, IconHome } from "vtex.store-icons";
import styles from "./styles.css";

interface Props {
	steps: Step[];
	page?: string;
	homeLinkSize?: number;
	caretIconSize?: number;
}

type Step = {
	name: string;
	url: string;
};

const CSS_HANDLES = [
	"customBreadcrumbWrapper",
	"customBreadcrumbContainer",
	"homeLink",
	"pageName",
];

const CustomBreadcrumb: StorefrontFunctionComponent<Props> = (props: Props) => {
	const handles = useCssHandles(CSS_HANDLES);
	console.log("aaaaaaaaaaa");
	console.log(props);

	if (props.page?.includes("store.custom")) {
		const pageName = props.page
			.split("#")[1]
			.split("-")
			.toString()
			.replace(/,/g, " ")
			.toLowerCase();
		return (
			<div className={`${handles.customBreadcrumbWrapper}`}>
				<div
					className={`${handles.customBreadcrumbContainer} flex flex-row flex-wrap items-center`}
				>
					<Link
						className={`${handles.homeLink} pt1 pl1 pr1 ${styles.black}`}
						page="store.home"
					>
						<IconHome size={props.homeLinkSize || 20} />
					</Link>

					<IconCaret
						orientation="right"
						size={props.caretIconSize || 12}
						className={`${handles.homeLink} pl1 pr1 ${styles.black}`}
						style={{ paddingLeft: "90px" }}
					/>
					<span className={`${handles.pageName} ${styles.captalize}`}>
						{pageName}
					</span>
				</div>
			</div>
		);
	}
	return (
		<div
			className={`${handles.customBreadcrumbContainer} flex flex-row flex-wrap items-center`}
		>
			{" "}
			Error: this block is only supposed to be used in custom routes
		</div>
	);
};

CustomBreadcrumb.schema = {
	title: "editor.customCustomBreadcrumb.title",
	description: "editor.customCustomBreadcrumb.description",
	type: "object",
	properties: {},
};

export default CustomBreadcrumb;

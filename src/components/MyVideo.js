import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
import QuarklycommunityKitSource from "./QuarklycommunityKitSource";
import QuarklycommunityKitVideo from "./QuarklycommunityKitVideo";
const defaultProps = {
	"className": "video-widget",
	"data-state": "default",
	"quarkly-title": "video-widget"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"className": "video-widget__container",
			"quarkly-title": "video-widget__container"
		}
	},
	"quarklycommunityKitVideo": {
		"kind": "QuarklycommunityKitVideo",
		"props": {
			"id": "video-widget__video",
			"className": "video-widget__video",
			"src": "https://ukit.top/video-vidzhet.mp4",
			"width": "120px",
			"playOnHover": true,
			"autoPlay": true,
			"muted": true,
			"controls": false
		}
	},
	"quarklycommunityKitSource": {
		"kind": "QuarklycommunityKitSource",
		"props": {
			"src": "https://ukit.top/video-vidzhet.mp4"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"className": "video-widget__close",
			"quarkly-title": "video-widget__close"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"className": "video-widget__button",
			"href": "https://wa.me/87000000",
			"quarkly-title": "video-widget__button",
			"children": "Оставить заявку"
		}
	}
};

const MyVideo = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<QuarklycommunityKitVideo {...override("quarklycommunityKitVideo")}>
				<QuarklycommunityKitSource {...override("quarklycommunityKitSource")} />
			</QuarklycommunityKitVideo>
			<Box {...override("box1")} />
			<Link {...override("link")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(MyVideo, { ...Box,
	defaultProps,
	overrides
});
export default MyVideo;
import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Section, Strong, Icon, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { FaDotCircle } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"2"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="url(https://uploads.quarkly.io/5f9aba1d8da982001e8c48e0/images/Frame%2020.png?v=2020-10-29T14:21:26.108Z) 0% 100% /cover no-repeat scroll padding-box,#0E1317" padding="100px 0 100px 0">
			<Stack>
				{"        "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" flex-direction="column" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--light"
						text-align="center"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						sm-font="normal 600 60px/75px Source Sans Pro, sans-serif"
					>
						FLEXBOX
						<br />
						<Span
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							KITTY
						</Span>
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL1" padding="30px 0 0px 0" sm-padding="24px 0 24px 0">
			<Override slot="SectionContent" flex-direction="row" />
			<Box width="100%" display="flex">
				<Box display="flex" padding="20px 20px 20px 20px" flex-direction="column">
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--light"
						text-align="left"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						width="100%"
						sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
						sm-width="90%"
					>
						Use{" "}
						<Strong>
							justify-content{" "}
						</Strong>
						again to help these cats get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:
						<br />
						{"\n\n"}
					</Text>
					<Box margin="15px 0px 5px 0px" display="flex" align-items="center">
						<Icon
							category="fa"
							icon={FaDotCircle}
							color="--primary"
							size="8px"
							margin="2px 8px 0px 0px"
						/>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--light"
							text-align="left"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							width="100%"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
						>
							<Strong>
								flex-start:
							</Strong>
							{" "}Items align to the left side of the container.
						</Text>
					</Box>
					<Box margin="0px 0px 5px 0px" display="flex" align-items="center">
						<Icon
							category="fa"
							icon={FaDotCircle}
							color="--primary"
							size="8px"
							margin="2px 8px 0px 0px"
						/>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--light"
							text-align="left"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							width="100%"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
						>
							<Strong>
								flex-end:
							</Strong>
							{" "}Items align to the right side of the container.
						</Text>
					</Box>
					<Box margin="0px 0px 5px 0px" display="flex" align-items="center">
						<Icon
							category="fa"
							icon={FaDotCircle}
							color="--primary"
							size="8px"
							margin="2px 8px 0px 0px"
						/>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--light"
							text-align="left"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							width="100%"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
						>
							<Strong>
								center:{" "}
							</Strong>
							Items align at the center of the container.
						</Text>
					</Box>
					<Box margin="0px 0px 5px 0px" display="flex" align-items="center">
						<Icon
							category="fa"
							icon={FaDotCircle}
							color="--primary"
							size="8px"
							margin="2px 8px 0px 0px"
						/>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--light"
							text-align="left"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							width="100%"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
						>
							<Strong>
								space-between:{" "}
							</Strong>
							Items display with equal spacing between them.
						</Text>
					</Box>
					<Box margin="0px 0px 5px 0px" display="flex" align-items="center">
						<Icon
							category="fa"
							icon={FaDotCircle}
							color="--primary"
							size="8px"
							margin="2px 8px 0px 0px"
						/>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--light"
							text-align="left"
							text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							width="100%"
							sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
							sm-width="90%"
						>
							<Strong>
								space-around:{" "}
							</Strong>
							Items display with equal spacing around them.
							<br />
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="30px 0 30px 0" sm-padding="24px 0 24px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				max-width="none"
				width="100%"
				flex-wrap="wrap"
				position="relative"
			/>
			<Box width="50%" display="flex">
				<Box display="flex" padding="20px 20px 20px 20px" width="100%">
					<Components.Codes width="100%">
						<Override
							slot="Code Text"
							margin="0px 0px 0px 0px"
							padding="22px 16px 22px 16px"
							font="900 16px/21px --fontFamily-googleRobotoMono"
							height="100%"
							min-height="500px"
						>
							#pond &#123;
  display: flex;
							<br />
							{"  "}[_____________]
							<br />
							&#125;
						</Override>
						<Override slot="Code Alert" display="none" />
					</Components.Codes>
				</Box>
			</Box>
			<Box width="50%" display="flex">
				<Box
					display="flex"
					padding="10px 20px 20px 30px"
					margin="20px 20px 20px 20px"
					background="--color-grey"
					width="100%"
					min-height="500px"
					position="relative"
				>
					<Image
						width="73px"
						height="73px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/catblue.svg?v=2021-06-30T23:48:05.169Z"
						position="relative"
						left="0px"
						z-index="3"
						margin="0px 10px 0px 0px"
					/>
					<Image
						width="73px"
						height="73px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/catred.svg?v=2021-06-30T23:48:05.165Z"
						position="relative"
						left="0px"
						z-index="3"
						margin="0px 0px 0px 10px"
					/>
				</Box>
			</Box>
			<Box
				width="50%"
				display="flex"
				position="absolute"
				right="0px"
				top="0px"
				left="auto"
				bottom="auto"
			>
				<Box
					id="pond"
					display="flex"
					padding="25px 10px 20px 30px"
					margin="20px 0px 20px 20px"
					width="50%"
					min-height="500px"
					position="relative"
					justify-content="flex-end"
				>
					<Image
						width="92px"
						height="92px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/pet-bed1.svg?v=2021-07-01T11:46:39.190Z"
						position="static"
						top="63px"
						left="auto"
						object-position="1000% 100%"
						z-index="2"
						right="19px"
					/>
				</Box>
				<Box
					id="pond"
					display="flex"
					padding="25px 20px 20px 10px"
					margin="20px 20px 20px 0px"
					width="50%"
					min-height="500px"
					position="relative"
					justify-content="flex-start"
				>
					<Image
						width="92px"
						height="92px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/pet-bed2.svg?v=2021-07-01T11:46:39.184Z"
						position="static"
						top="63px"
						left="auto"
						object-position="1000% 100%"
						z-index="2"
						right="19px"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="20px 0 20px 0" sm-padding="24px 0 24px 0" background="--color-primary">
			<Override slot="SectionContent" flex-direction="row" />
			<Box width="100%" display="flex">
				<Box display="flex" padding="20px 20px 20px 20px" flex-direction="column">
					<Text
						font="normal 500 20px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="left"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						width="100%"
						sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
						sm-width="90%"
					>
						Переместить котиков по центру, вы можете при помощи свойства{" "}
						<Strong>
							justify-content: center;
						</Strong>
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="30px 0 30px 0" sm-padding="24px 0 24px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				max-width="none"
				width="100%"
				flex-wrap="wrap"
				position="relative"
			/>
			<Box width="50%" display="flex">
				<Box display="flex" padding="20px 20px 20px 20px" width="100%">
					<Components.Codes width="100%">
						<Override
							slot="Code Text"
							margin="0px 0px 0px 0px"
							padding="22px 16px 22px 16px"
							font="900 16px/21px --fontFamily-googleRobotoMono"
							height="100%"
							min-height="500px"
						>
							#pond &#123;
  display: flex;
							<br />
							{"  "}justify-content: center;
							<br />
							&#125;
						</Override>
						<Override slot="Code Alert" display="none" />
					</Components.Codes>
				</Box>
			</Box>
			<Box width="50%" display="flex">
				<Box
					display="flex"
					padding="10px 20px 20px 30px"
					margin="20px 20px 20px 20px"
					background="--color-grey"
					width="100%"
					min-height="500px"
					position="relative"
					justify-content="center"
				>
					<Image
						width="73px"
						height="73px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/catblue.svg?v=2021-06-30T23:48:05.169Z"
						position="relative"
						left="0px"
						z-index="3"
						margin="0px 10px 0px 0px"
					/>
					<Image
						width="73px"
						height="73px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/catred.svg?v=2021-06-30T23:48:05.165Z"
						position="relative"
						left="0px"
						z-index="3"
						margin="0px 0px 0px 10px"
					/>
				</Box>
			</Box>
			<Box
				width="50%"
				display="flex"
				position="absolute"
				right="0px"
				top="0px"
				left="auto"
				bottom="auto"
			>
				<Box
					id="pond"
					display="flex"
					padding="25px 10px 20px 30px"
					margin="20px 0px 20px 20px"
					width="50%"
					min-height="500px"
					position="relative"
					justify-content="flex-end"
				>
					<Image
						width="92px"
						height="92px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/pet-bed1.svg?v=2021-07-01T11:46:39.190Z"
						position="relative"
						top="23px"
						left="auto"
						object-position="1000% 100%"
						z-index="2"
						right="-13px"
					/>
				</Box>
				<Box
					id="pond"
					display="flex"
					padding="25px 20px 20px 10px"
					margin="20px 20px 20px 0px"
					width="50%"
					min-height="500px"
					position="relative"
					justify-content="flex-start"
				>
					<Image
						width="92px"
						height="92px"
						src="https://uploads.quarkly.io/60dcf0653f4eb1001ea27b03/images/pet-bed2.svg?v=2021-07-01T11:46:39.184Z"
						position="relative"
						top="23px"
						left="auto"
						object-position="1000% 100%"
						z-index="2"
						right="6px"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="20px 0 20px 0" sm-padding="24px 0 24px 0" background="--color-primary">
			<Override slot="SectionContent" flex-direction="row" />
			<Box width="100%" display="flex" align-items="center" justify-content="center">
				<Link href="/" color="--darkL2" transition="color 0.4s linear 0s" hover-color="#566877">
					<Icon
						category="md"
						icon={MdKeyboardArrowLeft}
						size="56px"
						color="inherit"
						margin="5px 0px 0px 0px"
					/>
				</Link>
				<Box display="flex" padding="0px 5px 0px 5px" flex-direction="column">
					<Text
						font="normal 700 30px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--darkL2"
						text-align="left"
						text-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
						width="100%"
						sm-font="normal 400 18px/23px Source Sans Pro, sans-serif"
						sm-width="90%"
					>
						2 / 24
					</Text>
				</Box>
				<Link href="/3" color="--darkL2" transition="color 0.4s linear 0s" hover-color="#566877">
					<Icon
						category="md"
						icon={MdKeyboardArrowRight}
						size="56px"
						color="inherit"
						margin="5px 0px 0px 0px"
					/>
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60dcf0653f4eb1001ea27b01"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
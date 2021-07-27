import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
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
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n\n\n\n\n\n.video-widget{position:fixed;left:0;z-index:999999;bottom:0}.video-widget__container{font-family:Helvetica;z-index:999999;overflow:hidden;border-style:solid;background:#eee;-webkit-transition:width .3s ease-in-out 0s,height .3s ease-in-out 0s,bottom .3s ease-in-out 0s,border-color .2s ease-in-out 0s,opacity 1s ease-in-out 0s,-webkit-transform .2s ease-in-out 0s;transition:width .3s ease-in-out 0s,height .3s ease-in-out 0s,bottom .3s ease-in-out 0s,border-color .2s ease-in-out 0s,opacity 1s ease-in-out 0s,-webkit-transform .2s ease-in-out 0s;-o-transition:width .3s ease-in-out 0s,height .3s ease-in-out 0s,bottom .3s ease-in-out 0s,border-color .2s ease-in-out 0s,opacity 1s ease-in-out 0s,-o-transform .2s ease-in-out 0s;-moz-transition:transform .2s ease-in-out 0s,width .3s ease-in-out 0s,height .3s ease-in-out 0s,bottom .3s ease-in-out 0s,border-color .2s ease-in-out 0s,opacity 1s ease-in-out 0s,-moz-transform .2s ease-in-out 0s;transition:transform .2s ease-in-out 0s,width .3s ease-in-out 0s,height .3s ease-in-out 0s,bottom .3s ease-in-out 0s,border-color .2s ease-in-out 0s,opacity 1s ease-in-out 0s;transition:transform .2s ease-in-out 0s,width .3s ease-in-out 0s,height .3s ease-in-out 0s,bottom .3s ease-in-out 0s,border-color .2s ease-in-out 0s,opacity 1s ease-in-out 0s,-webkit-transform .2s ease-in-out 0s,-moz-transform .2s ease-in-out 0s,-o-transform .2s ease-in-out 0s;outline:0;cursor:pointer;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-box-shadow:rgba(0,0,0,.2) 0 10px 20px;box-shadow:rgba(0,0,0,.2) 0 10px 20px;position:absolute;left:20px;bottom:50px;border-radius:20px;border-width:5px;width:130px;height:180px;border-color:#fff}.video-widget__container:hover{-webkit-transform:scale(1.05) translate(5px,-5px);-moz-transform:scale(1.05) translate(5px,-5px);-ms-transform:scale(1.05) translate(5px,-5px);-o-transform:scale(1.05) translate(5px,-5px);transform:scale(1.05) translate(5px,-5px);border-color:#131344}.video-widget__video{-o-object-fit:cover;object-fit:cover;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;height:100%;min-width:100%;min-height:100%;z-index:200;-webkit-transition:opacity .4s ease-in-out 0s;-o-transition:opacity .4s ease-in-out 0s;-moz-transition:opacity .4s ease-in-out 0s;transition:opacity .4s ease-in-out 0s;opacity:.9}.video-widget__close{position:absolute;top:6px;right:6px;width:20px;height:20px;z-index:250;opacity:0;-webkit-transition:opacity .2s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s;transition:opacity .2s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s;-o-transition:opacity .2s ease-in-out 0s,-o-transform .3s ease-in-out 0s;-moz-transition:transform .3s ease-in-out 0s,opacity .2s ease-in-out 0s,-moz-transform .3s ease-in-out 0s;transition:transform .3s ease-in-out 0s,opacity .2s ease-in-out 0s;transition:transform .3s ease-in-out 0s,opacity .2s ease-in-out 0s,-webkit-transform .3s ease-in-out 0s,-moz-transform .3s ease-in-out 0s,-o-transform .3s ease-in-out 0s}.video-widget__close:after,.video-widget__close:before{position:absolute;left:9px;top:1px;content:\" \";height:18px;width:2px;background:#fff;-webkit-box-shadow:rgba(0,0,0,.5) 1px 1px 10px;box-shadow:rgba(0,0,0,.5) 1px 1px 10px}.video-widget__close:before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.video-widget__close:after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.video-widget__container:hover .video-widget__close{opacity:.5}.video-widget.video-widget[data-state=opened] .video-widget__container{width:280px;height:500px;border-radius:20px;border-color:#fff}.video-widget.video-widget[data-state=opened] .video-widget__close{opacity:.5}.video-widget.video-widget[data-state=opened] .video-widget__close:before{display:none}.video-widget.video-widget[data-state=opened] .video-widget__close:after{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.video-widget.video-widget[data-state=opened] .video-widget__close:hover{opacity:1}.video-widget__button{position:absolute;bottom:20px;right:20px;left:20px;height:65px;border-radius:10px;z-index:300;-webkit-box-shadow:rgba(0,0,0,.25) 0 4px 15px;box-shadow:rgba(0,0,0,.25) 0 4px 15px;text-align:center;-webkit-transition:opacity .3s ease-in-out 0s,background-color .2s ease-in-out 0s,-webkit-transform .2s ease-in-out 0s;transition:opacity .3s ease-in-out 0s,background-color .2s ease-in-out 0s,-webkit-transform .2s ease-in-out 0s;-o-transition:opacity .3s ease-in-out 0s,background-color .2s ease-in-out 0s,-o-transform .2s ease-in-out 0s;-moz-transition:transform .2s ease-in-out 0s,opacity .3s ease-in-out 0s,background-color .2s ease-in-out 0s,-moz-transform .2s ease-in-out 0s;transition:transform .2s ease-in-out 0s,opacity .3s ease-in-out 0s,background-color .2s ease-in-out 0s;transition:transform .2s ease-in-out 0s,opacity .3s ease-in-out 0s,background-color .2s ease-in-out 0s,-webkit-transform .2s ease-in-out 0s,-moz-transform .2s ease-in-out 0s,-o-transform .2s ease-in-out 0s;visibility:hidden;background-color:#fdd82a;font-size:14px;font-family:Helvetica;color:#000;text-align:center;vertical-align:middle;line-height:65px;text-transform:uppercase;opacity:0}.video-widget__button:hover{background-color:#ffe257;text-decoration:none}.video-widget.video-widget[data-state=opened] .video-widget__button{opacity:1;visibility:visible}@media only screen and (max-width:1023px){.video-widget__close{opacity:.5}}@media only screen and (max-width:479px){.video-widget__container{left:15px;bottom:15px;width:90px;height:125px}}\n.video-widget__button  {color: #000000 !important; text-decoration: none;}\n"}
			</style>
		</RawHtml>
	</Theme>;
});
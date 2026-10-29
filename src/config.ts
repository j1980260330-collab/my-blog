import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "绯村",                          // ← 改这里
	subtitle: "记录学习笔记",          // ← 改这里
	lang: "zh_CN",                                // ← 必须是 zh_CN
	themeColor: {
		hue: 250,                                  // ← 0~360，想换主色调就改这个
		fixed: false,
	},
	banner: {
		enable: true,                              // ← 原来是 false，改 true 才有顶部大图
		src: "assets/images/demo-banner.png",      // ← 换图就改名或换文件
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		// 留空用默认图标；想换就把注释打开并放图到 public/favicon/
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/j1980260330-collab",   // 导航栏 GitHub
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png",      // ← 换头像就替换这个文件
	name: "绯村",                              // 显示名
	bio: "嵌入式 / NPU 开发，偶尔写点笔记",          // ← 改这里
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/j1980260330-collab",   // 个人资料 GitHub
		},
		{
			name: "邮箱",
			icon: "fa6-solid:envelope",
			url: "mailto:j1980260330@gmail.com",
		},
		{
			name: "RSS",
			icon: "fa6-solid:rss",
			url: "/rss.xml",                        // 站内链接不要加 base path
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
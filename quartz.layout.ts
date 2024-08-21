import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.RecentNotes({ 
	limit: 4, 
	title: "Recent Writings",
	linkToMore: "Posts/" as SimpleSlug,
	showTags: false,
	}),
    Component.RecentNotes({ 
	limit: 2, 
	title: "Recent Excerpts",
	linkToMore: "Excerpts/" as SimpleSlug,
	showTags: false,
	}),
  ],
  right: [
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        showTags: false,
      },
	}),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.RecentNotes({ 
	limit: 4, 
	title: "Recent Writings",
	linkToMore: "Posts/" as SimpleSlug,
	showTags: false,
	}),
    Component.RecentNotes({ 
	limit: 2, 
	title: "Recent Excerpts",
	linkToMore: "Excerpts/" as SimpleSlug,
	showTags: false,
	}),
  ],
  right: [],
}

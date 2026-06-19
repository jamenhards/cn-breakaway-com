// assets/content-map.js
// 站点内容地图模块，管理内容分区与关键词标签

const siteConfig = {
  baseURL: "https://cn-breakaway.com",
  defaultCategory: "sports",
  searchVersion: "1.0"
};

const contentSections = [
  {
    id: "sec001",
    title: "热门游戏",
    slug: "hot-games",
    tags: ["冰球突破", "电子游戏", "大奖赛"],
    items: [
      { name: "冰球突破豪华版", type: "slot", popularity: 95 },
      { name: "冰球突破经典", type: "slot", popularity: 88 },
      { name: "极速冰球", type: "arcade", popularity: 72 }
    ]
  },
  {
    id: "sec002",
    title: "体育竞技",
    slug: "sports-arena",
    tags: ["冰球", "足球", "篮球"],
    items: [
      { name: "冰球联赛", type: "live", popularity: 80 },
      { name: "冰球锦标赛", type: "event", popularity: 91 }
    ]
  },
  {
    id: "sec003",
    title: "新游推荐",
    slug: "new-releases",
    tags: ["冰球突破", "新游戏", "热门"],
    items: [
      { name: "冰球突破2025版", type: "slot", popularity: 97 },
      { name: "冰球大乱斗", type: "action", popularity: 85 }
    ]
  },
  {
    id: "sec004",
    title: "玩家社区",
    slug: "community",
    tags: ["分享", "攻略", "冰球突破"],
    items: [
      { name: "冰球突破技巧", type: "guide", popularity: 76 },
      { name: "高分排行榜", type: "leaderboard", popularity: 82 }
    ]
  }
];

function findSectionsByKeyword(keyword) {
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  for (const section of contentSections) {
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerKeyword));
    const titleMatch = section.title.toLowerCase().includes(lowerKeyword);
    const itemMatch = section.items.some(item => item.name.toLowerCase().includes(lowerKeyword));
    if (tagMatch || titleMatch || itemMatch) {
      results.push(section);
    }
  }
  return results;
}

function filterItemsByPopularity(minPopularity) {
  const filtered = [];
  for (const section of contentSections) {
    const matchedItems = section.items.filter(item => item.popularity >= minPopularity);
    if (matchedItems.length > 0) {
      filtered.push({
        sectionTitle: section.title,
        sectionId: section.id,
        items: matchedItems
      });
    }
  }
  return filtered;
}

function getSectionURL(section) {
  return `${siteConfig.baseURL}/${siteConfig.defaultCategory}/${section.slug}`;
}

function printContentMap() {
  console.log("站点内容地图 - " + siteConfig.baseURL);
  console.log("分区数量: " + contentSections.length);
  for (const section of contentSections) {
    console.log("  [" + section.id + "] " + section.title + " (" + section.tags.join(", ") + ")");
    for (const item of section.items) {
      console.log("    - " + item.name + " [热度: " + item.popularity + "]");
    }
  }
}

// 示例使用（不自动执行）
// printContentMap();
// let results = findSectionsByKeyword("冰球突破");
// console.log("搜索冰球突破结果:", results.length, "个分区");
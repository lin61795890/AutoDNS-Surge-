 let group = $surge.event.payload.group;
let selected = $surge.event.payload.selected;

if (group === "节点选择") {
  switch (selected) {
    case "🇭🇰 香港节点":
      $surge.setProxyGroup("智能DNS", "🇭🇰 香港DNS");
      break;
    case "🇯🇵 日本节点":
      $surge.setProxyGroup("智能DNS", "🇯🇵 日本DNS");
      break;
    case "🇺🇲 美国节点":
      $surge.setProxyGroup("智能DNS", "🇺🇲 美国DNS");
      break;
    case "🇸🇬 新加坡节点":
      $surge.setProxyGroup("智能DNS", "🇸🇬 新加坡DNS");
      break;
    case "🇨🇳 台湾节点":
      $surge.setProxyGroup("智能DNS", "🇨🇳 台湾DNS");
      break;
    default:
      $surge.setProxyGroup("智能DNS", "🇭🇰 香港DNS");
  }
}

$done();

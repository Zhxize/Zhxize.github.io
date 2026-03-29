// 大爷猎奇录 · 音像资料库数据
// 可根据需要增删修改条目

const MEDIA_CATALOG = [
    {
        name: "Q弹软糯",
        desc: "服了啊DS做这玩意还带个介绍。咱是留还是不留啊",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/Q弹软糯.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/Q弹软糯.jpg",
        type: "video"
    },
    {
        name: "《冯福》 (1)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E3%80%8A%E5%86%AF%E7%A6%8F%E3%80%8B%20(1).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "《冯福》 (2)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E3%80%8A%E5%86%AF%E7%A6%8F%E3%80%8B%20(2).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "《呐喊》",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E3%80%8A%E5%91%90%E5%96%8A%E3%80%8B.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E3%80%8A%E5%91%90%E5%96%8A%E3%80%8B.jpg",
        type: "video"
    },
    {
        name: "《彷徨》",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E3%80%8A%E5%BD%B7%E5%BE%A8%E3%80%8B.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E3%80%8A%E5%BD%B7%E5%BE%A8%E3%80%8B.jpg",
        type: "video"
    },
    {
        name: "三拜灯管",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%89%E6%8B%9C%E7%81%AF%E7%AE%A1.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%B8%89%E6%8B%9C%E7%81%AF%E7%AE%A1.jpg",
        type: "video"
    },
    {
        name: "上海 (1)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%20(1).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "上海 (2)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%20(2).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "上海 (3)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%20(3).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "上海 (4)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%20(4).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "上海 (5)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%20(5).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "上海外滩",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%E5%A4%96%E6%BB%A9.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%B8%8A%E6%B5%B7%E5%A4%96%E6%BB%A9.jpg",
        type: "video"
    },
    {
        name: "上海外滩2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B8%8A%E6%B5%B7%E5%A4%96%E6%BB%A92.0.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "义和团之歌",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B9%89%E5%92%8C%E5%9B%A2%E4%B9%8B%E6%AD%8C.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%B9%89%E5%92%8C%E5%9B%A2%E4%B9%8B%E6%AD%8C.jpg",
        type: "video"
    },
    {
        name: "义和团之歌2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B9%89%E5%92%8C%E5%9B%A2%E4%B9%8B%E6%AD%8C2.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%B9%89%E5%92%8C%E5%9B%A2%E4%B9%8B%E6%AD%8C2.0.jpg",
        type: "video"
    },
    {
        name: "义和团之歌3.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B9%89%E5%92%8C%E5%9B%A2%E4%B9%8B%E6%AD%8C3.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%B9%89%E5%92%8C%E5%9B%A2%E4%B9%8B%E6%AD%8C3.0.jpg",
        type: "video"
    },
    {
        name: "义和团团长",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B9%89%E5%92%8C%E5%9B%A2%E5%9B%A2%E9%95%BF.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "义和团团长2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%B9%89%E5%92%8C%E5%9B%A2%E5%9B%A2%E9%95%BF2.0.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "今朝有酒今朝醉",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%BB%8A%E6%9C%9D%E6%9C%89%E9%85%92%E4%BB%8A%E6%9C%9D%E9%86%89.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%BB%8A%E6%9C%9D%E6%9C%89%E9%85%92%E4%BB%8A%E6%9C%9D%E9%86%89.jpg",
        type: "video"
    },
    {
        name: "战绩",
        desc: "从左到右依次为校长办公室的打气筒 楼道里的广播音响 信息教室老师的鼠标 投影仪底座 报告厅凳子 食堂沙发",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%BB%8E%E5%B7%A6%E5%88%B0%E5%8F%B3%E4%BE%9D%E6%AC%A1%E4%B8%BA%E6%A0%A1%E9%95%BF%E5%8A%9E%E5%85%AC%E5%AE%A4%E7%9A%84%E6%89%93%E6%B0%94%E7%AD%92%20%E6%A5%BC%E9%81%93%E9%87%8C%E7%9A%84%E5%B9%BF%E6%92%AD%E9%9F%B3%E5%93%8D%20%E4%BF%A1%E6%81%AF%E6%95%99%E5%AE%A4%E8%80%81%E5%B8%88%E7%9A%84%E9%BC%A0%E6%A0%87%20%E6%8A%95%E5%BD%B1%E4%BB%AA%E5%BA%95%E5%BA%A7%20%E6%8A%A5%E5%91%8A%E5%8E%85%E5%87%B3%E5%AD%90%20%E9%A3%9F%E5%A0%82%E6%B2%99%E5%8F%91.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%BB%8E%E5%B7%A6%E5%88%B0%E5%8F%B3%E4%BE%9D%E6%AC%A1%E4%B8%BA%E6%A0%A1%E9%95%BF%E5%8A%9E%E5%85%AC%E5%AE%A4%E7%9A%84%E6%89%93%E6%B0%94%E7%AD%92%20%E6%A5%BC%E9%81%93%E9%87%8C%E7%9A%84%E5%B9%BF%E6%92%AD%E9%9F%B3%E5%93%8D%20%E4%BF%A1%E6%81%AF%E6%95%99%E5%AE%A4%E8%80%81%E5%B8%88%E7%9A%84%E9%BC%A0%E6%A0%87%20%E6%8A%95%E5%BD%B1%E4%BB%AA%E5%BA%95%E5%BA%A7%20%E6%8A%A5%E5%91%8A%E5%8E%85%E5%87%B3%E5%AD%90%20%E9%A3%9F%E5%A0%82%E6%B2%99%E5%8F%91.jpg",
        type: "video"
    },
    {
        name: "众人皆醉我独醒",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E4%BC%97%E4%BA%BA%E7%9A%86%E9%86%89%E6%88%91%E7%8B%AC%E9%86%92.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E4%BC%97%E4%BA%BA%E7%9A%86%E9%86%89%E6%88%91%E7%8B%AC%E9%86%92.jpg",
        type: "video"
    },
    {
        name: "做个文明中国“魔丸”",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%81%9A%E4%B8%AA%E6%96%87%E6%98%8E%E4%B8%AD%E5%9B%BD%E2%80%9C%E9%AD%94%E4%B8%B8%E2%80%9D.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%81%9A%E4%B8%AA%E6%96%87%E6%98%8E%E4%B8%AD%E5%9B%BD%E2%80%9C%E9%AD%94%E4%B8%B8%E2%80%9D.jpg",
        type: "video"
    },
    {
        name: "做个文明中国人",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%81%9A%E4%B8%AA%E6%96%87%E6%98%8E%E4%B8%AD%E5%9B%BD%E4%BA%BA.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%81%9A%E4%B8%AA%E6%96%87%E6%98%8E%E4%B8%AD%E5%9B%BD%E4%BA%BA.jpg",
        type: "video"
    },
    {
        name: "做个文明中国人2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%81%9A%E4%B8%AA%E6%96%87%E6%98%8E%E4%B8%AD%E5%9B%BD%E4%BA%BA2.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%81%9A%E4%B8%AA%E6%96%87%E6%98%8E%E4%B8%AD%E5%9B%BD%E4%BA%BA2.0.jpg",
        type: "video"
    },
    {
        name: "压力",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%8E%8B%E5%8A%9B.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%8E%8B%E5%8A%9B.jpg",
        type: "video"
    },
    {
        name: "古希腊掌管水龙头的神",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%8F%A4%E5%B8%8C%E8%85%8A%E6%8E%8C%E7%AE%A1%E6%B0%B4%E9%BE%99%E5%A4%B4%E7%9A%84%E7%A5%9E.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%8F%A4%E5%B8%8C%E8%85%8A%E6%8E%8C%E7%AE%A1%E6%B0%B4%E9%BE%99%E5%A4%B4%E7%9A%84%E7%A5%9E.jpg",
        type: "video"
    },
    {
        name: "咪咪咪咪咪咪咪",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA%E5%92%AA.jpg",
        type: "video"
    },
    {
        name: "哼我3.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%93%BC%E6%88%913.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%93%BC%E6%88%913.0.jpg",
        type: "video"
    },
    {
        name: "大爷“演唱会”",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%A4%A7%E7%88%B7%E2%80%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E2%80%9D.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%A4%A7%E7%88%B7%E2%80%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E2%80%9D.jpg",
        type: "video"
    },
    {
        name: "大爷演唱会2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%A4%A7%E7%88%B7%E6%BC%94%E5%94%B1%E4%BC%9A2.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%A4%A7%E7%88%B7%E6%BC%94%E5%94%B1%E4%BC%9A2.0.jpg",
        type: "video"
    },
    {
        name: "天口",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%A4%A9%E5%8F%A3.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%A4%A9%E5%8F%A3.jpg",
        type: "video"
    },
    {
        name: "天口2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%A4%A9%E5%8F%A32.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%A4%A9%E5%8F%A32.0.jpg",
        type: "video"
    },
    {
        name: "奇怪的姿势",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%A5%87%E6%80%AA%E7%9A%84%E5%A7%BF%E5%8A%BF.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%A5%87%E6%80%AA%E7%9A%84%E5%A7%BF%E5%8A%BF.jpg",
        type: "video"
    },
    {
        name: "如此生活三十年",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%A6%82%E6%AD%A4%E7%94%9F%E6%B4%BB%E4%B8%89%E5%8D%81%E5%B9%B4.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%A6%82%E6%AD%A4%E7%94%9F%E6%B4%BB%E4%B8%89%E5%8D%81%E5%B9%B4.jpg",
        type: "video"
    },
    {
        name: "定点打击",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%AE%9A%E7%82%B9%E6%89%93%E5%87%BB.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%AE%9A%E7%82%B9%E6%89%93%E5%87%BB.jpg",
        type: "video"
    },
    {
        name: "巨龙吐息",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%B7%A8%E9%BE%99%E5%90%90%E6%81%AF.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%B7%A8%E9%BE%99%E5%90%90%E6%81%AF.jpg",
        type: "video"
    },
    {
        name: "巨龙吐息2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E5%B7%A8%E9%BE%99%E5%90%90%E6%81%AF2.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E5%B7%A8%E9%BE%99%E5%90%90%E6%81%AF2.0.jpg",
        type: "video"
    },
    {
        name: "思考者",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%80%9D%E8%80%83%E8%80%85.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "我是高人",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%88%91%E6%98%AF%E9%AB%98%E4%BA%BA.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E6%88%91%E6%98%AF%E9%AB%98%E4%BA%BA.jpg",
        type: "video"
    },
    {
        name: "我要养人死！",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%88%91%E8%A6%81%E5%85%BB%E4%BA%BA%E6%AD%BB%EF%BC%81.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "扫地大爷",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%89%AB%E5%9C%B0%E5%A4%A7%E7%88%B7.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E6%89%AB%E5%9C%B0%E5%A4%A7%E7%88%B7.jpg",
        type: "video"
    },
    {
        name: "收集品",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%94%B6%E9%9B%86%E5%93%81.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "暗夜哥斯拉",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%9A%97%E5%A4%9C%E5%93%A5%E6%96%AF%E6%8B%89.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E6%9A%97%E5%A4%9C%E5%93%A5%E6%96%AF%E6%8B%89.jpg",
        type: "video"
    },
    {
        name: "朝我开炮！ (1)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%9C%9D%E6%88%91%E5%BC%80%E7%82%AE%EF%BC%81%20(1).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "朝我开炮！ (2)",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%9C%9D%E6%88%91%E5%BC%80%E7%82%AE%EF%BC%81%20(2).jpg",
        poster: "",
        type: "image"
    },
    {
        name: "横卧1.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%A8%AA%E5%8D%A71.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E6%A8%AA%E5%8D%A71.0.jpg",
        type: "video"
    },
    {
        name: "横卧2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E6%A8%AA%E5%8D%A72.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E6%A8%AA%E5%8D%A72.0.jpg",
        type: "video"
    },
    {
        name: "登峰造极",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%99%BB%E5%B3%B0%E9%80%A0%E6%9E%81.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E7%99%BB%E5%B3%B0%E9%80%A0%E6%9E%81.jpg",
        type: "video"
    },
    {
        name: "真·大爷演唱会",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%9C%9F%C2%B7%E5%A4%A7%E7%88%B7%E6%BC%94%E5%94%B1%E4%BC%9A.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E7%9C%9F%C2%B7%E5%A4%A7%E7%88%B7%E6%BC%94%E5%94%B1%E4%BC%9A.jpg",
        type: "video"
    },
    {
        name: "真·大爷演唱会2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%9C%9F%C2%B7%E5%A4%A7%E7%88%B7%E6%BC%94%E5%94%B1%E4%BC%9A2.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E7%9C%9F%C2%B7%E5%A4%A7%E7%88%B7%E6%BC%94%E5%94%B1%E4%BC%9A2.0.jpg",
        type: "video"
    },
    {
        name: "睡觉·神",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%9D%A1%E8%A7%89%C2%B7%E7%A5%9E.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E7%9D%A1%E8%A7%89%C2%B7%E7%A5%9E.jpg",
        type: "video"
    },
    {
        name: "立于不败之地",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%AB%8B%E4%BA%8E%E4%B8%8D%E8%B4%A5%E4%B9%8B%E5%9C%B0.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "立于不败之巅",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%AB%8B%E4%BA%8E%E4%B8%8D%E8%B4%A5%E4%B9%8B%E5%B7%85.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E7%AB%8B%E4%BA%8E%E4%B8%8D%E8%B4%A5%E4%B9%8B%E5%B7%85.jpg",
        type: "video"
    },
    {
        name: "立于教室之巅",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%AB%8B%E4%BA%8E%E6%95%99%E5%AE%A4%E4%B9%8B%E5%B7%85.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "美中厕所",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E7%BE%8E%E4%B8%AD%E5%8E%95%E6%89%80.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E7%BE%8E%E4%B8%AD%E5%8E%95%E6%89%80.jpg",
        type: "video"
    },
    {
        name: "聊天记录",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "聊天记录2",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%952.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "自行车",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%87%AA%E8%A1%8C%E8%BD%A6.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E8%87%AA%E8%A1%8C%E8%BD%A6.jpg",
        type: "video"
    },
    {
        name: "自行车2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%87%AA%E8%A1%8C%E8%BD%A62.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E8%87%AA%E8%A1%8C%E8%BD%A62.0.jpg",
        type: "video"
    },
    {
        name: "艺术就是（）",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%89%BA%E6%9C%AF%E5%B0%B1%E6%98%AF%EF%BC%88%EF%BC%89.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E8%89%BA%E6%9C%AF%E5%B0%B1%E6%98%AF%EF%BC%88%EF%BC%89.jpg",
        type: "video"
    },
    {
        name: "虫且",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%99%AB%E4%B8%94.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E8%99%AB%E4%B8%94.jpg",
        type: "video"
    },
    {
        name: "装修师傅",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%85.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "装修师傅",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%85.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%85.jpg",
        type: "video"
    },
    {
        name: "装修师傅2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%852.0.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "装修师傅3.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%853.0.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "装修师傅4.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%854.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%854.0.jpg",
        type: "video"
    },
    {
        name: "装修师傅5.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%855.0.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "装修师傅6.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E8%A3%85%E4%BF%AE%E5%B8%88%E5%82%856.0.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "遗像",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%81%97%E5%83%8F.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%81%97%E5%83%8F.jpg",
        type: "video"
    },
    {
        name: "酒神附体",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%85%92%E7%A5%9E%E9%99%84%E4%BD%93.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%85%92%E7%A5%9E%E9%99%84%E4%BD%93.jpg",
        type: "video"
    },
    {
        name: "醉卧沙场君莫笑",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%86%89%E5%8D%A7%E6%B2%99%E5%9C%BA%E5%90%9B%E8%8E%AB%E7%AC%91.jpg",
        poster: "",
        type: "image"
    },
    {
        name: "重力坍缩",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%87%8D%E5%8A%9B%E5%9D%8D%E7%BC%A9.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%87%8D%E5%8A%9B%E5%9D%8D%E7%BC%A9.jpg",
        type: "video"
    },
    {
        name: "食物",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%A3%9F%E7%89%A9.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%A3%9F%E7%89%A9.jpg",
        type: "video"
    },
    {
        name: "食物2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%A3%9F%E7%89%A92.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%A3%9F%E7%89%A92.0.jpg",
        type: "video"
    },
    {
        name: "高高在上",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%AB%98%E9%AB%98%E5%9C%A8%E4%B8%8A.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%AB%98%E9%AB%98%E5%9C%A8%E4%B8%8A.jpg",
        type: "video"
    },
    {
        name: "魔丸降世",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%AD%94%E4%B8%B8%E9%99%8D%E4%B8%96.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%AD%94%E4%B8%B8%E9%99%8D%E4%B8%96.jpg",
        type: "video"
    },
    {
        name: "魔丸降世2.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%AD%94%E4%B8%B8%E9%99%8D%E4%B8%962.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%AD%94%E4%B8%B8%E9%99%8D%E4%B8%962.0.jpg",
        type: "video"
    },
    {
        name: "魔丸降世3.0",
        desc: "待定",
        url: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E8%A7%86%E9%A2%91/%E9%AD%94%E4%B8%B8%E9%99%8D%E4%B8%963.0.mp4",
        poster: "/daye/%E5%A4%A7%E7%88%B7%E7%8C%8E%E5%A5%87%E5%BD%95/%E5%B0%81%E9%9D%A2/%E9%AD%94%E4%B8%B8%E9%99%8D%E4%B8%963.0.jpg",
        type: "video"
    }
];

// 导出到全局
if (typeof window !== 'undefined') {
    window.MEDIA_CATALOG = MEDIA_CATALOG;
}
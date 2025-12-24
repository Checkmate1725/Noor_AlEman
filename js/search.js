const data = [
  { title: "أذكار الصباح", link: "iqraa/AthkarAlsabah.html", keywords: ["صباح", "أذكار"] },
  { title: "أذكار المساء", link: "iqraa/AthkarAlmasaa.html", keywords: ["مساء", "أذكار"] },
  { title: "دعاء الاستيقاظ من النوم", link: "iqraa/WakingUpDua.html", keywords: ["استيقاظ", "نوم"] },
  { title: "دعاء اللبس", link: "iqraa/ClothesDua.html", keywords: ["لبس", "دعاء"] },
  { title: "دعاء الخروج من المنزل", link: "iqraa/LeavingHouseDua.html", keywords: ["دعاء","خروج", "منزل"] },
  { title: "دعاء دخول الأماكن", link: "iqraa/EnteringPlacesDua.html", keywords: ["دخول", "أماكن", "خروج"] },
  { title: "دعاء بعد الأذان", link: "iqraa/AthanDua.html", keywords: ["أذان","دعاء"] },
  { title: "أدعية ما قبل النوم", link: "iqraa/SleepDua.html", keywords: ["نوم","قبل"] },
  { title: "دعاء بعد رؤية كابوس", link: "iqraa/NightmareDua.html", keywords: ["كابوس","استيقاظ"] },
  { title: "أذكار صلاح الأهل", link: "iqraa/FamilyAthkar.html", keywords: ["أهل","صلاح","الأبناء","الأخوان"] },
  { title: "أذكار الحرم", link: "iqraa/HaramAthkar.html", keywords: ["حرم", "عمرة","طواف"] },
  { title: "أذكار الصلاة", link: "iqraa/AthkarAlsalah.html", keywords: ["صلاة"] },
  { title: "السور اليومية", link: "iqraa/DailySurah.html", keywords: ["سور", "قرآن","يومي"] }
];

function searchAthkar(query) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (!query.trim()) return;

  const q = query.trim();

  data
    .filter(item =>
      item.title.includes(q) ||
      item.keywords.some(k => k.includes(q))
    )
    .forEach(item => {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.title;
      results.appendChild(a);
    });
}

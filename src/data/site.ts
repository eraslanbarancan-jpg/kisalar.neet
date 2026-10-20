// Sitedeki tüm metinler burada. İçeriği güncellemek için yalnızca bu dosyayı düzenleyin.
// [DÜZENLE] ile işaretli alanlar yer tutucudur; yayına almadan önce doldurun.

export const site = {
  name: "Kısalar Yapım",
  legalName: "Kısalar Yapım Kültür ve Sanat Organizasyonları Ltd. Şti.",
  description:
    "Kısalar Yapım; Kısalar Festivali’ni düzenleyen, sahne sanatlarında kısa forma odaklanan İstanbul merkezli kültür ve sanat yapım şirketi.",
  email: "info@kisalarfestivali.org", // [DÜZENLE] şirket e-postası farklıysa değiştirin
  phone: "", // [DÜZENLE] boş bırakılırsa gösterilmez
  address: "Beşiktaş, İstanbul", // [DÜZENLE] açık adres
  instagram: "https://www.instagram.com/kisalarfestivali/",
  festivalUrl: "https://www.kisalarfestivali.org/",
};

export const hero = {
  title: "Kısa formun yapım evi",
  text: "Sahne sanatlarında kısa formun gücüne inanıyoruz. Kısalar Festivali’ni düzenliyor, sanatçılarla birlikte yeni prodüksiyonlar ve kurumsal işler üretiyoruz.",
};

export const about = [
  "Kısalar Yapım, İstanbul’da kurulmuş bağımsız bir kültür ve sanat yapım şirketi. 2025’ten bu yana tiyatro, dans ve fiziksel performans alanlarından, süresi 20 dakikayı aşmayan canlı performansları bir araya getiren Kısalar Festivali’ni düzenliyoruz.",
  "Festivalin dışında sahne prodüksiyonları, atölyeler ve kurumlar için yapım işleri üretiyoruz. Her işte aynı soruyu soruyoruz: Bir fikri en yalın ve en etkili hâliyle nasıl sahneye ya da ekrana taşırız?",
];

export const manifesto = [
  "Sahne sanatlarının; hoşgörünün, karşılıklı saygının ve iş birliğinin temelini oluşturduğu, çeşitliliğin var olduğu çoğulcu ve kapsayıcı bir toplum yaratmada hayati bir rol üstlendiğine inanıyoruz.",
  "Farklı anlatım biçimlerinin ve dillerinin gelişmesini desteklemek, sanatçıların yeni seyircilere ve alanın profesyonellerine ulaşmasına olanak tanımak istiyoruz.",
  "Kısa formun da uzun kadar etkili olabileceğine inanıyoruz.",
];

export const history = [
  {
    year: "2025",
    title: "Kısalar Festivali ’25",
    text: "İlk festival, 12–15 Haziran’da DasDas sahnesinde gerçekleşti.",
    stats: [
      { value: "142", label: "başvuru" },
      { value: "62", label: "performans" },
      { value: "4", label: "gün" },
    ],
  },
  {
    year: "2026",
    title: "Kısalar Festivali ’26",
    text: "İkinci edisyon, 18–21 Haziran’da DasDas Ataşehir’de üç sahnede gerçekleşti.",
    stats: [
      { value: "245", label: "başvuru" },
      { value: "52", label: "performans" },
      { value: "4.000", label: "seyirci" },
    ],
  },
  {
    year: "2027",
    title: "Kısalar Festivali ’27",
    text: "Açık çağrı ve tarihler yakında duyurulacak.",
    stats: [],
  },
];

export const services = [
  {
    title: "Festival",
    text: "Kısalar Festivali’nin küratörlüğü, programlaması ve yapımı: açık çağrıdan sahneye kadar.",
  },
  {
    title: "Sahne prodüksiyonu",
    text: "Festivalde tanıştığımız sanatçılarla kendi oyunlarımızı ve performanslarımızı geliştiriyoruz.",
  },
  {
    title: "Atölye ve eğitim",
    text: "Sanatçıların üretim süreçlerine yıl boyunca alan açan atölyeler, söyleşiler ve paneller.",
  },
  {
    title: "Kurumsal yapım",
    text: "Kurumlar için tanıtım filmi, video ve sahne işleri; fikirden teslimata.",
  },
];

export const projects = [
  {
    year: "2026",
    title: "Kısalar Festivali ’26",
    place: "DasDas Ataşehir, İstanbul",
    text: "245 başvuru arasından seçilen 52 kısa performans, söyleşiler, sanatçı buluşmaları ve atölyeler.",
    href: "https://www.kisalarfestivali.org/festival/2026",
  },
  {
    year: "2025",
    title: "Üç Kısa",
    place: "Kısalar / DasDas",
    text: "Festivalden seçilen, üç kadın karakterin öyküsünü özgürlük kavramı etrafında buluşturan üç kısa oyun.",
    href: "https://www.kisalarfestivali.org/festival/2025",
  },
  {
    year: "2025",
    title: "Kısalar Festivali ’25",
    place: "DasDas, İstanbul",
    text: "Beş tema ekseninde 62 performansla gerçekleşen ilk festival.",
    href: "https://www.kisalarfestivali.org/festival/2025",
  },
  // [DÜZENLE] Yayınlanabilir kurumsal işleri buraya ekleyin.
];

export const future =
  "Önümüzdeki dönemde hedefimiz, festival deneyimini yıl boyu süren bir üretim yapısına dönüştürmek: festivali her yıl düzenli olarak sürdürmek, atölye ve eğitimlerle sanatçıların üretim süreçlerine alan açmak, 2026’da tanıştığımız sanatçılarla kendi prodüksiyonlarımızı geliştirmek ve seyirciyi merkeze alan yeni sahne deneyimleri yaratmak.";

// [DÜZENLE] Ekip üyelerini girin. Liste boşsa bölüm gösterilmez.
export const team: { name: string; role: string }[] = [
  { name: "Baran", role: "Kurucu" }, // [DÜZENLE] soyadı ve unvan
  { name: "Ad Soyad", role: "Görev" },
  { name: "Ad Soyad", role: "Görev" },
];

// [DÜZENLE] Paydaş ve iş birliklerini ekleyin.
export const partners = ["DasDas"];

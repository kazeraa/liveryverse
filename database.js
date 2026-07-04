const DATABASE = {
  garage: [
    {
      id: "stream-st",
      name: "Stream ST",
      desc: "Koleksi livery Stream ST.",
      cover: "https://files.catbox.moe/prgj05.jpg",
      liveries: [
        "https://www.mediafire.com/view/y4hldutahfjebdn/1778550203220.png/file",
        "https://www.mediafire.com/view/dbipl79cdxc8d9q/1778513699772.png/file",
        "https://www.mediafire.com/view/gn293fq98mg84kl/1778504557475.png/file",
        "https://www.mediafire.com/view/57ul66no6h10ie4/1778504545997.png/file",
        "https://www.mediafire.com/view/1634yw277mxd3bc/1778500928130.png/file",
        "https://www.mediafire.com/view/mxp0jvawoamv0qj/1778550648450.png/file",
        "https://www.mediafire.com/view/1xsi0woyoqhzcno/1778564191034.png/file",
        "https://www.mediafire.com/view/a4pzp9k0spd8mcc/1778564205059.png/file",
        "https://www.mediafire.com/view/plk6c2awiytxzhk/1778636483440.png/file",
        "https://www.mediafire.com/view/tpmz7oj6ys7xf26/1778636502401.png/file",
        "https://www.mediafire.com/view/rp69qxpnzi7wwme/1778671956701.png/file",
        "https://www.mediafire.com/view/a86hm4y5gxlcy70/1778672875763.png/file",
        "https://www.mediafire.com/view/8bv6bvd2bpg6p05/1778743912960.png/file",
        "https://www.mediafire.com/view/it8r8f1jgmxicue/1778743913051.png/file",
        "https://www.mediafire.com/view/bod1r0jjxaadd8q/1778835603419.png/file",
        "https://www.mediafire.com/view/663w83a75ap3oul/1778835870116.png/file",
        "https://www.mediafire.com/view/3v2kl8s5tgivpqi/1778835870178.png/file",
        "https://www.mediafire.com/view/ezoolozo9jhgljc/1778838645512.png/file",
        "https://www.mediafire.com/view/e64vo5cock4n4zh/1778838645576.png/file",
        "https://www.mediafire.com/view/2vnckfv6h60lid8/1778890399352.png/file",
        "https://www.mediafire.com/view/4jxt3hoi47xkqrw/1778890399408.png/file",
        "https://www.mediafire.com/view/a3kp7kfu527uyxn/1778892977993.png/file",
        "https://www.mediafire.com/view/619ha7yzx0hlv0f/1778900968438.png/file",
        "https://www.mediafire.com/view/dezn91xl6y4g0qq/1778902320733.png/file",
        "https://www.mediafire.com/view/g2oyd5dcdco7upe/1778995885353.png/file",
        "https://www.mediafire.com/view/98trtxx0s0pj22h/1778995885420.png/file",
        "https://www.mediafire.com/view/4inihgg3hbh0u7n/1779106752480.png/file",
        "https://www.mediafire.com/view/np45oxazeq8hap1/1779536941449.png/file",
        "https://www.mediafire.com/view/5z8tis14usywu95/1779537002125.png/file",
        "https://www.mediafire.com/view/r3smkqss9leep97/1779880902234.png/file",
        "https://www.mediafire.com/view/e6dowg5bh4cczy7/1779931862996.png/file",
        "https://www.mediafire.com/view/bvxwsl1pmnrlpzs/1780634976916.png/file",
        "https://www.mediafire.com/view/ws1ky7b5z1fz232/1780635171285.png/file",
        "https://www.mediafire.com/view/u2rrbncvbkzoer0/1780635174440.png/file",
        "https://www.mediafire.com/view/j2toangx2jc77y1/1780635174493.png/file",
        "https://www.mediafire.com/view/6tpcq6ndi61g05b/1780635174555.png/file",
        "https://www.mediafire.com/view/8nkj7r067qdh6ak/1782398152397.png/file",
        "https://www.mediafire.com/view/dw0uwskoxs79o4w/1782475391706.png/file",
        "https://www.mediafire.com/view/x23km6tlkxsjfdx/20260630_161048.png/file",
        "https://www.mediafire.com/view/wh4104fhvg26y22/stream_8x4.png/file"
      ]
      .map((link, index) => ({
        id: `stream-st-${index + 1}`,
        name: `Stream ST ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Stream ST",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
      }))
    },

    {
      id: "antares",
      name: "Antares",
      desc: "Koleksi livery Antares.",
      cover: "https://files.catbox.moe/g5nidm.jpg",
      liveries: [
        "https://www.mediafire.com/view/imsctahsakwq9o5/1778741701326.png/file",
        "https://www.mediafire.com/view/i4s0zaim4mjtfo9/1778741701242.png/file",
        "https://www.mediafire.com/view/60w6jzt9dn44bcd/1778741701160.png/file",
        "https://www.mediafire.com/view/d20vrwfidrwdi3s/1778735798889.png/file",
        "https://www.mediafire.com/view/vrn107yujqqm02h/1778735747716.png/file",
        "https://www.mediafire.com/view/v3f61mcyinv1px3/1778741701429.png/file",
        "https://www.mediafire.com/view/bo39akxwk87sq8w/1778741701385.png/file",
      ]
      .map((link, index) => ({
        id: `Antares-${index + 1}`,
        name: `Antares ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Antares",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
      }))
    },

    {
      id: "dawn",
      name: "Dawn",
      desc: "Koleksi livery Dawn.",
      cover: "https://files.catbox.moe/12t85u.jpg",
      liveries: [
        "https://www.mediafire.com/view/21uqvqs5k99yze7/1778491745779.png/file",
        "https://www.mediafire.com/view/u068rqf9yz4m9uf/1778491879598.png/file",
        "https://www.mediafire.com/view/t6uvekg9v6kermd/1778497890704.png/file",
        "https://www.mediafire.com/view/1hrgb56pgjq8aiz/1778497903778.png/file",
        "https://www.mediafire.com/view/pngr404xz6hh504/1778511633844.png/file",
        "https://www.mediafire.com/view/ig7r9mrcfcegaho/1778581484830.png/file",
        "https://www.mediafire.com/view/ilclwvdlp64mnlv/1778581517682.png/file",
        "https://www.mediafire.com/view/uksaszal9ib47tz/1778636464046.png/file",
        "https://www.mediafire.com/view/5gjcrv3jeh1k3w3/1778743913144.png/file",
        "https://www.mediafire.com/view/g9n5f4mn6228hbo/1778835870233.png/file",
        "https://www.mediafire.com/view/o8mzfmfpytlcnuo/1779081406893.png/file",
        "https://www.mediafire.com/view/m9ezk0pze7jvy0e/1779365955578.png/file",
        ]
        .map((link, index) => ({
        id: `dawn-${index + 1}`,
        name: `Dawn ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "DAWN",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
        }))
    },

    {
      id: "volcano",
      name: "Volcano",
      desc: "Koleksi livery Volcano.",
      cover: "https://files.catbox.moe/blj4dg.jpg",
      liveries: [
        "https://www.mediafire.com/view/r7riv8opqngzxwu/1778493087041.png/file",
        "https://www.mediafire.com/view/dp0ab8pv9n8ct1t/1778496251283.png/file",
        "https://www.mediafire.com/view/j6vuj128ldrpdq3/1778512135148.png/file",
        "https://www.mediafire.com/view/twpx7b1xnwfrpfe/1778515144954.png/file",
        "https://www.mediafire.com/view/3lxgu0dpwgfi64m/1778581456481.png/file",
        "https://www.mediafire.com/view/ichp6g2bntj3q46/1778581470275.png/file",
        "https://www.mediafire.com/view/5z74256r5wl86y3/1778636377332.png/file",
        "https://www.mediafire.com/view/d8aeh17hcc7sbnt/1778636396430.png/file",
        "https://www.mediafire.com/view/694morbdqt2xo4g/1778636427047.png/file",
        "https://www.mediafire.com/view/6rvvtbkzpngi3hv/1779536982434.png/file",
        "https://www.mediafire.com/view/8h94rw8n3pvdw38/1780635174361.png/file",
        ]
        .map((link, index) => ({
        id: `volcano-${index + 1}`,
        name: `Volcano ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Volcano",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
        }))
    },

    {
      id: "stream-rt-legend-1995",
      name: "Stream RT Legend 1995",
      desc: "Koleksi livery Stream RT Legend 1995.",
      cover: "https://files.catbox.moe/upc9bq.jpg",
      liveries: [
        "https://www.mediafire.com/view/rnb0m3ygy3qhp9b/1778584922630.png/file",
        "https://www.mediafire.com/view/ga4apl817bt0pt2/1778636330530.png/file",
        "https://www.mediafire.com/view/sv6vj0klhbu17g5/1778636347402.png/file",
        "https://www.mediafire.com/view/khqcpu4nedh3xes/1778636851415.png/file",
        "https://www.mediafire.com/view/qu0mwd4yn82pix4/1778648228512.png/file",
        "https://www.mediafire.com/view/gb0lng1ifywvg6y/1779111835574.png/file",
        "https://www.mediafire.com/view/wmb0ahfqbgbepd2/1779111835674.png/file",
        "https://www.mediafire.com/view/jhhfiadu7ju5s3x/1779118152662.png/file",
        "https://www.mediafire.com/view/74ae2a1ga4ukd2c/1778892851804.png/file",
        "https://www.mediafire.com/view/1emqp2ud2pjh8as/1779069055105.png/file",
        ]
        .map((link, index) => ({
        id: `stream-rt-legend-1995-${index + 1}`,
        name: `Stream RT Legend 1995  ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Stream RT Legend 1995",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
        }))
    },

    {
      id: "moon-tha",
      name: "Moon THA",
      desc: "Koleksi livery Moon THA.",
      cover: "https://files.catbox.moe/7n4thq.jpg",
      liveries: [
        "https://www.mediafire.com/view/g8a9rn6utswqvdf/1782467407630.png/file",
        ]
        .map((link, index) => ({
        id: `moon-tha-${index + 1}`,
        name: `Moon THA ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Moon THA",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
        }))
    },

    {
      id: "moon-thx",
      name: "Moon THX",
      desc: "Koleksi livery Moon THX.",
      cover: "https://files.catbox.moe/s81myj.jpg",
      liveries: [
        "https://www.mediafire.com/folder/m55w6s9zcgg6c/Moon+Thx",
        ]
        .map((link, index) => ({
        id: `moon-thx-${index + 1}`,
        name: `Moon THX ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Moon THX",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
        }))
    },

    {
      id:"Stream RT",
      name: "Stream RT",
      desc: "Koleksi livery Stream RT",
      cover: "https://files.catbox.moe/0d1i7q.jpg",
      liveries: [
        "https://www.mediafire.com/view/jw49g7o61zvkdxi/1779537017764.png/file",
        ]
        .map((link, index) => ({
        id: `Stream RT-${index + 1}`,
        name: `Stream RT ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Stream RT",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
        }))
    },
  
    {
      id: "Fiora",
      name: "Fiora Fi-Man",
      desc: "Koleksi livery Fiora Fi-Man",
      cover: "https://files.catbox.moe/dnmdsv.jpg",
      liveries: [
        "https://www.mediafire.com/view/91dktzsy3kir6u2/1778581505419.png/file",
        ]
        .map((link, index) => ({
        id: `Fiora-${index + 1}`,
        name: `Fiora Fi-Man ${index + 1}`,
        creator: CONFIG.creatorDefault,
        category: "Fiora Fi-Man",
        version: "1.0",
        size: "-",
        preview: "",
        download: link
        }))
    },
  ]
};
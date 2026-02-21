const state = {
    score: 0,
    coins: 0,
    clickPower: 1,
    cps: 0, // Clicks per second (auto)
    inventory: [], // Owned cards
    level: 0,
    xp: 0
};

// Config: Upgrades
const upgrades = [
    {
        id: 'lightstick',
        name: 'Official Lightstick',
        baseCost: 50,
        cps: 0,
        clickPower: 1,
        count: 0,
        desc: "Cheering makes you stronger (+1 Click)"
    },
    {
        id: 'bubble_sub',
        name: 'Bubble Subscription',
        baseCost: 400,
        cps: 0,
        clickPower: 1,
        count: 0,
        desc: "Daily messages motivation (+1 Click Power)"
    },
    {
        id: 'streaming_party',
        name: 'Streaming Party',
        baseCost: 2000,
        cps: 0,
        clickPower: 3,
        count: 0,
        desc: "Mass streaming power (+3 Click Power)"
    },
    {
        id: 'fansite_camera',
        name: 'Fansite Camera',
        baseCost: 8000,
        cps: 0,
        clickPower: 12,
        count: 0,
        desc: "High quality focus (+12 Click Power)"
    },
    {
        id: 'world_tour_vip',
        name: 'World Tour VIP',
        baseCost: 35000,
        cps: 0,
        clickPower: 50,
        count: 0,
        desc: "Soundcheck energy (+50 Click Power)"
    },
    {
        id: 'kpop_agency',
        name: 'K-Pop Agency',
        baseCost: 200000,
        cps: 0,
        clickPower: 250,
        count: 0,
        desc: "Manage the industry (+250 Click Power)"
    }
];

const premiumUpgrades = [
    {
        id: 'perfect_all_kill',
        name: 'Perfect All-Kill',
        baseCost: 3000,
        cps: 1,
        clickPower: 0,
        costMult: 1.5,
        count: 0,
        desc: "Chart domination (+1 ❤️/sec)"
    },
    {
        id: 'stylist',
        name: 'Head Stylist',
        baseCost: 8000,
        cps: 3,
        clickPower: 0,
        costMult: 1.5,
        count: 0,
        desc: "Style team working passively (+3 ❤️/sec)"
    },
    {
        id: 'viral_marketing',
        name: 'Viral Marketing',
        baseCost: 20000,
        cps: 10,
        clickPower: 0,
        costMult: 1.5,
        count: 0,
        desc: "Huge popularity boost (+10 ❤️/sec)"
    }
];

// Config: Gacha Cards (Real Idols)
// Groups: BTS, Blackpink, IVE, Stray Kids, Aespa, NewJeans, Seventeen, Twice
const cardPool = [
    // --- BLACKPINK (F) ---
    { id: 'idol_jennie', name: 'Jennie (BP)', rarity: 'Legendary', group: 'Blackpink', gender: 'F', img: 'assets/idols/idol_jennie.jpeg' },
    { id: 'idol_lisa', name: 'Lisa (BP)', rarity: 'Secret', group: 'Blackpink', gender: 'F', img: 'assets/idols/idol_lisa.jpeg' },
    { id: 'idol_rose', name: 'Rosé (BP)', rarity: 'Epic', group: 'Blackpink', gender: 'F', img: 'assets/idols/idol_rose.jpeg' },
    { id: 'idol_jisoo', name: 'Jisoo (BP)', rarity: 'Rare', group: 'Blackpink', gender: 'F', img: 'assets/idols/idol_jisoo.jpeg' },

    // --- BTS (M) ---
    { id: 'idol_rm', name: 'RM (BTS)', rarity: 'Rare', group: 'BTS', gender: 'M', img: 'assets/idols/idol_rm.jpeg' },
    { id: 'idol_jin', name: 'Jin (BTS)', rarity: 'Rare', group: 'BTS', gender: 'M', img: 'assets/idols/idol_jin.png' },
    { id: 'idol_suga', name: 'Suga (BTS)', rarity: 'Epic', group: 'BTS', gender: 'M', img: 'assets/idols/idol_suga.jpg' },
    { id: 'idol_jhope', name: 'J-Hope (BTS)', rarity: 'Rare', group: 'BTS', gender: 'M', img: 'assets/idols/idol_jhope.jpg' },
    { id: 'idol_jimin', name: 'Jimin (BTS)', rarity: 'Epic', group: 'BTS', gender: 'M', img: 'assets/idols/idol_jimin.jpg' },
    { id: 'idol_v', name: 'V (BTS)', rarity: 'Secret', group: 'BTS', gender: 'M', img: 'assets/idols/idol_v.jpg' },
    { id: 'idol_jungkook', name: 'Jungkook (BTS)', rarity: 'Legendary', group: 'BTS', gender: 'M', img: 'assets/idols/idol_jungkook.png' },

    // --- STRAY KIDS (M) ---
    { id: 'idol_bangchan', name: 'Bang Chan (SKZ)', rarity: 'Epic', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_bangchan.png' },
    { id: 'idol_leeknow', name: 'Lee Know (SKZ)', rarity: 'Rare', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_leeknow.jpg' },
    { id: 'idol_changbin', name: 'Changbin (SKZ)', rarity: 'Common', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_changbin.jpg' },
    { id: 'idol_hyunjin', name: 'Hyunjin (SKZ)', rarity: 'Legendary', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_hyunjin.jpg' },
    { id: 'idol_han', name: 'Han (SKZ)', rarity: 'Epic', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_han.jpg' },
    { id: 'idol_felix', name: 'Felix (SKZ)', rarity: 'Secret', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_felix.png' },
    { id: 'idol_seungmin', name: 'Seungmin (SKZ)', rarity: 'Common', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_seungmin.jpg' },
    { id: 'idol_in', name: 'I.N (SKZ)', rarity: 'Common', group: 'Stray Kids', gender: 'M', img: 'assets/idols/idol_in.png' },

    // --- TWICE (F) ---
    { id: 'idol_nayeon', name: 'Nayeon (Twice)', rarity: 'Legendary', group: 'Twice', gender: 'F', img: 'assets/idols/idol_nayeon.jpg' },
    { id: 'idol_jeongyeon', name: 'Jeongyeon (Twice)', rarity: 'Common', group: 'Twice', gender: 'F', img: 'assets/idols/idol_jeongyeon.jpg' },
    { id: 'idol_momo', name: 'Momo (Twice)', rarity: 'Epic', group: 'Twice', gender: 'F', img: 'assets/idols/idol_momo.jpg' },
    { id: 'idol_sana', name: 'Sana (Twice)', rarity: 'Secret', group: 'Twice', gender: 'F', img: 'assets/idols/idol_sana.jpg' },
    { id: 'idol_jihyo', name: 'Jihyo (Twice)', rarity: 'Epic', group: 'Twice', gender: 'F', img: 'assets/idols/idol_jihyo.jpg' },
    { id: 'idol_mina', name: 'Mina (Twice)', rarity: 'Rare', group: 'Twice', gender: 'F', img: 'assets/idols/idol_mina.jpg' },
    { id: 'idol_dahyun', name: 'Dahyun (Twice)', rarity: 'Rare', group: 'Twice', gender: 'F', img: 'assets/idols/idol_dahyun.jpg' },
    { id: 'idol_chaeyoung', name: 'Chaeyoung (Twice)', rarity: 'Common', group: 'Twice', gender: 'F', img: 'assets/idols/idol_chaeyoung.jpg' },
    { id: 'idol_tzuyu', name: 'Tzuyu (Twice)', rarity: 'Epic', group: 'Twice', gender: 'F', img: 'assets/idols/idol_tzuyu.jpg' },

    // --- AESPA (F) ---
    { id: 'idol_karina', name: 'Karina (Aespa)', rarity: 'Legendary', group: 'Aespa', gender: 'F', img: 'assets/idols/idol_karina.png' },
    { id: 'idol_giselle', name: 'Giselle (Aespa)', rarity: 'Common', group: 'Aespa', gender: 'F', img: 'assets/idols/idol_giselle.jpg' },
    { id: 'idol_winter', name: 'Winter (Aespa)', rarity: 'Epic', group: 'Aespa', gender: 'F', img: 'assets/idols/idol_winter.jpg' },
    { id: 'idol_ningning', name: 'Ningning (Aespa)', rarity: 'Rare', group: 'Aespa', gender: 'F', img: 'assets/idols/idol_ningning.jpg' },

    // --- BABYMONSTER (F) ---
    { id: 'idol_ruka', name: 'Ruka (BabyMonster)', rarity: 'Legendary', group: 'BabyMonster', gender: 'F', img: 'assets/idols/idol_ruka.jpg' },
    { id: 'idol_pharita', name: 'Pharita (BabyMonster)', rarity: 'Epic', group: 'BabyMonster', gender: 'F', img: 'assets/idols/idol_pharita.jpg' },
    { id: 'idol_asa', name: 'Asa (BabyMonster)', rarity: 'Epic', group: 'BabyMonster', gender: 'F', img: 'assets/idols/idol_asa.jpg' },
    { id: 'idol_ahyeon', name: 'Ahyeon (BabyMonster)', rarity: 'Secret', group: 'BabyMonster', gender: 'F', img: 'assets/idols/idol_ahyeon.jpg' },
    { id: 'idol_rami', name: 'Rami (BabyMonster)', rarity: 'Rare', group: 'BabyMonster', gender: 'F', img: 'assets/idols/idol_rami.jpg' },
    { id: 'idol_rora', name: 'Rora (BabyMonster)', rarity: 'Rare', group: 'BabyMonster', gender: 'F', img: 'assets/idols/idol_rora.jpg' },
    { id: 'idol_chiquita', name: 'Chiquita (BabyMonster)', rarity: 'Legendary', group: 'BabyMonster', gender: 'F', img: 'assets/idols/idol_chiquita.jpg' },

    // --- IVE (F) ---
    { id: 'idol_wonyoung', name: 'Wonyoung (IVE)', rarity: 'Golden', group: 'IVE', gender: 'F', img: 'assets/idols/idol_wonyoung.jpg' },
    { id: 'idol_yujin', name: 'Yujin (IVE)', rarity: 'Epic', group: 'IVE', gender: 'F', img: 'assets/idols/idol_yujin.png' },
    { id: 'idol_gaeul', name: 'Gaeul (IVE)', rarity: 'Rare', group: 'IVE', gender: 'F', img: 'assets/idols/idol_gaeul.png' },
    { id: 'idol_rei', name: 'Rei (IVE)', rarity: 'Rare', group: 'IVE', gender: 'F', img: 'assets/idols/idol_rei.png' },
    { id: 'idol_liz', name: 'Liz (IVE)', rarity: 'Secret', group: 'IVE', gender: 'F', img: 'assets/idols/idol_liz.jpg' },
    { id: 'idol_leeseo', name: 'Leeseo (IVE)', rarity: 'Common', group: 'IVE', gender: 'F', img: 'assets/idols/idol_leeseo.png' },

    // --- LE SSERAFIM (F) ---
    { id: 'idol_chaewon', name: 'Kim Chaewon (LSF)', rarity: 'Golden', group: 'Le Sserafim', gender: 'F', img: 'assets/idols/idol_chaewon.jpg' },
    { id: 'idol_sakura', name: 'Sakura (LSF)', rarity: 'Legendary', group: 'Le Sserafim', gender: 'F', img: 'assets/idols/idol_sakura.jpg' },
    { id: 'idol_yunjin', name: 'Huh Yunjin (LSF)', rarity: 'Rare', group: 'Le Sserafim', gender: 'F', img: 'assets/idols/idol_yunjin.jpg' },
    { id: 'idol_kazuha', name: 'Kazuha (LSF)', rarity: 'Secret', group: 'Le Sserafim', gender: 'F', img: 'assets/idols/idol_kazuha.jpg' },
    { id: 'idol_eunchae', name: 'Hong Eunchae (LSF)', rarity: 'Rare', group: 'Le Sserafim', gender: 'F', img: 'assets/idols/idol_eunchae.jpg' },

    // --- NEWJEANS (F) ---
    { id: 'idol_minji', name: 'Minji (NewJeans)', rarity: 'Legendary', group: 'NewJeans', gender: 'F', img: 'assets/idols/idol_minji.jpg' },
    { id: 'idol_hanni', name: 'Hanni (NewJeans)', rarity: 'Rare', group: 'NewJeans', gender: 'F', img: 'assets/idols/idol_hanni.jpg' },
    { id: 'idol_danielle', name: 'Danielle (NewJeans)', rarity: 'Epic', group: 'NewJeans', gender: 'F', img: 'assets/idols/idol_danielle.png' },
    { id: 'idol_haerin', name: 'Haerin (NewJeans)', rarity: 'Epic', group: 'NewJeans', gender: 'F', img: 'assets/idols/idol_haerin.jpg' },
    { id: 'idol_hyein', name: 'Hyein (NewJeans)', rarity: 'Rare', group: 'NewJeans', gender: 'F', img: 'assets/idols/idol_hyein.png' },


    // --- KATSEYE (F) ---
    { id: 'idol_manon', name: 'Manon (Katseye)', rarity: 'Secret', group: 'Katseye', gender: 'F', img: 'assets/idols/idol_manon.jpg' },
    { id: 'idol_sophia', name: 'Sophia (Katseye)', rarity: 'Legendary', group: 'Katseye', gender: 'F', img: 'assets/idols/idol_sophia.jpg' },
    { id: 'idol_lara', name: 'Lara (Katseye)', rarity: 'Legendary', group: 'Katseye', gender: 'F', img: 'assets/idols/idol_lara.jpg' },
    { id: 'idol_daniela', name: 'Daniela (Katseye)', rarity: 'Epic', group: 'Katseye', gender: 'F', img: 'assets/idols/idol_daniela.jpg' },
    { id: 'idol_megan', name: 'Megan (Katseye)', rarity: 'Rare', group: 'Katseye', gender: 'F', img: 'assets/idols/idol_megan.jpg' },
    { id: 'idol_yoonchae', name: 'Yoonchae (Katseye)', rarity: 'Common', group: 'Katseye', gender: 'F', img: 'assets/idols/idol_yoonchae.jpg' },


    // --- ITZY (F) ---
    { id: 'idol_yeji', name: 'Yeji (Itzy)', rarity: 'Legendary', group: 'Itzy', gender: 'F', img: 'assets/idols/idol_yeji.jpg' },
    { id: 'idol_lia', name: 'Lia (Itzy)', rarity: 'Rare', group: 'Itzy', gender: 'F', img: 'assets/idols/idol_lia.png' },
    { id: 'idol_ryujin', name: 'Ryujin (Itzy)', rarity: 'Secret', group: 'Itzy', gender: 'F', img: 'assets/idols/idol_ryujin.jpg' },
    { id: 'idol_chaeryeong', name: 'Chaeryeong (Itzy)', rarity: 'Epic', group: 'Itzy', gender: 'F', img: 'assets/idols/idol_chaeryeong.png' },
    { id: 'idol_yuna', name: 'Yuna (Itzy)', rarity: 'Common', group: 'Itzy', gender: 'F', img: 'assets/idols/idol_yuna.jpg' },

    // --- ILLIT (F) ---
    { id: 'idol_yunah', name: 'Yunah (ILLIT)', rarity: 'Epic', group: 'ILLIT', gender: 'F', img: 'assets/idols/idol_yunah.jpg' },
    { id: 'idol_minju', name: 'Minju (ILLIT)', rarity: 'Rare', group: 'ILLIT', gender: 'F', img: 'assets/idols/idol_minju.png' },
    { id: 'idol_moka', name: 'Moka (ILLIT)', rarity: 'Secret', group: 'ILLIT', gender: 'F', img: 'assets/idols/idol_moka.jpg' },
    { id: 'idol_wonhee', name: 'Wonhee (ILLIT)', rarity: 'Legendary', group: 'ILLIT', gender: 'F', img: 'assets/idols/idol_wonhee.jpg' },
    { id: 'idol_iroha', name: 'Iroha (ILLIT)', rarity: 'Common', group: 'ILLIT', gender: 'F', img: 'assets/idols/idol_iroha.jpg' },

    // --- CORTIS (M) ---
    { id: 'idol_martin', name: 'Martin (Cortis)', rarity: 'Legendary', group: 'Cortis', gender: 'M', img: 'assets/idols/idol_martin.jpg' },
    { id: 'idol_james', name: 'James (Cortis)', rarity: 'Epic', group: 'Cortis', gender: 'M', img: 'assets/idols/idol_james.jpg' },
    { id: 'idol_juhoon', name: 'Juhoon (Cortis)', rarity: 'Common', group: 'Cortis', gender: 'M', img: 'assets/idols/idol_juhoon.jpg' },
    { id: 'idol_seonghyeon', name: 'Seonghyeon (Cortis)', rarity: 'Rare', group: 'Cortis', gender: 'M', img: 'assets/idols/idol_seonghyeon.jpg' },
    { id: 'idol_keonho', name: 'Keonho (Cortis)', rarity: 'Secret', group: 'Cortis', gender: 'M', img: 'assets/idols/idol_keonho.jpg' },

    // --- ENHYPEN (M) ---
    { id: 'idol_heeseung', name: 'Heeseung (ENHYPEN)', rarity: 'Legendary', group: 'ENHYPEN', gender: 'M', img: 'assets/idols/idol_heeseung.jpg' },
    { id: 'idol_jay', name: 'Jay (ENHYPEN)', rarity: 'Epic', group: 'ENHYPEN', gender: 'M', img: 'assets/idols/idol_jay.jpg' },
    { id: 'idol_jaeyun', name: 'Jaeyun (ENHYPEN)', rarity: 'Secret', group: 'ENHYPEN', gender: 'M', img: 'assets/idols/idol_jaeyun.jpg' },
    { id: 'idol_sunghoon', name: 'Sunghoon (ENHYPEN)', rarity: 'Epic', group: 'ENHYPEN', gender: 'M', img: 'assets/idols/idol_sunghoon.jpg' },
    { id: 'idol_sunoo', name: 'Sunoo (ENHYPEN)', rarity: 'Rare', group: 'ENHYPEN', gender: 'M', img: 'assets/idols/idol_sunoo.jpg' },
    { id: 'idol_jungwon', name: 'Jungwon (ENHYPEN)', rarity: 'Epic', group: 'ENHYPEN', gender: 'M', img: 'assets/idols/idol_jungwon.jpg' },
    { id: 'idol_riki', name: 'Ri-ki (ENHYPEN)', rarity: 'Rare', group: 'ENHYPEN', gender: 'M', img: 'assets/idols/idol_riki.jpg' },

    // --- BIGBANG (M) ---
    { id: 'idol_gdragon', name: 'G-Dragon (Bigbang)', rarity: 'Golden', group: 'Bigbang', gender: 'M', img: 'assets/idols/idol_gdragon.jpg' },
    { id: 'idol_top', name: 'T.O.P (Bigbang)', rarity: 'Secret', group: 'Bigbang', gender: 'M', img: 'assets/idols/idol_top.jpg' },
    { id: 'idol_taeyang', name: 'Taeyang (Bigbang)', rarity: 'Rare', group: 'Bigbang', gender: 'M', img: 'assets/idols/idol_taeyang.jpg' },
    { id: 'idol_daesung', name: 'Daesung (Bigbang)', rarity: 'Epic', group: 'Bigbang', gender: 'M', img: 'assets/idols/idol_daesung.jpg' },

    // --- (G)I-DLE (F) ---
    { id: 'idol_soyeon', name: 'Soyeon (I-DLE)', rarity: 'Legendary', group: '(G)I-DLE', gender: 'F', img: 'assets/idols/idol_soyeon.jpg' },
    { id: 'idol_miyeon', name: 'Miyeon (I-DLE)', rarity: 'Epic', group: '(G)I-DLE', gender: 'F', img: 'assets/idols/idol_miyeon.jpg' },
    { id: 'idol_minnie', name: 'Minnie (I-DLE)', rarity: 'Golden', group: '(G)I-DLE', gender: 'F', img: 'assets/idols/idol_minnie.jpg' },
    { id: 'idol_yuqi', name: 'Yuqi (I-DLE)', rarity: 'Secret', group: '(G)I-DLE', gender: 'F', img: 'assets/idols/idol_yuqi.jpg' },
    { id: 'idol_shuhua', name: 'Shuhua (I-DLE)', rarity: 'Epic', group: '(G)I-DLE', gender: 'F', img: 'assets/idols/idol_shuhua.jpg' },
    { id: 'idol_soojin', name: 'Soojin (I-DLE)', rarity: 'Rare', group: '(G)I-DLE', gender: 'F', img: 'assets/idols/idol_soojin.jpg' },

    // --- HUNTRX (F) ---
    { id: 'idol_rumi_huntrx', name: 'Rumi (Huntrx)', rarity: 'Secret', group: 'Huntrx', gender: 'F', img: 'assets/idols/idol_rumi_huntrx.jpg' },
    { id: 'idol_zoey_huntrx', name: 'Zoey (Huntrx)', rarity: 'Legendary', group: 'Huntrx', gender: 'F', img: 'assets/idols/idol_zoey_huntrx.jpg' },
    { id: 'idol_mira_huntrx', name: 'Mira (Huntrx)', rarity: 'Epic', group: 'Huntrx', gender: 'F', img: 'assets/idols/idol_mira_huntrx.jpg' },

    // --- FROMIS_9 (F) ---
    { id: 'idol_saerom', name: 'Saerom (fromis_9)', rarity: 'Legendary', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_saerom.jpg' },
    { id: 'idol_hayoung', name: 'Hayoung (fromis_9)', rarity: 'Epic', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_hayoung.jpg' },
    { id: 'idol_jiwon', name: 'Jiwon (fromis_9)', rarity: 'Secret', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_jiwon.jpg' },
    { id: 'idol_jisun', name: 'Jisun (fromis_9)', rarity: 'Rare', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_jisun.jpg' },
    { id: 'idol_seoyeon', name: 'Seoyeon (fromis_9)', rarity: 'Epic', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_seoyeon.jpg' },
    { id: 'idol_chaeyoung_fromis', name: 'Chaeyoung (fromis_9)', rarity: 'Golden', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_chaeyoung_fromis.jpg' },
    { id: 'idol_nagyung', name: 'Nagyung (fromis_9)', rarity: 'Common', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_nagyung.jpg' },
    { id: 'idol_jiheon', name: 'Jiheon (fromis_9)', rarity: 'Rare', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_jiheon.jpg' },
    { id: 'idol_gyuri', name: 'Gyuri (fromis_9)', rarity: 'Common', group: 'fromis_9', gender: 'F', img: 'assets/idols/idol_gyuri.jpg' },

    // --- DREAMCATCHER (F) ---
    { id: 'idol_jiu', name: 'JiU (Dreamcatcher)', rarity: 'Legendary', group: 'Dreamcatcher', gender: 'F', img: 'assets/idols/idol_jiu.jpg' },
    { id: 'idol_sua', name: 'SuA (Dreamcatcher)', rarity: 'Epic', group: 'Dreamcatcher', gender: 'F', img: 'assets/idols/idol_sua.jpg' },
    { id: 'idol_siyeon', name: 'Siyeon (Dreamcatcher)', rarity: 'Secret', group: 'Dreamcatcher', gender: 'F', img: 'assets/idols/idol_siyeon.jpg' },
    { id: 'idol_handong', name: 'Handong (Dreamcatcher)', rarity: 'Rare', group: 'Dreamcatcher', gender: 'F', img: 'assets/idols/idol_handong.jpg' },
    { id: 'idol_yoohyeon', name: 'Yoohyeon (Dreamcatcher)', rarity: 'Epic', group: 'Dreamcatcher', gender: 'F', img: 'assets/idols/idol_yoohyeon.jpg' },
    { id: 'idol_dami', name: 'Dami (Dreamcatcher)', rarity: 'Rare', group: 'Dreamcatcher', gender: 'F', img: 'assets/idols/idol_dami.jpg' },
    { id: 'idol_gahyun', name: 'Gahyun (Dreamcatcher)', rarity: 'Common', group: 'Dreamcatcher', gender: 'F', img: 'assets/idols/idol_gahyun.jpg' },

    // --- RED VELVET (F) ---
    { id: 'idol_irene', name: 'Irene (Red Velvet)', rarity: 'Legendary', group: 'Red Velvet', gender: 'F', img: 'assets/idols/idol_irene.jpg' },
    { id: 'idol_seulgi', name: 'Seulgi (Red Velvet)', rarity: 'Rare', group: 'Red Velvet', gender: 'F', img: 'assets/idols/idol_seulgi.jpg' },
    { id: 'idol_wendy', name: 'Wendy (Red Velvet)', rarity: 'Epic', group: 'Red Velvet', gender: 'F', img: 'assets/idols/idol_wendy.jpg' },
    { id: 'idol_joy', name: 'Joy (Red Velvet)', rarity: 'Secret', group: 'Red Velvet', gender: 'F', img: 'assets/idols/idol_joy.jpg' },
    { id: 'idol_yeri', name: 'Yeri (Red Velvet)', rarity: 'Common', group: 'Red Velvet', gender: 'F', img: 'assets/idols/idol_yeri.jpg' },

];


// Config: Lightsticks
// Rarities: Common, Rare, Epic, Legendary, Secret
const lightsticks = [
    { id: 'ls_bts', group: 'BTS', name: 'BTS', rarity: 'Golden', img: 'assets/lightstick/lightstick_bts.jpg' },
    { id: 'ls_blackpink', group: 'Blackpink', name: 'Blackpink', rarity: 'Golden', img: 'assets/lightstick/lightstick_blackpink.jpg' },
    { id: 'ls_twice', group: 'Twice', name: 'Twice', rarity: 'Legendary', img: 'assets/lightstick/lightstick_twice.jpg' },
    { id: 'ls_skz', group: 'Stray Kids', name: 'Stray Kids', rarity: 'Secret', img: 'assets/lightstick/lightstick_straykids.jpg' },
    { id: 'ls_aespa', group: 'Aespa', name: 'Aespa', rarity: 'Legendary', img: 'assets/lightstick/lightstick_aespa.jpg' },
    { id: 'ls_ive', group: 'IVE', name: 'IVE', rarity: 'Epic', img: 'assets/lightstick/lightstick_ive.jpg' },
    { id: 'ls_newjeans', group: 'NewJeans', name: 'NewJeans', rarity: 'Rare', img: 'assets/lightstick/lightstick_newjeans.jpeg' },
    { id: 'ls_lss', group: 'Le Sserafim', name: 'Le Sserafim', rarity: 'Legendary', img: 'assets/lightstick/lightstick_lesserafim.jpeg' },
    { id: 'ls_baemon', group: 'BabyMonster', name: 'BabyMonster', rarity: 'Secret', img: 'assets/lightstick/lightstick_babymonster.jpg' },
    { id: 'ls_katseye', group: 'Katseye', name: 'Katseye', rarity: 'Epic', img: 'assets/lightstick/lightstick_katseye.jpg' },
    { id: 'ls_itzy', group: 'Itzy', name: 'Itzy', rarity: 'Epic', img: 'assets/lightstick/lightstick_itzy.jpg' },
    { id: 'ls_illit', group: 'ILLIT', name: 'ILLIT', rarity: 'Rare', img: 'assets/lightstick/lightstick_illit.jpg' },
    { id: 'ls_cortis', group: 'Cortis', name: 'Cortis', rarity: 'Common', img: 'assets/lightstick/default_lightstick.png' },
    { id: 'ls_enhypen', group: 'ENHYPEN', name: 'ENHYPEN', rarity: 'Common', img: 'assets/lightstick/lightstick_enhypen.jpg' },
    { id: 'ls_bigbang', group: 'Bigbang', name: 'Bigbang', rarity: 'Rare', img: 'assets/lightstick/lightstick_bigbang.jpg' },
    { id: 'ls_gidle', group: '(G)I-DLE', name: '(G)I-DLE', rarity: 'Epic', img: 'assets/lightstick/lightstick_gilde.jpeg' },
    { id: 'ls_huntrx', group: 'Huntrx', name: 'Huntrx', rarity: 'Golden', img: 'assets/lightstick/lightstick_huntrx.jpg' },
    { id: 'ls_fromis9', group: 'fromis_9', name: 'fromis_9', rarity: 'Epic', img: 'assets/lightstick/lightstick_fromis9.jpg' },
    { id: 'ls_dreamcatcher', group: 'Dreamcatcher', name: 'Dreamcatcher', rarity: 'Rare', img: 'assets/lightstick/lightstick_dreamcatcher.jpg' },
    { id: 'ls_redvelvet', group: 'Red Velvet', name: 'Red Velvet', rarity: 'Common', img: 'assets/lightstick/lightstick_redvelvet.jpg' }


];

// Config: Albums
const albums = [
    // Blackpink Songs
    { id: 'alb_bp_thealbum', group: 'Blackpink', name: 'How You Like That', type: 'Song', source: 'The Album', rarity: 'Epic', img: 'assets/musique/the_album_blackpink.jpg' },
    { id: 'song_bp_lovesickgirls', group: 'Blackpink', name: 'Lovesick Girls', type: 'Song', source: 'The Album', rarity: 'Legendary', img: 'assets/musique/the_album_blackpink.jpg' },
    { id: 'alb_bp_bornpink', group: 'Blackpink', name: 'Pink Venom', type: 'Song', source: 'Born Pink', rarity: 'Golden', img: 'assets/musique/born_pink_blackpink.jpg' },
    { id: 'song_bp_shutdown', group: 'Blackpink', name: 'Shut Down', type: 'Song', source: 'Born Pink', rarity: 'Secret', img: 'assets/musique/born_pink_blackpink.jpg' },
    { id: 'ep_bp_squareup', group: 'Blackpink', name: 'DDU-DU DDU-DU', type: 'Song', source: 'Square Up', rarity: 'Epic', img: 'assets/musique/square_up_blackpink.jpg' },
    { id: 'ep_bp_killthislove', group: 'Blackpink', name: 'Kill This Love', type: 'Song', source: 'Kill This Love', rarity: 'Legendary', img: 'assets/musique/kill_this_love_blackpink.jpg' },

    // BTS Songs
    { id: 'song_bts_dynamite', group: 'BTS', name: 'Dynamite', type: 'Song', source: 'BE', rarity: 'Golden', img: 'assets/musique/be_bts.jpg' },
    { id: 'song_bts_fakelove', group: 'BTS', name: 'Fake Love', type: 'Song', source: 'Love Yourself', rarity: 'Legendary', img: 'assets/musique/love_yourself_bts.jpg' },
    { id: 'song_bts_butter', group: 'BTS', name: 'Butter', type: 'Song', source: 'Proof', rarity: 'Secret', img: 'assets/musique/proof_bts.jpg' },
    { id: 'song_bts_boywithluv', group: 'BTS', name: 'Boy With Luv', type: 'Song', source: 'Map of the Soul: Persona', rarity: 'Epic', img: 'assets/musique/map_of_the_soul_persona_bts.jpg' },

    // Stray Kids Songs
    { id: 'song_skz_maniac', group: 'Stray Kids', name: 'Maniac', type: 'Song', source: 'Oddinary', rarity: 'Legendary', img: 'assets/musique/oddinary_straykids.jpg' },
    { id: 'song_skz_chkchkboom', group: 'Stray Kids', name: 'Chk Chk Boom', type: 'Song', source: 'Ate', rarity: 'Secret', img: 'assets/musique/ate_straykids.jpg' },
    { id: 'song_skz_ceremony', group: 'Stray Kids', name: 'Ceremony', type: 'Song', source: 'Karma', rarity: 'Rare', img: 'assets/musique/karma_straykids.jpg' },
    { id: 'song_skz_lalalala', group: 'Stray Kids', name: 'Lalalala', type: 'Song', source: 'Rock-Star', rarity: 'Legendary', img: 'assets/musique/rockstar_straykids.jpg' },
    { id: 'song_skz_doit', group: 'Stray Kids', name: 'Do It', type: 'Song', source: 'Do It', rarity: 'Epic', img: 'assets/musique/doit_straykids.jpg' },

    // Twice Songs
    { id: 'song_twice_thisisfor', group: 'Twice', name: 'This is For', type: 'Song', source: 'This is For', rarity: 'Legendary', img: 'assets/musique/this_is_for_twice.jpg' },
    { id: 'song_twice_whatislove', group: 'Twice', name: 'What is Love ?', type: 'Song', source: 'Summer Nights', rarity: 'Epic', img: 'assets/musique/summer_nights_twice.jpg' },
    { id: 'song_twice_strategy', group: 'Twice', name: 'Strategy', type: 'Song', source: 'Strategy', rarity: 'Common', img: 'assets/musique/strategy_twice.jpg' },
    { id: 'song_twice_thefeels', group: 'Twice', name: 'The Feels', type: 'Song', source: 'Formula of love : O+T=<3', rarity: 'Rare', img: 'assets/musique/formula_of_love_twice.jpg' },

    // Aespa Songs
    { id: 'song_aespa_whiplash', group: 'Aespa', name: 'Whiplash', type: 'Song', source: 'Whiplash', rarity: 'Legendary', img: 'assets/musique/whiplash_aespa.jpg' },
    { id: 'song_aespa_drama', group: 'Aespa', name: 'Drama', type: 'Song', source: 'Drama', rarity: 'Legendary', img: 'assets/musique/drama_aespa.jpg' },
    { id: 'song_aespa_supernova', group: 'Aespa', name: 'Supernova', type: 'Song', source: 'Armageddon', rarity: 'Secret', img: 'assets/musique/armageddon_aespa.jpg' },
    { id: 'song_aespa_richman', group: 'Aespa', name: 'Rich Man', type: 'Song', source: 'Rich Man', rarity: 'Epic', img: 'assets/musique/rich_man_aespa.jpg' },
    { id: 'song_aespa_blackmamba', group: 'Aespa', name: 'Black Mamba', type: 'Song', source: 'Girls', rarity: 'Rare', img: 'assets/musique/girls_aespa.jpg' },

    // BabyMonster Songs
    { id: 'song_baemon_psycho', group: 'BabyMonster', name: 'Psycho', type: 'Song', source: 'We Go Up', rarity: 'Legendary', img: 'assets/musique/we_go_up_babymonster.jpg' },
    { id: 'song_baemon_wegoup', group: 'BabyMonster', name: 'We Go Up', type: 'Song', source: 'We Go Up', rarity: 'Epic', img: 'assets/musique/we_go_up_babymonster.jpg' },
    { id: 'song_baemon_supadupaluv', group: 'BabyMonster', name: 'Supa Dupa Luv', type: 'Song', source: 'We Go Up', rarity: 'Rare', img: 'assets/musique/we_go_up_babymonster.jpg' },
    { id: 'song_baemon_drip', group: 'BabyMonster', name: 'Drip', type: 'Song', source: 'Drip', rarity: 'Legendary', img: 'assets/musique/drip_babymonster.jpg' },
    { id: 'song_baemon_forever', group: 'BabyMonster', name: 'Forever', type: 'Song', source: 'Drip', rarity: 'Epic', img: 'assets/musique/drip_babymonster.jpg' },
    { id: 'song_baemon_sheesh', group: 'BabyMonster', name: 'Sheesh', type: 'Song', source: 'Babymons7er', rarity: 'Legendary', img: 'assets/musique/babymons7er_babymonster.jpg' },
    { id: 'song_baemon_likethat', group: 'BabyMonster', name: 'Like That', type: 'Song', source: 'Babymons7er', rarity: 'Rare', img: 'assets/musique/babymons7er_babymonster.jpg' },

    // IVE Songs
    { id: 'song_ive_iam', group: 'IVE', name: 'I Am', type: 'Song', source: "I've Ive", rarity: 'Golden', img: 'assets/musique/ive_ive_ive.jpg' },
    { id: 'song_ive_xoxz', group: 'IVE', name: 'XOXZ', type: 'Song', source: 'Ive Secret', rarity: 'Secret', img: 'assets/musique/ive_secret_ive.jpg' },
    { id: 'song_ive_bangbang', group: 'IVE', name: 'Bang bang', type: 'Song', source: 'Single', rarity: 'Rare', img: 'assets/musique/bang_bang_ive.jpg' },
    { id: 'song_ive_lovedive', group: 'IVE', name: 'Love dive', type: 'Song', source: 'Single', rarity: 'Legendary', img: 'assets/musique/love_dive_ive.jpg' },
    { id: 'song_ive_eleven', group: 'IVE', name: 'Eleven', type: 'Song', source: 'Single', rarity: 'Epic', img: 'assets/musique/eleven_ive.jpg' },

    // Le Sserafim Songs
    { id: 'song_lsf_spaghetti', group: 'Le Sserafim', name: 'Spaghetti', type: 'Song', source: 'Spaghetti', rarity: 'Secret', img: 'assets/musique/spaghetti_lesserafim.jpg' },
    { id: 'song_lsf_crazy', group: 'Le Sserafim', name: 'Crazy', type: 'Song', source: 'Crazy', rarity: 'Legendary', img: 'assets/musique/crazy_lesserafim.jpg' },
    { id: 'song_lsf_antifragile', group: 'Le Sserafim', name: 'Antifragile', type: 'Song', source: 'Unforgiven', rarity: 'Epic', img: 'assets/musique/unforgiven_lesserafim.jpg' },
    { id: 'song_lsf_hot', group: 'Le Sserafim', name: 'Hot', type: 'Song', source: 'Hot', rarity: 'Common', img: 'assets/musique/hot_lesserafim.jpg' },
    { id: 'song_lsf_smart', group: 'Le Sserafim', name: 'Smart', type: 'Song', source: 'Single', rarity: 'Rare', img: 'assets/musique/smart_lesserafim.jpg' },

    // NewJeans Songs
    { id: 'song_nwjns_hypeboy', group: 'NewJeans', name: 'Hype boy', type: 'Song', source: 'NewJeans', rarity: 'Legendary', img: 'assets/musique/newjeans_newjeans.jpg' },
    { id: 'song_nwjns_supershy', group: 'NewJeans', name: 'Super shy', type: 'Song', source: 'Single', rarity: 'Epic', img: 'assets/musique/supershy_newjeans_newjeans.jpg' },
    { id: 'song_nwjns_newjeans', group: 'NewJeans', name: 'NewJeans', type: 'Song', source: 'Single', rarity: 'Rare', img: 'assets/musique/supershy_newjeans_newjeans.jpg' },
    { id: 'song_nwjns_omg', group: 'NewJeans', name: 'OMG', type: 'Song', source: 'Single', rarity: 'Secret', img: 'assets/musique/omg_newjeans.jpg' }
];



const packData = {
    // --- CLICK PACKS (Hearts) ---
    'standard': {
        name: 'Standard Pack',
        cost: 200,
        currency: 'score',
        desc: 'A basic pack for beginners. Contains mostly Common cards.',
        img: '🎫',
        rates: { 'Common': 70, 'Rare': 25, 'Epic': 5, 'Legendary': 0, 'Secret': 0, 'Golden': 0 }
    },
    'super': {
        name: 'Super Fan Pack',
        cost: 2000,
        currency: 'score',
        desc: 'Better chances for higher rarity cards.',
        img: '💖',
        rates: { 'Common': 55, 'Rare': 30, 'Epic': 13, 'Legendary': 2, 'Secret': 0, 'Golden': 0 }
    },
    'platinum': {
        name: 'Platinum Pack',
        cost: 5000,
        currency: 'score',
        desc: 'High chance for Epic and Legendary cards!',
        img: '💿',
        rates: { 'Common': 35, 'Rare': 35, 'Epic': 22, 'Legendary': 6, 'Secret': 2, 'Golden': 0 }
    },
    'fan_club': {
        name: 'Fan Club Pack',
        cost: 10000,
        currency: 'score',
        desc: 'Exclusive pack for true fans. Great rates.',
        img: '🎪',
        rates: { 'Common': 0, 'Rare': 35, 'Epic': 40, 'Legendary': 18, 'Secret': 6, 'Golden': 1 }
    },
    'concert': {
        name: 'Concert Pack',
        cost: 50000,
        currency: 'score',
        desc: 'The ultimate experience! Guarantees high rarity.',
        img: '🏟️',
        rates: { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 }
    },

    // --- MUSIC PACKS (Coins) ---
    'debut_single': {
        name: 'Debut Single',
        cost: 200,
        currency: 'coins',
        desc: 'Your first song. Contains basic music cards.',
        img: '💿',
        rates: { 'Common': 70, 'Rare': 25, 'Epic': 5, 'Legendary': 0, 'Secret': 0, 'Golden': 0 }
    },
    'mini_album': {
        name: 'Mini Playlist',
        cost: 2000,
        currency: 'coins',
        desc: 'A collection of hit songs. Better rates.',
        img: '📀',
        rates: { 'Common': 55, 'Rare': 30, 'Epic': 13, 'Legendary': 2, 'Secret': 0, 'Golden': 0 }
    },
    'full_album': {
        name: 'Full Tracklist',
        cost: 5000,
        currency: 'coins',
        desc: 'Complete musical experience. Great value.',
        img: '🎵',
        rates: { 'Common': 35, 'Rare': 35, 'Epic': 22, 'Legendary': 6, 'Secret': 2, 'Golden': 0 }
    },
    'repackage': {
        name: 'Remix Collection',
        cost: 10000,
        currency: 'coins',
        desc: 'Bonus tracks and remixes! High Epic chance.',
        img: '🎼',
        rates: { 'Common': 0, 'Rare': 35, 'Epic': 40, 'Legendary': 18, 'Secret': 6, 'Golden': 1 }
    },
    'collectors_box': {
        name: 'Greatest Hits',
        cost: 50000,
        currency: 'coins',
        desc: 'The ultimate music collection. Best rates.',
        img: '📦',
        rates: { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 }
    },

    // --- VIP PACKS (Coins) ---
    'vip': {
        name: 'VIP Pack',
        cost: 500,
        currency: 'coins',
        desc: 'Premium pack purchasable with Coins.',
        img: '👑',
        rates: { 'Common': 0, 'Rare': 45, 'Epic': 35, 'Legendary': 18, 'Secret': 2, 'Golden': 0 }
    },
    'elite': {
        name: 'Elite Star Pack',
        cost: 2500,
        currency: 'coins',
        desc: 'Elite status for elite collections.',
        img: '💎',
        rates: { 'Common': 0, 'Rare': 0, 'Epic': 45, 'Legendary': 35, 'Secret': 18, 'Golden': 2 }
    },
    'diamond': {
        name: 'Diamond Pack',
        cost: 5000,
        currency: 'coins',
        desc: 'Shine bright with Diamond quality cards.',
        img: '🔮',
        rates: { 'Common': 0, 'Rare': 0, 'Epic': 30, 'Legendary': 38, 'Secret': 21, 'Golden': 11 }
    },
    'backstage': {
        name: 'Backstage Pack',
        cost: 15000,
        currency: 'coins',
        desc: 'Access to the rarest of the rare.',
        img: '🕶️',
        rates: { 'Common': 0, 'Rare': 0, 'Epic': 0, 'Legendary': 45, 'Secret': 35, 'Golden': 20 }
    },
    'world_tour': {
        name: 'World Tour Pack',
        cost: 50000,
        currency: 'coins',
        desc: 'Global domination! Incredible Secret & Golden rates.',
        img: '🌎',
        rates: { 'Common': 0, 'Rare': 0, 'Epic': 0, 'Legendary': 35, 'Secret': 40, 'Golden': 25 }
    },

    // --- LIGHTSTICK PACKS (Coins) ---
    'ls_std': {
        name: 'Standard Lightstick Pack',
        cost: 2500,
        currency: 'coins',
        desc: 'Start your lightstick collection.',
        img: '🔦',
        rates: { 'Common': 55, 'Rare': 35, 'Epic': 9, 'Legendary': 1, 'Secret': 0, 'Golden': 0 }
    },
    'ls_prem': {
        name: 'Premium Lightstick Pack',
        cost: 5000,
        currency: 'coins',
        desc: 'Higher chance for rare lightsticks.',
        img: '✨',
        rates: { 'Common': 0, 'Rare': 55, 'Epic': 30, 'Legendary': 12, 'Secret': 2, 'Golden': 1 }
    },
    'ls_ult': {
        name: 'Ultimate Lightstick Pack',
        cost: 10000,
        currency: 'coins',
        desc: 'The best lightsticks in the industry.',
        img: '🎇',
        rates: { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 }
    }
};

const PACK_COST = packData['standard'].cost; // Keep strictly for legacy ref if needed

const MAX_LEVEL = 10;

// Tabs Logic
window.switchTab = function (tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    // Simple heuristic to highlight button
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });
};

// Modal Logic for Collection
window.openModal = function () {
    document.getElementById('collection-modal').classList.remove('hidden');
    if (typeof renderFullInventory === 'function') renderFullInventory();
};

window.closeModal = function () {
    document.getElementById('collection-modal').classList.add('hidden');
};

// Lightstick Modal Logic
window.openLightstickModal = function () {
    document.getElementById('lightstick-modal').classList.remove('hidden');
    if (typeof renderLightsticks === 'function') renderLightsticks();
};

window.closeLightstickModal = function () {
    document.getElementById('lightstick-modal').classList.add('hidden');
};

// --- PACK MODAL LOGIC ---
window.openPackModal = function (type) {
    const pack = packData[type];
    if (!pack) return;

    // Populate Modal
    document.getElementById('modal-pack-title').innerText = pack.name;
    document.getElementById('modal-pack-desc').innerText = pack.desc;
    document.getElementById('modal-pack-icon').innerText = pack.img;
    document.getElementById('modal-pack-cost').innerText = pack.cost.toLocaleString();
    document.getElementById('modal-pack-currency').innerText = pack.currency === 'score' ? '❤️' : '🌟';

    // Populate Rates
    const ratesContainer = document.getElementById('modal-pack-rates');
    ratesContainer.innerHTML = '';
    for (const [rarity, chance] of Object.entries(pack.rates)) {
        if (chance > 0) {
            const row = document.createElement('div');
            row.className = 'rate-item';
            row.innerHTML = `<span class="rate-rarity rate-${rarity}">${rarity}</span> <span>${chance}%</span>`;
            ratesContainer.appendChild(row);
        }
    }

    // Setup Buy Button
    const buyBtn = document.getElementById('modal-buy-btn');
    buyBtn.onclick = function () {
        buyPack(type);
        closePackModal(); // Optional: Close on buy? Or keep open for multi-buy? 
        // User asked for "bouton pour acheter le pack", usually implies one action. 
        // Let's keep it open for multi buttons or just close it. 
        // Actually, existing flow triggers animation which covers everything.
    };

    document.getElementById('pack-purchase-modal').classList.remove('hidden');
};

window.closePackModal = function () {
    document.getElementById('pack-purchase-modal').classList.add('hidden');
};


document.addEventListener('DOMContentLoaded', () => {
    initGame();
});

function initGame() {
    renderUpgrades();
    renderPremiumUpgrades();

    const mainBtn = document.getElementById('main-button');
    if (mainBtn) mainBtn.onclick = handleClick;

    // Existing packs
    const packBtn = document.getElementById('buy-pack-btn');
    if (packBtn) packBtn.onclick = () => buyPack('standard');
}

window.buyPack = function (type) {
    const pack = packData[type];
    if (!pack) return;

    const cost = pack.cost;
    const currency = pack.currency;

    if (state[currency] >= cost) {
        state[currency] -= cost;
        updateScoreUI();
        showPackOpeningAnimation(type);
    } else {
        alert(`Not enough ${currency === 'score' ? '❤️' : '🌟'}! Need ${cost}.`);
    }
};
const inventoryPreview = document.querySelector('.inventory-preview');
if (inventoryPreview) inventoryPreview.onclick = openModal;

const closeBtn = document.querySelector('.close-modal');
if (closeBtn) closeBtn.onclick = closeModal;

// Start Loops
setInterval(gameLoop, 1000);
setInterval(updateUI, 100);

// Initial Load
loadGame();
updateScoreUI();

// Close Modals on Outside Click
// Close Modals on Outside Click (Using addEventListener to be safe)
window.onclick = function (event) {
    const infoModal = document.getElementById('info-modal');
    if (event.target == infoModal) {
        infoModal.classList.add('hidden');
    }
    const collectionModal = document.getElementById('collection-modal');
    if (event.target == collectionModal) {
        collectionModal.classList.add('hidden');
    }
    const detailsModal = document.getElementById('card-details-modal');
    if (event.target == detailsModal) {
        detailsModal.classList.add('hidden');
    }
    const lightstickModal = document.getElementById('lightstick-modal');
    if (event.target == lightstickModal) {
        lightstickModal.classList.add('hidden');
    }
};

// Explicitly attach close button listener for Info Modal
const closeInfoBtn = document.getElementById('close-info-btn');
if (closeInfoBtn) {
    closeInfoBtn.onclick = function () {
        document.getElementById('info-modal').classList.add('hidden');
    };
}


function handleClick(e) {
    addScore(state.clickPower);
    // gainXp(1); // Removed: XP only from packs now
    spawnFloatText(e.clientX, e.clientY, `+${state.clickPower}`);

    // Visual pop effect
    const btn = document.getElementById('main-button');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => btn.style.transform = 'scale(1)', 50);
}

// XP System
function getXpForNextLevel(level) {
    // Current Level -> Next Level
    // Level 0 -> 1: 1000 XP
    // Level 1 -> 2: 5000 XP (Steep jump)
    // Level 2 -> 3: 15000
    // ...
    const thresholds = [1000, 5000, 15000, 40000, 100000, 250000, 600000, 1500000, 5000000, 10000000];
    return thresholds[level] || 10000000;
}

function gainXp(amount) {
    if (state.level >= MAX_LEVEL) return;

    state.xp += amount;
    checkLevelUp();
    updateScoreUI();
}

function checkLevelUp() {
    const nextReq = getXpForNextLevel(state.level);
    if (state.xp >= nextReq) {
        state.xp -= nextReq;
        state.level++;

        // Reward?
        // Let's give Coins reward based on level
        const reward = state.level * 100;
        state.coins += reward;
        alert(`LEVEL UP! You are now Level ${state.level}! Reward: ${reward} 🌟`);

        if (state.level >= MAX_LEVEL) {
            state.xp = 0; // Cap
        }
        updateScoreUI();
    }
}

function addScore(amount) {
    // Bonus: 1% extra per unique card owned (capped at some point if needed, but linear is fine for now)
    // Actually, just per card owned for simplicity, incentivizes duplicates
    const multiplier = 1 + (state.inventory.length * 0.05); // 5% bonus per card!
    state.score += amount * multiplier;
    updateScoreUI();
}


function gameLoop() {
    if (state.cps > 0) {
        addScore(state.cps);
    }
}

function updateScoreUI() {
    document.getElementById('score').innerText = Math.floor(state.score);
    document.getElementById('coins').innerText = Math.floor(state.coins);
    document.getElementById('cps').innerText = state.cps.toFixed(1);

    // Level UI
    document.getElementById('level-display').innerText = state.level;

    if (state.level >= MAX_LEVEL) {
        document.getElementById('xp-display').innerText = "MAX";
        document.getElementById('xp-max').innerText = "MAX";
        document.getElementById('xp-bar-fill').style.width = '100%';
    } else {
        const max = getXpForNextLevel(state.level);
        document.getElementById('xp-display').innerText = Math.floor(state.xp);
        document.getElementById('xp-max').innerText = max;
        const pct = Math.min(100, (state.xp / max) * 100);
        document.getElementById('xp-bar-fill').style.width = `${pct}%`;
    }

    // Collection Progress UI
    updateCollectionProgress();

    // Check buy buttons
    upgrades.forEach(u => {
        const cost = calculateCost(u);
        const btn = document.getElementById(`btn-${u.id}`);
        if (btn) btn.disabled = state.score < cost;
    });

    premiumUpgrades.forEach(u => {
        const cost = Math.floor(u.baseCost * Math.pow(u.costMult, u.count));
        const btn = document.getElementById(`btn-prem-${u.id}`);
        if (btn) btn.disabled = state.coins < cost;
    });

    const packBtn = document.getElementById('buy-pack-btn');
    if (packBtn) packBtn.disabled = state.score < PACK_COST;

    const superBtn = document.getElementById('buy-super-btn');
    if (superBtn) superBtn.disabled = state.score < SUPER_PACK_COST;

    const vipBtn = document.getElementById('buy-vip-btn');
    if (vipBtn) vipBtn.disabled = state.coins < VIP_PACK_COST;

    const eliteBtn = document.getElementById('buy-elite-btn');
    if (eliteBtn) eliteBtn.disabled = state.coins < ELITE_PACK_COST;

    const platinumBtn = document.getElementById('buy-platinum-btn');
    if (platinumBtn) platinumBtn.disabled = state.score < PLATINUM_PACK_COST;

    const diamondBtn = document.getElementById('buy-diamond-btn');
    if (diamondBtn) diamondBtn.disabled = state.coins < DIAMOND_PACK_COST;
}

function updateCollectionProgress() {
    // Get unique items from all categories (Idols, Lightsticks, Music)
    const uniqueCollectedIds = new Set(
        state.inventory
            .filter(item => item.id)
            .map(item => item.id)
    );

    // Total number of unique items available across all categories
    const totalPossibleCards = cardPool.length + lightsticks.length + albums.length;

    // We only want to count items that are actually in one of our definition arrays
    // to avoid counting potential "ghost" items or legacy IDs
    const validCollectedCount = [...uniqueCollectedIds].filter(id =>
        cardPool.some(c => c.id === id) ||
        lightsticks.some(l => l.id === id) ||
        albums.some(a => a.id === id)
    ).length;

    // Calculate percentage
    const percentage = totalPossibleCards > 0 ? Math.floor((validCollectedCount / totalPossibleCards) * 100) : 0;

    // Update UI
    document.getElementById('collection-percentage').innerText = percentage;
    document.getElementById('collection-count').innerText = validCollectedCount;
    document.getElementById('collection-total').innerText = totalPossibleCards;
    document.getElementById('collection-bar-fill').style.width = `${percentage}%`;
}

function updateUI() {
    // Smoother updates if we had animations, but mostly handled in score add
    // Could enable/disable buttons here too if we want 60fps responsiveness
}

function calculateCost(upgrade) {
    // Simple exponential cost curve: Base * 1.15^Count
    return Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.count));
}

// Global scope for onclick
window.buyUpgrade = function (id) {
    const u = upgrades.find(x => x.id === id);
    if (!u) return;

    const cost = calculateCost(u);
    if (state.score >= cost) {
        state.score -= cost;
        u.count++;

        // Apply effects
        state.clickPower += u.clickPower;
        state.cps += u.cps;

        updateScoreUI();
        renderUpgrades(); // Re-render to update cost and count
        saveGame(); // Force save
    }
};

window.buyPremiumUpgrade = function (id) {
    const u = premiumUpgrades.find(x => x.id === id);
    if (!u) return;

    // Premium cost: Base * 1.5^Count
    const cost = Math.floor(u.baseCost * Math.pow(u.costMult, u.count));

    if (state.coins >= cost) {
        state.coins -= cost;
        u.count++;

        state.clickPower += u.clickPower;
        state.cps += u.cps;

        updateScoreUI();
        renderPremiumUpgrades();
        saveGame();
    }
};

function renderUpgrades() {
    const list = document.getElementById('upgrade-list');
    list.innerHTML = '<h3>❤️ Standard Upgrades</h3>'; // Restore header

    upgrades.forEach(u => {
        const item = document.createElement('div');
        item.className = 'upgrade-item';
        const currentCost = calculateCost(u);

        item.innerHTML = `
            <div class="upgrade-info">
                <h4>${u.name} <span style="font-size:0.8em; color:var(--primary-pink)">x${u.count}</span></h4>
                <p>${u.desc}</p>
            </div>
            <button id="btn-${u.id}" class="buy-btn" onclick="buyUpgrade('${u.id}')">
                ${currentCost} ❤️
            </button>
        `;
        list.appendChild(item);
    });
}

function renderPremiumUpgrades() {
    const list = document.getElementById('premium-upgrades-list');
    list.innerHTML = '<h3>🌟 Premium Shop 🌟</h3>';

    premiumUpgrades.forEach(u => {
        const item = document.createElement('div');
        item.className = 'upgrade-item premium-item';
        // Cost formula locally here since it differs
        const currentCost = Math.floor(u.baseCost * Math.pow(u.costMult, u.count));

        item.innerHTML = `
            <div class="upgrade-info">
                <h4>${u.name} <span style="font-size:0.8em; color:gold">x${u.count}</span></h4>
                <p style="color:#FFD700">${u.desc}</p>
            </div>
            <button id="btn-prem-${u.id}" class="buy-btn premium-buy-btn" onclick="buyPremiumUpgrade('${u.id}')">
                ${currentCost} 🌟
            </button>
        `;
        list.appendChild(item);
    });
}
// Consolidated buyPack function is at line 305


// Removed old specific functions to clean up
window.buyVipPack = null; // Cleanup

// Helper: Pick rarity based on weights
function pickRarity(weights) {
    const totalWeight = Object.values(weights).reduce((acc, val) => acc + val, 0);
    const rand = Math.random() * totalWeight;
    let sum = 0;
    for (const [rarity, chance] of Object.entries(weights)) {
        sum += chance;
        if (rand <= sum) return rarity;
    }
    return 'Common'; // Fallback
}

window.sellCard = function (index) {
    const card = state.inventory[index];
    if (!card) return;

    let value = 10;
    if (card.rarity === 'Rare') value = 50;
    if (card.rarity === 'Epic') value = 200;
    if (card.rarity === 'Legendary') value = 1000;
    if (card.rarity === 'Secret') value = 2500;
    if (card.rarity === 'Golden') value = 5000;

    state.inventory.splice(index, 1);
    state.coins += value;

    updateScoreUI();
    renderFullInventory();
};

function pullCard(type = 'standard') {
    let weights = { 'Common': 100, 'Rare': 0, 'Epic': 0, 'Legendary': 0, 'Golden': 0, 'Secret': 0 };
    let poolSource = cardPool;

    // --- SCORE PACKS ---
    if (type === 'standard') {
        weights = { 'Common': 70, 'Rare': 25, 'Epic': 5, 'Legendary': 0, 'Secret': 0, 'Golden': 0 };
    } else if (type === 'super') {
        weights = { 'Common': 55, 'Rare': 30, 'Epic': 13, 'Legendary': 2, 'Secret': 0, 'Golden': 0 };
    } else if (type === 'platinum') {
        weights = { 'Common': 35, 'Rare': 35, 'Epic': 22, 'Legendary': 6, 'Secret': 2, 'Golden': 0 };
    } else if (type === 'fan_club') {
        weights = { 'Common': 0, 'Rare': 35, 'Epic': 40, 'Legendary': 18, 'Secret': 6, 'Golden': 1 };
    } else if (type === 'concert') {
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 };
    }

    // --- ALBUM PACKS (Hearts) ---
    else if (type === 'debut_single') {
        weights = { 'Common': 70, 'Rare': 25, 'Epic': 5, 'Legendary': 0, 'Secret': 0, 'Golden': 0 };
    } else if (type === 'mini_album') {
        weights = { 'Common': 55, 'Rare': 30, 'Epic': 13, 'Legendary': 2, 'Secret': 0, 'Golden': 0 };
    } else if (type === 'full_album') {
        weights = { 'Common': 35, 'Rare': 35, 'Epic': 22, 'Legendary': 6, 'Secret': 2, 'Golden': 0 };
    } else if (type === 'repackage') {
        weights = { 'Common': 0, 'Rare': 35, 'Epic': 40, 'Legendary': 18, 'Secret': 6, 'Golden': 1 };
    } else if (type === 'collectors_box') {
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 };
    }

    // --- COIN PACKS ---
    else if (type === 'vip') {
        weights = { 'Common': 0, 'Rare': 45, 'Epic': 35, 'Legendary': 18, 'Secret': 2, 'Golden': 0 };
    } else if (type === 'elite') {
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 45, 'Legendary': 35, 'Secret': 18, 'Golden': 2 };
    } else if (type === 'diamond') {
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 30, 'Legendary': 38, 'Secret': 21, 'Golden': 11 };
    } else if (type === 'backstage') {
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 0, 'Legendary': 45, 'Secret': 35, 'Golden': 20 };
    } else if (type === 'world_tour') {
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 0, 'Legendary': 35, 'Secret': 40, 'Golden': 25 };
    }

    // --- LIGHTSTICK PACKS ---
    else if (['ls_std', 'ls_prem', 'ls_ult'].includes(type)) {
        poolSource = lightsticks;
        if (type === 'ls_std') weights = { 'Common': 55, 'Rare': 35, 'Epic': 9, 'Legendary': 1, 'Secret': 0, 'Golden': 0 };
        if (type === 'ls_prem') weights = { 'Common': 0, 'Rare': 55, 'Epic': 30, 'Legendary': 12, 'Secret': 2, 'Golden': 1 };
        if (type === 'ls_ult') weights = { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 };
    }

    // --- ALBUM PACKS ---
    if (['debut_single', 'mini_album', 'full_album', 'repackage', 'collectors_box'].includes(type)) {
        poolSource = albums;
        // Weights handled above by pack type name
    }

    // 1. Determine Rarity
    const targetRarity = pickRarity(weights);

    // 2. Filter Pool
    let filteredPool = poolSource.filter(c => c.rarity === targetRarity);

    // Fallback if empty (e.g. no Golden lightsticks yet) -> downgrade to next best
    if (filteredPool.length === 0) {
        if (targetRarity === 'Golden') filteredPool = poolSource.filter(c => c.rarity === 'Legendary');
        if (filteredPool.length === 0) filteredPool = poolSource.filter(c => c.rarity === 'Epic'); // Emergency fallback
    }

    // 3. Pick Item
    let selected = filteredPool[Math.floor(Math.random() * filteredPool.length)];
    // No extra reroll needed if pool is filtered correctly, 
    // but if pool is empty (impossible unless config error), fallback.


    // Safety check
    if (!selected || !selected.id) {
        console.error("Pull failed, selected invalid:", selected);
        return;
    }

    // Add to inventory
    state.inventory.push(selected);

    return selected;
}

// function renderInventory() { ... } // Removed


function roll(pool) {
    if (!pool || pool.length === 0) return cardPool[0]; // Fallback

    const totalWeight = pool.reduce((acc, c) => acc + c.chance, 0);
    const rand = Math.random() * totalWeight;

    let cumulative = 0;
    for (let card of pool) {
        cumulative += card.chance;
        if (rand <= cumulative) {
            return card;
        }
    }
    return pool[pool.length - 1];
}

// Helpers
function spawnFloatText(x, y, text) {
    const el = document.createElement('div');
    el.className = 'float-text';
    el.innerText = text;
    // Add some random variation
    const randomX = (Math.random() - 0.5) * 50;
    el.style.left = `${x + randomX}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1000);
}
// Consolidated switchTab function is at line 253

// Start Modal Logic
function openModal() {
    document.getElementById('collection-modal').classList.remove('hidden');
    renderFullInventory();
}

function closeModal() {
    document.getElementById('collection-modal').classList.add('hidden');
}

function renderFullInventory() {
    const grid = document.getElementById('full-inventory');
    grid.innerHTML = '';

    // Get unique groups
    const groups = [...new Set(cardPool.map(c => c.group))];

    groups.forEach(groupName => {
        // Create Group Header
        const header = document.createElement('h3');
        header.className = 'group-header';
        header.innerText = groupName;
        grid.appendChild(header);

        // Create Container for this group
        const groupContainer = document.createElement('div');
        groupContainer.className = 'group-container';

        // Filter cards for this group
        const groupCards = cardPool.filter(c => c.group === groupName);

        groupCards.forEach(cardDef => {
            // Check ownership details
            // We need to find *all* instances of this card in inventory to allow selling specific ones?
            // Actually, for a binder view, usually we show ONE card slot. 
            // If user has duplicates, we show "x3". Selling would be "Sell 1".
            // Since our sell logic uses INDEX in inventory array, this is tricky.
            // Let's find specific indices for this card ID.
            const ownedIndices = state.inventory
                .map((c, i) => (c.id === cardDef.id ? i : -1))
                .filter(i => i !== -1);

            const isUnlocked = ownedIndices.length > 0;
            const count = ownedIndices.length;

            const el = document.createElement('div');
            el.className = `mini-card binder-card ${isUnlocked ? `card-rarity-${cardDef.rarity}` : 'locked'}`;

            if (isUnlocked) {
                // UNLOCKED STATE
                el.onclick = () => showCardDetails(cardDef.id);
                el.style.cursor = 'pointer';
                el.innerHTML = `
                    <div class="card-inner-view">
                        <div class="card-count-badge">x${count}</div>
                        <img src="${cardDef.img || `assets/${cardDef.id}.jpg`}" class="full-card-img" onerror="this.onerror=null; this.src='assets/placeholder_${cardDef.gender === 'M' ? 'male' : 'female'}.jpg'">
                        <div class="img-fallback" style="display:none; font-size:2rem;">🎵</div>
                        <span class="card-name">${cardDef.name}</span>
                    </div>
                `;
            } else {
                // LOCKED STATE (No Click)
                el.innerHTML = `
                    <div class="card-inner-view locked-view">
                         <div class="lock-icon">🔒</div>
                         <span class="card-name">???</span>
                         <span class="card-rarity-badge" style="position:static; margin-top:5px; background:#555;">${cardDef.rarity}</span>
                    </div>
                `;
            }
            groupContainer.appendChild(el);
        });

        grid.appendChild(groupContainer);
    });
}

// Check details logic
function showCardDetails(cardId) {
    let cardDef = cardPool.find(c => c.id === cardId);
    if (!cardDef) {
        // Fallback: Check lightsticks
        cardDef = lightsticks.find(c => c.id === cardId);
        if (!cardDef) {
            // Fallback: Check albums
            cardDef = albums.find(c => c.id === cardId);
        }
    }
    if (!cardDef) return;

    // Calculate ownership
    const ownedIndices = state.inventory
        .map((c, i) => (c.id === cardDef.id ? i : -1))
        .filter(i => i !== -1);

    const count = ownedIndices.length;

    const container = document.getElementById('details-view-container');
    document.getElementById('card-details-modal').classList.remove('hidden');

    let sellButtonHTML = '';
    if (count > 0) {
        let value = 10;
        if (cardDef.rarity === 'Rare') value = 50;
        if (cardDef.rarity === 'Epic') value = 200;
        if (cardDef.rarity === 'Legendary') value = 1000;
        if (cardDef.rarity === 'Secret') value = 2500;
        if (cardDef.rarity === 'Golden') value = 5000;


        if (cardDef.rarity === 'Golden') value = 5000;


        // We sell the FIRST instance found (ownedIndices[0])
        // Need to wrap sell call to re-render details after selling
        sellButtonHTML = `
            <div class="sell-section">
                <p>Sell Value: <span style="color:gold; font-weight:bold;">${value} 🌟</span></p>
                <button class="action-btn sell-action-btn" onclick="sellCardFromDetails('${cardDef.id}')">Sell One Payload</button>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="details-layout">
            <div class="details-image-container card-rarity-${cardDef.rarity}">
                <img src="${cardDef.img || `assets/${cardDef.id}.jpg`}" class="details-img" onerror="this.onerror=null; this.src='assets/placeholder_${cardDef.gender === 'M' ? 'male' : 'female'}.jpg'">
            </div>
            <div class="details-info">
                <h2>${cardDef.name}</h2>
                <p class="rarity-tag">${cardDef.rarity}</p>
                <p class="group-tag" style="margin-bottom: 0.2rem;">${cardDef.group}</p>
                ${cardDef.source ? `<p class="source-tag" style="color:var(--primary-pink); font-size:0.9em; font-weight:bold; margin-bottom: 0.2rem;">${cardDef.source}</p>` : ''}
                ${cardDef.type ? `<p class="type-tag" style="color:#aaa; font-size:0.9em; margin:0.3rem 0;">${cardDef.type}</p>` : ''}
                <p class="count-tag">Owned: ${count}</p>
                <hr style="border-color:rgba(255,255,255,0.1); width:100%; margin:1rem 0;">
                ${sellButtonHTML}
            </div>
        </div>
    `;
}

window.sellCardFromDetails = function (cardId) {
    // Find first index
    const index = state.inventory.findIndex(c => c.id === cardId);
    if (index === -1) return;

    sellCard(index); // This handles logic + saving + global UI Updates

    // Re-render details to update count (or close if 0? Let's keep open but update count)
    showCardDetails(cardId);

    // Refresh lightstick modal if it's open
    if (!document.getElementById('lightstick-modal').classList.contains('hidden')) {
        renderLightsticks();
    }
    // Refresh album modal if it's open
    if (document.getElementById('album-modal') && !document.getElementById('album-modal').classList.contains('hidden')) {
        renderAlbums();
    }
};

function closeDetailsModal() {
    document.getElementById('card-details-modal').classList.add('hidden');
    renderFullInventory(); // Refresh binder when closing details just in case
}

// End Modal Logic

// Persistence
// Persistence
function saveGame() {
    // Disabled at user request: Game resets on refresh
    // localStorage.setItem('kpopClickerSave', JSON.stringify(saveState));
}

function loadGame() {
    // Disabled at user request: Game resets on refresh
    // const saved = localStorage.getItem('kpopClickerSave');

    // Explicitly reset state to base values
    state.score = 99999999999999;
    state.coins = 99999999999999;
    state.clickPower = 1;
    state.cps = 0;
    state.inventory = [];
    state.level = 0;
    state.xp = 0;
    upgrades.forEach(u => u.count = 0);
    premiumUpgrades.forEach(u => u.count = 0);
}

// Info Modal Logic
window.showPackDetails = function (type) {
    let weights = { 'Common': 0, 'Rare': 0, 'Epic': 0, 'Legendary': 0, 'Golden': 0, 'Secret': 0 };
    let title = "Pack Rates";
    let desc = "";

    // IMPORTANT: Keep these synced with pullCard!
    if (type === 'standard') {
        title = "Standard Pack"; desc = "Basics only. No high tiers.";
        weights = { 'Common': 70, 'Rare': 25, 'Epic': 5, 'Legendary': 0, 'Secret': 0, 'Golden': 0 };
    } else if (type === 'super') {
        title = "Super Fan Pack"; desc = "Chance for Legendary!";
        weights = { 'Common': 55, 'Rare': 30, 'Epic': 13, 'Legendary': 2, 'Secret': 0, 'Golden': 0 };
    } else if (type === 'platinum') {
        title = "Platinum Pack"; desc = "No Commons. High Rare chance.";
        weights = { 'Common': 35, 'Rare': 35, 'Epic': 22, 'Legendary': 6, 'Secret': 2, 'Golden': 0 };
    } else if (type === 'fan_club') {
        title = "Fan Club"; desc = "Better High Tier odds.";
        weights = { 'Common': 0, 'Rare': 35, 'Epic': 40, 'Legendary': 18, 'Secret': 6, 'Golden': 1 };
    } else if (type === 'concert') {
        title = "Concert Pack"; desc = "Guaranteed Epic or better!";
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 };
    }
    // Coins
    else if (type === 'vip') {
        title = "VIP Pack"; desc = "Equivalent to Fan Club but cheaper.";
        weights = { 'Common': 0, 'Rare': 45, 'Epic': 35, 'Legendary': 18, 'Secret': 2, 'Golden': 0 };
    } else if (type === 'elite') {
        title = "Elite Pack"; desc = "Guaranteed Epic+. Great odds.";
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 45, 'Legendary': 35, 'Secret': 18, 'Golden': 2 };
    } else if (type === 'diamond') {
        title = "Diamond Pack"; desc = "The sweet spot for Secrets.";
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 30, 'Legendary': 38, 'Secret': 21, 'Golden': 11 };
    } else if (type === 'backstage') {
        title = "Backstage Access"; desc = "Insane Legendary/Golden odds.";
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 0, 'Legendary': 45, 'Secret': 35, 'Golden': 20 };
    } else if (type === 'world_tour') {
        title = "World Tour"; desc = "Guaranteed Golden or Secret!!!!";
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 0, 'Legendary': 35, 'Secret': 40, 'Golden': 25 };
    }
    // Lightsticks
    else if (type === 'ls_std') {
        title = "LS Standard"; desc = "Standard odds.";
        weights = { 'Common': 55, 'Rare': 35, 'Epic': 9, 'Legendary': 1, 'Secret': 0, 'Golden': 0 };
    } else if (type === 'ls_prem') {
        title = "LS Premium"; desc = "No Commons.";
        weights = { 'Common': 0, 'Rare': 55, 'Epic': 30, 'Legendary': 12, 'Secret': 2, 'Golden': 1 };
    } else if (type === 'ls_ult') {
        title = "LS Ultimate"; desc = "Guaranteed Epic+. Golden chance!";
        weights = { 'Common': 0, 'Rare': 0, 'Epic': 55, 'Legendary': 30, 'Secret': 12, 'Golden': 3 };
    }

    // Generate HTML
    const content = document.getElementById('info-content');
    content.innerHTML = `
                    <p style="margin-bottom:15px; color:#ccc;">${desc}</p>
                        <table style="width:100%; text-align:left; border-collapse:collapse;">
                            <tr style="border-bottom:1px solid #444;">
                                <th style="padding:5px;">Rarity</th>
                                <th style="padding:5px; text-align:right;">Chance</th>
                            </tr>
                            ${Object.keys(weights).map(r => {
        const chance = weights[r];
        if (chance <= 0) return '';

        const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
        const percent = ((chance / totalWeight) * 100).toFixed(2);

        // Colors
        let color = '#ccc';
        if (r === 'Rare') color = '#4af';
        if (r === 'Epic') color = '#d0f';
        if (r === 'Legendary') color = 'gold';
        if (r === 'Golden') color = '#ffd700; text-shadow:0 0 5px orange';
        if (r === 'Secret') color = '#ff00ff';

        return `
                    <tr>
                        <td style="padding:5px; color:${color};">${r}</td>
                        <td style="padding:5px; text-align:right;">${percent}%</td>
                    </tr>
                `;
    }).join('')}
                        </table>
                `;

    document.getElementById('info-title').innerText = title;
    document.getElementById('info-modal').classList.remove('hidden');
};

window.closeInfoModal = function () {
    document.getElementById('info-modal').classList.add('hidden');
};

// Pack Opening Animation Functions
function showPackOpeningAnimation(packType) {
    const modal = document.getElementById('pack-opening-modal');
    const packVisual = document.getElementById('pack-visual');
    const cardRevealContainer = document.getElementById('card-reveal-container');
    const particlesContainer = document.getElementById('pack-particles');

    // Reset state
    packVisual.classList.remove('hidden');
    cardRevealContainer.classList.add('hidden');
    cardRevealContainer.innerHTML = '';
    particlesContainer.innerHTML = '';

    // Show modal
    modal.classList.remove('hidden');

    // Set pack icon based on type
    const packIcon = packVisual.querySelector('.pack-icon');
    const packIcons = {
        'standard': '🎫',
        'super': '💖',
        'vip': '👑',
        'elite': '💎',
        'platinum': '💿',
        'diamond': '🔮',
        'backstage': '🕶️',
        'debut_single': '💿',
        'mini_album': '📀',
        'full_album': '🎵',
        'repackage': '🎼',
        'collectors_box': '📦'
    };
    packIcon.textContent = packIcons[packType] || '🎁';

    // Pull the card (but don't show it yet)
    const pulledCard = pullCard(packType);

    // Store for later use
    modal.dataset.pulledCard = JSON.stringify(pulledCard);
    modal.dataset.packType = packType;

    // Add click handler to open pack
    packVisual.onclick = () => openPack(pulledCard, packType);
}

function openPack(pulledCard, packType) {
    const modal = document.getElementById('pack-opening-modal');
    const packVisual = document.getElementById('pack-visual');
    const cardRevealContainer = document.getElementById('card-reveal-container');
    const particlesContainer = document.getElementById('pack-particles');

    // Hide pack visual
    packVisual.classList.add('hidden');
    packVisual.onclick = null;

    // Add rarity class to modal for particle colors
    modal.className = 'pack-modal rarity-' + pulledCard.rarity;

    // Create particles explosion
    createParticles(particlesContainer, pulledCard.rarity);

    // Show card after a short delay
    setTimeout(() => {
        revealCard(pulledCard, cardRevealContainer);

        // XP Reward based on Rarity
        let xpReward = 0;
        if (pulledCard.rarity === 'Common') xpReward = 10;
        else if (pulledCard.rarity === 'Rare') xpReward = 20;
        else if (pulledCard.rarity === 'Epic') xpReward = 50;
        else if (pulledCard.rarity === 'Legendary') xpReward = 100;
        else if (pulledCard.rarity === 'Secret') xpReward = 500;
        else if (pulledCard.rarity === 'Golden') xpReward = 1000; // Golden is the rarest, should give most XP


        gainXp(xpReward);
        saveGame();
    }, 500);
}

function createParticles(container, rarity) {
    // Augmentation significative du nombre de particules pour les hautes raretés
    let particleCount = 50;
    if (rarity === 'Epic') particleCount = 120;
    else if (rarity === 'Legendary') particleCount = 200;
    else if (rarity === 'Secret') particleCount = 300;
    else if (rarity === 'Golden') particleCount = 600; // Ultra massive for Golden

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position from center
        const angle = (Math.PI * 2 * i) / particleCount;
        let velocity = 100 + Math.random() * 300;

        // Augmenter la vélocité pour les raretés élevées
        if (rarity === 'Epic') velocity *= 1.3;
        else if (rarity === 'Legendary') velocity *= 1.5;
        else if (rarity === 'Secret') velocity *= 1.8;
        else if (rarity === 'Golden') velocity *= 2.5; // Spectacular speed for Golden

        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.animationDelay = `${Math.random() * 0.2}s`;

        // Taille variable pour plus de dynamisme
        const size = 8 + Math.random() * 12;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        container.appendChild(particle);

        // Remove after animation
        setTimeout(() => particle.remove(), 2500);
    }

    // Ajouter des rayons de lumière pour Epic, Legendary, Secret et Golden
    if (['Epic', 'Legendary', 'Secret', 'Golden'].includes(rarity)) {
        createLightRays(container, rarity);
    }

    // Ajouter un effet de vague d'énergie pour Legendary, Secret et Golden
    if (['Legendary', 'Secret', 'Golden'].includes(rarity)) {
        createEnergyWaves(container, rarity);
    }

    // Effet de secousse d'écran spécial pour Golden
    if (rarity === 'Golden') {
        const modal = document.getElementById('pack-opening-modal');
        modal.classList.add('screen-shake');
        setTimeout(() => modal.classList.remove('screen-shake'), 2000);
    }
}

function createLightRays(container, rarity) {
    let rayCount = 8;
    if (rarity === 'Epic') rayCount = 8;
    else if (rarity === 'Legendary') rayCount = 12;
    else if (rarity === 'Secret') rayCount = 16;
    else if (rarity === 'Golden') rayCount = 32; // Spectacular rays for Golden

    for (let i = 0; i < rayCount; i++) {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        ray.style.transform = `rotate(${(360 / rayCount) * i}deg)`;
        ray.style.animationDelay = `${i * 0.05}s`;
        container.appendChild(ray);

        setTimeout(() => ray.remove(), 2500);
    }
}

function createEnergyWaves(container, rarity) {
    let waveCount = 0;
    if (rarity === 'Legendary') waveCount = 3;
    else if (rarity === 'Secret') waveCount = 5;
    else if (rarity === 'Golden') waveCount = 10; // Massive waves for Golden

    for (let i = 0; i < waveCount; i++) {
        const wave = document.createElement('div');
        wave.className = 'energy-wave';
        wave.style.animationDelay = `${i * 0.3}s`;
        container.appendChild(wave);

        setTimeout(() => wave.remove(), 3000);
    }
}

function revealCard(card, container) {
    container.classList.remove('hidden');

    // Ajouter une classe spéciale pour les animations premium
    const premiumClass = ['Epic', 'Legendary', 'Secret', 'Golden'].includes(card.rarity) ? 'premium-reveal' : '';

    container.innerHTML = `
        <div class="revealed-card card-rarity-${card.rarity} ${premiumClass}">
            <div class="card-rarity-badge">${card.rarity}</div>
            <img src="${card.img || `assets/${card.id}.jpg`}" class="card-img" onerror="this.onerror=null; this.src='assets/placeholder_${card.gender === 'M' ? 'male' : 'female'}.jpg'">
            <div class="card-name">${card.name}<br><span style="font-size:0.6em; color:#ddd; font-weight:normal;">${card.group || ''}</span>${card.source ? `<br><span style="font-size:0.55em; color:#bbb; font-weight:normal;">${card.source}</span>` : ''}</div>
        </div>
        <div class="card-reveal-actions">
            <button class="reveal-action-btn reveal-close-btn" onclick="closePackOpeningModal()">Continue</button>
        </div>
    `;

    // Update the old reveal area too (for consistency)
    const revealContainer = document.getElementById('latest-pull');
    revealContainer.classList.remove('hidden');
    revealContainer.innerHTML = `
        <div class="card-reveal card-rarity-${card.rarity}">
            <div class="card-rarity-badge">${card.rarity}</div>
            <img src="${card.img || `assets/${card.id}.jpg`}" class="card-img" onerror="this.onerror=null; this.src='assets/placeholder_${card.gender === 'M' ? 'male' : 'female'}.jpg'">
            <div class="card-name">${card.name}<br><span style="font-size:0.6em; color:#ddd; font-weight:normal;">${card.group || ''}</span>${card.source ? `<br><span style="font-size:0.55em; color:#bbb; font-weight:normal;">${card.source}</span>` : ''}</div>
        </div>
    `;

    // Update full inventory if modal is open
    if (!document.getElementById('collection-modal').classList.contains('hidden')) {
        renderFullInventory();
    }
}

window.closePackOpeningModal = function () {
    const modal = document.getElementById('pack-opening-modal');
    const packVisual = document.getElementById('pack-visual');

    modal.classList.add('hidden');
    packVisual.classList.remove('hidden');
    modal.className = 'pack-modal hidden';
};

// Lightstick Modal Logic
window.openLightstickModal = function () {
    document.getElementById('lightstick-modal').classList.remove('hidden');
    renderLightsticks();
}

window.closeLightstickModal = function () {
    document.getElementById('lightstick-modal').classList.add('hidden');
}

// Album Modal Logic
window.openAlbumModal = function () {
    document.getElementById('album-modal').classList.remove('hidden');
    renderAlbums();
};

window.closeAlbumModal = function () {
    document.getElementById('album-modal').classList.add('hidden');
};

function renderAlbums() {
    const grid = document.getElementById('album-grid');
    grid.innerHTML = '';

    // Get unique groups from albums
    const groups = [...new Set(albums.map(a => a.group))];

    groups.forEach(groupName => {
        // Create Group Header
        const header = document.createElement('h3');
        header.className = 'group-header';
        header.innerText = groupName;
        grid.appendChild(header);

        // Create Container for this group
        const groupContainer = document.createElement('div');
        groupContainer.className = 'group-container';

        // Filter albums for this group
        const groupAlbums = albums.filter(a => a.group === groupName);

        groupAlbums.forEach(item => {
            // Check ownership
            const ownedIndices = state.inventory
                .map((c, i) => (c.id === item.id ? i : -1))
                .filter(i => i !== -1);

            const count = ownedIndices.length;
            const isOwned = count > 0;

            const el = document.createElement('div');
            // Use binder-card class for consistent styling with idol cards
            el.className = `binder-card ${isOwned ? '' : 'locked'} card-rarity-${item.rarity}`;

            let content = '';
            if (isOwned) {
                el.onclick = () => showCardDetails(item.id);
                el.style.cursor = 'pointer';
                content = `
                    <div class="card-inner-view">
                        <div class="card-count-badge">x${count}</div>
                        <img src="${item.img}" class="full-card-img" onerror="this.onerror=null; this.src='assets/default_album.png'">
                        <div class="card-name">${item.name}<br><span style="font-size:0.7em; color:#bbb; font-weight:normal;">${item.source || item.type}</span></div>
                    </div>
                `;
            } else {
                // Locked View
                content = `
                    <div class="card-inner-view locked-view">
                        <div class="lock-icon">🔒</div>
                        <div class="card-name">???<br><span style="font-size:0.8em; color:#666;">Unknown</span></div>
                    </div>
                `;
            }

            el.innerHTML = content;
            groupContainer.appendChild(el);
        });

        grid.appendChild(groupContainer);
    });
}

function renderLightsticks() {
    const grid = document.getElementById('lightstick-grid');
    grid.innerHTML = '';

    lightsticks.forEach(item => {
        // Check ownership
        // Find indices of this lightstick in inventory
        const ownedIndices = state.inventory
            .map((c, i) => (c.id === item.id ? i : -1))
            .filter(i => i !== -1);

        const count = ownedIndices.length;
        const isOwned = count > 0;

        const el = document.createElement('div');
        el.className = `lightstick-card ${isOwned ? '' : 'locked'} card-rarity-${item.rarity}`;

        let content = '';
        if (isOwned) {
            el.onclick = () => showCardDetails(item.id);
            el.style.cursor = 'pointer';
            content = `
                <div class="card-count-badge">x${count}</div>
                <div class="card-rarity-badge">${item.rarity}</div>
                <img src="${item.img}" onerror="this.onerror=null; this.src='assets/placeholder_lightstick.jpg'">
                <div class="card-name">${item.name}<br><span style="font-size:0.8em; color:#ccc;">${item.group}</span></div>
            `;
        } else {
            // Locked View
            content = `
                <img src="${item.img}" style="filter:blur(5px);">
                <div class="card-name">???<br><span style="font-size:0.8em; color:#666;">Unknown Group</span></div>
            `;
        }

        el.innerHTML = content;
        grid.appendChild(el);
    });
}


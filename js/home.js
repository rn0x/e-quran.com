import loadJson from './loadJson.js';

export default async () => {

    let home_page = document.getElementById("home_page");

    if (home_page) {

        /**
         * ايآت عشوائية
         */

        let quran_verses_ar = document.getElementById("quran_verses_ar");
        let quran_verses_en = document.getElementById("quran_verses_en");
        let quran_verses_surah_number = document.getElementById("quran_verses_surah_number");
        let quran_verses_surah_name = document.getElementById("quran_verses_surah_name");
        let quran_verses_copy = document.getElementById("quran_verses_copy");
        let quran_verses_update = document.getElementById("quran_verses_update");
        let quran_verses_copy_notice = document.getElementById("quran_verses_copy_notice");
        let Quran_Json = await loadJson("/files/json/quran.json");
        let Quran_Json_Random = Quran_Json[Math.floor(Math.random() * Quran_Json.length)];
        let Quran_Json_Random_Arr = Quran_Json_Random.array_verses[0][Math.floor(Math.random() * Quran_Json_Random.array_verses[0].length)];

        quran_verses_ar.innerText = Quran_Json_Random_Arr.ar;
        quran_verses_en.innerText = Quran_Json_Random_Arr.en;
        quran_verses_surah_number.innerText = Quran_Json_Random_Arr.id;
        quran_verses_surah_name.innerText = Quran_Json_Random.name;

        quran_verses_copy.onclick = () => {

            let copy = "# الآية باللغة العربية \n\n"
            copy += `${quran_verses_ar.innerText}\n\n\n`
            copy += "# الآية باللغة الإنجليزية \n\n"
            copy += `${quran_verses_en.innerText}\n\n\n`
            copy += `سورة ${quran_verses_surah_name.innerText} رقم الآية ${quran_verses_surah_number.innerText} \n\n\n`
            copy += 'موقع : المصحف الإلكتروني | https://e-quran.com'

            navigator.clipboard.writeText(copy);

            // إشعار بالنسخ
            quran_verses_copy_notice.style.display = 'block'

            setTimeout(() => {

                // إختفاء الإشعار بعد ثانية
                quran_verses_copy_notice.style.display = 'none'
            }, 1000);
        }

        quran_verses_update.onclick = async () => {

            let Quran_Json = await loadJson("/files/json/quran.json");
            let Quran_Json_Random = Quran_Json[Math.floor(Math.random() * Quran_Json.length)];
            let Quran_Json_Random_Arr = Quran_Json_Random.array_verses[0][Math.floor(Math.random() * Quran_Json_Random.array_verses[0].length)];

            quran_verses_ar.innerText = Quran_Json_Random_Arr.ar;
            quran_verses_en.innerText = Quran_Json_Random_Arr.en;
            quran_verses_surah_number.innerText = Quran_Json_Random_Arr.id;
            quran_verses_surah_name.innerText = Quran_Json_Random.name;

        }


        /**
         * سور عشوائية
         */

        let surah_random_title_name = document.getElementById("surah_random_title_name");
        let surah_random_audio = document.getElementById("surah_random_audio");
        let surah_random_name = document.getElementById("surah_random_name");
        let surah_random_update = document.getElementById("surah_random_update");
        let Mp3quran = await loadJson("/files/json/mp3quran.json");
        let Mp3quran_Random = Mp3quran[Math.floor(Math.random() * Mp3quran.length)];
        let Mp3quran_Audio_Random = Mp3quran_Random.audio[Math.floor(Math.random() * Mp3quran_Random.audio.length)];

        surah_random_title_name.innerText = Mp3quran_Random.name;
        surah_random_audio.src = Mp3quran_Audio_Random.link;
        surah_random_name.innerText = `سورة ${Mp3quran_Audio_Random.name}`;

        surah_random_update.onclick = async () => {
            let Mp3quran = await loadJson("/files/json/mp3quran.json");
            let Mp3quran_Random = Mp3quran[Math.floor(Math.random() * Mp3quran.length)];
            let Mp3quran_Audio_Random = Mp3quran_Random.audio[Math.floor(Math.random() * Mp3quran_Random.audio.length)];

            surah_random_title_name.innerText = Mp3quran_Random.name;
            surah_random_audio.src = Mp3quran_Audio_Random.link;
            surah_random_name.innerText = `سورة ${Mp3quran_Audio_Random.name}`;
        }

        /**
         * أذكار عشوائية
         */

        let adhkar_random_text = document.getElementById("adhkar_random_text");
        let adhkar_random_audio = document.getElementById("adhkar_random_audio");
        let adhkar_random_title = document.getElementById("adhkar_random_title");
        let adhkar_random_count = document.getElementById("adhkar_random_count");
        let adhkar_random_ul = document.getElementById("adhkar_random_ul");
        let adhkar_random_notice = document.getElementById("adhkar_random_notice");
        let adhkar_random_copy = document.getElementById("adhkar_random_copy");
        let adhkar_random_update = document.getElementById("adhkar_random_update");
        let Adhkar = await loadJson("/files/json/hisnmuslim.json");
        let Adhkar_Random = Adhkar[Math.floor(Math.random() * Adhkar.length)];
        let Adhkar_Audio_Random = Adhkar_Random.array[Math.floor(Math.random() * Adhkar_Random.array.length)];

        adhkar_random_text.innerText = Adhkar_Audio_Random.text;
        adhkar_random_audio.src = Adhkar_Audio_Random.audio;
        adhkar_random_title.innerText = Adhkar_Random.category;
        adhkar_random_count.innerText = Adhkar_Audio_Random.count;

        adhkar_random_copy.onclick = () => {

            let copy = `# ${adhkar_random_title.innerText} \n\n`
            copy += `${adhkar_random_text.innerText}\n\n\n`
            copy += `# رابط الملف الصوتي \n\n`
            copy += `${adhkar_random_audio.src}\n\n\n`
            copy += `${adhkar_random_ul.innerText} \n\n\n`
            copy += 'موقع : المصحف الإلكتروني | https://e-quran.com'

            navigator.clipboard.writeText(copy);

            // إشعار بالنسخ
            adhkar_random_notice.style.display = 'block'

            setTimeout(() => {

                // إختفاء الإشعار بعد ثانية
                adhkar_random_notice.style.display = 'none'
            }, 1000);


        }

        adhkar_random_update.onclick = async () => {
            let Adhkar = await loadJson("/files/json/hisnmuslim.json");
            let Adhkar_Random = Adhkar[Math.floor(Math.random() * Adhkar.length)];
            let Adhkar_Audio_Random = Adhkar_Random.array[Math.floor(Math.random() * Adhkar_Random.array.length)];

            adhkar_random_text.innerText = Adhkar_Audio_Random.text;
            adhkar_random_audio.src = Adhkar_Audio_Random.audio;
            adhkar_random_title.innerText = Adhkar_Random.category;
            adhkar_random_count.innerText = Adhkar_Audio_Random.count;
        }

    }

}
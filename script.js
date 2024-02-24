const quizData = [
    {
        question: "Pemberontakan Andi Azis terjadi di wilayah mana?",
        a: "Sumatera Selatan",
        b: "Sulawesi Selatan",
        c: "Jawa Tengah",
        d: "Kalimantan Barat",
        correct: "b",
    },

    {
        question: "Apa penyebab utama dari Pemberontakan Andi Azis?",
        a: "Ketidakpuasan terhadap kebijakan ekonomi pemerintah",
        b: "Penolakan terhadap pengaruh agama asing",
        c: "Konflik antara suku-suku di wilayah Sulawesi Selatan",
        d: "Desakan untuk otonomi daerah",
        correct: "a",
    },
    
    {
        question: "Tanggal berapa Pemberontakan Andi Azis dimulai?",
        a: "1 Januari 1953",
        b: "5 Januari 1953",
        c: "10 Januari 1953",
        d: "15 Januari 1953",
        correct: "b",
    },

    {
        question: "Apakah hasil akhir dari Pemberontakan Andi Azis?",
        a: "Pemberontakan berhasil dan wilayah Sulawesi Selatan merdeka",
        b: "Pemberontakan berhasil dan Andi Azis menjadi pemimpin daerah",
        c: "Pemberontakan berhasil namun Andi Azis akhirnya ditangkap dan dihukum mati",
        d: "Pemberontakan gagal dan Andi Azis melarikan diri ke luar negeri",
        correct: "c",
    },

    {
        question: "Siapakah yang diangkat menjadi Gubernur Sulawesi Selatan setelah Pemberontakan Andi Azis?",
        a: "Andi Mappatunru",
        b: "Andi Azis",
        c: "Andi Pangeran",
        d: "Andi Djemma",
        correct: "a",
    },

    {
        question: "Apakah peran pemerintah Indonesia dalam menanggapi Pemberontakan Andi Azis?",
        a: "Menawarkan negosiasi dan memberikan otonomi kepada wilayah Sulawesi Selatan",
        b: "Menyalurkan bantuan ekonomi dan pembangunan kepada wilayah yang pemberontakan",
        c: "Menerima tuntutan dari pemberontak dan mengakui kemerdekaan wilayah tersebut",
        d: "Mengerahkan pasukan militer untuk menghancurkan pemberontakan",
        correct: "d",
    },

    {
        question: "Siapakah yang memimpin Perlawanan Pemberontakan Andi Azis?",
        a: "Prabowo",
        b: "Kolonel Alex Kawilarang",
        c: "Soeharto",
        d: "Sutan Syahrir",
        correct: "b",
    },

    {
        question: "Bagaimana tanggapan masyarakat Indonesia terhadap Pemberontakan Andi Azis?",
        a: "Dukungan luas kepada pemberontakan sebagai bentuk perlawanan terhadap pemerintah",
        b: "Mengadakan demonstrasi besar-besaran untuk mendukung pemberontakan",
        c: "Netral dan tidak terlibat dalam konflik antara pemerintah dan pemberontak",
        d: "Banyak yang menentang pemberontakan karena dianggap mengganggu stabilitas nasional",
        correct: "d",
    },

    {
        question: "Apa dampak dari Pemberontakan Andi Azis terhadap stabilitas politik Indonesia pada saat itu?",
        a: "Membuat pemerintah pusat harus lebih waspada terhadap potensi pemberontakan di daerah-daerah lain",
        b: "Membuat pemerintah pusat terpaksa mengakui otonomi wilayah-wilayah lain di Indonesia",
        c: "Meningkatkan stabilitas politik dengan menghilangkan oposisi di wilayah Sulawesi Selatan",
        d: "Merusak stabilitas politik dan menyebabkan krisis ekonomi di Indonesia",
        correct: "a",
    },

    {
        question: "Bagaimana penilaian sejarah terhadap Pemberontakan Andi Azis?",
        a: "Dianggap sebagai langkah yang penting dalam perjuangan kemerdekaan Indonesia",
        b: "Dianggap sebagai tindakan yang melanggar hukum dan mengganggu kestabilan negara",
        c: "Dianggap sebagai peristiwa kecil yang tidak berpengaruh dalam sejarah Indonesia",
        d: "Dianggap sebagai contoh positif dari perlawanan terhadap pemerintah pusat",
        correct: "b",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question 
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else{
            quiz.innerHTML = `
            <h2>Kamu telah menjawab ${score}/${quizData.length} pertanyaan dengan benar</h2>

            <button onclick="location.reload()">Ulangi</button>
            <button class="button-quiz" onclick="window.location.href='index.html'">Kembali Belajar</button>
            `
        }
    }
})
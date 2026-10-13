/* ============================================================
   EXPONER CUP 2026 — main.js
   1) Render ikon lucide
   2) Countdown timer
   3) Data divisi (panduan per lomba)
   4) Render halaman divisi: Guidebook, Juknis, Pendaftaran,
      Surat Undangan + WhatsApp (mengikuti pola ppexponer.carrd.co)
   ============================================================ */

// 1) Render icon lucide
if (window.lucide) {
    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
    });
}

// ============================================================
// 2) COUNTDOWN TIMER
// ============================================================

const EVENT_DATE = '2026-10-17T08:00:00+07:00';

function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    const eventTime = new Date(EVENT_DATE).getTime();

    const pad = (n) => String(n).padStart(2, '0');

    function tick() {
        const now = Date.now();
        const diff = Math.max(0, eventTime - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (diff % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
            (diff % (1000 * 60)) / 1000
        );

        daysEl.textContent = pad(days);
        hoursEl.textContent = pad(hours);
        minutesEl.textContent = pad(minutes);
        secondsEl.textContent = pad(seconds);
    }

    tick();
    setInterval(tick, 1000);
}

// ============================================================
// 3) DATA DIVISI
//    links: isi dengan link Guidebook / Juknis / Formulir
//    Pendaftaran / Surat Undangan milik panitia.
// ============================================================
const DIVISI_DATA = {
    ml: {
        slug: 'ml',
        name: 'Mobile Legends',
        category: 'E-Sports',
        image: '../../assets/images/mobile-legends.WebP',
desc: 'Turnamen Mobile Legends 5v5 antar sekolah. Adu strategi dan koordinasi tim untuk membawa trofi EXPONER CUP 2026!',
        wa: '6287822115106',
        cp: 'Hafidzh',
        cpNumber: '878-2211-5106',
        links: {
            guidebook: '../../pages/guidebook.html',
            juknis: '../../assets/documents/juknis-ml.pdf',
            pendaftaran: 'https://forms.gle/RDZWqMXLsi6o4xMe7',
            undangan_smp: '../../assets/documents/surat-undangan-smp.pdf',
            undangan_sma: '../../assets/documents/surat-undangan-sma.pdf'
        }
    },
    ff: {
        slug: 'ff',
        name: 'Free Fire',
        category: 'E-Sports',
        image: '../../assets/images/free-fire.WebP',
desc: 'Turnamen Free Fire Squad mode Battle Royale. Squad terakhir yang bertahan adalah juaranya!',
        wa: '62881024960130',
        cp: 'Sulis',
        cpNumber: '881-0249-60130',
        links: {
            guidebook: '../../pages/guidebook.html',
            juknis: '../../assets/documents/juknis-ff.pdf',
            pendaftaran: 'https://forms.gle/Xvkxtyvrkz5WvAG39',
            undangan_smp: '../../assets/documents/surat-undangan-smp.pdf',
            undangan_sma: '../../assets/documents/surat-undangan-sma.pdf'
        }
    },
    basket: {
        slug: 'basket',
        name: 'Basket Putra & Putri',
        category: 'Olahraga',
        image: '../../assets/images/basket.WebP',
desc: 'Kompetisi bola basket kategori Putra dan Putri dengan sistem setengah kompetisi.',
        wa: '6288905862768',
        cp: 'Afiyah',
        cpNumber: '889-0586-2768',
        links: {
            guidebook: '../../pages/guidebook.html',
            juknis: '../../assets/documents/juknis-basket.pdf',
            pendaftaran: 'https://forms.gle/oaRyL5y5e26njkPRA',
            undangan_smp: '../../assets/documents/surat-undangan-smp.pdf',
            undangan_sma: '../../assets/documents/surat-undangan-sma.pdf'
        }
    },
    shortmovie: {
        slug: 'shortmovie',
        name: 'Video Competition',
        category: 'Seni & Kreativitas',
        image: '../../assets/images/short-movie.WebP',
desc: 'Lomba pembuatan film pendek bertema bebas. Ceritakan ide dan kreativitasmu lewat visual!',
        wa: '6285795259029',
        cp: 'Dian',
        cpNumber: '857-9525-9029',
        links: {
guidebook: '../../pages/guidebook.html',
            juknis: [
                { href: '../../assets/documents/juknis-video-competition.pdf', label: 'Juknis Video Competition' },
                { href: '../../assets/documents/juknis-shortmovie.pdf', label: 'Juknis Short Movie' }
            ],
            pendaftaran: 'https://forms.gle/ejzimcXMHQ6Bn6Tt5',
            undangan_smp: '../../assets/documents/surat-undangan-smp.pdf',
            undangan_sma: '../../assets/documents/surat-undangan-sma.pdf'
        }
    },
futsal: {
        slug: 'futsal',
        name: 'Futsal',
        category: 'Olahraga',
        image: '../../assets/images/futsal.WebP',
desc: 'Kompetisi futsal 5v5 antar sekolah. Eksekusi strategi dan teamwork untuk menjadi juara!',
        wa: '6285717969762',
        cp: 'Rifal',
        cpNumber: '085717969762',
        links: {
            guidebook: '../../pages/guidebook.html',
juknis: '../../assets/documents/juknis-futsal.pdf',
            pendaftaran: 'https://forms.gle/6S6LVjcWRV64ExSRA',
            undangan_smp: '../../assets/documents/surat-undangan-smp.pdf',
            undangan_sma: '../../assets/documents/surat-undangan-sma.pdf'
        }
    },
    pmr: {
        slug: 'pmr',
        name: 'Palang Merah Remaja',
        category: 'Kepalangmerahan',
        image: '../../assets/images/pmr.WebP',
desc: 'Lomba keterampilan Palang Merah Remaja: Pertolongan Pertama, donor darah, dan tanggap bencana.',
        wa: '628988615029',
        cp: 'Keyra',
        cpNumber: '898-8615-029',
links: {
guidebook: '../../pages/guidebook.html',
            juknis: '../../assets/documents/juknis-pmr.pdf',
            pendaftaran: 'https://forms.gle/UMHosL34Ak1xNB6DA',
            undangan_smp: '../../assets/documents/surat-undangan-smp.pdf',
            undangan_sma: '../../assets/documents/surat-undangan-sma.pdf'
        }
    },
    poster: {
        slug: 'poster',
        name: 'Digital Poster',
        category: 'Desain Grafis',
        image: '../../assets/images/digital-poster.WebP',
desc: 'Lomba desain poster digital dengan tema "Energi Pemuda untuk Generasi Emas".',
        wa: '6289525086150',
        cp: 'Mita',
        cpNumber: '895-2508-6150',
        links: {
guidebook: '../../pages/guidebook.html',
juknis: '../../assets/documents/juknis-poster-terbaru.pdf',
            pendaftaran: 'https://forms.gle/tBmLhyaAHfrxv6F28',
            undangan_smp: '../../assets/documents/surat-undangan-smp.pdf',
            undangan_sma: '../../assets/documents/surat-undangan-sma.pdf'
        }
    }
};

// Definisi 4 dokumen yang tampil di setiap halaman divisi (Carrd style)
const DOC_DEFS = [
    {
        key: 'guidebook',
        icon: 'book-open',
        label: 'Guidebook',
        sub: 'Buku panduan lomba'
    },
    {
        key: 'juknis',
        icon: 'folder-open',
        label: 'Juknis',
        sub: 'Petunjuk teknis lomba'
    },
    {
        key: 'pendaftaran',
        icon: 'clipboard-list',
        label: 'Pendaftaran',
        sub: 'Formulir pendaftaran'
    },
{
        key: 'undangan_smp',
        icon: 'mail',
        label: 'Surat Undangan SMP',
        sub: 'Surat resmi panitia'
    },
    {
        key: 'undangan_sma',
        icon: 'mail',
        label: 'Surat Undangan SMA',
        sub: 'Surat resmi panitia'
    }
];

// ============================================================
// 4) RENDER HALAMAN DIVISI (divisi-<slug>.html)
// ============================================================
function renderDivisionPage() {
    const slug = window.PAGE_SLUG;
    const data = DIVISI_DATA[slug];
    if (!data) {
        document.title = 'Divisi tidak ditemukan — EXPONER CUP 2026';
        const hero = document.getElementById('divisionHero');
        if (hero) hero.textContent = 'Maaf, halaman divisi ini tidak ditemukan.';
        return;
    }

    document.title = `${data.name} — EXPONER CUP 2026`;

    // Header divisi
    const hero = document.getElementById('divisionHero');
    if (hero) {
        hero.style.display = 'flex';
        hero.innerHTML = `
            <div class="division-hero-image">
                <img src="${data.image}" alt="${data.name}" width="1400" height="1400" fetchpriority="high" decoding="async">
            </div>
            <div class="division-hero-text">
                <span class="division-tag">${data.category}</span>
                <h1 class="division-hero-title">${data.name}</h1>
                <p class="division-hero-desc">${data.desc}</p>
            </div>
        `;
    }

    // 4 dokumen: Guidebook / Juknis / Pendaftaran / Surat Undangan
    const list = document.getElementById('docsList');
    if (list) {
        list.innerHTML = DOC_DEFS.flatMap((doc) => {
            const raw = (data.links && data.links[doc.key]) || '';
            const items = Array.isArray(raw) ? raw : [raw];
            return items.map((it) => {
                const href = it && typeof it === 'object' ? (it.href || '') : (it || '');
            const ready = href && href !== '#';
            const itemCls = ready ? 'docs-item' : 'docs-item soon';
            const label = ready ? (it && typeof it === 'object' && it.label ? it.label : doc.label) : `${doc.label} — Segera`;
            const sub = ready ? (it && typeof it === 'object' && it.sub ? it.sub : doc.sub) : 'Tautan akan segera tersedia';
            const arrow = ready
                ? '<span class="docs-arrow"><i data-lucide="arrow-up-right"></i></span>'
                : '<span class="docs-arrow soon"><i data-lucide="lock"></i></span>';
            return `
                <a class="${itemCls}" href="${ready ? href : '#divisi'}" ${ready && doc.key !== 'guidebook' ? 'target="_blank" rel="noopener"' : ''}>
                    <span class="docs-icon"><i data-lucide="${doc.icon}"></i></span>
                    <span class="docs-text">
                        <strong>${label}</strong>
                        <small>${sub}</small>
                    </span>
                    ${arrow}
                </a>
            `;
            }).join('');
        }).join('');
    }

// Kontak WhatsApp panitia divisi
    const wa = document.getElementById('waLink');
    if (wa && data.wa) {
        const msg = encodeURIComponent(`Halo panitia EXPONER CUP 2026, saya ingin bertanya tentang ${data.name}.`);
        wa.href = `https://wa.me/${data.wa}?text=${msg}`;
        const waText = wa.querySelector('.wa-text');
        if (waText) {
            waText.innerHTML = data.cp
                ? `<strong>Contact Person: ${data.cp}</strong><small>${data.cpNumber || data.wa}</small>`
                : 'Kontak Panitia';
        }
    }

    if (window.lucide) lucide.createIcons();
}

// ============================================================
// BOOTSTRAP
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();

    if (document.getElementById('divisionHero')) {
        renderDivisionPage();
    }
});

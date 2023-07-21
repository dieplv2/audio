const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const App = {
    // Menu top

    navs: [
        {
            id: 1,
            name: "Home",
            cerated_at: "2023/7",
            updated_at: "2023/7",
        },
        {
            id: 2,
            name: "About",
            cerated_at: "2023/7",
            updated_at: "2023/7",
        },
        {
            id: 1,
            name: "Sevice",
            cerated_at: "2023/7",
            updated_at: "2023/7",
        },
        {
            id: 1,
            name: "Contact",
            cerated_at: "2023/7",
            updated_at: "2023/7",
        },
        {
            id: 1,
            name: ' <i class="fas fa-search"></i>',
            cerated_at: "2023/7",
            updated_at: "2023/7",
        },
    ],

    // Sound cloud btn
    btnTop: [
        {
            number: 1,
            title: "open"
        },
        {
            number: 2,
            title: "Cut"
        },
        {
            number: 3,
            title: "save"
        },
    ],

    // Render category
    categories: [
        {
            img: './img/play.png',
            name: 'LamLo',
            path: "./music/LamLo-LeQuyen_37mvj.mp3",
        },

        {
            img: './img/play.png',
            name: 'HoaNoVeDem',
            path: "./music/HoaNoVeDem-LeQuyen-3816892.mp3",
        },
        {
            img: './img/play.png',
            name: 'HaNoiMuaVangNhungConMua',
            path: "./music/HaNoiMuaVangNhungConMua-LeQuyen_4dajf.mp3",
        },
        {
            img: './img/play.png',
            name: 'ConTimDaiKho',
            path: "./music/ConTimDaiKho-LeQuyen-2761644.mp3",
        },
        {
            img: './img/play.png',
            name: 'BienCan',
            path: "./music/BienCan-LeQuyen-2454236.mp3",
        },

        {
            img: './img/play.png',
            name: 'BaiKhongTenSo5',
            path: "./music/BaiKhongTenSo5-LeQuyen-3652851.mp3",
        },
        {
            img: './img/play.png',
            name: 'LamLo',
            path: "./music/LamLo-LeQuyen_37mvj.mp3",
        },

        {
            img: './img/play.png',
            name: 'HoaNoVeDem',
            path: "./music/HoaNoVeDem-LeQuyen-3816892.mp3",
        },
        {
            img: './img/play.png',
            name: 'HaNoiMuaVangNhungConMua',
            path: "./music/HaNoiMuaVangNhungConMua-LeQuyen_4dajf.mp3",
        },
        {
            img: './img/play.png',
            name: 'ConTimDaiKho',
            path: "./music/ConTimDaiKho-LeQuyen-2761644.mp3",
        },
        {
            img: './img/play.png',
            name: 'BienCan',
            path: "./music/BienCan-LeQuyen-2454236.mp3",
        },

        {
            img: './img/play.png',
            name: 'BaiKhongTenSo5',
            path: "./music/BaiKhongTenSo5-LeQuyen-3652851.mp3",
        },



    ],

    // Render song
    songs: [
        {
            name: "A loi",
            path: "./music/ALoi-Double2TMasew-10119691.mp3",
            Singer: "Double2T",
            Views: 1234578,
        },

        {
            name: "Cau chuyen dau nam",
            path: "./music/CauChuyenDauNam-TruongNhatSinh_3cmyj.mp3",
            Singer: "Truong Nhat Sinh",
            Views: 952421,
        },

        {
            name: "Ma lum dong tien",
            path: "./music/MaLumDongTien-ThanhLan-2433730.mp3",
            Singer: "Thanh Lam",
            Views: 52478,
        },

        {
            name: "Ong ba anh",
            path: "./music/OngBaAnhParody-LEG-4708046.mp3",
            Singer: "Length",
            Views: 9872,
        },

    ],

    // Render html
    render: function () {
        // render navbar top
        const navs = this.navs.map(function (nav) {
            return `<li><a href="">${nav.name}</a></li>`
        })
        $(".nav-list").innerHTML = navs.join('');
        // render Button
        const btnTop = this.btnTop.map(function (btn) {
            return `
                <button class="active">${btn.number}${btn.title}</button>
            `
        })
        $(".btntop").innerHTML = btnTop.join("");

        // render Categories
        const cat = this.categories.map(function (category) {
            return `
                <li class="active"><img src="${category.img}" alt=""><a href="">${category.name}</a></li>
            `
        })
        $(".cat-list").innerHTML = cat.join("");

        // List Top Ring

        const htmls = this.songs.map(function (song) {
            return `
                <li>
                <div class="controller">
                <i class="fas fa-step-backward"></i>
                <i class="far fa-play-circle"></i>
                <i class="fas fa-step-forward"></i>
                <input type="range" max="100">
                <p style="color: #fff">00:00</p>
                <audio>
                    <source src="" type="audio/mpeg">
                </audio>
                </div>
                <div class="title-song">
                    <p>${song.name}</p>
                    <i class="fas fa-star"></i>
                </div>
                <div class="footer-song">
                    <i class="fas fa-eye"></i>
                    <span>${song.Views}</span>
                </div>
            </li>
                `
        })
        $(".topring-list").innerHTML = htmls.join(" ");
    },

    // Xu ly su kien
    handleEvents: function () {

        // xu ly phan menu phone
        const iconTop = $(".icon");
        iconTop.addEventListener('click', function () {
            let x = $("#navtop");
            if (x.className === "nav-list") {
                x.className += " reponsive";
            } else {
                x.classList = 'nav-list';
            }
        })
        // xu ly su kien onscroll
        const navTop = $(".nav-top");

        document.onscroll = function () {
            const scrollTop = window.scrollY || window.documentElement.scrollY;
            if (scrollTop >= 500) {
                navTop.classList.add('sticky');
            } else {
                navTop.classList.remove('sticky')
            }
        }

        // Slider topRing
        const slides = $$(".topring li");

        let slideIndex = 1;
        showSlides(slideIndex);
 
        function plusCart(n) {
            showSlides(slideIndex += n)
        }
        console.log($(".prev"));

        function showSlides(n) {
            if(n > slides.length){slideIndex = 1};
            if(n < 1){slideIndex = slideIndex.length}

            slides.forEach(function (current, index) {
                if ($(".container").offsetWidth < 800) {
                    current.style.display = 'none';
                }
            })

            slides[slideIndex-1].style.display = 'block';
        }


    },

    // Stats App
    stats: function () {
        this.render()
        this.handleEvents()
    },
}

App.stats();
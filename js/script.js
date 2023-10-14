// تفعيل السياروسيل
var myCarousel = document.getElementById('myCarousel');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // تغيير الشريحة كل 3 ثواني
    wrap: true, // السماح بالتكرار
});

// عند تحميل الصفحة
window.onload = function () {
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
};

// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "نادي تقنية المعلومات هو مجتمع من عشاق التكنولوجيا الذين يشاركون شغفهم بتقنية المعلومات والبرمجة. نحن نوفر منصة للتعلم والتواصل والبقاء على اطلاع دائم مع أحدث الاتجاهات في عالم التكنولوجيا.";
    let index = 0;

    function type() {
        textElement.textContent += text[index];
        index++;
        if (index < text.length) {
            setTimeout(type, 50); // زمن التأخير بين كتابة حرف وآخر (50 ملي ثانية)
        }
    }

    // ابدأ تأثير الكتابة عند تحميل الصفحة
    type();
});

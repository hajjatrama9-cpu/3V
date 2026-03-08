////////////////////////////////////////////////////////////
// 1. ترحيب الزوار عند فتح الموقع (User Engagement)
////////////////////////////////////////////////////////////
window.addEventListener('load', function() {
    // نستخدم console.log بدلاً من alert في كل مرة لتجنب إزعاج المستخدم، 
    // وهذا أفضل لمعايير تجربة المستخدم UX في BTEC.
    console.log("Loving Home Hotel Website Loaded Successfully 🐾");
});


////////////////////////////////////////////////////////////
// 2. نظام السلايدر (Slideshow) - يعمل في الصفحة الرئيسية
////////////////////////////////////////////////////////////
let currentSlideIndex = 0;

function runSlideshow() {
    // نبحث عن الصور التي تحمل كلاس slide داخل حاوية السلايدر
    const allSlides = document.querySelectorAll(".slideshow-container .slide");
    
    // إذا لم تكن الصور موجودة (كما في صفحة الحجز مثلاً)، نوقف الدالة ولا نعطي خطأ
    if (allSlides.length === 0) return;

    // إخفاء جميع الصور أولاً
    allSlides.forEach(img => {
        img.style.display = "none";
        img.classList.remove('active');
    });

    // زيادة العداد وإعادة التصفير إذا وصلنا للنهاية
    currentSlideIndex++;
    if (currentSlideIndex > allSlides.length) {
        currentSlideIndex = 1;
    }

    // إظهار الصورة الحالية
    allSlides[currentSlideIndex - 1].style.display = "block";
    allSlides[currentSlideIndex - 1].classList.add('active');

    // تكرار العملية كل 3 ثوانٍ
    setTimeout(runSlideshow, 3000);
}

// تشغيل السلايدر بمجرد تحميل المحتوى
document.addEventListener('DOMContentLoaded', runSlideshow);


////////////////////////////////////////////////////////////
// 3. التحقق من نموذج الحجز (Form Validation) - صفحة Booking
////////////////////////////////////////////////////////////
function validateForm(event) {
    // منع الصفحة من إعادة التحميل لكي نتمكن من معالجة البيانات برمجياً
    event.preventDefault(); 

    // الوصول لعناصر النموذج باستخدام المعرفات (IDs) التي وضعناها في HTML
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const dateInput = document.getElementById('bookDate');

    // التحقق من وجود الحقول (لتجنب الأخطاء في الصفحات التي لا تحتوي على النموذج)
    if (!nameInput || !emailInput || !dateInput) return;

    if (nameInput.value.trim() !== "" && emailInput.value !== "" && dateInput.value !== "") {
        alert(`شكراً لكِ يا ${nameInput.value}! 🐾\nتم استلام طلب الحجز بتاريخ ${dateInput.value}.\nسنقوم بالرد على البريد: ${emailInput.value}`);
        // تفريغ الحقول بعد النجاح
        event.target.reset();
    } else {
        alert("يرجى التأكد من ملء جميع الحقول الإلزامية 🐾");
    }
}


////////////////////////////////////////////////////////////
// 4. نظام الأسئلة الشائعة (FAQ Accordion) - صفحة About
////////////////////////////////////////////////////////////
const faqHeaders = document.querySelectorAll(".faq-item h3");

faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
        // نفتح/نغلق الكلاس active عند الضغط
        const parent = header.parentElement;
        parent.classList.toggle("active");
        
        // تغيير الرمز من + إلى - (اختياري للجماليات)
        const isVisible = parent.classList.contains("active");
        console.log(`FAQ Item ${isVisible ? 'Opened' : 'Closed'}`);
    });
});


////////////////////////////////////////////////////////////
// 5. تأثيرات الحركة (Hover Effects) - الباقات والغرف
////////////////////////////////////////////////////////////
const interactiveBoxes = document.querySelectorAll('.package-box, .room-box');

interactiveBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "transform 0.3s ease-in-out";
        box.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = "scale(1)";
        box.style.boxShadow = "none";
    });
});
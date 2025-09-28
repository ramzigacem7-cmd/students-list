/* ==================== إعادة التهيئة و تنسيق عام ==================== */
* {
    margin: 0; /* إلغاء الهوامش الافتراضية */
    padding: 0; /* إلغاء الحشوات الافتراضية */
    box-sizing: border-box; /* التحكم في قياس العناصر */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* الخط الأساسي */
}

body {
    text-align: center; /* محاذاة النصوص للوسط */
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 0%, rgba(0, 212, 255, 1) 100%); /* خلفية متدرجة */
    color: black; /* لون النص */
}

/* ==================== شريط البحث ==================== */
.search {
    background: linear-gradient(blue,white); /* خلفية متدرجة */
    margin: 20px auto; /* مسافة خارجية مع توسيط */
    padding: 15px; /* مسافة داخلية */
    width: 90%; /* العرض النسبي */
    max-width: 800px; /* أقصى عرض */
    text-align: center; /* محاذاة النصوص للوسط */
    box-shadow: 2px 4px 8px rgba(0,0,0,0.2); /* ظل */
    border-radius: 20px; /* تدوير الحواف */
}

.sear {
    display: flex; /* نظام فليكس */
    flex-direction: column; /* العناصر عمودية */
    justify-content: center; /* توسيط عمودي */
    align-items: center; /* توسيط أفقي */
    gap: 10px; /* فراغ بين العناصر */
    width: 100%; /* العرض الكامل */
}

.sear input,.sear button {
    width: 80%; /* عرض نسبي */
    max-width: 300px; /* أقصى عرض */
    text-align: center; /* النص في الوسط */
}

/* ==================== نافذة إضافة/تعديل ==================== */
#tab {
    display: none; /* مخفي افتراضياً */
    padding: 20px;
    border: 1px solid #ccc;
    background: linear-gradient(-45deg,green,blue,red); /* خلفية متدرجة */
    width: 90%;
    max-width: 500px;
    min-height: 250px;
    margin: 40px auto;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.3); /* ظل */
    border-radius: 15px; /* تدوير الحواف */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ; /* توسيط في الشاشة */
    z-index: 6; /* فوق العناصر الأخرى */
}

/* زر إغلاق النافذة */
#sort {
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    font-size: 18px;
    color: white;
    background-color: #f75757;
    border: none;
    border-radius: 0px 15px 0px 15px;
    padding: 4px 8px;
    cursor: pointer;
}

/* ==================== الفورم (إضافة وحذف) ==================== */
.add-form, .delete-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;
    margin: auto;
    margin-top: 20px;
}

/* ==================== الخلفية المعتمة خلف النوافذ ==================== */
.overlay{
    display: none; /* مخفية افتراضياً */
    background-color: rgba(0,0,0,0.6); /* لون شفاف معتم */
    z-index: 5 ;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px); /* تأثير الضبابية */
}

/* ==================== أزرار عامة ==================== */
button {
    cursor: pointer;
    transition: all 0.2s ease; /* تأثير الحركة */
    box-shadow: 0px 4px 7px rgba(0,0,0,0.3);
    font-weight: bold;
    border: none;
}

button:hover {
    transform: scale(1.05); /* تكبير بسيط عند المرور */
}

/* ==================== ألوان الأزرار ==================== */
#mybutton, #mybutton1, #mybutton2, #but {
    width: 100px;
    height: 35px;
    border-radius: 20px;
}

#mybutton, #mybutton2 {
   background:  linear-gradient(blue,white); 
   color: black
}

#mybutton1 {
    background:  linear-gradient(blue,white); 
    color: black
}

#but {
   background:  linear-gradient(blue,white); 
   color: black
}

/* زر حذف الكل */
#clearAll {
    background: linear-gradient(90deg,red,white);
    color: rgb(18, 17, 17);
    font-weight: bold;
    border-radius: 12px;
    padding: 6px;
}

/* ==================== قائمة الطلاب ==================== */
#studentbox {
    box-shadow: 2px 3px 8px rgba(0,0,0,0.6);
    border-radius: 20px;
    padding: 20px;
    color: white;
    margin: 20px auto;
    width: 90%;
    max-width: 800px;
    min-height: 200px;
}

#list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none; /* إلغاء النقاط */
    text-align: left;
}

.box {
    font-weight: bold;
}

/* ==================== نافذة الحذف ==================== */
#delete {
    display: none; /* مخفية افتراضياً */
    z-index: 6;
    background: linear-gradient(-45deg,green,blue,red);
    width: 90%;
    max-width: 500px;
    padding: 15px;
    margin: 40px auto;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* زر إغلاق نافذة الحذف */
#sort-delete {
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    font-size: 18px;
    background-color: #f75757;
    color: rgb(5, 2, 11);
    border: none;
    border-radius: 0px 15px 0px 15px;
    padding: 4px 8px;
}

/* ==================== الفوتر ==================== */
.myfooter{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.allbutton{
    display: flex;
    gap: 10px;
}

/* ==================== تنسيق خاص للموبايل ==================== */
@media (max-width: 600px) {
    .sear {
        flex-direction: column;
        width: 100%;
    }

    #tab, #delete {
        width: 95%;
        max-width: none;
    }

    .allbutton {
        flex-direction: row;
        width: 100%;
        gap: 5px;
    }

    button {
        width: 100%;
        max-width: 200px;
    }

    #studentbox {
        padding: 10px;
        font-size: 14px;
    }
}

/* ==================== الفورم: محاذاة وتنسيق العناصر ==================== */
.add-form, 
.delete-form {
    display: flex;
    flex-direction: column;
    align-items: center;   /* يوسّط العناصر أفقياً */
    justify-content: center; /* إذا فيه مساحة، يوسّط عمودياً */
    gap: 10px;
    width: 100%;
}

/* العناصر داخل الفورم */
.add-form input, 
.delete-form input,
.add-form button, 
.delete-form button {
    display: block;
    width: 80%;           /* عرض مناسب */
    max-width: 300px;
    text-align: center;   /* النص في الوسط */
}

/* شريط البحث responsive */
.search {
    display: flex;
    justify-content: center; /* يوسّط المحتوى أفقياً */
    align-items: center;     /* يوسّط عمودياً */
    flex-direction: column;  /* يخلي العناصر تحت بعض في الموبايل */
    gap: 10px;
}

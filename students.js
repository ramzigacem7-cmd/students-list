// ==================== variables ==================

const mybutton = document.getElementById("mybutton");
const mybutton1 = document.getElementById("mybutton1");
const box = document.querySelectorAll(".box");
const mytext = document.querySelector("#text");
const color = ["linear-gradient(90deg,red,blue)","linear-gradient(90deg,black,grey)","linear-gradient(90deg,gold,silver)", "linear-gradient(90deg,green,yellow)"];
const mystudentbox = document.getElementById("studentbox");
const mybut = document.// ==================== المتغيرات ====================

// أزرار التنقل
const mybutton = document.getElementById("mybutton");   // التالي
const mybutton1 = document.getElementById("mybutton1"); // السابق

// عناصر عرض بيانات الطالب
const box = document.querySelectorAll(".box");
const mytext = document.querySelector("#text");
const mystudentbox = document.getElementById("studentbox");
const color = [
    "linear-gradient(90deg,red,blue)",
    "linear-gradient(90deg,black,grey)",
    "linear-gradient(90deg,gold,silver)",
    "linear-gradient(90deg,green,yellow)"
];

// أزرار النماذج وواجهات الإدخال
const mybut = document.getElementById("but");
const mytab = document.getElementById("tab");
const myoverlay = document.querySelector(".overlay");
const mysortdelete = document.getElementById("sort-delete");
const mysubmit = document.getElementById("button3");
const mysort = document.getElementById("sort");
const mysearch = document.getElementById("sear");
const button2 = document.getElementById("button2");
const mydelete = document.getElementById("delete");
const mydel = document.getElementById("ID-2");
const mybutton2 = document.getElementById("mybutton2");
const clearAllBtn = document.getElementById("clearAll");

// ==================== التهيئة ====================

// تحميل الطلاب من localStorage أو إضافة الافتراضيين
let students = JSON.parse(localStorage.getItem("students")) || [];
if (students.length === 0) {
    students = [
        { name: "ramzi", age: 21, average: 14.64, ID: "232334657478" },
        { name: "rachid", age: 22, average: 12.67, ID: "242434457478" },
        { name: "mohamed", age: 18, average: 16.34, ID: "202034657478" },
        { name: "omar", age: 22, average: 13.54, ID: "212134653478" }
    ];
    localStorage.setItem("students", JSON.stringify(students));
}

// مؤشر الطالب الحالي
let index = -1;
if (students.length > 0) {
    index = 0;
    updateStudentDisplay(index);
}

// ==================== عرض بيانات الطالب ====================

function updateStudentDisplay(index) {
    if (students.length === 0 || index < 0) {
        mytext.innerHTML = "<h3>No Students Available</h3>";
        box.forEach(b => b.textContent = "");
        return;
    }

    mystudentbox.style.background = color[index % color.length];
    mytext.innerHTML = `<h3>STUDENT ${index + 1}</h3>`;
    box[0].textContent = `NAME: ${students[index].name}`;
    box[1].textContent = `AGE: ${students[index].age}`;
    box[2].textContent = `AVERAGE: ${students[index].average}`;
    box[3].textContent = `ID: ${students[index].ID}`;
}

// ==================== التنقل بين الطلبة ====================

mybutton.addEventListener("click", () => {
    if (students.length === 0) return;
    index = (index + 1) % students.length;
    updateStudentDisplay(index);
});

mybutton1.addEventListener("click", () => {
    if (students.length === 0) return;
    index = (index - 1 + students.length) % students.length;
    updateStudentDisplay(index);
});

// ==================== إضافة طالب ====================

// إظهار نموذج الإضافة
mybut.addEventListener("click", () => {
    mytab.style.display = "flex";
    myoverlay.style.display = "flex";
});

// مسح الحقول في نموذج الإضافة
function clear_form_add() {
    document.getElementById("name").value = "";
    document.getElementById("ID").value = "";
    document.getElementById("age").value = "";
    document.getElementById("average").value = "";
}

// إضافة طالب جديد
mysubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const ID = document.getElementById("ID").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const average = parseFloat(document.getElementById("average").value);
    if (!name) {
    alert("Please enter a name.");
    return;
}

if (isNaN(age)) {
    alert("Please enter a valid age.");
    return;
}

if (age < 19 || age > 23) {
    alert("Age must be between 19 and 23.");
    return;
}

if (isNaN(average)) {
    alert("Please enter a valid average.");
    return;
}

if (average < 0 || average > 20) {
    alert("Average must be between 0 and 20.");
    return;
}

if (!ID) {
    alert("Please enter an ID.");
    return;
}

if (!/^(\d{2})\1$/.test(ID.slice(0, 4))) {
    alert("First 4 digits of ID must be like 2424, 2323, 1919, etc.");
    return;
}


    

    const exists = students.some(student => student.ID === ID);
    if (exists) {
        alert("هذا الطالب موجود بالفعل بهذا المعرف (ID)!");
        clear_form_add();
        return;
    }

    students.push({ name, age, average, ID });
    localStorage.setItem("students", JSON.stringify(students));
    index = students.length - 1;
    updateStudentDisplay(index);

    clear_form_add();
    mytab.style.display = "none";
    myoverlay.style.display = "none";
});

// إخفاء نموذج الإضافة
mysort.addEventListener("click", () => {
    mytab.style.display = "none";
    myoverlay.style.display = "none";
});

// ==================== البحث عن طالب ====================

function clear_form_search() {
    document.getElementById("searchID").value = "";
}

mysearch.addEventListener("click", (e) => {
    e.preventDefault();
    const searchID = document.getElementById("searchID").value.trim();
    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].ID == searchID) {
            found = true;
            index = i;
            updateStudentDisplay(index);
            clear_form_search();
            return;
        }
    }

    if (!found) {
        alert("ID is not exist");
        clear_form_search();
    }
});

// ==================== حذف طالب ====================

// إظهار نموذج الحذف
mybutton2.addEventListener("click", () => {
    mydelete.style.display = "flex";
    myoverlay.style.display = "flex";
});

// إخفاء نموذج الحذف
mysortdelete.addEventListener("click", () => {
    mydelete.style.display = "none";
    myoverlay.style.display = "none";
});

// تنفيذ الحذف
button2.addEventListener("click", (e) => {
    e.preventDefault();
    students = JSON.parse(localStorage.getItem("students")) || [];
    const ID = mydel.value.trim();
    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].ID.trim() === ID.trim()) {
            students.splice(i, 1);
            found = true;
            localStorage.setItem("students", JSON.stringify(students));

            if (students.length === 0) {
                index = -1;
            } else {
                index = Math.min(index, students.length - 1);
            }

            updateStudentDisplay(index);
            mydelete.style.display = "none";
            myoverlay.style.display = "none";
            mydel.value = "";
            break;
        }
    }

    if (!found) {
        alert("ID is not exist");
        mydel.value = "";
    }
});

// ==================== مسح جميع الطلبة ====================

clearAllBtn.addEventListener("click", () => {
    if (confirm("هل أنت متأكد أنك تريد مسح جميع الطلبة؟")) {
        students = [];
        localStorage.setItem("students", JSON.stringify(students));
        index = -1;
        updateStudentDisplay(index);
        alert("تم مسح جميع الطلبة!");
    }
});
getElementById("but");
const mytab = document.getElementById("tab");
const myoverlay = document.querySelector(".overlay")
const mysortdelete = document.getElementById("sort-delete");
const mysubmit = document.getElementById("button3");
const mysort = document.getElementById("sort");
const mysearch = document.getElementById("sear");
const button2 = document.getElementById("button2");
const mydelete = document.getElementById("delete");
const mydel = document.getElementById("ID-2");
const mybutton2 = document.getElementById("mybutton2");
const clearAllBtn = document.getElementById("clearAll");


// ==================== التهيئة ====================


let students = JSON.parse(localStorage.getItem("students")) || [];
// إذا لا توجد بيانات في localStorage، أضف الطلبة الافتراضيين مرة واحدة
if (students.length === 0) {
    students = [
        { name: "ramzi", age: 21, average: 14.64, ID: "232334657478" },
        { name: "rachid", age: 22, average: 12.67, ID: "242434457478" },
        { name: "mohamed", age: 18, average: 16.34, ID: "202034657478" },
        { name: "omar", age: 22, average: 13.54, ID: "212134653478" }
    ];
    localStorage.setItem("students", JSON.stringify(students));
}

// ==================== تحديث عرض الطالب ====================

function updateStudentDisplay(index) {
    if (students.length === 0) {
        mytext.innerHTML = "<h3>No Students Available</h3>";
        box.forEach(b => b.textContent = "");
        return;
    }

    mystudentbox.style.background = color[index % color.length];
    mytext.innerHTML = "<h3>STUDENT " + (index + 1) + "</h3>";
    box[0].textContent = "NAME: " + students[index].name;
    box[1].textContent = "AGE: " + students[index].age;
    box[2].textContent = "AVERAGE: " + students[index].average;
    box[3].textContent = "ID: " + students[index].ID;
}
let index = -1;
if (students.length > 0) {
    index = 0;
    updateStudentDisplay(index);
}

// ==================== التنقل بين الطلبة ====================

mybutton.addEventListener("click", () => {
    if (students.length === 0) return;
    index = (index + 1) % students.length;
    updateStudentDisplay(index);
});
mybutton1.addEventListener("click", () => {
    if (students.length === 0) return;
    index--;
    if (index < 0) {
        index = students.length - 1;
    }
    updateStudentDisplay(index);
});

// ==================== إضافة طالب ====================

mybut.addEventListener("click", () => {
     mytab.style.display ="flex"
      myoverlay.style.display ="flex" 
});

// ==================== إخفاء فورم الحذف ====================

mysortdelete.addEventListener("click", () => {
    mydelete.style.display = "none";
     myoverlay.style.display ="none"
});

//============function to clear the add form==========

function clear_form_add(){
     document.getElementById("name").value = "";
document.getElementById("ID").value = "";
document.getElementById("age").value = "";
document.getElementById("average").value = "";
}
mysubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const ID = document.getElementById("ID").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const average = parseFloat(document.getElementById("average").value);
    if (!name || !ID || isNaN(age) || isNaN(average)) {
        alert("Please fill all fields correctly before submitting.");
      
        return;
    }
     clear_form_add()

    const exists = students.some(student => student.ID === ID);
    if (exists) {
        alert("هذا الطالب موجود بالفعل بهذا المعرف (ID)!");
 clear_form_add()
        return;
    }
    const newstudent = { name, age, average, ID };
    students.push(newstudent);
    localStorage.setItem("students", JSON.stringify(students));
    index = students.length - 1;
    updateStudentDisplay(index);
    
     mytab.style.display = "none";
     myoverlay.style.display ="none"
});

// ==================== إخفاء فورم الإضافة ====================

mysort.addEventListener("click", () => {
    mytab.style.display = "none";
     myoverlay.style.display ="none"
});

// ===========function to clear the search form========

function clear_form_search(){
 document.getElementById("searchID").value = "";
}

// ==================== البحث عن طالب ====================

mysearch.addEventListener("click", (e) => {
    e.preventDefault();
    const searchID = document.getElementById("searchID").value.trim();
    let found = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].ID == searchID) {
            found = true;
            mystudentbox.style.background = color[i % color.length];
            mytext.innerHTML = "<h3>STUDENT " + (i + 1) + "</h3>";
            box[0].textContent = "NAME: " + students[i].name;
            box[1].textContent = "AGE: " + students[i].age;
            box[2].textContent = "AVERAGE: " + students[i].average;
            box[3].textContent = "ID: " + students[i].ID;
             clear_form_search()
            return;
        }
    }
    if (!found) {
        alert("ID is not exist");
       clear_form_search()
    }
});

// ==================== حذف طالب ====================

button2.addEventListener("click", (e) => {
    e.preventDefault();
    // تحديث القائمة من localStorage
    students = JSON.parse(localStorage.getItem("students")) || [];
    const ID = mydel.value.trim();
    let found = false;
    for (let i = 0; i < students.length; i++) {
        if ((students[i].ID ).trim()==(ID).trim()) {
            students.splice(i, 1);
            found = true;
            localStorage.setItem("students", JSON.stringify(students));
            if (index >= students.length) {
                index = students.length - 1;
            }
            if (students.length === 0) {
    index = -1;
} else {
    index = Math.min(index, students.length - 1);
}
            updateStudentDisplay(index);
              mydelete.style.display = "none";
               myoverlay.style.display ="none"
                mydel.value = "";
            break;
        }
    } 
    if (!found) {
        alert("ID is not exist");
         mydel.value = "";
    }
});

// ====================// زر لإظهار فورم الحذف ====================

mybutton2.addEventListener("click", () => {
    mydelete.style.display = "flex";
    myoverlay.style.display ="flex"
});

// ==================== مسح جميع الطلبة ====================

clearAllBtn.addEventListener("click", () => {
    if (confirm("هل أنت متأكد أنك تريد مسح جميع الطلبة؟")) {
        students = [];
        localStorage.setItem("students", JSON.stringify(students));
        index = -1;
        updateStudentDisplay(index);
        alert("تم مسح جميع الطلبة!");
    }
});

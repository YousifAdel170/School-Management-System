export const supervisorLists = [
  {
    name: { en: "Admission", ar: "القبول" },
    link: "/supervisor/admission",
    icon: `fa-regular fa-plus`,
  },
  {
    name: { en: "Add Student", ar: "إضافة طالب" },
    link: "/supervisor/add_student",
    icon: `fa-regular fa-plus`,
  },
  {
    name: { en: "View Students", ar: "عرض الطلاب" },
    link: "/supervisor/view_students",
    icon: `fa-regular fa-street-view`,
  },
  {
    name: { en: "Add Teacher", ar: "إضافة معلم" },
    link: "/supervisor/add_teacher",
    icon: `fa-regular fa-plus`,
  },
  {
    name: { en: "View Teachers", ar: "عرض المعلمين" },
    link: "/supervisor/view_teachers",
    icon: `fa-regular fa-street-view`,
  },
  {
    name: { en: "Add Course", ar: "إضافة دورة" },
    link: "/supervisor/add_course",
    icon: `fa-regular fa-plus`,
  },
  {
    name: { en: "View Courses", ar: "عرض الدورات" },
    link: "/supervisor/view_courses",
    icon: `fa-regular fa-street-view`,
  },
  {
    name: { en: "Statistics", ar: "الإحصائيات" },
    link: "/supervisor/statistics",
    icon: `fa-regular fa-street-view`,
  },
];

export const teacherLists = [
  {
    name: { en: "View Students", ar: "عرض الطلاب" },
    link: "/teacher/view_students",
    icon: `fa-regular fa-street-view`,
  },
  {
    name: { en: "View Teachers", ar: "عرض المعلمين" },
    link: "/teacher/view_teachers",
    icon: `fa-regular fa-street-view`,
  },
  {
    name: { en: "View Courses", ar: "عرض الدورات" },
    link: "/teacher/view_courses",
    icon: `fa-regular fa-street-view`,
  },
];

export const studentLists = [
  {
    name: { en: "View Teachers", ar: "عرض المعلمين" },
    link: "/student/view_teachers",
    icon: `fa-regular fa-street-view`,
  },
  {
    name: { en: "View Courses", ar: "عرض الدورات" },
    link: "/student/view_courses",
    icon: `fa-regular fa-street-view`,
  },
];

export const parentLists = [
  {
    name: { en: "View Teachers", ar: "عرض المعلمين" },
    link: "/parent/view_teachers",
    icon: `fa-regular fa-street-view`,
  },
  {
    name: { en: "View Courses", ar: "عرض الدورات" },
    link: "/parent/view_courses",
    icon: `fa-regular fa-street-view`,
  },
];

export const admissionHeadings = [
  { en: "ID", ar: "الرقم" },
  { en: "Username", ar: "اسم المستخدم" },
  { en: "Email", ar: "البريد الإلكتروني" },
  { en: "Password", ar: "كلمة السر" },
  { en: "Role ID", ar: "رقم الدور" },
  { en: "Role Name", ar: "اسم الدور" },
  { en: "Status", ar: "الحالة" },
  { en: "Created At", ar: "تاريخ الإنشاء" },
  { en: "Updated At", ar: "تاريخ التحديث" },
];

export const addStudentHeadings = [
  { en: "ID", ar: "الرقم" },
  { en: "Name", ar: "الاسم" },
  { en: "Birthdate", ar: "تاريخ الميلاد" },
  { en: "Admission Date", ar: "تاريخ القبول" },
  { en: "Gender", ar: "الجنس" },
  { en: "Status", ar: "الحالة" },
  { en: "Fee ID", ar: "رقم الرسوم" },
  { en: "Class ID", ar: "رقم الفصل" },
  { en: "User ID", ar: "رقم المستخدم" },
];

export const addTeacherHeadings = [
  { en: "ID", ar: "الرقم" },
  { en: "Name", ar: "الاسم" },
  { en: "Specialization", ar: "التخصص" },
  { en: "Address", ar: "العنوان" },
  { en: "Birthdate", ar: "تاريخ الميلاد" },
  { en: "Hire Date", ar: "تاريخ التعيين" },
  { en: "Gender", ar: "الجنس" },
  { en: "Salary", ar: "الراتب" },
  { en: "Supervisor ID", ar: "رقم المشرف" },
  { en: "User ID", ar: "رقم المستخدم" },
];

export const viewTeacherHeading = [
  { en: "ID", ar: "الرقم" },
  { en: "Name", ar: "الاسم" },
  { en: "Specialization", ar: "التخصص" },
  { en: "Gender", ar: "الجنس" },
];

export const viewStudentHeadings = [
  { en: "ID", ar: "الرقم" },
  { en: "Name", ar: "الاسم" },
  { en: "Gender", ar: "الجنس" },
  { en: "Class ID", ar: "رقم الفصل" },
];

export const addSubjectsHeadings = [
  { en: "ID", ar: "الرقم" },
  { en: "Subject Name", ar: "اسم المادة" },
  { en: "Subject Code", ar: "رمز المادة" },
  { en: "Teaching Staff ID", ar: "رقم الهيئة التدريسية" },
];

export const MESSAGE_DELAY = 1000;
export const REDIRECTING_DELAY = 1000;

export const STUDENT_TYPE = "Student";
export const TEACHER_TYPE = "Teacher";
export const SUPERVISOR_TYPE = "Supervisor";
export const PARENT_TYPE = "Parent";
export const SUBJECT_TYPE = "Subject";

export const GET_METHOD = "GET";
export const POST_METHOD = "POST";

// ADD Types to navigate
export const VIEW_TEACHER_TYPE = "view_teachers";
export const VIEW_STUDENT_TYPE = "view_students";
export const VIEW_SUBJECT_TYPE = "view_courses";

// Update Types to navigate
export const UPDATE_TEACHER_TYPE = "update_teacher";
export const UPDATE_STUDENT_TYPE = "update_student";
export const UPDATE_SUBJECT_TYPE = "update_subject";

export const URL_BASE = "http://127.0.0.1/school-managment-system-full/backend";

// Get Data URLs
export const URL_GET_ADMISSION = `${URL_BASE}/get_admission.php`;
export const URL_GET_STATISTICS = `${URL_BASE}/stats.php`;
export const URL_GET_STUDENTS = `${URL_BASE}/get_all_students.php`;
export const URL_GET_TEACHER = `${URL_BASE}/get_all_teachers.php`;
export const URL_GET_SUBJECTS = `${URL_BASE}/get_all_subjects.php`;

export const URL_GET_TEACHER_IDS = `${URL_BASE}/addCourse/view_teachers.php`;

// Delete Data URLs
export const URL_DELELE_STUDENT = `${URL_BASE}/delete_student.php?id=`;
export const URL_DELELE_SUBJECT = `${URL_BASE}/delete_subject.php?id=`;
export const URL_DELELE_TEACHER = `${URL_BASE}/delete_teacher.php?id=`;

// Add Data URLs
export const URL_ADD_STUDENT = `${URL_BASE}/add_student.php`;
export const URL_ADD_TEACHER = `${URL_BASE}/add_teacher.php`;
export const URL_ADD_SUBJECT = `${URL_BASE}/addCourse/add_course.php`;

// Update Data URLs
export const URL_UPDATE_STUDENT = `${URL_BASE}/update_student.php`;
export const URL_UPDATE_TEACHER = `${URL_BASE}/update_teacher.php`;
export const URL_UPDATE_SUBJECT = `${URL_BASE}/update_subject.php`;

// Authentication URLs
export const URL_AUT_LOGIN = `${URL_BASE}/login_check.php`;
export const URL_AUT_REGISTER = `${URL_BASE}/register_check.php`;

export const TYPE_AUTH_LOGIN = "login";
export const TYPE_AUT_REGISTER = "register";

// Roles
export const STUDENT_ROLE = "student";
export const SUPERVISOR_ROLE = "supervisor";
export const TEACHER_ROLE = "teacher";
export const PARENT_ROLE = "parent";

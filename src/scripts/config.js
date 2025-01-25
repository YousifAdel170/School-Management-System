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

export const MESSAGE_DELAY = 2000;
export const REDIRECTING_DELAY = 2000;

export const STUDENT_TYPE = "Student";
export const TEACHER_TYPE = "Teacher";
export const SUPERVISOR_TYPE = "Supervisor";
export const PARENT_TYPE = "Parent";
export const SUBJECT_TYPE = "Subject";

// Types
export const UPDATE_TYPE = "Update";
export const DELETE_TYPE = "Delete";
export const VIEW_TYPE = "View";
export const ADD_TYPE = "Add";
export const AUTH_TYPE = "Auth";

// Method Types
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

/*                            URLs For Backend                                 */
export const URL_BASE = "http://127.0.0.1/school-managment-system-full/backend";
// View Data URLs
export const URL_GET_ADMISSION = `${URL_BASE}/${VIEW_TYPE}/get_admission.php`;
export const URL_GET_STATISTICS = `${URL_BASE}/${VIEW_TYPE}/stats.php`;
export const URL_GET_STUDENTS = `${URL_BASE}/${VIEW_TYPE}/get_all_students.php`;
export const URL_GET_TEACHER = `${URL_BASE}/${VIEW_TYPE}/get_all_teachers.php`;
export const URL_GET_SUBJECTS = `${URL_BASE}/${VIEW_TYPE}/get_all_subjects.php`;
export const URL_GET_TEACHER_IDS = `${URL_BASE}/${VIEW_TYPE}/view_teachers.php`;

// Delete Data URLs
export const URL_DELELE_STUDENT = `${URL_BASE}/${DELETE_TYPE}/delete_student.php?id=`;
export const URL_DELELE_SUBJECT = `${URL_BASE}/${DELETE_TYPE}/delete_subject.php?id=`;
export const URL_DELELE_TEACHER = `${URL_BASE}/${DELETE_TYPE}/delete_teacher.php?id=`;

// Add Data URLs
export const URL_ADD_STUDENT = `${URL_BASE}/${ADD_TYPE}/add_student.php`;
export const URL_ADD_TEACHER = `${URL_BASE}/${ADD_TYPE}/add_teacher.php`;
export const URL_ADD_SUBJECT = `${URL_BASE}/${ADD_TYPE}/add_course.php`;

// Update Data URLs
export const URL_UPDATE_STUDENT = `${URL_BASE}/${UPDATE_TYPE}/update_student.php`;
export const URL_UPDATE_TEACHER = `${URL_BASE}/${UPDATE_TYPE}/update_teacher.php`;
export const URL_UPDATE_SUBJECT = `${URL_BASE}/${UPDATE_TYPE}/update_subject.php`;

// Authentication URLs
export const URL_AUT_LOGIN = `${URL_BASE}/${AUTH_TYPE}/login_check.php`;
export const URL_AUT_REGISTER = `${URL_BASE}/${AUTH_TYPE}/register_check.php`;

export const TYPE_AUTH_LOGIN = "login";
export const TYPE_AUT_REGISTER = "register";

// Roles
export const STUDENT_ROLE = "student";
export const SUPERVISOR_ROLE = "supervisor";
export const TEACHER_ROLE = "teacher";
export const PARENT_ROLE = "parent";

// Configuration for Toastify
export const TOASTIFY_ERROR = "Error";
export const TOASTIFY_SUCCESS = "Success";
export const TOASTIFY_OPERATION_SUCCESS = "Operation completed successfully.";
export const TOASTIFY_MISSING_FIELDS = "All fields are required.";
export const TOASTIFY_ERROR_REQUEST =
  "An error occurred while submitting the request.";
export const TOASTIFY_FAILED_DELETED = "Data failed to delete.";
export const TOASTIFY_SUCCESS_DELETED = "Data deleted successfully.";

export const TOASTIFY_REGISTERATION_SUCCESS = "Registration successful.";
export const TOASTIFY_LOGIN_SUCCESS = "Login successful.";

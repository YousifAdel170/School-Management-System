# Smart-School-Management-System

### ERD

#### Participation

- (1 to 3) Users, Teachers, Students, Parents
  -- Not all Users are Parents. Some Users could be Students or Teaching Staff.
  -- But Every Parent must have a corresponding User account to access the system
  -- Same in Student and Teachers

- 4. Teaching Staff, Assignment
     -- Not every Teaching Staff must be associated with an Assignment
     -- Every Assignment must be created by a Teacher from the teaching staff

- 5. Teaching Staff, Subjects
     -- Not every Teaching Staff must be associated with an subject
     -- Every Subject must have at least one Teacher

- 6. Teaching Staff, Class
     -- Not everyone in the Teaching Staff needs to teach Class
     -- Every Class must have a Teacher in the teaching staff assigned to it

- 7. Class, Attendance
     -- Every class must have a record in the Attendance
     -- Every attendance record must correspond to a Class

- 8. Teaching Staff (Teacher), Teaching Staff (Supervisor)
     -- Not every teacher has a supervisor (The CEO of the School Doesn't have a supervisor)
     -- Not every supervisor is a teacher

- 9. Assignment, Subject
     -- Every assignment must be related to a subject
     -- Not every subject necessarily has assignments

- 10. Assignment, Student
      -- Not all assignments are necessarily assigned to every student
      -- All Students must have an assignment

- 11. Exam, Student
      -- Every exam must be created for at least one student
      -- A student may or may not take every exam

- 12. Book, Student
      -- Not every student will borrow a book.
      -- Not every book will be borrowed by students.

- 13. Fee, Student
      -- every fee must be paid by student
      -- Every student must have paid the fee

- 14. Class, Student
      -- every class must have students
      -- every student must be assigned to class

- 15. Class, Subject
      -- every class must have at least one subject
      -- not evry subject must be assigned to class

- 16. Subject, Exam
      -- every subject must have at least one exam
      -- Every exam must be associated with a subject

- 17. Attendance, Student
      -- Not All Attendance Records related to every student
      -- every student must have at least one attendance record

- 18. Parents, Student
      -- Every Student must have at least one Parent.
      -- Every Parent must have at least one Student.

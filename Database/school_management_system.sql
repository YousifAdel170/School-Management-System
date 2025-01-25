-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2025 at 10:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `admission`
--

CREATE TABLE `admission` (
  `ID` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL,
  `roleID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `status` enum('Pending','Approved','Rejected') DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admission`
--

INSERT INTO `admission` (`ID`, `username`, `email`, `password`, `roleID`, `userID`, `status`, `created_at`, `updated_at`) VALUES
(2, 'yosifadel276', 'ya842245@gmail.com', '$2y$10$3ePW75RE.qDGlwjL76KCWO0GU3YxRrb1/XI4Iuo277epkXnX5inHq', 2, NULL, 'Pending', '2025-01-15 19:43:18', '2025-01-15 19:43:18'),
(3, 'parent', 'parent@ex.com', '$2y$10$Uzm1uMx.O4GOAFvsbNncjOcH42cGWo330kQB/UvlOMThAnI5VIVmi', 3, NULL, 'Pending', '2025-01-15 19:44:50', '2025-01-15 19:44:50'),
(4, 'student', 'student@student.com', '$2y$10$Vk5UB5YUTg.c8eY4YGqV7Oia51p.kf09M5dbwRiH2jAou6M7FVWEu', 1, NULL, 'Pending', '2025-01-15 19:45:38', '2025-01-15 19:45:38');

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `ID` int(11) NOT NULL,
  `due_date` date NOT NULL,
  `grade` varchar(20) NOT NULL,
  `teachingstaff_ID` int(11) NOT NULL,
  `subject_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assignments`
--

INSERT INTO `assignments` (`ID`, `due_date`, `grade`, `teachingstaff_ID`, `subject_ID`) VALUES
(1, '2025-01-15', 'A', 3, 1),
(2, '2025-01-20', 'B+', 3, 1),
(3, '2025-01-25', 'A-', 7, 2),
(4, '2025-01-28', 'B', 7, 2),
(5, '2025-02-02', 'A+', 3, 1),
(6, '2025-02-10', 'C+', 4, 3),
(7, '2025-02-14', 'B-', 5, 4),
(8, '2025-02-20', 'A', 4, 3),
(9, '2025-02-25', 'B+', 7, 2),
(10, '2025-03-01', 'A-', 5, 4),
(11, '2025-03-05', 'B', 5, 4),
(14, '2025-03-20', 'B+', 5, 4),
(16, '2025-03-30', 'C+', 4, 3),
(19, '2025-04-15', 'A+', 4, 3),
(23, '2025-04-15', 'A+', 4, 3);

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `ID` int(11) NOT NULL,
  `attendance_date` date NOT NULL,
  `attendance_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`ID`, `attendance_date`, `attendance_status`) VALUES
(1, '2025-01-01', 'Present'),
(2, '2025-01-02', 'Absent'),
(3, '2025-01-03', 'Present'),
(4, '2025-01-04', 'Absent'),
(5, '2025-01-05', 'Present'),
(6, '2025-01-06', 'Late'),
(7, '2025-01-07', 'Present'),
(8, '2025-01-08', 'Absent'),
(9, '2025-01-09', 'Present'),
(10, '2025-01-10', 'Late'),
(11, '2025-01-11', 'Present'),
(12, '2025-01-12', 'Absent'),
(13, '2025-01-13', 'Present'),
(14, '2025-01-14', 'Late'),
(15, '2025-01-15', 'Present'),
(16, '2025-01-16', 'Absent'),
(17, '2025-01-17', 'Present'),
(18, '2025-01-18', 'Absent'),
(19, '2025-01-19', 'Present'),
(20, '2025-01-20', 'Late');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `ID` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `author` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`ID`, `name`, `author`) VALUES
(1, 'Mathematics for Kids', 'John Doe'),
(2, 'Science Fun: A Beginner’s Guide', 'Emily Green'),
(3, 'Learning English: Grammar Basics', 'Sarah Lee'),
(4, 'History for Beginners', 'Michael Brown'),
(5, 'Geography: Exploring the World', 'Rachel Adams'),
(6, 'The Ultimate Guide to Study Skills', 'David White'),
(7, 'Introduction to Biology', 'Anna Clark'),
(8, 'Understanding Physics: A School Student’s Guide', 'Richard Turner'),
(9, 'Learning Through Art', 'Sophia Walker'),
(10, 'Fun with Chemistry: A Kid’s Guide', 'James Harris'),
(11, 'Computer Science for Students', 'William Scott'),
(12, 'How to Solve Math Problems', 'Linda Davis'),
(13, 'World History for Teens', 'Charles Johnson'),
(14, 'Study Hacks for School Success', 'Olivia Robinson'),
(15, 'Creative Writing for Young Writers', 'Megan King');

-- --------------------------------------------------------

--
-- Table structure for table `classattendance`
--

CREATE TABLE `classattendance` (
  `classID` int(11) DEFAULT NULL,
  `attendanceID` int(11) DEFAULT NULL,
  `teachingstaff_ID` int(11) DEFAULT NULL,
  `subjectID` int(11) DEFAULT NULL,
  `studentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classattendance`
--

INSERT INTO `classattendance` (`classID`, `attendanceID`, `teachingstaff_ID`, `subjectID`, `studentID`) VALUES
(1, 1, 2, 1, 1),
(1, 2, 1, 2, 2),
(2, 3, 2, 3, 3),
(2, 4, 2, 4, 4),
(4, 1, 3, 1, 8),
(5, 2, 3, 2, 9),
(5, 3, 3, 3, 10),
(6, 4, 4, 4, 11),
(8, 8, 5, 1, 15),
(8, 9, 5, 2, 1),
(9, 10, 5, 3, 3),
(9, 11, 5, 4, 4),
(13, 18, 7, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `ID` int(11) NOT NULL,
  `className` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`ID`, `className`) VALUES
(1, 'Mathematics - Grade 1'),
(2, 'Science - Grade 2'),
(3, 'English Language - Grade 3'),
(4, 'Social Studies - Grade 4'),
(5, 'Geography - Grade 5'),
(6, 'History - Grade 6'),
(7, 'Biology - Grade 7'),
(8, 'Chemistry - Grade 8'),
(9, 'Physics - Grade 9'),
(10, 'Mathematics - Grade 10'),
(11, 'English Literature - Grade 11'),
(12, 'Computer Science - Grade 12'),
(13, 'Physical Education - Grade 1'),
(14, 'Art and Design - Grade 3'),
(15, 'Music - Grade 4');

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `ID` int(11) NOT NULL,
  `exam_date` date NOT NULL,
  `grade` varchar(10) NOT NULL,
  `studentID` int(11) NOT NULL,
  `subjectID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`ID`, `exam_date`, `grade`, `studentID`, `subjectID`) VALUES
(1, '2025-01-10', 'A', 1, 1),
(2, '2025-01-12', 'B+', 1, 2),
(3, '2025-01-15', 'A-', 1, 3),
(4, '2025-01-18', 'B', 1, 4),
(8, '2025-01-15', 'A+', 2, 2),
(9, '2025-01-10', 'B+', 3, 1),
(10, '2025-01-12', 'C+', 4, 2),
(11, '2025-01-15', 'A', 5, 3),
(12, '2025-01-18', 'B', 10, 4),
(17, '2025-01-10', 'B', 11, 1),
(18, '2025-01-12', 'A+', 7, 2),
(19, '2025-01-15', 'B+', 5, 3),
(20, '2025-01-18', 'A-', 12, 4),
(25, '2025-01-10', 'A-', 3, 1),
(26, '2025-01-12', 'B+', 3, 2),
(27, '2025-01-15', 'C', 3, 3),
(28, '2025-01-18', 'B', 4, 4),
(33, '2025-01-10', 'B-', 6, 1),
(34, '2025-01-12', 'C+', 6, 2),
(35, '2025-01-15', 'A+', 6, 3),
(36, '2025-01-18', 'B', 7, 4),
(39, '2025-01-25', 'A', 8, 2),
(41, '2025-01-10', 'B-', 9, 1),
(42, '2025-01-12', 'C+', 9, 2),
(43, '2025-01-15', 'A+', 9, 3),
(44, '2025-01-18', 'B', 12, 4),
(48, '2025-01-28', 'B+', 12, 4);

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

CREATE TABLE `fees` (
  `ID` int(11) NOT NULL,
  `feeDate` date NOT NULL,
  `feeAmount` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fees`
--

INSERT INTO `fees` (`ID`, `feeDate`, `feeAmount`) VALUES
(1, '2025-01-01', '1000.00'),
(2, '2025-01-05', '1500.50'),
(3, '2025-01-10', '1200.75'),
(4, '2025-01-12', '1100.00'),
(5, '2025-01-15', '900.25'),
(6, '2025-01-18', '1300.80'),
(7, '2025-01-20', '950.10'),
(8, '2025-01-22', '1600.00'),
(9, '2025-01-25', '1050.45'),
(10, '2025-01-28', '1400.60'),
(11, '2025-02-01', '1250.30'),
(12, '2025-02-05', '1350.00'),
(13, '2025-02-07', '1000.00'),
(14, '2025-02-10', '1450.50'),
(15, '2025-02-12', '1100.00'),
(16, '2025-02-15', '1150.75'),
(17, '2025-02-18', '1300.00'),
(18, '2025-02-20', '900.00'),
(19, '2025-02-22', '1400.80'),
(20, '2025-02-25', '1200.00');

-- --------------------------------------------------------

--
-- Table structure for table `loans`
--

CREATE TABLE `loans` (
  `loanID` int(11) NOT NULL,
  `loanDate` date NOT NULL,
  `returnDate` date NOT NULL,
  `studentID` int(11) NOT NULL,
  `bookID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loans`
--

INSERT INTO `loans` (`loanID`, `loanDate`, `returnDate`, `studentID`, `bookID`) VALUES
(1, '2025-01-10', '2025-02-10', 1, 1),
(2, '2025-01-10', '2025-02-10', 1, 2),
(3, '2025-01-10', '2025-02-10', 10, 1),
(4, '2025-01-20', '2025-02-20', 10, 5),
(5, '2025-01-22', '2025-02-22', 10, 8),
(6, '2025-01-22', '2025-02-22', 12, 7),
(7, '2025-01-20', '2025-02-20', 14, 6),
(8, '2025-01-22', '2025-02-22', 11, 7),
(9, '2025-01-10', '2025-02-10', 14, 1),
(10, '2025-01-12', '2025-02-12', 9, 2),
(11, '2025-01-15', '2025-02-15', 6, 3),
(12, '2025-01-18', '2025-02-18', 6, 4),
(13, '2025-01-20', '2025-02-20', 8, 5),
(14, '2025-01-20', '2025-02-20', 2, 6),
(15, '2025-01-22', '2025-02-22', 4, 7),
(16, '2025-01-22', '2025-02-22', 14, 8);

-- --------------------------------------------------------

--
-- Table structure for table `parentphones`
--

CREATE TABLE `parentphones` (
  `parent_ID` int(11) NOT NULL,
  `phone_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parentphones`
--

INSERT INTO `parentphones` (`parent_ID`, `phone_number`) VALUES
(1, '01012345678'),
(2, '01122334455'),
(2, '01555667788'),
(3, '01055566677'),
(3, '01244433322'),
(4, '01022233344'),
(4, '01288899900'),
(5, '01544455566'),
(7, '01100099988'),
(7, '01233344455'),
(8, '01012312345'),
(8, '01177788899'),
(10, '01155566677'),
(12, '01055544433'),
(12, '01133344455'),
(13, '01222233344'),
(13, '01588899922'),
(14, '01599988877'),
(15, '01188877799'),
(15, '01244455566');

-- --------------------------------------------------------

--
-- Table structure for table `parents`
--

CREATE TABLE `parents` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `relation_type` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parents`
--

INSERT INTO `parents` (`ID`, `name`, `relation_type`, `address`, `user_id`) VALUES
(1, 'Sarah Mohamed', 'Mother', 'Cairo, Egypt', 6),
(2, 'Mostafa Eldeeb', 'Father', 'Cairo, Egypt', 9),
(3, 'Mona Elsayed', 'Mother', 'Cairo, Egypt', 11),
(4, 'Amr Salah', 'Father', 'Cairo, Egypt', 16),
(5, 'Osama Tarek', 'Father', 'Cairo, Egypt', 19),
(7, 'Hassan ElShamy', 'Father', 'Heliopolis, Cairo, Egypt', NULL),
(8, 'Farida AlSayed', 'Mother', 'Maadi, Cairo, Egypt', NULL),
(10, 'Samiha Mahmoud', 'Mother', 'Zamalek, Cairo, Egypt', NULL),
(12, 'Tamer Ghanem', 'Father', 'Nasr City, Cairo, Egypt', NULL),
(13, 'Laila Farouk', 'Mother', 'New Cairo, Cairo, Egypt', NULL),
(14, 'Ahmed Saad', 'Father', '6th of October City, Cairo, Egypt', NULL),
(15, 'Rania Nabil', 'Mother', 'Shubra, Cairo, Egypt', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roleID` int(11) NOT NULL,
  `roleName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roleID`, `roleName`) VALUES
(1, 'Student'),
(2, 'Teaching Staff'),
(3, 'Parent');

-- --------------------------------------------------------

--
-- Table structure for table `studentassignments`
--

CREATE TABLE `studentassignments` (
  `studentID` int(11) NOT NULL,
  `assignmentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentassignments`
--

INSERT INTO `studentassignments` (`studentID`, `assignmentID`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(2, 1),
(2, 2),
(2, 3),
(2, 14),
(2, 16),
(2, 19),
(2, 23),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 14),
(3, 16),
(3, 19),
(3, 23),
(5, 14),
(5, 16),
(5, 19),
(5, 23),
(9, 1),
(9, 2),
(9, 16),
(9, 19),
(10, 9),
(10, 10),
(10, 11),
(10, 14),
(10, 16),
(12, 19),
(12, 23),
(14, 1),
(14, 2),
(14, 3),
(14, 19);

-- --------------------------------------------------------

--
-- Table structure for table `studentparents`
--

CREATE TABLE `studentparents` (
  `studentID` int(11) NOT NULL,
  `ParentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentparents`
--

INSERT INTO `studentparents` (`studentID`, `ParentID`) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(4, 5),
(5, 7),
(6, 8),
(7, 8),
(7, 12),
(8, 10),
(8, 14),
(9, 13),
(14, 4),
(14, 5),
(15, 1),
(15, 2);

-- --------------------------------------------------------

--
-- Table structure for table `studentphones`
--

CREATE TABLE `studentphones` (
  `student_id` int(11) NOT NULL,
  `phone_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentphones`
--

INSERT INTO `studentphones` (`student_id`, `phone_number`) VALUES
(1, '01012345678'),
(2, '01122334455'),
(2, '01555667788'),
(3, '01234567890'),
(3, '1199988877'),
(4, '01066655544'),
(4, '01544433322'),
(5, '01188877766'),
(6, '01233311100'),
(6, '01500099988'),
(7, '01100099988'),
(7, '01233344455'),
(8, '01066655544'),
(8, '01077788899'),
(9, '01099988877'),
(9, '01522211100'),
(10, '01222233344'),
(12, '01055544433'),
(12, '01088855544'),
(13, '01088855544'),
(13, '01199911188'),
(14, '01211122233'),
(15, '01033344455'),
(15, '01577799988');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `BOD` date NOT NULL,
  `admission_date` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `student_status` varchar(20) NOT NULL,
  `feeID` int(11) DEFAULT NULL,
  `classID` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `BOD`, `admission_date`, `gender`, `student_status`, `feeID`, `classID`, `user_id`) VALUES
(1, 'Mariam Salem', '2025-01-03', '2021-09-01', 'Female', 'Active', 1, 1, 2),
(2, 'Dina Abdelaziz', '2007-08-20', '2022-09-01', 'Female', 'Active', 2, 2, 8),
(3, 'Nour Saad', '2005-11-10', '2020-09-01', 'Female', 'Active', 3, 3, 10),
(4, 'Maha Nabil', '2006-03-25', '2021-09-01', 'Female', 'Graduated', 4, 4, 13),
(5, 'Rana Ali', '2007-12-05', '2022-09-01', 'Female', 'Active', 5, 5, 15),
(6, 'Layla Amine', '2008-01-15', '2023-09-01', 'Female', 'Active', 6, 6, 18),
(7, 'Ahmed Hossam', '2006-07-10', '2021-09-01', 'Male', 'Graduated', 7, 1, NULL),
(8, 'Khaled Mostafa', '2005-09-30', '2020-09-01', 'Male', 'Suspended', 8, 2, NULL),
(9, 'Salma Hassan', '2007-02-18', '2022-09-01', 'Female', 'Active', 9, 3, NULL),
(10, 'Omar Adel', '2006-11-22', '2021-09-01', 'Male', 'Active', 10, 4, NULL),
(11, 'Fatma Ibrahim', '2008-03-12', '2023-09-01', 'Female', 'Suspended', 11, 5, NULL),
(12, 'Huda Mahmoud', '2007-01-01', '2022-09-01', 'Female', 'Active', 12, 6, NULL),
(13, 'Youssef Tarek', '2005-05-05', '2020-09-01', 'Male', 'Suspended', 13, 1, NULL),
(14, 'Amira Saeed', '2007-10-10', '2022-09-01', 'Female', 'Active', 7, 2, NULL),
(15, 'Rami Ahmed', '2006-12-25', '2021-09-01', 'Male', 'Graduated', 15, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `ID` int(11) NOT NULL,
  `subject_name` varchar(30) NOT NULL,
  `subject_code` varchar(10) NOT NULL,
  `teachingstaff_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`ID`, `subject_name`, `subject_code`, `teachingstaff_ID`) VALUES
(1, 'Mathematics', 'MTH101', 3),
(2, 'Literature', 'LTR', 7),
(3, 'Physics', 'PHS', 4),
(4, 'Biology', 'BGY', 5),
(7, 'History', 'HIS', 2),
(14, 'software', 'CE 603', 1);

-- --------------------------------------------------------

--
-- Table structure for table `teachingstaff`
--

CREATE TABLE `teachingstaff` (
  `ID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `specialization` varchar(50) NOT NULL,
  `address` varchar(60) NOT NULL,
  `BOD` date NOT NULL,
  `hire_date` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `salary` varchar(20) NOT NULL,
  `supervisorID` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachingstaff`
--

INSERT INTO `teachingstaff` (`ID`, `name`, `specialization`, `address`, `BOD`, `hire_date`, `gender`, `salary`, `supervisorID`, `user_id`) VALUES
(1, 'Yousif Adel', 'Software', 'Cairo, Egypt', '2002-02-24', '2024-01-01', 'Male', '75000.00', NULL, 1),
(2, 'Dr. Mohamed Ali', 'History', 'Cairo, Egypt', '1983-09-15', '2012-05-01', 'Male', '5500.00', 1, 3),
(3, 'Dr. Fatma Ahmed', 'Mathematics', 'Al-Maadi Street, Cairo, Egypt', '1980-05-10', '2010-08-01', 'Female', '5000.00', 1, 4),
(4, 'Dr. Youssef Hassan', 'Physics', 'Nasr City, Cairo, Egypt', '1975-11-25', '2005-02-14', 'Male', '7000.00', 1, 5),
(5, 'Dr. Mahmoud Omar', 'Biology', 'Cairo, Egypt', '2002-02-24', '2024-01-01', 'Male', '7500.00', 1, 7),
(7, 'Dr. Ahmed Elsayed', 'Literature', 'Al-Maadi Street, Cairo, Egypt', '1980-05-10', '2010-08-01', 'Male', '5000.00', 1, 14),
(8, 'Dr. Hassan Elsayed', 'Physics', 'Nasr City, Cairo, Egypt', '1975-11-25', '2005-02-14', 'Male', '7000.00', 1, 17);

-- --------------------------------------------------------

--
-- Table structure for table `teachingstaffphones`
--

CREATE TABLE `teachingstaffphones` (
  `teachingstaff_id` int(11) NOT NULL,
  `phone_number` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachingstaffphones`
--

INSERT INTO `teachingstaffphones` (`teachingstaff_id`, `phone_number`) VALUES
(1, '01001234567'),
(1, '01002345678'),
(2, '01003456789'),
(2, '01004567890'),
(3, '01005678901'),
(3, '01006789012'),
(4, '01007890123'),
(4, '01008901234'),
(5, '01009123456'),
(5, '01001234589'),
(7, '01005678978'),
(8, '01006789089'),
(8, '01007890190');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL,
  `roleID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `username`, `email`, `password`, `roleID`) VALUES
(1, 'yousif_adel', 'yousif.adel@example.com', 'password123$', 2),
(2, 'Mariam Salem', 'mariam.salem@example.com', '$2y$10$qfr4qvNOTUuZXfYCbBTBde/bvB6gvYKxVGr2To79mvU7TiRpVo2CO', 1),
(3, 'mohamed_ali', 'mohamed.ali@example.com', 'password789$', 2),
(4, 'fatma_ahmed', 'fatma.ahmed@example.com', 'password321$', 2),
(5, 'youssef_hassan', 'youssef.hassan@example.com', 'password654$', 2),
(6, 'sarah_mohamed', 'sarah.mohamed@example.com', 'password987$', 3),
(7, 'mahmoud_omar', 'mahmoud.omar@example.com', 'password111$', 2),
(8, 'dina_abdelaziz', 'dina.abdelaziz@example.com', 'password222$', 1),
(9, 'mostafa_eldeeb', 'mostafa.eldeeb@example.com', 'password333$', 3),
(10, 'nour_saad', 'nour.saad@example.com', 'password444$', 1),
(11, 'mona_elsayed', 'mona.elsayed@example.com', 'password555$', 3),
(12, 'karim_sherif', 'karim.sherif@example.com', 'password666$', 2),
(13, 'maha_nabil', 'maha.nabil@example.com', 'password777$', 1),
(14, 'ahmed_elsayed', 'ahmed.elsayed@example.com', 'password888$', 2),
(15, 'rana_ali', 'rana.ali@example.com', 'password999$', 1),
(16, 'amr_salah', 'amr.salah@example.com', 'password000$', 3),
(17, 'hassan_elsayed', 'hassan.elsayed@example.com', 'password12345$', 2),
(18, 'layla_amine', 'layla.amine@example.com', 'password54321$', 1),
(19, 'osama_tarek', 'osama.tarek@example.com', 'password11111$', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admission`
--
ALTER TABLE `admission`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `userID` (`userID`),
  ADD KEY `roleID` (`roleID`);

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `teachingstaff_ID` (`teachingstaff_ID`),
  ADD KEY `subject_ID` (`subject_ID`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `classattendance`
--
ALTER TABLE `classattendance`
  ADD KEY `classID` (`classID`),
  ADD KEY `attendanceID` (`attendanceID`),
  ADD KEY `teachingstaff_ID` (`teachingstaff_ID`),
  ADD KEY `subjectID` (`subjectID`),
  ADD KEY `studentID` (`studentID`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `studentID` (`studentID`),
  ADD KEY `subjectID` (`subjectID`);

--
-- Indexes for table `fees`
--
ALTER TABLE `fees`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `loans`
--
ALTER TABLE `loans`
  ADD PRIMARY KEY (`loanID`),
  ADD KEY `studentID` (`studentID`),
  ADD KEY `bookID` (`bookID`);

--
-- Indexes for table `parentphones`
--
ALTER TABLE `parentphones`
  ADD PRIMARY KEY (`parent_ID`,`phone_number`);

--
-- Indexes for table `parents`
--
ALTER TABLE `parents`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roleID`);

--
-- Indexes for table `studentassignments`
--
ALTER TABLE `studentassignments`
  ADD PRIMARY KEY (`studentID`,`assignmentID`),
  ADD KEY `assignmentID` (`assignmentID`);

--
-- Indexes for table `studentparents`
--
ALTER TABLE `studentparents`
  ADD PRIMARY KEY (`studentID`,`ParentID`),
  ADD KEY `ParentID` (`ParentID`);

--
-- Indexes for table `studentphones`
--
ALTER TABLE `studentphones`
  ADD KEY `fk_studentphones_student` (`student_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `feeID` (`feeID`),
  ADD KEY `classID` (`classID`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `teachingstaff_ID` (`teachingstaff_ID`);

--
-- Indexes for table `teachingstaff`
--
ALTER TABLE `teachingstaff`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `supervisorID` (`supervisorID`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `teachingstaffphones`
--
ALTER TABLE `teachingstaffphones`
  ADD KEY `fk_teachingstaffphones_student` (`teachingstaff_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `roleID` (`roleID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admission`
--
ALTER TABLE `admission`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `assignments`
--
ALTER TABLE `assignments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `fees`
--
ALTER TABLE `fees`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `loans`
--
ALTER TABLE `loans`
  MODIFY `loanID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `parents`
--
ALTER TABLE `parents`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `teachingstaff`
--
ALTER TABLE `teachingstaff`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admission`
--
ALTER TABLE `admission`
  ADD CONSTRAINT `admission_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `admission_ibfk_2` FOREIGN KEY (`roleID`) REFERENCES `roles` (`roleID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `assignments`
--
ALTER TABLE `assignments`
  ADD CONSTRAINT `assignments_ibfk_1` FOREIGN KEY (`teachingstaff_ID`) REFERENCES `teachingstaff` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `assignments_ibfk_2` FOREIGN KEY (`subject_ID`) REFERENCES `subjects` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `classattendance`
--
ALTER TABLE `classattendance`
  ADD CONSTRAINT `classattendance_ibfk_1` FOREIGN KEY (`classID`) REFERENCES `classes` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classattendance_ibfk_2` FOREIGN KEY (`attendanceID`) REFERENCES `attendance` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classattendance_ibfk_3` FOREIGN KEY (`teachingstaff_ID`) REFERENCES `teachingstaff` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classattendance_ibfk_4` FOREIGN KEY (`subjectID`) REFERENCES `subjects` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classattendance_ibfk_5` FOREIGN KEY (`studentID`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `exam`
--
ALTER TABLE `exam`
  ADD CONSTRAINT `exam_ibfk_1` FOREIGN KEY (`studentID`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `exam_ibfk_2` FOREIGN KEY (`subjectID`) REFERENCES `subjects` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `loans`
--
ALTER TABLE `loans`
  ADD CONSTRAINT `loans_ibfk_1` FOREIGN KEY (`studentID`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `loans_ibfk_2` FOREIGN KEY (`bookID`) REFERENCES `books` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `parentphones`
--
ALTER TABLE `parentphones`
  ADD CONSTRAINT `parentphones_ibfk_1` FOREIGN KEY (`parent_ID`) REFERENCES `parents` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `parents`
--
ALTER TABLE `parents`
  ADD CONSTRAINT `parents_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `studentassignments`
--
ALTER TABLE `studentassignments`
  ADD CONSTRAINT `studentassignments_ibfk_1` FOREIGN KEY (`studentID`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studentassignments_ibfk_2` FOREIGN KEY (`assignmentID`) REFERENCES `assignments` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `studentparents`
--
ALTER TABLE `studentparents`
  ADD CONSTRAINT `studentparents_ibfk_1` FOREIGN KEY (`studentID`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `studentparents_ibfk_2` FOREIGN KEY (`ParentID`) REFERENCES `parents` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `studentphones`
--
ALTER TABLE `studentphones`
  ADD CONSTRAINT `fk_studentphones_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`feeID`) REFERENCES `fees` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`classID`) REFERENCES `classes` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `students_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`teachingstaff_ID`) REFERENCES `teachingstaff` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teachingstaff`
--
ALTER TABLE `teachingstaff`
  ADD CONSTRAINT `teachingstaff_ibfk_1` FOREIGN KEY (`supervisorID`) REFERENCES `teachingstaff` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teachingstaff_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teachingstaffphones`
--
ALTER TABLE `teachingstaffphones`
  ADD CONSTRAINT `fk_teachingstaffphones_student` FOREIGN KEY (`teachingstaff_id`) REFERENCES `teachingstaff` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleID`) REFERENCES `roles` (`roleID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

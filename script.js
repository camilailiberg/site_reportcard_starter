/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, as well as the object with your student information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, there shouldn't be any question marks left on the report card.
*/

const studentInformation = {
	name: "Camila iligaray",
	grade: "A",
	advisor: "Lea",
	major: "Computer Science",
	graduationYear: "2023",
	imageUrl:
		"data:image/jpeg;base64,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",
};

let semester = "Spring Semester";

const studentData = {
	"Spring Semester": [
		{
			code: "LIT 101",
			name: "English Literature 101",
			semester: "Spring 2021",
			credits: 5,
			grade: "B+",
		},
		{
			code: "CS 50",
			name: "Intro to Computer Science",
			semester: "Spring 2021",
			credits: 5,
			grade: "A-",
		},
		{
			code: "WD 140",
			name: "Modern Web Development",
			semester: "Spring 2021",
			credits: 5,
			grade: "A+",
		},
		{
			code: "JS 2.0",
			name: "Serverside JavaScript",
			semester: "Spring 2021",
			credits: 10,
			grade: "A-",
		},
	],
	"Fall Semester": [
		{
			code: "Math 600",
			name: "Differential Equations",
			semester: "Fall 2020",
			credits: 5,
			grade: "A-",
		},
		{
			code: "CS 10",
			name: "Python Programming",
			semester: "Fall 2020",
			credits: 5,
			grade: "A",
		},
		{
			code: "History 99",
			name: "History of Computers",
			semester: "Fall 2020",
			credits: 5,
			grade: "A-",
		},
		{
			code: "MD 00",
			name: "Meditation and Mindfullness",
			semester: "Fall 2020",
			credits: 5,
			grade: "A+",
		},
	],
	"Winter Term": [
		{
			code: "PHYS ED",
			name: "Physical Activity",
			semester: "Winter 2020",
			credits: 5,
			grade: "A-",
		},
		{
			code: "GEN ED",
			name: "General Education Requirement",
			semester: "Winter 2020",
			credits: 5,
			grade: "A+",
		},
	],
};

const gpaPointsLookup = {
	"A+": 4.0,
	A: 4.0,
	"A-": 3.7,
	"B+": 3.3,
	B: 3.0,
	"B-": 2.7,
	"C+": 2.3,
	C: 2.0,
	"C-": 1.7,
	"D+": 1.3,
	D: 1.0,
	"D-": 0.7,
	F: 0.0,
};

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdown = document.querySelector(".dropdown");
// ADD more query selectors here
const nameOfStudent = document.querySelector("#student-name");
const advisorOfStudent = document.querySelector("#student-advisor");
const majorOfStudent = document.querySelector("#student-major");
const gradeLevelOfStudent = document.querySelector("#student-grade-level");
const yearOfGraduation = document.querySelector("#student-graduation-year");
const pictureOfStudent = document.querySelector("#student-image");
const dropdown = dcument.querySelector(".dropdown");
const semesterDropdown = document.querySelector(".semester-dropdown");
const dropdownMenu = document.querySelector(".dropdown-button");
const dropdownLabel = document.querySelector(".dropdown-label");
const fall = document.querySelector("#fall-semester");
const spring = document.querySelector("#spring-semester");
const winter = document.querySelector("#winter-semester");
const reportCardTable = document.querySelector("#report-card-table");

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
	// code goes here
	nameOfStudent.innerHTML = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
	// code goes here
	gradeLevelOfStudent.innerHTML = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
	// code goes here
	advisorOfStudent.innerHTML = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
	// code goes here
	majorOfStudent.innerHTML = studentMajor;
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationyear) {
	// code goes here
	yearOfGraduation.innerHTML = graduationyear;
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
	// code goes here
	pictureOfStudent.src = imageUrl;
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo({
	name,
	grade,
	advisor,
	major,
	graduationYear,
	imageUrl,
}) {
	updateStudentName(name);
	updateStudentGradeLevel(grade);
	updateStudentAdvisor(advisor);
	updateMajor(major);
	updateStudentGraduationYear(graduationYear);
	updateStudentImage(imageUrl);
}

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders() {
	// update the code here
	reportCardTable.innerHTML += `
	<div class="table-header">
	<h4>Code</h4>
	<h4>Name</h4>
	<h4>Credits</h4>
	<h4>Letter</h4>
	</div>
	`;
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(course, rowNum) {
	// update the code here with information about the course passed to this function
	reportCardTable.innerHTML += `
    <div class="table-row">
    <h4 class="code-col">${course.code}</h4>
    <h4 class="name-col">${course.name}</h4>
    <h4 class="credits-col">${course.credits}</h4>
    <h4 class="letter-col">${course.grade}</h4>
    </div>
	`;
}

/**
 * This is the primary function used to update the report card when the semester changes.
 * It should call the other functions responsible for creating the necessary HTML
 */
function updateReportCard() {
	updateDropdownLabel();
	reportCardTable.innerHTML = ``;

	// add your code here
	addReportCardHeaders();
	studentData[semester].forEach((element) => {
		addCourseRowToReportCard(element);
	});
}

/**
 * This function should toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, it should remove it.
 * If the dropdown classList doesn't contain the "closed" class, it should add it.
 */
function toggleDropdown() {
	// code goes here
	if (dropdown.classList.contains("closed")) {
		dropdown.classList.remove("closed");
	} else {
		dropdown.classList.add("closed");
	}
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 */
function updateDropdownLabel() {
	// code goes here
	dropdownLabel.innerHTML = semester;
}

// Add an event listener for the dropdown button that calls the toggleDropdown button

// Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
// Each callback function one should update the `semester` variable,
// call the `updateReportCard` function and toggle the dropdown
spring.addEventListener("click", () => {
	semester = "Spring Semester";
	updateReportCard();
});
fall.addEventListener("click", () => {
	semester = "Fall Semester";
	updateReportCard();
});
winter.addEventListener("click", () => {
	semester = "Winter Term";
	updateReportCard();
});

/*
 * Add functions here to make it execute as soon as the page loads
 */
window.onload = function () {
	// run your function here to make it execute as soon as the page loads
	populateStudentInfo(studentInformation);
	updateReportCard();
};

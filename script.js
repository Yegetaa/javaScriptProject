let courseInfo = {
    "id": number,
    "name": string,
}

let assignmentInfo = {
    "id": number,
    "name": string, // the due date for the assignment
    "due_at": date, // the maximum points possible for the assignment
    "points_possible": number,
}

let assignmentGroup = {
    "id": number,
    "name": string, // the ID of the course the assignment group belongs to
    "course_id": number, // the percentage weight of the entire assignment group
    "group_weight": number,
    "assignments": [assignmentInfo],
}

let learnerSubmission = ["learner_id", "assignment_id", "submission", "submitted_at", "score"]
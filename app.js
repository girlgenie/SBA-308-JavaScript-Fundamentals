// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50,
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150,
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500,
      },
    ],
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47,
      },
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150,
      },
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400,
      },
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39,
      },
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140,
      },
    },
  ];
  
  function getLearnerData(course, ag, submissions) {
    const results = [];
  
    const example_result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0, // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833, // late: (140 - 15) / 150
      },
    ];
  
    // Parse submission data.
    console.log(`Submission Data:`, submissions );
    // Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
    // Find existing data for this learner, if any.
    // If the learner already has data, add the new score to the existing data.
    // Calculate the average score for each learner and remove the extra data.
  
    //==== PUT CODE HERE =====//
    return results;
  }
      // the ID of the learner for which this data has been collected
      const idLearnerSubmissions = LearnerSubmissions.map((learner_id) => {
        console.log(' Learner ID:',learner_id)
        return learner_id.learner_id
      })
      console.log('The ID of the learner for which this data has been collected:', idLearnerSubmissions)

    // the learner’s total, weighted average, in which assignments
//   
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
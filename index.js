const express = require("express");
const app = express();

const users = [
    {
        studentName: "ABDUL HAQUE",
        University: "SUxCG 714",
        UniversityUID: "108444"
    },
    {
        studentName: "ADITYA KUMAR",
        University: "SUxCG 702",
        UniversityUID: "108716",
    },
    {
        studentName: "AMAN KUMAR",
        University: "SUxCG 702",
        UniversityUID: "108500"
    },
    {
        studentName: "AMRIT RAJ",
        University: "SUxCG 702",
        UniversityUID: "108587"
    }
];

app.get("/", (req, res) => {
    res.send("my name is Amrit Raj Kushwaha");
});

app.get("/cg", (req, res) => {
    res.status(200).json(users);
});


app.get("/cg/:students", (req, res) => {
    const name = req.params.students;

    const user = users.find(u => u.studentName === name);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});


app.get("/cg/:students/:gr_number", (req, res) => {
    console.log("params:", req.params);
    res.status(200).json(req.params);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});





// const express = require("express");

// const app = express();

// const users = [
//     {
//         "studentName": "ABDUL HAQUE",
//         "University": "SUxCG 714",
//         "UniversityUID": "108444"
//     },
//     {
//         "studentName": "ADITYA KUMAR",
//         "University": "SUxCG 702",
//         "UniversityUID": "108716",
//     },
//     {
//         "studentName": "AMAN KUMAR",
//         "University": "SUxCG 702",
//         "UniversityUID": "108500"
//     },
//     {
//         "studentName": "AMRIT RAJ",
//         "University": "SUxCG 702",
//         "UniversityUID": "108587"
//     }
// ];

// app.get("/", (req, res) => {
//     res.send("my name is Amrit Raj Kushwaha");
// });

// app.get("/cg", (req, res) => {
//     res.status(200).json(users);
// });

// app.get("/cg/:students/:gr_number", (req, res) => {
//     console.log("this is req :", req.params);
//     console.log("this is req :", req);
//     res.status(200).json(users);
// });

// app.get("/cg/:students", (req, res) => {
//     const name = req.params.studentName;

//     const users = users.find(u => u.studentName === name);

//     if (!users) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json(users);
// });


// app.listen(3000, () => {
//     console.log("Server started on port 3000");
// });
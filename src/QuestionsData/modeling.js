const modeling = [
    {
        text: "A forecast cell refers to a random input cell.",
        ans: false
    },
    {
        text: "The number of trials is one of the options to be set in the Run Preferences for Crystal Ball.",
        ans: true
    },
    {
        text: "The distribution used for the assumption cells is one of the options to be set in the Run Preferences for Crystal Ball.",
        ans: false
    },
    {
        text: "Increasing the number of trials increases the accuracy of a simulation",
        ans: true
    },
    {
        text: "The mean standard error gives an indication of the accuracy of the estimated mean",
        ans: true
    },
    {
        text: "The sensitivity chart in Crystal Ball indicates the increase in the forecast cell value per unit increase in the assumption cell.",
        ans: false
    },
    {
        text: "The sensitivity chart in Crystal Ball indicates how strongly various assumption cells influence the forecast cell.",
        ans: true
    },
    {
        text: "The normal distribution is a good choice when all values within a range are equally likely.",
        ans: false
    },
    {
        text: "The triangular distribution has a fixed upper and lower bound",
        ans: true
    },
    {
        text: "The normal distribution has a fixed upper and lower bound.",
        ans: false
    },
    {
        text: "A danger of using the lognormal distribution is that values can fall below zero",
        ans: false
    },
    {
        text: "A danger of using the normal distribution is that values can fall below zero.",
        ans: true
    },
    {
        text: "The Weibull and beta distribution are examples of two-parameter distributions.",
        ans: false
    },
    {
        text: "The exponential distribution is widely used to describe the time between random events.",
        ans: true
    },
    {
        text: "The binomial distribution describes the number of times an event occurs in a fixed number of trials",
        ans: true
    },
    {
        text: "The negative binomial distribution describes the number of trials until an event occurs n times",
        ans: true
    },
    {
        text: "The custom distribution in Crystal Ball allows only discrete distributions to be entered",
        ans: false
    },
    {
        text: "Crystal Ball can be used to fit a continuous distribution to data",
        ans: true
    },
    {
        text: "The Decision Table tool in Crystal Ball can be used to systematically investigate a set of values for a decision variable in a simulation model",
        ans: true
    },
    {
        text: "The Solver Table can be used by Crystal Ball to systematically investigate a set of values for a decision variable in a simulation model",
        ans: false
    },
    {
        text: "The more trials that are run, the lower the mean standard error will become.",
        ans: true
    },
    {
        text: "OptQuest is guaranteed to find the optimal solution to a simulation problem.",
        ans: false
    },
    {
        text: "OptQuest can not handle constraints in a simulation model",
        ans: false
    },
    {
        text: "Which of the following is not a step required to perform a simulation with Crystal Ball?",
        options: ["All are steps required to perform a simulation with Crystal Ball",
            "Define the random input cells",
            "Define the output cells to forecast",
            "Set the run preferences",
            "Develop the spreadsheet model"]
    },
    {
        text: "Which of the following is a random input cell in Crystal Ball?",
        options: [
            "An assumption cell",
            "A decision variable",
            "A forecast cell",
            "An output cell",
            "None of the above"]
    },
    {
        text: "The cell that represents the output of a computer simulation is referred to as:",
        options: ["a forecast cell",
            "an assumption cell",
            "a decision variable",
            "a data cell",
            "None of the above"]
    },
    {
        text: "A distribution is chosen from the Distribution Gallery for which type of cell?",
        options: ["An assumption cell",
            "A decision variable",
            "A forecast cell",
            "An output cell",
            "None of the above"]
    },
    {
        text: "Which of the following charts shows a histogram giving the relative frequency of the various output values in the forecast cell?",
        options: ["Frequency chart",
            "Statistics table",
            "Percentiles table",
            "Cumulative chart",
            "Reverse cumulative chart"]
    },
    {
        text: "Which of the following provide the mean,median,standard deviation,range,etc for the forecast cell in Crystal Ball",
        options: ["Statistics table",
            "Frequency chart",
            "Percentiles table",
            "Cumulative chart",
            "Reverse cumulative chart"]
    },
    {
        text: "When applying simulation to an inventory problem,which of the following would be an assumption cell?",
        options: ["The demand",
            "The total profit",
            "The holding cost per unit",
            "All of the above",
            "None of the above"]
    },
    {
        text: "When applying simulation to an inventory problem,which of the following is the most appropriate choice for the forecast cell",
        options: ["The total profit",
            "The holding cost per unit",
            "The demand",
            "All of the above",
            "None of the above"]
    },
    {
        text: "The sensitivity chart conveys which of the following?",
        options: ["It indicates how strongly various assumption cells influence the forecast cell",
            "The relative frequency of various forecast cell values",
            "The increase in profit per unit increase in an assumption cell",
            "The mean profit",
            "None of the above"]
    },
    {
        text: "Which of the following is not one of the charts or tables provided by Crystal Ball?",
        options: ["Reverse frequency chart",
            "Frequency chart",
            "Statistics table",
            "Cumulative chart",
            "Percentiles table"]
    },
    {
        text: "Which chart indicates the trend in forecast values as a particular decision variable is varied?",
        options: ["Trend chart",
            "Frequency chart",
            "Cumulative chart",
            "Reverse cumulative chart",
            "None of the above"]
    },
    {
        text: "Which of the following is not a characteristic of the normal distribution?",
        options: ["Values cannot fall below zero",
            "Some value is the most likely",
            "Values closest to the mean are more likely",
            "It must be symmetric",
            "Extreme values are possible,but rare"]
    },
    {
        text: "Which of the following is not a characteristic of the triangular distribution?",
        options: ["The most likely value is the mean",
            "Some value is the most likely",
            "Values close to the most likely value are more common",
            "It can be asymmetric",
            "It has a fixed upper and lower bound"]
    },
    {
        text: "Which of the following is not a characteristic of the lognormal distribution?",
        options: ["It is negatively skewed (above the mean more likely)",
            "Some value is the most likely",
            "Values cannot fall below zero",
            "Extreme values (high end only)are possible,but rare",
            "All of the above are characteristic of the lognormal distribution"]
    },
    {
        text: "Which of the following is not a characteristic of the uniform distribution?",
        options: ["Some value is the most likely",
            "It has a fixed minimum value",
            "It has a fixed maximum value",
            "All of the above are characteristic of the uniform distribution",
            "None of the above are characteristic of the uniform distribution"]
    },
    {
        text: "Which of the following are three-parameter distributions?",
        options: ["Weibull distribution",
            "Normal distribution",
            "Beta distribution",
            "All of the above",
            "None of the above"]
    },
    {
        text: "Which of the following distributions is widely used to describe the time between random events?",
        options: ["Exponential distribution",
            "Uniform distribution",
            "Poisson distribution",
            "Normal distribution",
            "None of the above"]
    },
    {
        text: "Which of the following distributions describes the number of times an event occurs during a given period of time or space?",
        options: ["Poisson distribution",
            "Uniform distribution",
            "Exponential distribution",
            "Normal distribution",
            "None of the above"]
    },
    {
        text: "Which of the following distributions describes the number of times an event occurs in a fixed number of trials?",
        options: ["Binomial distribution",
            "Geometric distribution",
            "Negative binomial distribution",
            "Poisson distribution",
            "None of the above"]
    },
    {
        text: "Which of the following distributions describes the number of trials until an event occurs?",
        options: ["Geometric distribution",
            "Binomial distribution",
            "Negative binomial distribution",
            "Poisson distribution",
            "None of the above"]
    },
    {
        text: "Which of the following distributions describes the number of trials until an event occurs n times?",
        options: ["Negative binomial distribution",
            "Binomial distribution",
            "Geometric distribution",
            "Poisson distribution",
            "None of the above"]
    },
    {
        text: "The Decision Table tool can simultaneously vary up to how many different decision variables?",
        options: ["2",
            "1",
            "3",
            "4",
            "Any number of decision variables"]
    },
    {
        text: "OptQuest can be used to simultaneously optimize up to how many decision variables?",
        options: ["Many decision variables can be optimized simultaneously",
            "1",
            "2",
            "3",
            "4"]
    },
    {
        text: "Which of the following is not a good choice for run preferences when using OptQuest?",
        options: ["Using a different sequence of random numbers",
            "500 trials",
            "Latin Hypercube sampling method",
            "Update forecast windows and check precision control every 50 trials",
            "All are good choices when using OptQuest"
        ]
    },
    {
        text: "Linear programming problems may have multiple goals or objectives specified.",
        ans: false
    }
    , {
        text: "Linear programming problems always involve either maximizing or minimizing an objective function.",
        ans: true
    }
    , {
        text: "All linear programming models have an objective function and at least two constraints.",
        ans: false
    }
    , {
        text: "Constraints limit the alternatives available to a decision-maker. ",
        ans: true
    }
    , {
        text: "When formulating a linear programming problem on a spreadsheet, the data cells will show the optimal solution.",
        ans: false
    }
    , {
        text: "When formulating a linear programming problem on a spreadsheet, objective cells will show the levels of activities for the decisions being made.",
        ans: false
    }
    , {
        text: "When formulating a linear programming problem on a spreadsheet, the Excel equation for each output cell can typically be expressed as a SUMPRODUCT function. ",
        ans: true
    }
    , {
        text: "One of the great strengths of spreadsheets is their flexibility for dealing with a wide variety of problems.",
        ans: true
    }
    , {
        text: "Linear programming problems can be formulated both algebraically and on spreadsheets.",
        ans: true
    }
    , {
        text: "The parameters of a model are the numbers in the data cells of a spreadsheet",
        ans: true
    }
    , {
        text: "An example of a decision variable in a linear programming problem is profit maximization",
        ans: false
    }
    , {
        text: "The best feasible solution is called the optimal solution.",
        ans: true
    }
    , {
        text: "Since all linear programming models must contain nonnegativity constraints, Solver will automatically include them and it is not necessary to add them to a formulation. ",
        ans: false
    }
    , {
        text: "The line forming the boundary of what is permitted by a constraint is referred to as a parameter.",
        ans: false
    }
    , {
        text: "The origin satisfies any constraint with a ≥ sign and a positive right-hand side. ",
        ans: false
    }
    , {
        text: "A circle would be an example of a feasible region for a linear programming problem.",
        ans: false
    }
    , {
        text: "The equation 5x + 7y = 10 is linear.",
        ans: true
    }
    , {
        text: "The equation 3xy = 9 is linear",
        ans: false
    }
    , {
        text: "The graphical method can handle problems that involve any number of decision variables",
        ans: false
    }
    , {
        text: "When solving linear programming problems graphically, there are an infinite number of possible objective function lines. ",
        ans: true
    }
    , {
        text: "For a graph where the horizontal axis represents the variable x and the vertical axis represents the variable y, the slope of a line is the change in y when x is increased by 1.",
        ans: true
    }
    , {
        text: "The value of the objective function decreases as the objective function line is moved away from the origin. ",
        ans: false
    }
    , {
        text: "A feasible point on the optimal objective function line is an optimal solution.",
        ans: true
    }
    , {
        text: "A linear programming problem can have multiple optimal solutions. ",
        ans: true
    }
    , {
        text: "All constraints in a linear programming problem are either <= or >= inequalities.",
        ans: false
    }
    , {
        text: "Linear programming models can have either <= or >= inequality constraints but not both in the same problem.",
        ans: false
    }
    , {
        text: "A maximization problem can generally be characterized by having all >= constraints.",
        ans: false
    }
    , {
        text: "If a single optimal solution exists while using the graphical method to solve a linear programming problem, it will exist at a corner point.",
        ans: true
    }
    , {
        text: "When solving a maximization problem graphically, it is generally the goal to move the objective function line out, away from the origin, as far as possible. ",
        ans: true
    }
    , {
        text: "When solving a minimization problem graphically, it is generally the goal to move the objective function line out, away from the origin, as far as possible.",
        ans: false
    }
    , {
        text: "A manager should know the following things about linear programming.",
        options: ['All of the choices.', 'What it is. ', 'When it should be used.', 'When it should not be used.', 'How to interpret the results of a study']
    }
    , {
        text: "Which of the following is not a component of a linear programming model?",
        options: ['A spreadsheet. ', 'Constraints.', 'Decision variables.', 'Parameters.', 'An objective.']
    }
    , {
        text: "In linear programming, solutions that satisfy all of the constraints simultaneously are referred to as:",
        options: ['feasible', 'optimal', 'nonnegative', 'targeted', 'All of the choices.']
    }
    , {
        text: "When formulating a linear programming problem on a spreadsheet, which of the following is true?",
        options: ['All of the choices.', 'Parameters are called data cells.', 'Decision variables are called changing cells.', 'Nonnegativity constraints must be included.', 'The objective function is called the objective cell.']
    }
    , {
        text: "Which of the following could not be a constraint for a linear programming problem?",
        options: ['1A + 2B.', '1A + 2B <= 3.', '1A + 2B >= 3.', '1A + 2B = 3.', '1A + 2B + 3C <= 3.']
    }
    , {
        text: "For the products A, B, C, and D, which of the following could be a linear programming objective function?",
        options: ['P = 1A + 2B +3C + 4D.', 'P = 1A + 2BC +3D', 'P = 1A + 2AB +3ABC + 4ABCD.', 'P = 1A + 2B/C +3D', 'All of the choices.']
    }
    , {
        text: "After the data is collected the next step to formulating a linear programming model is to:",
        options: ['identify the decision variables.', 'identify the objective function.', 'identify the constraints.', 'specify the parameters of the problem.', 'None of the above.']
    }
    , {
        text: "When using the graphical method, the region that satisfies all of the constraints of a linear programming problem is called the:",
        options: ['feasible region.', 'optimum solution space.', 'region of optimality.', 'profit maximization space.', 'region of nonnegativity. ']
    }
    , {
        text: "Solving linear programming problems graphically,",
        options: ['provides geometric intuition about what linear programming is trying to achieve.', 'is possible with any number of decision variables', 'will always result in an optimal solution', 'All of the choices.', 'None of the choices.']
    }
]

export default modeling;